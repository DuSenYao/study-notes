---
title: Vue风格指南
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [风格指南](#风格指南)
  - [一. 必要的 (规避错误)](#一-必要的-规避错误)
    - [1.1 组件名应该始终是多个单词的](#11-组件名应该始终是多个单词的)
    - [1.2 组件的 `data` 必须是一个函数](#12-组件的-data-必须是一个函数)
    - [1.3 Prop 定义应该尽量详细](#13-prop-定义应该尽量详细)
    - [1.4 为 v-for 设置键值](#14-为-v-for-设置键值)
    - [1.5 避免 v-if 和 v-for 用在一起](#15-避免-v-if-和-v-for-用在一起)
    - [1.6 为组件样式设置作用域](#16-为组件样式设置作用域)
    - [1.7 私有 property 名必要](#17-私有-property-名必要)
  - [二. 优先级 B：强烈推荐 (增强可读性)](#二-优先级-b强烈推荐-增强可读性)
    - [2.1 组件文件](#21-组件文件)
    - [2.2 单文件组件文件的大小写应该一致](#22-单文件组件文件的大小写应该一致)
    - [2.3 基础组件名](#23-基础组件名)
    - [2.4 单例组件名](#24-单例组件名)
    - [2.5 紧密耦合的组件名](#25-紧密耦合的组件名)
    - [2.6 自闭合组件](#26-自闭合组件)
    - [2.7 模板中的组件名大小写](#27-模板中的组件名大小写)
    - [2.8 JS/JSX 中的组件名大小写](#28-jsjsx-中的组件名大小写)
    - [2.9 完整单词的组件名](#29-完整单词的组件名)
    - [2.10 Prop 名大小写](#210-prop-名大小写)
    - [2.11 多个 attribute 的元素](#211-多个-attribute-的元素)
    - [2.12 模板中简单的表达式](#212-模板中简单的表达式)
    - [2.13 简单的计算属性](#213-简单的计算属性)
    - [2.14 带引号的 attribute 值强烈推荐](#214-带引号的-attribute-值强烈推荐)
    - [2.15 指令缩写](#215-指令缩写)
  - [三. 优先级 C：推荐 (将选择和认知成本最小化)](#三-优先级-c推荐-将选择和认知成本最小化)
    - [3.1 组件/实例的选项的顺序](#31-组件实例的选项的顺序)
    - [3.2 元素 attribute 的顺](#32-元素-attribute-的顺)
    - [3.3 组件/实例选项中的空行](#33-组件实例选项中的空行)
    - [3.4 单文件组件的顶级元素的顺序](#34-单文件组件的顶级元素的顺序)
  - [四. 优先级 D：谨慎使用 (有潜在危险的模式)](#四-优先级-d谨慎使用-有潜在危险的模式)
    - [4.1 没有在 `v-if`/`v-else-if`/`v-else` 中使用 `key`](#41-没有在-v-ifv-else-ifv-else-中使用-key)
    - [4.2 `scoped` 中的元素选择器](#42-scoped-中的元素选择器)
    - [4.3 隐性的父子组件通信](#43-隐性的父子组件通信)
    - [4.4 非 Flux 的全局状态管理](#44-非-flux-的全局状态管理)

<!-- /code_chunk_output -->

# 风格指南

## 一. 必要的 (规避错误)

这些规则会帮助规避错误。这里面可能存在例外，但应该非常少，且只有同时精通 JavaScript 和 Vue 才可以这样做。

### 1.1 组件名应该始终是多个单词的

**组件名应该始终是多个单词的，根组件 `App` 以及 `<transition>`、`<component>` 之类的 Vue 内置组件除外**。

这样做可以避免跟现有的以及未来的 HTML 元素**相冲突**，因为所有的 HTML 元素名称都是单个单词的。

好例子:

```js
Vue.component('todo-item', {
  // ...
});

export default {
  name: 'TodoItem'
  // ...
};
```

### 1.2 组件的 `data` 必须是一个函数

**当在组件中使用 `data` property 的时候 (除了 `new Vue` 外的任何地方)，它的值必须是返回一个对象的函数**。

好例子

```js
Vue.component('some-comp', {
  data: function () {
    return {
      foo: 'bar'
    };
  }
});

// In a .vue file
export default {
  data() {
    return {
      foo: 'bar'
    };
  }
};

// 在一个 Vue 的根实例上直接使用对象是可以的，
// 因为只存在一个这样的实例。
new Vue({
  data: {
    foo: 'bar'
  }
});
```

### 1.3 Prop 定义应该尽量详细

**在提交的代码中，`prop` 的定义应该尽量详细，至少需要指定其类型**。

细致的 `prop` 定义有两个好处：

- 它们写明了组件的 API，所以很容易看懂组件的用法
- 在开发环境下，如果向一个组件提供格式不正确的 prop，Vue 将会告警，以帮助捕获潜在的错误来源。

好例子

```js
props: {
  status: String
}

// 更好的做法！
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

### 1.4 为 v-for 设置键值

**总是用 `key` 配合 `v-for`**。

在组件上总是必须用 `key` 配合 `v-for`，以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为，比如动画中的对象固化 (object constancy)，也是一种好的做法。

好例子

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

### 1.5 避免 v-if 和 v-for 用在一起

**永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上**。

一般在两种常见的情况下会倾向于这样做：

- 为了过滤一个列表中的项目 (比如 `v-for="user in users" v-if="user.isActive"`)。在这种情形下，请将 users 替换为一个计算属性 (比如 `activeUsers`)，让其返回过滤后的列表。

- 为了避免渲染本应该被隐藏的列表 (比如 `v-for="user in users" v-if="shouldShowUsers"`)。这种情形下，请将 `v-if` 移动至容器元素上 (比如 ul、ol)。

好例子

```html
<ul>
  <li v-for="user in activeUsers" :key="user.id">{{ user.name }}</li>
</ul>
```

```html
<ul v-if="shouldShowUsers">
  <li v-for="user in users" :key="user.id">{{ user.name }}</li>
</ul>
```

### 1.6 为组件样式设置作用域

**对于应用来说，顶级 `App` 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的**。

这条规则只和[单文件组件](./Vue.md#51-单文件组件)有关。不一定要使用 `scoped` attribute。设置作用域也可以通过 [CSS Modules](./Vue-loader.md#六-css-modules)，那是一个基于 class 的类似 BEM 的策略，当然也可以使用其它的库或约定。

**不管怎样，对于组件库，更倾向于选用基于 class 的策略而不是 scoped attribute**。

这让覆写内部样式更容易：使用了常人可理解的 class 名称且没有太高的选择器优先级，而且不太会导致冲突。

好例子

```html
<template>
  <button class="button button-close">X</button>
</template>

<!-- 使用 `scoped` attribute -->
<style scoped>
  .button {
    border: none;
    border-radius: 2px;
  }

  .button-close {
    background-color: red;
  }
</style>
```

```html
<template>
  <button :class="[$style.button, $style.buttonClose]">X</button>
</template>

<!-- 使用 CSS Modules -->
<style module>
  .button {
    border: none;
    border-radius: 2px;
  }

  .buttonClose {
    background-color: red;
  }
</style>
```

```html
<template>
  <button class="c-Button c-Button--close">X</button>
</template>

<!-- 使用 BEM 约定 -->
<style>
  .c-Button {
    border: none;
    border-radius: 2px;
  }

  .c-Button--close {
    background-color: red;
  }
</style>
```

### 1.7 私有 property 名必要

**使用模块作用域保持不允许外部访问的函数的私有性。如果无法做到这一点，就始终为插件、混入等不考虑作为对外公共 API 的自定义私有 property 使用 `$_` 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 `$_yourPluginName_`)**。

```js
// 好例子
var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function () {
      // ...
    }
  }
};

// 甚至更好！
var myGreatMixin = {
  // ...
  methods: {
    publicMethod() {
      // ...
      myPrivateFunction();
    }
  }
};

function myPrivateFunction() {
  // ...
}

export default myGreatMixin;
```

## 二. 优先级 B：强烈推荐 (增强可读性)

这些规则能够在绝大多数工程中改善可读性和开发体验。即使违反了，代码还是能照常运行，但例外应该尽可能少且有合理的理由。

### 2.1 组件文件

**只要有能够拼接文件的构建系统，就把每个组件单独分成文件**。

当需要编辑一个组件或查阅一个组件的用法时，可以更快速的找到它。

```sh
components/
|- TodoList.js
|- TodoItem.js
```

```sh
components/
|- TodoList.vue
|- TodoItem.vue
```

### 2.2 单文件组件文件的大小写应该一致

**单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)**。

单词大写开头对于代码编辑器的自动补全最为友好，因为这使得在 JS(X) 和模板中引用组件的方式尽可能的一致。然而，混用文件命名方式有的时候会导致大小写不敏感的文件系统的问题，这也是横线连接命名同样完全可取的原因。

```sh
components/
|- MyComponent.vue
```

```sh
components/
|- my-component.vue
```

### 2.3 基础组件名

**应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 `Base`、`App` 或 `V`**。

```sh
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
```

```sh
components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue
```

```sh
components/
|- VButton.vue
|- VTable.vue
|- VIcon.vue
```

### 2.4 单例组件名

**只应该拥有单个活跃实例的组件应该以 `The` 前缀命名，以示其唯一性**。

这不意味着组件只可用于一个单页面，而是每个页面只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果发现有必要添加 prop，那就表明这实际上是一个可复用的组件，只是目前在每个页面里只使用一次。

```sh
components/
|- TheHeading.vue
|- TheSidebar.vue
```

### 2.5 紧密耦合的组件名

**和父组件紧密耦合的子组件应该以父组件名作为前缀命名**。

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

好例子：

```sh
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue

components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```

### 2.6 自闭合组件

**在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做**。

自闭合组件表示它们不仅没有内容，而且刻意没有内容。其不同之处就好像书上的一页白纸对比贴有“本页有意留白”标签的白纸。而且没有了额外的闭合标签，代码也更简洁。

不幸的是，HTML 并不支持自闭合的自定义元素——只有官方的“空”元素。所以上述策略仅适用于进入 DOM 之前 Vue 的模板编译器能够触达的地方，然后再产出符合 DOM 规范的 HTML。

好例子

```html
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent />
<!-- 在 DOM 模板中 -->
<my-component></my-component>
```

### 2.7 模板中的组件名大小写

**对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 PascalCase 的——但是在 DOM 模板中总是 kebab-case 的**。

PascalCase 相比 kebab-case 有一些优势：

- 编辑器可以在模板里自动补全组件名，因为 PascalCase 同样适用于 JavaScript。
- `<MyComponent>` 视觉上比 `<my-component>` 更能够和单个单词的 HTML 元素区别开来，因为前者的不同之处有两个大写字母，后者只有一个横线。
- 如果在模板中使用任何非 Vue 的自定义元素，比如一个 Web Component，PascalCase 确保了 Vue 组件在视觉上仍然是易识别的。

> 注意:
>
> 1. 由于 HTML 是大小写不敏感的，在 DOM 模板中必须仍使用 kebab-case。
> 2. 如果已经是 kebab-case 的重度用户，那么与 HTML 保持一致的命名约定且在多个项目中保持相同的大小写规则就可能比上述优势更为重要了。在这些情况下，**在所有的地方都使用 kebab-case 同样是可以接受的**。

好例子

```html
<!-- 在单文件组件和字符串模板中 -->
<MyComponent />

<!-- 在 DOM 模板中 -->
<my-component></my-component>

<!-- 在所有地方 -->
<my-component></my-component>
```

### 2.8 JS/JSX 中的组件名大小写

**JS/JSX 中的组件名应该始终是 PascalCase 的，尽管在较为简单的应用中只使用 Vue.component 进行全局组件注册时，可以使用 kebab-case 字符串**。

在 JavaScript 中，PascalCase 是类和构造函数 (本质上任何可以产生多份不同实例的东西) 的命名约定。Vue 组件也有多份实例，所以同样使用 PascalCase 是有意义的。额外的好处是，在 JSX (和模板) 里使用 PascalCase 使得代码的读者更容易分辨 Vue 组件和 HTML 元素。

然而，对于只通过 `Vue.component` 定义全局组件的应用来说，推荐 kebab-case 作为替代。原因是：

- 全局组件很少被 JavaScript 引用，所以遵守 JavaScript 的命名约定意义不大。
- 这些应用往往包含许多 DOM 内的模板，这种情况下是**必须使用 kebab-case 的**。

好例子

```js
Vue.component('MyComponent', {
  // ...
});

Vue.component('my-component', {
  // ...
});

import MyComponent from './MyComponent.vue';
export default {
  name: 'MyComponent'
  // ...
};
```

### 2.9 完整单词的组件名

**组件名应该倾向于完整单词而不是缩写**。

编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。

```sh
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```

### 2.10 Prop 名大小写

**在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case**。

单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。

```js
props: {
  greetingText: String;
}
```

```html
<WelcomeMessage greeting-text="hi" />
```

### 2.11 多个 attribute 的元素

**多个 attribute 的元素应该分多行撰写，每个 attribute 一行**。

在 JavaScript 中，用多行分隔对象的多个 property 是很常见的最佳实践，因为这样更易读。模板和 JSX 值得做相同的考虑。

```html
<img
  src="https://vuejs.org/images/logo.png"
  alt="images/logo.png"
  height="110px"
/>

<MyComponent
  foo="foo"
  bar="bar"
  baz="baz"
  isActive="isActive"
  enterTime="enterTime"
/>
```

### 2.12 模板中简单的表达式

**组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法**。

复杂表达式会让模板变得不那么声明式。应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。

好例子:

```html
<!-- 在模板中 -->
{{ normalizedFullName }}
```

```js
// 复杂表达式已经移入一个计算属性
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```

### 2.13 简单的计算属性

**应该把复杂计算属性分割为尽可能多的更简单的 property**。

更简单、命名得当的计算属性是这样的：

- 易于测试
  当每个计算属性都包含一个非常简单且很少依赖的表达式时，撰写测试以确保其正确工作就会更加容易。

- 易于阅读
  简化计算属性要求为每一个值都起一个描述性的名称，即便它不可复用。这使得其他开发者 (以及未来的你) 更容易专注在关心的代码上并搞清楚发生了什么。

- 更好的“拥抱变化”
  任何能够命名的值都可能用在视图上。举个例子，可能打算展示一个信息，告诉用户他们存了多少钱；也可能打算计算税费，但是可能会分开展现，而不是作为总价的一部分。
  小的、专注的计算属性减少了信息使用时的假设性限制，所以需求变更时也用不着那么多重构了。

好例子：

```js
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```

### 2.14 带引号的 attribute 值强烈推荐

**非空 HTML attribute 值应该始终带引号 (单引号或双引号，选 JS 里不用的那个)**。

在 HTML 中不带空格的 attribute 值是可以没有引号的，但这鼓励了大家在特征值里不写空格，导致可读性变差。

好例子

```html
<input type="text" /> <AppSidebar :style="{ width: sidebarWidth + 'px' }" />
```

### 2.15 指令缩写

**指令缩写 (用 `:` 表示 `v-bind:`、用 `@` 表示 `v-on:` 和用 `#` 表示 `v-slot:`) 应该要么都用要么都不用**。

## 三. 优先级 C：推荐 (将选择和认知成本最小化)

当存在多个同样好的选项，选任意一个都可以确保一致性。在这些规则里，描述了每个选项并建议一个默认的选择。也就是说只要保持一致且理由充分，可以随意在代码库中做出不同的选择。请务必给出一个好的理由！通过接受社区的标准，将会：

1. 训练大脑，以便更容易的处理在社区遇到的代码
2. 不做修改就可以直接复制粘贴社区的代码示例

### 3.1 组件/实例的选项的顺序

**组件/实例的选项应该有统一的顺序**。

这是推荐的组件选项默认顺序。它们被划分为几大类，所以也能知道从插件里添加的新 `property` 应该放到哪里。

1. **副作用** (触发组件外的影响)

   - `el`

2. **全局感知** (要求组件以外的知识)

   - `name`
   - `parent`

3. **组件类型** (更改组件的类型)

   - `functional`

4. **模板修改器** (改变模板的编译方式)

   - `delimiters`
   - `comments`

5. **模板依赖** (模板内使用的资源)

   - `components`
   - `directives`
   - `filters`

6. **组合** (向选项里合并 property)

   - `extends`
   - `mixins`

7. **接口** (组件的接口)

   - `inheritAttrs`
   - `model`
   - `props/propsData`

8. **本地状态** (本地的响应式 property)

   - `data`
   - `computed`

9. **事件** (通过响应式事件触发的回调)

   - `watch`
   - **生命周期钩子** (按照它们被调用的顺序)
     - `beforeCreate`
     - `created`
     - `beforeMount`
     - `mounted`
     - `beforeUpdate`
     - `updated`
     - `activated`
     - `deactivated`
     - `beforeDestroy`
     - `destroyed`

10. **非响应式的 property** (不依赖响应系统的实例 property)

    - `methods`

11. **渲染** (组件输出的声明式描述)

    - `template/render`
    - `renderError`

### 3.2 元素 attribute 的顺

**元素 (包括组件) 的 attribute 应该有统一的顺序**。

这是为组件选项推荐的默认顺序。它们被划分为几大类，所以也能知道新添加的自定义 attribute 和指令应该放到哪里。

1. **定义** (提供组件的选项)

   - `is`

2. **列表渲染** (创建多个变化的相同元素)

   - `v-for`

3. **条件渲染** (元素是否渲染/显示)

   - `v-if`
   - `v-else-if`
   - `v-else`
   - `v-show`
   - `v-cloak`

4. **渲染方式** (改变元素的渲染方式)

   - `v-pre`
   - `v-once`

5. **全局感知** (需要超越组件的知识)

   - `id`

6. **唯一的 attribute** (需要唯一值的 attribute)

   - `ref`
   - `key`

7. **双向绑定** (把绑定和事件结合起来)

   - `v-model`

8. **其它 attribute** (所有普通的绑定或未绑定的 attribute)

9. **事件** (组件事件监听器)

   - `v-on`

10. **内容** (覆写元素的内容)

    - `v-html`
    - `v-text`

### 3.3 组件/实例选项中的空行

**可能想在多个 property 之间增加一个空行，特别是在这些选项一屏放不下，需要滚动才能都看到的时候**。

当组件开始觉得密集或难以阅读时，在多个 property 之间添加空行可以让其变得容易。在一些诸如 Vim 的编辑器里，这样格式化后的选项还能通过键盘被快速导航。

好例子

```js
props: {
  value: {
    type: String,
    required: true
  },

  focused: {
    type: Boolean,
    default: false
  },

  label: String,
  icon: String
},

computed: {
  formattedValue: function () {
    // ...
  },

  inputClasses: function () {
    // ...
  }
}
```

```js
// 没有空行在组件易于阅读和导航时也没问题。
props: {
  value: {
    type: String,
    required: true
  },
  focused: {
    type: Boolean,
    default: false
  },
  label: String,
  icon: String
},
computed: {
  formattedValue: function () {
    // ...
  },
  inputClasses: function () {
    // ...
  }
}
```

### 3.4 单文件组件的顶级元素的顺序

**单文件组件应该总是让 `<script>`、`<template>` 和 `<style>` 标签的顺序保持一致。且 `<style>` 要放在最后，因为另外两个标签至少要有一个**。

## 四. 优先级 D：谨慎使用 (有潜在危险的模式)

有些 Vue 特性的存在是为了照顾极端情况或帮助老代码的平稳迁移。当被过度使用时，这些特性会让代码难于维护甚至变成 bug 的来源。这些规则是为了给有潜在风险的特性敲个警钟，并说明它们什么时候不应该使用以及为什么。

### 4.1 没有在 `v-if`/`v-else-if`/`v-else` 中使用 `key`

**如果一组 `v-if` + `v-else` 的元素类型相同，最好使用 `key` (比如两个 `<div>` 元素)**。

默认情况下，Vue 会尽可能高效的更新 DOM。这意味着其在相同类型的元素之间切换时，会修补已存在的元素，而不是将旧的元素移除然后在同一位置添加一个新元素。如果本不相同的元素被识别为相同，则会出现意料之外的结果。

好例子:

```html
<div v-if="error" key="search-status">错误：{{ error }}</div>
<div v-else key="search-results">{{ results }}</div>
```

### 4.2 `scoped` 中的元素选择器

**元素选择器应该避免在 `scoped` 中出现**。

在 `scoped` 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。

为了给样式设置作用域，Vue 会为元素添加一个独一无二的 attribute，例如 `data-v-f3f3eg9`。然后修改选择器，使得在匹配选择器的元素中，只有带这个 attribute 才会真正生效 (比如 `button[data-v-f3f3eg9]`)。

问题在于大量的元素和 attribute 组合的选择器 (比如 `button[data-v-f3f3eg9]`) 会比类和 attribute 组合的选择器慢，所以应该**尽可能选用类选择器**。

好例子:

```html
<template>
  <button class="btn btn-close">X</button>
</template>

<style scoped>
  .btn-close {
    background-color: red;
  }
</style>
```

### 4.3 隐性的父子组件通信

**应该优先通过 prop 和事件进行父子组件之间的通信，而不是 `this.$parent` 或变更 prop**。

一个理想的 Vue 应用是 prop 向下传递，事件向上传递的。遵循这一约定会让组件更易于理解。然而，在一些边界情况下 `prop` 的变更或 `this.$parent` 能够简化两个深度耦合的组件。

> 注意 : 这种做法在很多简单的场景下可能会更方便。但请当心，不要为了一时方便 (少写代码) 而牺牲数据流向的简洁性 (易于理解)。

好例子:

```js
Vue.component('TodoItem', {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  template: `
    <input
      :value="todo.text"
      @input="$emit('input', $event.target.value)"
    >
  `
})
```

```js
Vue.component('TodoItem', {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  template: `
    <span>
      {{ todo.text }}
      <button @click="$emit('delete')">
        X
      </button>
    </span>
  `
})
```

### 4.4 非 Flux 的全局状态管理

应该优先通过 Vuex 管理全局状态，而不是通过 `this.$root` 或一个全局事件总线。

通过 `this.$root` 和/或全局事件总线管理状态在很多简单的情况下都是很方便的，但是并不适用于绝大多数的应用。

Vuex 是 Vue 的官方类 flux 实现，其提供的不仅是一个管理状态的中心区域，还是组织、追踪和调试状态变更的好工具。它很好地集成在了 Vue 生态系统之中 (包括完整的 Vue DevTools 支持)。

好例子

```js
// store/modules/todos.js
export default {
  state: {
    list: []
  },
  mutations: {
    REMOVE_TODO (state, todoId) {
      state.list = state.list.filter(todo => todo.id !== todoId)
    }
  },
  actions: {
    removeTodo ({ commit, state }, todo) {
      commit('REMOVE_TODO', todo.id)
    }
  }
}
```

```vue
<!--- TodoItem.vue -->
<template>
  <span>
    {{ todo.text }}
    <button @click="removeTodo(todo)">
      X
    </button>
  </span>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: mapActions(['removeTodo'])
}
</script>
```
