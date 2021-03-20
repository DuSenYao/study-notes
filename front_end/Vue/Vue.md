---
title: Vue
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Vue](#vue)
  - [一. 基础](#一-基础)
    - [1.1 安装](#11-安装)
    - [1.2 介绍](#12-介绍)
      - [1.2.1 声明式渲染](#121-声明式渲染)
      - [1.2.2 条件与循环](#122-条件与循环)
      - [1.2.3 处理用户输入](#123-处理用户输入)
      - [1.2.4 组件化应用构建](#124-组件化应用构建)
    - [1.3 Vue 实例](#13-vue-实例)
      - [1.3.1 创建一个 Vue 实例](#131-创建一个-vue-实例)
      - [1.3.2 数据与方法](#132-数据与方法)
      - [1.3.3 实例生命周期钩子](#133-实例生命周期钩子)
    - [1.4 模板语法](#14-模板语法)
      - [1.4.1 插值](#141-插值)
        - [1.4.1.1 文本](#1411-文本)
        - [1.4.1.2 原始 HTML](#1412-原始-html)
        - [1.4.1.3 Attribute](#1413-attribute)
        - [1.4.1.4 使用 JavaScript 表达式](#1414-使用-javascript-表达式)
      - [1.4.2 指令](#142-指令)
        - [1.4.2.1 参数](#1421-参数)
        - [1.4.2.2 动态参数](#1422-动态参数)
        - [1.4.2.3 修饰符](#1423-修饰符)
      - [1.4.3 缩写](#143-缩写)
    - [1.5 计算属性和侦听器](#15-计算属性和侦听器)
      - [1.5.1 计算属性](#151-计算属性)
        - [1.5.1.1 基础例子](#1511-基础例子)
        - [1.5.1.2 计算属性缓存 vs 方法](#1512-计算属性缓存-vs-方法)
        - [1.5.1.3 计算属性 vs 侦听属性](#1513-计算属性-vs-侦听属性)
        - [1.5.1.4 计算属性的 setter](#1514-计算属性的-setter)
      - [1.5.2 侦听器](#152-侦听器)
    - [1.6 Class 与 Style 绑定](#16-class-与-style-绑定)
      - [1.6.1 绑定 HTML Class](#161-绑定-html-class)
        - [1.6.1.1 对象语法](#1611-对象语法)
        - [1.6.1.2 数组语法](#1612-数组语法)
        - [1.6.1.3 用在组件上](#1613-用在组件上)
      - [1.6.2 绑定内联样式](#162-绑定内联样式)
        - [1.6.2.1 对象语法](#1621-对象语法)
        - [1.6.2.2 数组语法](#1622-数组语法)
        - [1.6.2.3 自动添加前缀](#1623-自动添加前缀)
        - [1.6.2.4 多重值](#1624-多重值)
    - [1.7 条件渲染](#17-条件渲染)
      - [1.7.1 v-if](#171-v-if)
        - [1.7.1.1 在 `<template>` 元素上使用 `v-if` 条件渲染分组](#1711-在-template-元素上使用-v-if-条件渲染分组)
        - [1.7.1.2 `v-else`](#1712-v-else)
        - [1.7.1.3 `v-else-if`](#1713-v-else-if)
        - [1.7.1. 4 用 `key` 管理可复用的元素](#171-4-用-key-管理可复用的元素)
      - [1.7.2 `v-show`](#172-v-show)
      - [1.7.3 `v-if` vs `v-show`](#173-v-if-vs-v-show)
      - [1.7.4 `v-if` 与 `v-for` 一起使用](#174-v-if-与-v-for-一起使用)
    - [1.8 列表渲染](#18-列表渲染)
      - [1.8.1 用 `v-for` 把一个数组对应为一组元素](#181-用-v-for-把一个数组对应为一组元素)
  - [二. 深入了解组件](#二-深入了解组件)
  - [三. 过渡 & 动画](#三-过渡-动画)
  - [四. 可复用性 & 组合](#四-可复用性-组合)
  - [五. 工具](#五-工具)
  - [六. 规模化](#六-规模化)
  - [七. 内在](#七-内在)

<!-- /code_chunk_output -->

# Vue

Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

## 一. 基础

### 1.1 安装

**兼容性**
Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。

**Vue Devtools**
在使用 Vue 时，推荐在浏览器上安装 [Vue Devtools](https://github.com/vuejs/vue-devtools#vue-devtools)。它允许在一个更友好的界面中审查和调试 Vue 应用。

**引入 Vue**:

- 可以在 html 文件中，通过以下方式引入 Vue

  - 在官网直接下载并用 `<script>` 标签引入，Vue 会被注册为一个全局变量。

  - CDN

    ```html
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    ```

    ```html
    <!-- 生产环境版本，优化了尺寸和速度 -->
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    ```

- NPM
  在用 Vue 构建大型应用时推荐使用 NPM 安装。NPM 能很好地和诸如 webpack 或 Browserify 模块打包器配合使用。同时 Vue 也提供配套工具来开发单文件组件。

**命令行工具 (CLI)**:
Vue 提供了一个[官方的 CLI](https://github.com/vuejs/vue-cli)，为单页面应用 (SPA) 快速搭建繁杂的脚手架。它为现代前端工作流提供了 batteries-included 的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。更多详情可查阅 [Vue CLI 的文档](https://cli.vuejs.org/)。

### 1.2 介绍

#### 1.2.1 声明式渲染

Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：

```html
<div id="app">{{ message }}</div>
```

```js
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  }
});
```

看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被建立了关联，所有东西都是响应式的。

> 注意: 现在不再和 HTML 直接交互了。一个 Vue 应用会将其挂载到一个 DOM 元素上 (对于这个例子是 #app) 然后对其进行完全控制。那个 HTML 是入口，但其余都会发生在新创建的 Vue 实例内部。

除了文本插值，还可以像这样来绑定元素 attribute：

```html
<div id="app-2">
  <span v-bind:title="message"> 鼠标悬停几秒钟查看此处动态绑定的提示信息！ </span>
</div>
```

```js
var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "页面加载于 " + new Date().toLocaleString()
  }
});
```

`v-bind` attribute 被称为**指令**。指令带有前缀 `v-`，以表示它们是 Vue 提供的特殊 attribute。它们会在渲染的 DOM 上应用特殊的响应式行为。在这里，该指令的意思是：“将这个元素节点的 title attribute 和 Vue 实例的 message property 保持一致”。可以缩写为 `:`。

#### 1.2.2 条件与循环

`v-if` 控制切换一个元素是否显示。

```html
<div id="app-3">
  <p v-if="seen">现在你看到我了</p>
</div>
```

```js
var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true
  }
});
```

这个例子演示了不仅可以把数据绑定到 DOM 文本或 attribute，还可以绑定到 DOM 结构。此外，Vue 也提供一个强大的过渡效果系统，可以在 Vue 插入/更新/移除元素时自动应用过渡效果。

`v-for` 指令可以绑定数组的数据来渲染一个项目列表：

```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">{{ todo.text }}</li>
  </ol>
</div>
```

```js
var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [{ text: "学习 JavaScript" }, { text: "学习 Vue" }, { text: "整个项目" }]
  }
});
```

#### 1.2.3 处理用户输入

可以用 `v-on` 指令添加一个事件监听器，通过它调用在 Vue 实例中定义的方法：

```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">反转消息</button>
</div>
```

```js
var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js!"
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    }
  }
});
```

> 注意 : 在 `reverseMessage` 方法中，更新了应用的状态，但没有触碰 DOM——所有的 DOM 操作都由 Vue 来处理，编写的代码只需要关注逻辑层面即可。

Vue 还提供了 `v-model` 指令，它能轻松实现表单输入和应用状态之间的**双向绑定**。

```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message" />
</div>
```

```js
var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!"
  }
});
```

#### 1.2.4 组件化应用构建

组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许使用小型、独立和通常可复用的组件构建大型应用。仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树：

![vue-组件化](./image/vue-组件化.png)

在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例。在 Vue 中注册组件很简单：

```js
// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})

var app = new Vue(...)
```

现在可以用它构建另一个组件模板：

```html
<ol>
  <!-- 创建一个 todo-item 组件的实例 -->
  <todo-item></todo-item>
</ol>
```

但是这样会为每个待办项渲染同样的文本。可以修改一下组件的定义，使之能够接受一个 prop，让数据能从父作用域将传到子组件：

```js
Vue.component("todo-item", {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义 attribute。
  // 这个 prop 名为 todo。
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});
```

现在，可以使用 `v-bind` 指令将待办项传到循环输出的每个组件中：

```html
<div id="app-7">
  <ol>
    <!--
      现在为每个 todo-item 提供 todo 对象，todo 对象是变量，即其内容可以是动态的。
      也需要为每个组件提供一个“key”。
    -->
    <todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id"></todo-item>
  </ol>
</div>
```

```js
Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "蔬菜" },
      { id: 1, text: "奶酪" },
      { id: 2, text: "随便其它什么人吃的东西" }
    ]
  }
});
```

**与自定义元素的关系**
Vue 组件非常类似于自定义元素——它是 Web 组件规范的一部分，这是因为 Vue 的组件语法部分参考了该规范。例如 Vue 组件实现了 Slot API 与 is attribute。但是，还是有几个关键差别：

1. Web Components 规范已经完成并通过，但未被所有浏览器原生实现。目前 Safari 10.1+、Chrome 54+ 和 Firefox 63+ 原生支持 Web Components。相比之下，Vue 组件不需要任何 polyfill，并且在所有支持的浏览器 (IE9 及更高版本) 之下表现一致。必要时，Vue 组件也可以包装于原生自定义元素之内。

2. Vue 组件提供了纯自定义元素所不具备的一些重要功能，最突出的是跨组件数据流、自定义事件通信以及构建工具集成。

虽然 Vue 内部没有使用自定义元素，不过在应用使用自定义元素、或以自定义元素形式发布时，依然有很好的互操作性。Vue CLI 也支持将 Vue 组件构建成为原生的自定义元素。

### 1.3 Vue 实例

#### 1.3.1 创建一个 Vue 实例

每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的：

```js
var vm = new Vue({
  // 选项
});
```

虽然没有完全遵循 MVVM 模型，但是 Vue 的设计也受到了它的启发。因此在文档中经常会使用 vm (ViewModel 的缩写) 这个变量名表示 Vue 实例。

当创建一个 Vue 实例时，可以传入一个选项对象。可以在 [API 文档](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE)中浏览完整的选项列表。

一个 Vue 应用由一个通过 `new Vue` 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成。举个例子，一个 todo 应用的组件树可以是这样的：

```txt
根实例
└─ TodoList
   ├─ TodoItem
   │  ├─ TodoButtonDelete
   │  └─ TodoButtonEdit
   └─ TodoListFooter
      ├─ TodosButtonClear
      └─ TodoListStatistics
```

#### 1.3.2 数据与方法

当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

```js
// 数据对象
var data = { a: 1 };

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
});

// 获得这个实例上的 property
// 返回源数据中对应的字段
vm.a == data.a; // => true

// 设置 property 也会影响到原始数据
vm.a = 2;
data.a; // => 2

// ……反之亦然
data.a = 3;
vm.a; // => 3
```

当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时就已经存在于 data 中的 property 才是响应式的。也就是说如果添加一个新的 property，比如：

```js
vm.b = "hi";
```

那么对 b 的改动将不会触发任何视图的更新。如果你知道你会在晚些时候需要一个 property，但是一开始它为空或不存在，那么仅需要设置一些初始值。比如：

```js
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
```

这里唯一的例外是使用 `Object.freeze()`，这会阻止修改现有的 property，也意味着响应系统无法再追踪变化。

```js
var obj = {
  foo: "bar"
};

Object.freeze(obj);

new Vue({
  el: "#app",
  data: obj
});
```

```html
<div id="app">
  <p>{{ foo }}</p>
  <!-- 这里的 `foo` 不会更新！ -->
  <button v-on:click="foo = 'baz'">Change it</button>
</div>
```

除了数据 property，Vue 实例还暴露了一些有用的实例 property 与方法。它们都有前缀 `$`，以便与用户定义的 property 区分开来。例如：

```js
var data = { a: 1 };
var vm = new Vue({
  el: "#example",
  data: data
});

vm.$data === data; // => true
vm.$el === document.getElementById("example"); // => true

// $watch 是一个实例方法
vm.$watch("a", function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
});
```

可以在 [API 参考-实例-property](https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B-property) 中查阅到完整的实例 property 和方法的列表。

#### 1.3.3 实例生命周期钩子

每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

比如 created 钩子可以用来在一个实例被创建之后执行代码：

```js
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log("a is: " + this.a);
  }
});
// => "a is: 1"
```

也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 `mounted`、`updated` 和 `destroyed`。生命周期钩子的 `this` 上下文指向调用它的 Vue 实例。

> **注意**：
> 不要在选项 `property` 或回调上使用箭头函数，比如 `created: () => console.log(this.a)` 或 `vm.$watch('a', newValue => this.myMethod())`。
> 因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 `Uncaught TypeError: Cannot read property of undefined` 或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误。

**生命周期图示**
![生命周期图示](./image/生命周期图示.png)

### 1.4 模板语法

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。

在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

如果熟悉虚拟 DOM 并且偏爱 JavaScript 的原始力量，也可以不用模板，直接写渲染 (render) 函数，使用可选的 JSX 语法。

#### 1.4.1 插值

##### 1.4.1.1 文本

数据绑定最常见的形式就是使用 “Mustache”语法 (双大括号) 的文本插值：

```html
<span>Message: {{ msg }}</span>
```

Mustache 标签将会被替代为对应数据对象上 msg property 的值。无论何时，绑定的数据对象上 msg property 发生了改变，插值处的内容都会更新。

通过使用 `v-once` 指令，也能执行一次性地插值，当数据改变时，插值处的内容不会更新：

```html
<span v-once>这个将不会改变: {{ msg }}</span>
```

> 注意: 这会影响到该节点上的其它数据绑定。

##### 1.4.1.2 原始 HTML

双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，需要使用 `v-html` 指令：

```html
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

这个 `span` 的内容将会被替换成为 property 值 `rawHtml`，直接作为 HTML——会忽略解析 property 值中的数据绑定。

> 注意 : 不能使用 `v-html` 来复合局部模板，因为 Vue 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。
> 在站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。

##### 1.4.1.3 Attribute

Mustache 语法不能作用在 HTML attribute 上，遇到这种情况应该使用 `v-bind` 指令：

```html
<div v-bind:id="dynamicId"></div>
```

对于布尔 attribute (它们只要存在就意味着值为 true)，`v-bind` 工作起来略有不同，在这个例子中：

```html
<button v-bind:disabled="isButtonDisabled">Button</button>
```

如果 isButtonDisabled 的值是 null、undefined 或 false，则 disabled attribute 甚至不会被包含在渲染出来的 `<button>` 元素中。

##### 1.4.1.4 使用 JavaScript 表达式

实际上，对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。

```txt
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，**每个绑定都只能包含单个表达式**，所以下面的例子都不会生效。

```Vue
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{
  if (ok) { return message }
}}
```

> 模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 `Math` 和 `Date` 。不应该在模板表达式中试图访问用户定义的全局变量。

#### 1.4.2 指令

指令 (Directives) 是带有 `v-` 前缀的特殊 attribute。指令 attribute 的值预期是单个 JavaScript 表达式 (`v-for` 是例外情况)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

```html
<p v-if="seen">现在你看到我了</p>
```

这里，`v-if` 指令将根据表达式 `seen` 的值的真假来插入/移除 `<p>` 元素。

##### 1.4.2.1 参数

一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，`v-bind` 指令可以用于响应式地更新 HTML attribute：

```html
<a v-bind:href="url">...</a>
```

在这里 `href` 是参数，告知 `v-bind` 指令将该元素的 href attribute 与表达式 url 的值绑定。

另一个例子是 `v-on` 指令，它用于监听 DOM 事件：

```html
<a v-on:click="doSomething">...</a>
```

在这里参数是监听的事件名。

##### 1.4.2.2 动态参数

从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：

```html
<!--
  注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”所述。
-->
<a v-bind:[attributeName]="url"> ... </a>
```

这里的 attributeName 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的 Vue 实例有一个 data property attributeName，其值为 "href"，那么这个绑定将等价于 v-bind:href。

同样地，可以使用动态参数为一个动态的事件名绑定处理函数：

```html
<a v-on:[eventName]="doSomething"> ... </a>
```

在这个示例中，当 `eventName` 的值为 `"focus"` 时，`v-on:[eventName]` 将等价于 `v-on:focus`。

**对动态参数的值的约束**
动态参数预期会求出一个字符串，异常情况下值为 `null`。这个特殊的 null 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。

**对动态参数表达式的约束**
动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的。例如：

```html
<!-- 这会触发一个编译警告 -->
<a v-bind:['foo' + bar]="value"> ... </a>
```

变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。

在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写：

```html
<!--
在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。
除非在实例中有一个名为“someattr”的 property，否则代码不会工作。
-->
<a v-bind:[someAttr]="value"> ... </a>
```

##### 1.4.2.3 修饰符

修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`：

```html
<form v-on:submit.prevent="onSubmit">...</form>
```

#### 1.4.3 缩写

`v-` 前缀作为一种视觉提示，用来识别模板中 Vue 特定的 attribute。在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时，`v-` 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 Vue 管理所有模板的单页面应用程序 (SPA - single page application) 时，`v-` 前缀也变得没那么重要了。因此，Vue 为 `v-bind` 和 `v-on` 这两个最常用的指令，提供了特定简写：

`v-bind` 缩写

```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
```

`v-on` 缩写

```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```

它们看起来可能与普通的 HTML 略有不同，但 `:` 与 `@` 对于 attribute 名来说都是合法字符，在所有支持 Vue 的浏览器都能被正确地解析。而且，它们不会出现在最终渲染的标记中。

### 1.5 计算属性和侦听器

#### 1.5.1 计算属性

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。对于任何复杂逻辑，都应当使用计算属性。

##### 1.5.1.1 基础例子

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
  el: "#example",
  data: {
    message: "Hello"
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split("").reverse().join("");
    }
  }
});
```

结果：

```txt
Original message: "Hello"

Computed reversed message: "olleH"
```

这里声明了一个计算属性 `reversedMessage`。提供的函数将用作 property `vm.reversedMessage` 的 getter 函数：

```js
console.log(vm.reversedMessage); // => 'olleH'
vm.message = "Goodbye";
console.log(vm.reversedMessage); // => 'eybdooG'
```

`vm.reversedMessage` 的值始终取决于 `vm.message` 的值。

可以像绑定普通 property 一样在模板中绑定计算属性。Vue 知道 `vm.reversedMessage` 依赖于 `vm.message`，因此当 `vm.message` 发生改变时，所有依赖 `vm.reversedMessage` 的绑定也会更新。而且最妙的是已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。

##### 1.5.1.2 计算属性缓存 vs 方法

```html
<p>Reversed message: "{{ reversedMessage() }}"</p>
```

```js
// 在组件中
methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
```

可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，**不同的是计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值**。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

这也同样意味着下面的计算属性将不再更新，因为 `Date.now()` 不是响应式依赖：

```js
computed: {
  now: function () {
    return Date.now()
  }
}
```

相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。

为什么需要缓存？假设有一个性能开销比较大的计算属性 A，它需要遍历一个巨大的数组并做大量的计算。然后可能有其他的计算属性依赖于 A。如果没有缓存，将不可避免的多次执行 A 的 getter！如果不希望有缓存，可以用方法来替代。

##### 1.5.1.3 计算属性 vs 侦听属性

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：**侦听属性**。当有一些数据需要随着其它数据变动而变动时，很容易滥用 `watch`。然而，通常更好的做法是使用计算属性而不是命令式的 `watch` 回调。例子：

```html
<div id="demo">{{ fullName }}</div>
```

```js
var vm = new Vue({
  el: "#demo",
  data: {
    firstName: "Foo",
    lastName: "Bar",
    fullName: "Foo Bar"
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function (val) {
      this.fullName = this.firstName + " " + val;
    }
  }
});
```

上面代码是命令式且重复的。将它与计算属性的版本进行比较：

```js
var vm = new Vue({
  el: "#demo",
  data: {
    firstName: "Foo",
    lastName: "Bar"
  },
  computed: {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
});
```

##### 1.5.1.4 计算属性的 setter

计算属性默认只有 getter，不过在需要时也可以提供一个 setter：

```js
// ...
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...
```

现在再运行 `vm.fullName = 'John Doe'` 时，`setter` 会被调用，`vm.firstName` 和 `vm.lastName` 也会相应地被更新

#### 1.5.2 侦听器

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时**执行异步**或**开销较大**的操作时，这个方式是最有用的。

```html
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</div>
```

```js
<!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 -->
<!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 -->
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})
</script>
```

在这个示例中，使用 `watch` 选项允许执行异步操作 (访问一个 API)，限制执行该操作的频率，并在得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

除了 `watch` 选项之外，还可以使用命令式的 `vm.$watch` API。

### 1.6 Class 与 Style 绑定

操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是 attribute，所以可以用 `v-bind` 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 `v-bind` 用于 `class` 和 `style` 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。

#### 1.6.1 绑定 HTML Class

##### 1.6.1.1 对象语法

可以传给 `v-bind:class` 一个对象，以动态地切换 class：

```html
<div v-bind:class="{ active: isActive }"></div>
```

上面的语法表示 `active` 这个 class 存在与否将取决于数据 property `isActive` 的 truthiness。

可以在对象中传入更多字段来动态切换多个 class。此外，v-bind:class 指令也可以与普通的 class attribute 共存。当有如下模板：

```html
<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
```

```js
data: {
  isActive: true,
  hasError: false
}
```

结果渲染为：

```html
<div class="static active"></div>
```

当 `isActive` 或者 `hasError` 变化时，class 列表将相应地更新。例如，如果 `hasError` 的值为 `true`，class 列表将变为 `"static active text-danger"`。

绑定的数据对象不必内联定义在模板里：

```html
<div v-bind:class="classObject"></div>
```

```js
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

渲染的结果和上面一样。也可以在这里绑定一个返回对象的计算属性。这是一个常用且强大的模式：

```html
<div v-bind:class="classObject"></div>
```

```js
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

##### 1.6.1.2 数组语法

可以把一个数组传给 `v-bind:class`，以应用一个 class 列表：

```html
<div v-bind:class="[activeClass, errorClass]"></div>
```

```js
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

渲染为：

```html
<div class="active text-danger"></div>
```

如果也想根据条件切换列表中的 class，可以用三元表达式：

```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

这样写将始终添加 `errorClass`，但是只有在 `isActive` 是 truthy 时才添加 `activeClass`。

不过，当有多个条件 class 时这样写有些繁琐。所以**在数组语法中也可以使用对象语法**：

```html
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```

##### 1.6.1.3 用在组件上

当在一个自定义组件上使用 `class` property 时，这些 class 将被添加到该组件的根元素上面。这个元素上已经存在的 class 不会被覆盖。

例如，声明了这个组件：

```js
Vue.component("my-component", {
  template: '<p class="foo bar">Hi</p>'
});
```

然后在使用它的时候添加一些 class：

```html
<my-component class="baz boo"></my-component>
```

HTML 将被渲染为：

```html
<p class="foo bar baz boo">Hi</p>
```

对于带数据绑定 class 也同样适用：

```html
<my-component v-bind:class="{ active: isActive }"></my-component>
```

当 `isActive` 为 truthy 时，HTML 将被渲染成为：

```js
<p class="foo bar active">Hi</p>
```

#### 1.6.2 绑定内联样式

##### 1.6.2.1 对象语法

`v-bind:style` 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名：

```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

```js
data: {
  activeColor: 'red',
  fontSize: 30
}
```

直接绑定到一个样式对象通常更好，这会让模板更清晰：

```html
<div v-bind:style="styleObject"></div>
```

```js
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

同样的，对象语法常常结合返回对象的计算属性使用。

##### 1.6.2.2 数组语法

`v-bind:style` 的数组语法可以将多个样式对象应用到同一个元素上：

```html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

##### 1.6.2.3 自动添加前缀

当 `v-bind:style` 使用需要添加浏览器引擎前缀的 CSS property 时，如 transform，Vue.js 会自动侦测并添加相应的前缀。

##### 1.6.2.4 多重值

从 2.3.0 起可以为 `style` 绑定中的 property 提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：

```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexBox，那么就只会渲染 display: flex。

### 1.7 条件渲染

#### 1.7.1 v-if

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

```html
<h1 v-if="awesome">Vue is awesome!</h1>
```

也可以用 `v-else` 添加一个“else 块”：

```html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no</h1>
```

##### 1.7.1.1 在 `<template>` 元素上使用 `v-if` 条件渲染分组

因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 `<template>` 元素当做不可见的包裹元素，并在上面使用 `v-if`。最终的渲染结果将不包含 `<template>` 元素。

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

##### 1.7.1.2 `v-else`

可以使用 `v-else` 指令来表示 `v-if` 的“else 块”：

```html
<div v-if="Math.random() > 0.5">Now you see me</div>
<div v-else>Now you don't</div>
```

> 注意 : `v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，否则它将不会被识别。

##### 1.7.1.3 `v-else-if`

`v-else-if`，顾名思义，充当 `v-if` 的“else-if 块”，可以连续使用：

```html
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div>
```

类似于 `v-else`，`v-else-if` 也必须紧跟在带 `v-if` 或者 `v-else-if` 的元素之后。

##### 1.7.1. 4 用 `key` 管理可复用的元素

Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。例如，如果允许用户在不同的登录方式之间切换：

```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" />
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" />
</template>
```

那么在上面的代码中切换 `loginType` 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，`<input>` 不会被替换掉——仅仅是替换了它的 `placeholder`。

这样也不总是符合实际需求，所以 Vue 提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 `key` attribute 即可：

```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input" />
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input" />
</template>
```

现在，每次切换时，输入框都将被重新渲染。

> 注意 : `<label>` 元素仍然会被高效地复用，因为它们没有添加 `key` attribute。

#### 1.7.2 `v-show`

另一个用于根据条件展示元素的选项是 `v-show` 指令。用法大致一样：

```html
<h1 v-show="ok">Hello!</h1>
```

不同的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中。`v-show` 只是简单地切换元素的 CSS property display。

> 注意 : v-show 不支持 `<template>` 元素，也不支持 `v-else`。

#### 1.7.3 `v-if` vs `v-show`

`v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

`v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。

#### 1.7.4 `v-if` 与 `v-for` 一起使用

不推荐同时使用 `v-if` 和 `v-for`。

当 `v-if` 与 `v-for` 一起使用时，`v-for` 具有比 `v-if` 更高的优先级。

### 1.8 列表渲染

#### 1.8.1 用 `v-for` 把一个数组对应为一组元素

可以用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的**别名**。

```html
<ul id="example-1">
  <li v-for="item in items" :key="item.message">{{ item.message }}</li>
</ul>
```

```js
var example1 = new Vue({
  el: "#example-1",
  data: {
    items: [{ message: "Foo" }, { message: "Bar" }]
  }
});
```

在 `v-for` 块中，可以访问所有父作用域的 property。`v-for` 还支持一个可选的第二个参数，即当前项的**索引**。

```html
<ul id="example-2">
  <li v-for="(item, index) in items">{{ parentMessage }} - {{ index }} - {{ item.message }}</li>
</ul>
```

```js
var example2 = new Vue({
  el: "#example-2",
  data: {
    parentMessage: "Parent",
    items: [{ message: "Foo" }, { message: "Bar" }]
  }
});
```

也可以用 `of` 替代 `in` 作为分隔符，因为它更接近 JavaScript 迭代器的语法：

```html
<div v-for="item of items"></div>
```

#### 1.8.2 在 `v-for` 里使用对象

也可以用 `v-for` 来遍历一个对象的 property。

```html
<ul id="v-for-object" class="demo">
  <li v-for="value in object">{{ value }}</li>
</ul>
```

```js
new Vue({
  el: "#v-for-object",
  data: {
    object: {
      title: "How to do lists in Vue",
      author: "Jane Doe",
      publishedAt: "2016-04-10"
    }
  }
});
```

也可以提供第二个的参数为 property 名称 (也就是键名)：

```html
<div v-for="(value, name) in object">{{ name }}: {{ value }}</div>
```

还可以用第三个参数作为索引：

```html
<div v-for="(value, name, index) in object">{{ index }}. {{ name }}: {{ value }}</div>
```

> 注意 : 在遍历对象时，会按 `Object.keys()` 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下都一致。

#### 1.8.3 维护状态

当 Vue 正在更新使用 `v-for` 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。这个类似 Vue 1.x 的 track-by="$index"。

这个默认的模式是高效的，但是**只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出**。

为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，需要为每项提供一个唯一 `key` attribute：

```html
<div v-for="item in items" v-bind:key="item.id">
  <!-- 内容 -->
</div>
```

建议尽可能在使用 `v-for` 时提供 `key` attribute，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。

因为它是 Vue 识别节点的一个通用机制，`key` 并不仅与 `v-for` 特别关联。它还具有其它用途。

> 注意 : 不要使用对象或数组之类的非基本类型值作为 `v-for` 的 `key`。**使用字符串或数值类型的值**。

#### 1.8.4 数组更新检测

**变更方法**:

Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

**替换数组**:

变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如 `filter()`、`concat()` 和 `slice()`。它们不会变更原始数组，而总是返回一个新数组。当使用非变更方法时，可以用新数组替换旧数组：

```js
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/);
});
```

可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。但事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。

> 注意 : 由于 JavaScript 的限制，Vue **不能检测数组和对象的变化**。

#### 1.8.5 显示过滤/排序后的结果

有时，想要显示一个数组经过过滤或排序后的版本，而不实际变更或重置原始数据。在这种情况下，可以创建一个计算属性，来返回过滤或排序后的数组。

```html
<li v-for="n in evenNumbers">{{ n }}</li>
```

```js
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
computed: {
  evenNumbers: function () {
    return this.numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```

在计算属性不适用的情况下 (例如，在嵌套 v-for 循环中) 可以使用一个方法：

```html
<ul v-for="set in sets">
  <li v-for="n in even(set)">{{ n }}</li>
</ul>
```

```js
data: {
  sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
},
methods: {
  even: function (numbers) {
    return numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```

#### 1.8.6 在 `v-for` 里使用值范围

`v-for` 也可以接受整数。在这种情况下，它会把模板重复对应次数。

```html
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```

#### 1.8.7 在 `<template>` 上使用 `v-for`

类似于 `v-if`，也可以利用带有 `v-for` 的 `<template>` 来循环渲染一段包含多个元素的内容。比如：

```html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

#### 1.8.8 `v-for` 与 `v-if` 一同使用

> 不推荐在同一元素上使用 `v-if` 和 `v-for`

当它们处于同一节点，`v-for` 的优先级比 `v-if` 更高，这意味着 `v-if` 将分别重复运行于每个 `v-for` 循环中。当只想为部分项渲染节点时，这种优先级的机制会十分有用，如下：

```html
<li v-for="todo in todos" v-if="!todo.isComplete">{{ todo }}</li>
```

上面的代码将只渲染未完成的 todo。

而如果目的是有条件地跳过循环的执行，那么可以将 `v-if` 置于外层元素 (或 `<template>`) 上。如：

```html
<ul v-if="todos.length">
  <li v-for="todo in todos">{{ todo }}</li>
</ul>
<p v-else>No todos left!</p>
```

#### 1.8.9 在组件上使用 `v-for`

在自定义组件上，可以像在任何普通元素上一样使用 `v-for`。

```html
<my-component v-for="item in items" :key="item.id"></my-component>
```

> 2.2.0+ 的版本里，当在组件上使用 `v-for` 时，`key` 现在是必须的。

然而，任何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，要使用 prop：

```html
<my-component v-for="(item, index) in items" v-bind:item="item" v-bind:index="index" v-bind:key="item.id"></my-component>
```

不自动将 `item` 注入到组件里的原因是，这会使得组件与 `v-for` 的运作紧密耦合。明确组件数据的来源能够使组件在其他场合重复使用。

下面是一个简单的 todo 列表的完整例子：

```html
<div id="todo-list-example">
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat" />
    <button>Add</button>
  </form>
  <ul>
    <li is="todo-item" v-for="(todo, index) in todos" v-bind:key="todo.id" v-bind:title="todo.title" v-on:remove="todos.splice(index, 1)"></li>
  </ul>
</div>
```

> 注意 : 这里的 `is="todo-item"` attribute。这种做法在使用 DOM 模板时是十分必要的，因为在 `<ul>` 元素内只有 `<li>` 元素会被看作有效内容。这样做实现的效果与 `<todo-item>` 相同，但是可以避开一些潜在的浏览器解析错误。

```js
Vue.component("todo-item", {
  template: "\
    <li>\
      {{ title }}\
      <button v-on:click=\"$emit('remove')\">Remove</button>\
    </li>\
  ",
  props: ["title"]
});

new Vue({
  el: "#todo-list-example",
  data: {
    newTodoText: "",
    todos: [
      {
        id: 1,
        title: "Do the dishes"
      },
      {
        id: 2,
        title: "Take out the trash"
      },
      {
        id: 3,
        title: "Mow the lawn"
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = "";
    }
  }
});
```

### 1.9 事件处理

#### 1.9.1 监听事件

可以用 `v-on` 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。

```html
<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
```

```js
var example1 = new Vue({
  el: "#example-1",
  data: {
    counter: 0
  }
});
```

#### 1.9.2 事件处理方法

然而许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 `v-on` 指令中是不可行的。因此 `v-on` 还可以接收一个需要调用的方法名称。

```html
<div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
```

```js
var example2 = new Vue({
  el: "#example-2",
  data: {
    name: "Vue.js"
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert("Hello " + this.name + "!");
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName);
      }
    }
  }
});

// 也可以用 JavaScript 直接调用方法
example2.greet(); // => 'Hello Vue.js!'
```

#### 1.9.3 内联处理器中的方法

除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法：

```html
<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
```

```js
new Vue({
  el: "#example-3",
  methods: {
    say: function (message) {
      alert(message);
    }
  }
});
```

有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 `$event` 把它传入方法：

```html
<button v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button>
```

```js
// ...
methods: {
  warn: function (message, event) {
    // 现在可以访问原生事件对象
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```

#### 1.9.4 事件修饰符

在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 `v-on` 提供了**事件修饰符**。修饰符是由点开头的指令后缀来表示的。

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<!-- .once 修饰符还能被用到自定义的组件事件上 -->
<a v-on:click.once="doThis"></a>

<!-- Vue 还对应 addEventListener 中的 passive 选项提供了 .passive 修饰符 -->
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
<!-- 这个 .passive 修饰符尤其能够提升移动端的性能。 -->
<!-- 不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为 -->
```

> 注意 : 使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self` 会阻止所有的点击，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。

#### 1.9.5 按键修饰符

在监听键盘事件时，经常需要检查详细的按键。Vue 允许为 `v-on` 在监听键盘事件时添加按键修饰符：

```html
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input v-on:keyup.enter="submit" />
```

可以直接将 `KeyboardEvent.key` 暴露的任意有效按键名转换为 kebab-case 来作为修饰符。

```html
<!-- 处理函数只会在 $event.key 等于 PageDown 时被调用。 -->
<input v-on:keyup.page-down="onPageDown" />
```

#### 1.9.6 系统修饰键

可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`

> 注意：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。

```html
<!-- Alt + C -->
<input v-on:keyup.alt.67="clear" />

<!-- Ctrl + Click -->
<div v-on:click.ctrl="doSomething">Do something</div>
```

> 注意 : 修饰键与常规按键不同，在和 `keyup` 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 `keyup.ctrl`。而单单释放 `ctrl` 也不会触发事件。如果想要这样的行为，请为 `ctrl` 换用 `keyCode：keyup.17`。

##### 1.9.6.1 `.exact` 修饰符

`.exact` 修饰符允许控制由精确的系统修饰符组合触发的事件。

```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button v-on:click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button v-on:click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button v-on:click.exact="onClick">A</button>
```

##### 1.9.6.2 鼠标按钮修饰符

- `.left`
- `.right`
- `.middle`

这些修饰符会限制处理函数仅响应特定的鼠标按钮。

### 1.10 表单输入绑定

#### 1.10.1 基础用法

可以用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

> `v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` attribute 的初始值而总是将 Vue 实例的数据作为数据来源。应该通过 JavaScript 在组件的 `data` 选项中声明初始值。

`v-model` 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

- `text` 和 `textarea` 元素使用 value property 和 input 事件；
- `checkbox` 和 `radio` 使用 checked property 和 change 事件；
- `select` 字段将 value 作为 prop 并将 change 作为事件。

> 对于需要使用输入法 (如中文、日文、韩文等) 的语言，`v-model` 不会在输入法组合文字过程中得到更新。如果也想处理这个过程，使用 `input` 事件。

##### 1.10.1.1 文本

```html
<input v-model="message" placeholder="edit me" />
<p>Message is: {{ message }}</p>
```

##### 1.10.1.2 多行文本

```html
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br />
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

> 在文本区域插值 (`<textarea>{{text}}</textarea>`) 并不会生效，应用 `v-model` 来代替。

##### 1.10.1.3 复选框

单个复选框，绑定到布尔值：

```html
<input type="checkbox" id="checkbox" v-model="checked" /> <label for="checkbox">{{ checked }}</label>
```

多个复选框，绑定到同一个数组：

```html
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames" />
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
<label for="mike">Mike</label>
<br />
<span>Checked names: {{ checkedNames }}</span>
```

```js
new Vue({
  el: "...",
  data: {
    checkedNames: []
  }
});
```

##### 1.10.1.4 单选按钮

```html
<div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>
  <br />
  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>
  <br />
  <span>Picked: {{ picked }}</span>
</div>
```

```js
new Vue({
  el: "#example-4",
  data: {
    picked: ""
  }
});
```

##### 1.10.1.5 选择框

**单选时**：

```html
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
```

```js
new Vue({
  el: '...',
  data: {
    selected: ''
  }
})
```

> 如果 `v-model` 表达式的初始值未能匹配任何选项，`<select>` 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。

**多选时** (绑定到一个数组)：

```html
<div id="example-6">
  <select v-model="selected" multiple style="width: 50px;">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  <span>Selected: {{ selected }}</span>
</div>
```

```js
new Vue({
  el: '#example-6',
  data: {
    selected: []
  }
})
```

用 `v-for` 渲染的**动态选项**：

```html
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
```

```js
new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
```

#### 1.10.2 值绑定

对于单选按钮，复选框及选择框的选项，`v-model` 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)：

```html
<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">

<!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

但是有时可能想把值绑定到 Vue 实例的一个动态 property 上，这时可以用 `v-bind` 实现，并且这个 property 的值可以不是字符串。

##### 1.10.2.1 复选框

```html
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no"
>
```

```js
// 当选中时
vm.toggle === 'yes'
// 当没有选中时
vm.toggle === 'no'
```

这里的 `true-value` 和 `false-value` attribute 并不会影响输入控件的 value attribute，因为浏览器在提交表单时并不会包含未被选中的复选框。如果要确保表单中这两个值中的一个能够被提交，(即“yes”或“no”)，换用单选按钮。

##### 1.10.2.2 单选按钮

```html
<input type="radio" v-model="pick" v-bind:value="a">
```

```js
// 当选中时
vm.pick === vm.a
```

##### 1.10.2.3 选择框的选项

```html
<select v-model="selected">
    <!-- 内联对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>
```

```js
// 当选中时
typeof vm.selected // => 'object'
vm.selected.number // => 123
```

#### 1.10.3 修饰符

**`.lazy`**

在默认情况下，`v-model` 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。可以添加 `lazy` 修饰符，从而转为在 `change` 事件之后进行同步：

```html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg">
```

**`.number`**

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符：

```html
<input v-model.number="age" type="number">
```

这通常很有用，因为即使在 `type="number"` 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 `parseFloat()` 解析，则会返回原始的值。

**`.trim`**

如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符：

```html
<input v-model.trim="msg">
```

### 1.11 组件基础

#### 1.11.1 基本示例

```js
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```

组件是可复用的 Vue 实例，且带有一个名字：在这个例子中是 `<button-counter>`。可以在一个通过 new Vue 创建的 Vue 根实例中，把这个组件作为自定义元素来使用：

```html
<div id="components-demo">
  <button-counter></button-counter>
</div>
```

```js
new Vue({ el: '#components-demo' })
```

因为组件是可复用的 Vue 实例，所以它们与 new Vue 接收相同的选项，例如 `data`、`computed`、`watch`、`methods` 以及生命周期钩子等。仅有的例外是像 `el` 这样根实例特有的选项。

#### 1.11.2 组件的复用

可以将组件进行任意次数的复用：

```html
<div id="components-demo">
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>
```

> 注意 : 当点击按钮时，每个组件都会各自独立维护它的 `count`。因为每用一次组件，就会有一个它的**新实例**被创建。

## 二. 深入了解组件

## 三. 过渡 & 动画

## 四. 可复用性 & 组合

## 五. 工具

## 六. 规模化

## 七. 内在
