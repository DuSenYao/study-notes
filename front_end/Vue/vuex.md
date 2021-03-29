---
title: vuex
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [vuex](#vuex)
  - [一. 介绍](#一-介绍)
    - [1.1 什么是“状态管理模式”？](#11-什么是状态管理模式)
    - [1.2 什么情况下应该使用 Vuex？](#12-什么情况下应该使用-vuex)
    - [1.3 安装](#13-安装)
    - [1.4 开始](#14-开始)
      - [1.4.1 最简单的 Store](#141-最简单的-store)

<!-- /code_chunk_output -->

# vuex

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 vue-devtools，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

## 一. 介绍

### 1.1 什么是“状态管理模式”？

从一个简单的 Vue 计数应用开始：

```js
new Vue({
  // state
  data() {
    return {
      count: 0
    };
  },
  // view
  template: `
    <div>{{ count }}</div>
  `,
  // actions
  methods: {
    increment() {
      this.count++;
    }
  }
});
```

这个状态自管理应用包含以下几个部分：

- state，驱动应用的数据源；
- view，以声明方式将 state 映射到视图；
- actions，响应在 view 上的用户输入导致的状态变化。

以下是一个表示“单向数据流”理念的简单示意：

![单向数据流简单示意](./image/vuex/单向数据流简单示意.png)

但是，当应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：

- 多个视图依赖于同一状态。
- 来自不同视图的行为需要变更同一状态。

对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。对于问题二，经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。

因此，把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！

通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性，代码将会变得更结构化且易维护。

这就是 Vuex 背后的基本思想，借鉴了 Flux、Redux 和 The Elm Architecture。与其他模式不同的是，Vuex 是专门为 Vue.js 设计的状态管理库，以利用 Vue.js 的细粒度数据响应机制来进行高效的状态更新。

![vuex](./image/vuex/vuex.png)

### 1.2 什么情况下应该使用 Vuex？

Vuex 可以帮助管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。

如果不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果应用够简单，最好不要使用 Vuex。一个简单的 store 模式就足够了。但是，如果需要构建一个中大型单页应用，很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。

### 1.3 安装

1. **直接下载 / CDN 引用**

   [vuex](https://unpkg.com/vuex)

   [Unpkg.com](https://unpkg.com/) 提供了基于 NPM 的 CDN 链接。以上的链接会一直指向 NPM 上发布的最新版本。也可以通过 `https://unpkg.com/vuex@2.0.0` 这样的方式指定特定的版本。

   在 Vue 之后引入 `vuex` 会进行自动安装：

   ```html
   <script src="/path/to/vue.js"></script>
   <script src="/path/to/vuex.js"></script>
   ```

2. **NPM**

   ```sh
   npm install vuex --save
   ```

3. **Yarn**

   ```sh
   yarn add vuex
   ```

在一个模块化的打包系统中，必须显式地通过 `Vue.use()` 来安装 Vuex：

```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
```

当使用全局 script 标签引用 Vuex 时，不需要以上安装过程。

**Promise**
Vuex 依赖 Promise。如果支持的浏览器并没有实现 Promise，那么可以使用一个 polyfill 的库，例如 es6-promise。

可以通过 CDN 将其引入：

```html
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>
```

然后 `window.Promise` 会自动可用。

如果喜欢使用诸如 npm 或 Yarn 等包管理器，可以按照下列方式执行安装：

```sh
npm install es6-promise --save

yarn add es6-promise
```

或者更进一步，将下列代码添加到使用 Vuex 之前的一个地方：

```js
import 'es6-promise/auto';
```

**自己构建**
如果需要使用 dev 分支下的最新版本，可以直接从 GitHub 上克隆代码并自己构建。

```sh
git clone https://github.com/vuejs/vuex.git node_modules/vuex
cd node_modules/vuex
npm install
npm run build
```

### 1.4 开始

每一个 Vuex 应用的核心就是 **store（仓库）**。“store”基本上就是一个容器，它包含着应用中大部分的**状态 (state)**。Vuex 和单纯的全局对象有以下两点不同：

1. Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

2. 不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是**显式地提交 (commit) mutation**。这样使得可以方便地跟踪每一个状态的变化，从而让一些工具更好地帮助了解应用。

#### 1.4.1 最简单的 Store

仅需要提供一个初始 state 对象和一些 mutation：

```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});
```

现在，可以通过 `store.state` 来获取状态对象，以及通过 `store.commit` 方法触发状态变更：

```js
store.commit('increment');

console.log(store.state.count); // -> 1
```

为了在 Vue 组件中访问 `this.$store` property，需要为 Vue 实例提供创建好的 store。Vuex 提供了一个从根组件向所有子组件，以 `store` 选项的方式“注入”该 store 的机制：

```js
new Vue({
  el: '#app',
  store: store
});
```

> 提示 : 如果使用 ES6，也可以以 ES6 对象的 property 简写 (用在对象某个 property 的 key 和被传入的变量同名时)：
>
> ```js
> new Vue({
>   el: '#app',
>   store
> });
> ```

现在可以从组件的方法提交一个变更：

```js
methods: {
  increment() {
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  }
}
```

再次强调，**Vuex 通过提交 mutation 的方式，而非直接改变 store.state.count**，是因为想要更明确地追踪到状态的变化。这个简单的约定能够让意图更加明显，这样在阅读代码的时候能更容易地解读应用内部的状态改变。此外，这样也让 Vuex 有机会去实现一些能记录每次状态改变，保存状态快照的调试工具。有了它，甚至可以实现如时间穿梭般的调试体验。

由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。触发变化也仅仅是在组件的 methods 中提交 mutation。

## 二. 核心概念

### 2.1 State

#### 2.1.1 单一状态树

Vuex 使用**单一状态树**——用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 ([SSOT](https://en.wikipedia.org/wiki/Single_source_of_truth))”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。

单状态树和模块化并不冲突。

存储在 Vuex 中的数据和 Vue 实例中的 data 遵循相同的规则，例如状态对象必须是纯粹 (plain) 的。参考：[Vue#data](https://cn.vuejs.org/v2/api/#data)

#### 2.1.2 在 Vue 组件中获得 Vuex 状态

由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态：

```js
// 创建一个 Counter 组件
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count() {
      return store.state.count;
    }
  }
};
```

每当 `store.state.count` 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。

然而，这种模式导致组件依赖全局状态单例。在模块化的构建系统中，在每个需要使用 state 的组件中需要频繁地导入，并且在测试组件时需要模拟状态。

Vuex 通过 `store` 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 `Vue.use(Vuex)`）：

```js
const app = new Vue({
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
});
```

通过在根实例中注册 `store` 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 `this.$store` 访问到。更新下 `Counter` 的实现：

```js
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
```

#### 2.1.3 `mapState` 辅助函数

当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，可以使用 `mapState` 辅助函数帮助生成计算属性，少按几次键：

```js
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex';

export default {
  // ...
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState(state) {
      return state.count + this.localCount;
    }
  })
};
```

当映射的计算属性的名称与 state 的子节点名称相同时，也可以给 `mapState` 传一个字符串数组。

```js
computed: mapState([
  // 映射 this.count 为 store.state.count
  'count'
]);
```

## 三. 进阶
