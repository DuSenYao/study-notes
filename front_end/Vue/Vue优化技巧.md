# Vue 优化技巧

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Vue 优化技巧](#vue-优化技巧)
  - [一. 长列表性能优化](#一-长列表性能优化)
  - [二. 无状态的组件用函数式组件](#二-无状态的组件用函数式组件)
  - [三. 子组件分割](#三-子组件分割)

<!-- /code_chunk_output -->

## 一. 长列表性能优化

1. **不做响应式**
   比如会员列表、商品列表之类的，只是纯粹的数据展示，不会有任何动态改变的场景下，就不需要对数据做响应化处理，可以大大提升渲染速度。

   比如使用 Object.freeze() 冻结一个对象，这个方法可以冻结对象使其不能被修改；即不能向这个对象添加新属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值，以及该对象的原型也不能被修改

   ```js
   export default {
     data: () => ({
       userList: []
     }),
     async created() {
       const users = await axios.get('/api/users');
       this.userList = Object.freeze(users);
     }
   };
   ```

   Vue2 的响应式源码地址：src/core/observer/index.js - 144 行 是这样的：

   ```js
   export function defineReactive (...){
     const property = Object.getOwnPropertyDescriptor(obj, key)
     if (property && property.configurable === false) {
         return
     }
     ...
   }
   ```

   可以看到一开始就判断 configurable 为 false 的直接返回不做响应式处理，configurable 为 false 表示这个属性是不能被修改的，而冻结的对象的 configurable 就是为 false，Vue3 里则是添加了响应式 flag，用于标记目标对象类型。

2. **虚拟滚动**

   如果是大数据很长的列表，全部渲染的话一次性创建太多 DOM 就会非常卡，这时就可以用虚拟滚动，只渲染少部分（含可视区域）区域的内容，然后滚动的时候，不断替换可视区域的内容，模拟出滚动的效果：

   ```vue
   <recycle-scroller class="items" :items="items" :item-size="24">
   <template v-slot="{ item }">
     <FetchItemView
       :item="item"
       @vote="voteItem(item)"
     />
   </template>
   </recycle-scroller>
   ```

   原理是监听滚动事件，动态更新需要显示的 DOM，并计算出在视图中的位移，这也意味着在滚动过程需要实时计算，有一定成本，所以如果数据量不是很大的情况下，用普通的滚动就行。

## 二. 无状态的组件用函数式组件

对于一些纯展示，没有响应式数据，没有状态管理，也不用生命周期钩子函数的组件，可以设置成函数式组件，提高渲染性能，因为会把它当成一个函数来处理，所以开销很低。

原理是在 patch 过程中对于函数式组件的 render 生成的虚拟 DOM，不会有递归子组件初始化的过程，所以渲染开销会低很多，它可以接受 props，但是由于不会创建实例，所以内部不能使用 this.xx 获取组件属性，写法如下：

```js
<template functional>
  <div>
    <div class="content">{{ value }}</div>
  </div>
</template>
<script>
export default {
  props: ['value']
}
</script>

// 或者
Vue.component('my-component', {
  functional: true, // 表示该组件为函数式组件
  props: { ... }, // 可选
  // 第二个参数为上下文，没有 this
  render: function (createElement, context) {
    // ...
  }
})
```

## 三. 子组件分割

```vue
<template>
  <div :style="{ opacity: number / 100 }">
    <div>{{ someThing() }}</div>
  </div>
</template>
<script>
export default {
  props: ['number'],
  methods: {
    someThing() {
      /* 耗时任务 */
    }
  }
};
</script>
```

上面这样的代码中，每次父组件传过来的 number 发生变化时，每次都会重新渲染，并且重新执行 someThing 这个耗时任务，所以有两种优化方案：

- 用计算属性，因为计算属性自身有缓存计算结果的特性

- 拆分成子组件，因为 Vue 的更新是组件粒度的，虽然数据变化会导致父组件的重新渲染，但是子组件却不会重新渲染，因为它的内部没有任何变化，耗时任务自然也就不会重新执行，因此性能更好，优化代码如下：

  ```vue
  <template>
    <div>
      <my-child />
    </div>
  </template>
  <script>
  export default {
    components: {
      MyChild: {
        methods: {
          someThing() {
            /* 耗时任务 */
          }
        },
        render(h) {
          return h('div', this.someThing());
        }
      }
    }
  };
  </script>
  ```
