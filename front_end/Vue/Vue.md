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
      - [1.8.2 在 `v-for` 里使用对象](#182-在-v-for-里使用对象)
      - [1.8.3 维护状态](#183-维护状态)
      - [1.8.4 数组更新检测](#184-数组更新检测)
      - [1.8.5 显示过滤/排序后的结果](#185-显示过滤排序后的结果)
      - [1.8.6 在 `v-for` 里使用值范围](#186-在-v-for-里使用值范围)
      - [1.8.7 在 `<template>` 上使用 `v-for`](#187-在-template-上使用-v-for)
      - [1.8.8 `v-for` 与 `v-if` 一同使用](#188-v-for-与-v-if-一同使用)
      - [1.8.9 在组件上使用 `v-for`](#189-在组件上使用-v-for)
    - [1.9 事件处理](#19-事件处理)
      - [1.9.1 监听事件](#191-监听事件)
      - [1.9.2 事件处理方法](#192-事件处理方法)
      - [1.9.3 内联处理器中的方法](#193-内联处理器中的方法)
      - [1.9.4 事件修饰符](#194-事件修饰符)
      - [1.9.5 按键修饰符](#195-按键修饰符)
      - [1.9.6 系统修饰键](#196-系统修饰键)
        - [1.9.6.1 `.exact` 修饰符](#1961-exact-修饰符)
        - [1.9.6.2 鼠标按钮修饰符](#1962-鼠标按钮修饰符)
    - [1.10 表单输入绑定](#110-表单输入绑定)
      - [1.10.1 基础用法](#1101-基础用法)
        - [1.10.1.1 文本](#11011-文本)
        - [1.10.1.2 多行文本](#11012-多行文本)
        - [1.10.1.3 复选框](#11013-复选框)
        - [1.10.1.4 单选按钮](#11014-单选按钮)
        - [1.10.1.5 选择框](#11015-选择框)
      - [1.10.2 值绑定](#1102-值绑定)
        - [1.10.2.1 复选框](#11021-复选框)
        - [1.10.2.2 单选按钮](#11022-单选按钮)
        - [1.10.2.3 选择框的选项](#11023-选择框的选项)
      - [1.10.3 修饰符](#1103-修饰符)
    - [1.11 组件基础](#111-组件基础)
      - [1.11.1 基本示例](#1111-基本示例)
      - [1.11.2 组件的复用](#1112-组件的复用)
        - [1.11.2.1 `data` 必须是一个函数](#11121-data-必须是一个函数)
      - [1.11.3 组件的组织](#1113-组件的组织)
      - [1.11.4 通过 Prop 向子组件传递数据](#1114-通过-prop-向子组件传递数据)
      - [1.11.5 单个根元素](#1115-单个根元素)
      - [1.11.6 监听子组件事件](#1116-监听子组件事件)
        - [1.11.6.1 使用事件抛出一个值](#11161-使用事件抛出一个值)
        - [1.11.6.2 在组件上使用 v-model](#11162-在组件上使用-v-model)
      - [1.11.7 通过插槽分发内容](#1117-通过插槽分发内容)
      - [1.11.8 动态组件](#1118-动态组件)
      - [1.11.9 解析 DOM 模板时的注意事项](#1119-解析-dom-模板时的注意事项)
  - [二. 深入了解组件](#二-深入了解组件)
    - [2.1 组件注册](#21-组件注册)
      - [2.1.1 组件名](#211-组件名)
      - [2.1.2 全局注册](#212-全局注册)
      - [2.1.3 局部注册](#213-局部注册)
      - [2.1.4 模块系统](#214-模块系统)
        - [2.1.4.1 在模块系统中局部注册](#2141-在模块系统中局部注册)
        - [2.1.4.2 基础组件的自动化全局注册](#2142-基础组件的自动化全局注册)
    - [2.2 Prop](#22-prop)
      - [2.2.1 Prop 的大小写 (camelCase vs kebab-case)](#221-prop-的大小写-camelcase-vs-kebab-case)
      - [2.2.2 Prop 类型](#222-prop-类型)
      - [2.2.3 传递静态或动态 Prop](#223-传递静态或动态-prop)
        - [2.2.3.1 传入一个数字](#2231-传入一个数字)
        - [2.2.3.2 传入一个布尔值](#2232-传入一个布尔值)
        - [2.2.3.3 传入一个数组](#2233-传入一个数组)
        - [2.2.3.4 传入一个对象](#2234-传入一个对象)
        - [2.2.3.5 传入一个对象的所有 property](#2235-传入一个对象的所有-property)
      - [2.2.4 单向数据流](#224-单向数据流)
      - [2.2.5 Prop 验证](#225-prop-验证)
        - [2.2.5.1 类型检查](#2251-类型检查)
      - [2.2.6 非 Prop 的 Attribute](#226-非-prop-的-attribute)
        - [2.2.6.1 替换/合并已有的 Attribute](#2261-替换合并已有的-attribute)
        - [2.2.6.2 禁用 Attribute 继承](#2262-禁用-attribute-继承)
    - [2.3 自定义事件](#23-自定义事件)
      - [2.3.1 事件名](#231-事件名)
      - [2.3.2 自定义组件的 `v-model`](#232-自定义组件的-v-model)
      - [2.3.3 将原生事件绑定到组件](#233-将原生事件绑定到组件)
      - [2.3.4 `.sync` 修饰符](#234-sync-修饰符)
    - [2.4 插槽](#24-插槽)
      - [2.4.1 插槽内容](#241-插槽内容)
      - [2.4.2 编译作用域](#242-编译作用域)
      - [2.4.3 后备(默认)内容](#243-后备默认内容)
      - [2.4.4 具名插槽](#244-具名插槽)
      - [2.4.5 作用域插槽](#245-作用域插槽)
        - [2.4.5.1 独占默认插槽的缩写语法](#2451-独占默认插槽的缩写语法)
        - [2.4.5.2 解构插槽 Prop](#2452-解构插槽-prop)
      - [2.4.6 动态插槽名](#246-动态插槽名)
      - [2.4.7 具名插槽的缩写](#247-具名插槽的缩写)
      - [2.4.8 其它示例](#248-其它示例)
    - [2.5 动态组件 & 异步组件](#25-动态组件-异步组件)
      - [2.5.1 在动态组件上使用 `keep-alive`](#251-在动态组件上使用-keep-alive)
      - [2.5.2 异步组件](#252-异步组件)
        - [2.5.2.1 处理加载状态](#2521-处理加载状态)
    - [2.6 处理边界情况](#26-处理边界情况)
  - [三. 过渡 & 动画](#三-过渡-动画)
    - [3.1 进入/离开 & 列表过渡](#31-进入离开-列表过渡)
      - [3.1.1 概述](#311-概述)
      - [3.1.2 单元素/组件的过渡](#312-单元素组件的过渡)
        - [3.1.2.1 过渡的类名](#3121-过渡的类名)
        - [3.1.2.2 CSS 过渡](#3122-css-过渡)
  - [四. 可复用性 & 组合](#四-可复用性-组合)
  - [五. 工具](#五-工具)
  - [六. 规模化](#六-规模化)
    - [6.1 路由](#61-路由)
      - [6.1.1 官方路由](#611-官方路由)
      - [6.1.2 从零开始简单的路由](#612-从零开始简单的路由)
    - [6.2 状态管理](#62-状态管理)
  - [七. 内在](#七-内在)
  - [八.Cookbook](#八cookbook)
    - [8.1 在 VS Code 中调试](#81-在-vs-code-中调试)
      - [8.1.1 替代方案](#811-替代方案)
        - [8.1.1.1 Vue Devtools](#8111-vue-devtools)
        - [8.1.1.2 简单的 debugger 语句](#8112-简单的-debugger-语句)
  - [九. 杂项](#九-杂项)
    - [9.1 template 和 JSX 的对比以及它们的本质](#91-template-和-jsx-的对比以及它们的本质)

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
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
```

看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被建立了关联，所有东西都是响应式的。

> 注意: 现在不再和 HTML 直接交互了。一个 Vue 应用会将其挂载到一个 DOM 元素上 (对于这个例子是 #app) 然后对其进行完全控制。那个 HTML 是入口，但其余都会发生在新创建的 Vue 实例内部。

除了文本插值，还可以像这样来绑定元素 attribute：

```html
<div id="app-2">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>
```

```js
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
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
  el: '#app-3',
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
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个项目' }
    ]
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
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
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
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
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
Vue.component('todo-item', {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义 attribute。
  // 这个 prop 名为 todo。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
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
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  </ol>
</div>
```

```js
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
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
vm.b = 'hi';
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
  foo: 'bar'
};

Object.freeze(obj);

new Vue({
  el: '#app',
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
  el: '#example',
  data: data
});

vm.$data === data; // => true
vm.$el === document.getElementById('example'); // => true

// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
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
    console.log('a is: ' + this.a);
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
  if (ok) return message
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
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('');
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
vm.message = 'Goodbye';
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
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName;
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val;
    }
  }
});
```

上面代码是命令式且重复的。将它与计算属性的版本进行比较：

```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
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
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
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
Vue.component('my-component', {
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

Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。例如，允许用户在不同的登录方式之间切换：

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
  el: '#example-1',
  data: {
    items: [{ message: 'Foo' }, { message: 'Bar' }]
  }
});
```

在 `v-for` 块中，可以访问所有父作用域的 property。`v-for` 还支持一个可选的第二个参数，即当前项的**索引**。

```html
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```

```js
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [{ message: 'Foo' }, { message: 'Bar' }]
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
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
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
<div v-for="(value, name, index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>
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
<my-component
  v-for="(item, index) in items"
  v-bind:item="item"
  v-bind:index="index"
  v-bind:key="item.id"
></my-component>
```

不自动将 `item` 注入到组件里的原因是，这会使得组件与 `v-for` 的运作紧密耦合。明确组件数据的来源能够使组件在其他场合重复使用。

下面是一个简单的 todo 列表的完整例子：

```html
<div id="todo-list-example">
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input
      v-model="newTodoText"
      id="new-todo"
      placeholder="E.g. Feed the cat"
    />
    <button>Add</button>
  </form>
  <ul>
    <li
      is="todo-item"
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"
    ></li>
  </ul>
</div>
```

> 注意 : 这里的 `is="todo-item"` attribute。这种做法在使用 DOM 模板时是十分必要的，因为在 `<ul>` 元素内只有 `<li>` 元素会被看作有效内容。这样做实现的效果与 `<todo-item>` 相同，但是可以避开一些潜在的浏览器解析错误。

```js
Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
});

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes'
      },
      {
        id: 2,
        title: 'Take out the trash'
      },
      {
        id: 3,
        title: 'Mow the lawn'
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
      this.newTodoText = '';
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
  el: '#example-1',
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
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!');
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
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message);
    }
  }
});
```

有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 `$event` 把它传入方法：

```html
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
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
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
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
  el: '...',
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
  el: '#example-4',
  data: {
    picked: ''
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
});
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
  <br />
  <span>Selected: {{ selected }}</span>
</div>
```

```js
new Vue({
  el: '#example-6',
  data: {
    selected: []
  }
});
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
});
```

#### 1.10.2 值绑定

对于单选按钮，复选框及选择框的选项，`v-model` 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)：

```html
<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a" />

<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle" />

<!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

但是有时可能想把值绑定到 Vue 实例的一个动态 property 上，这时可以用 `v-bind` 实现，并且这个 property 的值可以不是字符串。

##### 1.10.2.1 复选框

```html
<input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
```

```js
// 当选中时
vm.toggle === 'yes';
// 当没有选中时
vm.toggle === 'no';
```

这里的 `true-value` 和 `false-value` attribute 并不会影响输入控件的 value attribute，因为浏览器在提交表单时并不会包含未被选中的复选框。如果要确保表单中这两个值中的一个能够被提交，(即“yes”或“no”)，换用单选按钮。

##### 1.10.2.2 单选按钮

```html
<input type="radio" v-model="pick" v-bind:value="a" />
```

```js
// 当选中时
vm.pick === vm.a;
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
typeof vm.selected; // => 'object'
vm.selected.number; // => 123
```

#### 1.10.3 修饰符

**`.lazy`**

在默认情况下，`v-model` 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。可以添加 `lazy` 修饰符，从而转为在 `change` 事件之后进行同步：

```html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" />
```

**`.number`**

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符：

```html
<input v-model.number="age" type="number" />
```

这通常很有用，因为即使在 `type="number"` 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 `parseFloat()` 解析，则会返回原始的值。

**`.trim`**

如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符：

```html
<input v-model.trim="msg" />
```

### 1.11 组件基础

#### 1.11.1 基本示例

```js
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});
```

组件是可复用的 Vue 实例，且带有一个名字：在这个例子中是 `<button-counter>`。可以在一个通过 new Vue 创建的 Vue 根实例中，把这个组件作为自定义元素来使用：

```html
<div id="components-demo">
  <button-counter></button-counter>
</div>
```

```js
new Vue({ el: '#components-demo' });
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

##### 1.11.2.1 `data` 必须是一个函数

当定义这个 `<button-counter>` 组件时，会发现它的 `data` 并不是像这样直接提供一个对象：

```js
data: {
  count: 0;
}
```

取而代之的是，**一个组件的 `data` 选项必须是一个函数**，因此每个实例可以维护一份被返回对象的独立的拷贝：

```js
data: function () {
  return {
    count: 0
  }
}
```

如果 Vue 没有这条规则，点击一个按钮就可能会影响到其它所有实例。

#### 1.11.3 组件的组织

通常一个应用会以一棵嵌套的组件树的形式来组织：

![组件基础-组件的组织](./image/组件基础-组件的组织.png)

例如，可能会有页头、侧边栏、内容区等组件，每个组件又包含了其它的像导航链接、博文之类的组件。

为了能在模板中使用，这些组件必须先注册以便 Vue 能够识别。这里有两种组件的注册类型：**全局注册**和**局部注册**。至此，组件都只是通过 `Vue.component` 全局注册的：

```js
Vue.component('my-component-name', {
  // ... options ...
});
```

全局注册的组件可以用在其被注册之后的任何 (通过 `new Vue`) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。

#### 1.11.4 通过 Prop 向子组件传递数据

Prop 是在组件上注册的一些自定义 attribute。当一个值传递给一个 prop attribute 的时候，它就变成了那个组件实例的一个 property。为了给博文组件传递一个标题，可以用一个 `props` 选项将其包含在该组件可接受的 prop 列表中：

```js
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
});
```

一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。在上述模板中，会发现能够在组件实例中访问这个值，就像访问 data 中的值一样。

一个 prop 被注册之后，就可以像这样把数据作为一个自定义 attribute 传递进来：

```js
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
```

然而在一个典型的应用中，可能在 `data` 里有一个博文的数组：

```js
new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
});
```

并想要为每篇博文渲染一个组件：

```html
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
></blog-post>
```

如上所示，可以使用 `v-bind` 来动态传递 prop。这在一开始不清楚要渲染的具体内容，比如从一个 API 获取博文列表的时候，是非常有用的。

#### 1.11.5 单个根元素

当构建一个 `<blog-post>` 组件时，模板最终会包含的东西远不止一个标题：

```html
<h3>{{ title }}</h3>
```

最起码，会包含这篇博文的正文：

```html
<h3>{{ title }}</h3>
<div v-html="content"></div>
```

然而如果在模板中这样写，Vue 会显示一个错误，并解释道 **every component must have a single root element (每个组件必须只有一个根元素)**。可以将模板的内容包裹在一个父元素内，来修复这个问题，例如：

```html
<div class="blog-post">
  <h3>{{ title }}</h3>
  <div v-html="content"></div>
</div>
```

看起来当组件变得越来越复杂的时候，博文不只需要标题和内容，还需要发布日期、评论等等。为每个相关的信息定义一个 prop 会变得很麻烦：

```html
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
  v-bind:content="post.content"
  v-bind:publishedAt="post.publishedAt"
  v-bind:comments="post.comments"
></blog-post>
```

所以是时候重构一下这个 `<blog-post>` 组件了，让它变成接受一个单独的 `post` prop：

```html
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:post="post"
></blog-post>
```

```js
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
});
```

> 上述的这个和一些接下来的示例使用了 JavaScript 的**模板字符串**来让多行的模板更易读。它们在 IE 下并没有被支持，所以如果需要在不 (经过 Babel 或 TypeScript 之类的工具) 编译的情况下支持 IE，请使用**折行转义字符**取而代之。

现在，不论何时为 `post` 对象添加一个新的 property，它都会自动地在 `<blog-post>` 内可用。

#### 1.11.6 监听子组件事件

在开发 `<blog-post>` 组件时，它的一些功能可能要求子组件和父级组件进行沟通。例如可能会引入一个辅助功能来放大博文的字号，同时让页面的其它部分保持默认的字号。

在其父组件中，可以通过添加一个 `postFontSize` 数据 property 来支持这个功能：

```js
new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
      /* ... */
    ],
    postFontSize: 1
  }
});
```

它可以在模板中用来控制所有博文的字号：

```html
<div id="blog-posts-events-demo">
  <div :style="{ fontSize: postFontSize + 'em' }">
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
    ></blog-post>
  </div>
</div>
```

现在在每篇博文正文之前添加一个按钮来放大字号：

```js
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button>
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
});
```

当点击这个按钮时，需要告诉父级组件放大所有博文的文本。Vue 实例提供了一个自定义事件的系统来解决这个问题。父级组件可以像处理 native DOM 事件一样通过 `v-on` 监听子组件实例的任意事件：

```html
<blog-post ... v-on:enlarge-text="postFontSize += 0.1"></blog-post>
```

同时子组件可以通过调用内建的 `$emit` 方法并传入事件名称来触发一个事件：

```html
<button v-on:click="$emit('enlarge-text')">Enlarge text</button>
```

有了这个 `v-on:enlarge-text="postFontSize += 0.1"` 监听器，父级组件就会接收该事件并更新 `postFontSize` 的值。

##### 1.11.6.1 使用事件抛出一个值

有的时候用一个事件来抛出一个特定的值是非常有用的。例如可能想让 `<blog-post>` 组件决定它的文本要放大多少。这时可以使用 `$emit` 的第二个参数来提供这个值：

```html
<button v-on:click="$emit('enlarge-text', 0.1)">Enlarge text</button>
```

然后当在父级组件监听这个事件的时候，可以通过 `$event` 访问到被抛出的这个值：

```html
<blog-post ... v-on:enlarge-text="postFontSize += $event"></blog-post>
```

或者，如果这个事件处理函数是一个方法：

```html
<blog-post ... v-on:enlarge-text="onEnlargeText"></blog-post>
```

那么这个值将会作为第一个参数传入这个方法：

```js
methods: {
  onEnlargeText: function (enlargeAmount) {
    this.postFontSize += enlargeAmount
  }
}
```

##### 1.11.6.2 在组件上使用 v-model

自定义事件也可以用于创建支持 `v-model` 的自定义输入组件。记住：

```html
<input v-model="searchText" />
```

等价于：

```html
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
/>
```

当用在组件上时，`v-model` 则会这样：

```html
<custom-input
  v-bind:value="searchText"
  v-on:input="searchText = $event"
></custom-input>
```

为了让它正常工作，这个组件内的 `<input>` 必须：

将其 `value` attribute 绑定到一个名叫 `value` 的 prop 上
在其 `input` 事件被触发时，将新的值通过自定义的 `input` 事件抛出
写成代码之后是这样的：

```js
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
});
```

现在 `v-model` 就应该可以在这个组件上完美地工作起来了：

```html
<custom-input v-model="searchText"></custom-input>
```

#### 1.11.7 通过插槽分发内容

和 HTML 元素一样，经常需要向一个组件传递内容，可以使用 Vue 自定义的 `<slot>` 元素:

```html
<alert-box> Something bad happened. </alert-box>
```

```js
Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
});
```

只要在需要的地方加入插槽就行了。

#### 1.11.8 动态组件

有的时候，在不同组件之间进行动态切换是非常有用的，比如在一个多标签的界面里。可以通过 Vue 的 `<component>` 元素加一个特殊的 `is` attribute 来实现：

```html
<div id="dynamic-component-demo" class="demo">
  <button
    v-for="tab in tabs"
    v-bind:key="tab"
    v-bind:class="['tab-button', { active: currentTab === tab }]"
    v-on:click="currentTab = tab"
  >
    {{ tab }}
  </button>

  <component v-bind:is="currentTabComponent" class="tab"></component>
</div>
```

```js
Vue.component('tab-home', {
  template: '<div>Home component</div>'
});
Vue.component('tab-posts', {
  template: '<div>Posts component</div>'
});
Vue.component('tab-archive', {
  template: '<div>Archive component</div>'
});

new Vue({
  el: '#dynamic-component-demo',
  data: {
    currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Archive']
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase();
    }
  }
});
```

```html
<div id="dynamic-component-demo" class="demo">
  <button
    v-for="tab in tabs"
    v-bind:key="tab.name"
    v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"
    v-on:click="currentTab = tab"
  >
    {{ tab.name }}
  </button>

  <component v-bind:is="currentTab.component" class="tab"></component>
</div>
```

```js
var tabs = [
  {
    name: 'Home',
    component: {
      template: '<div>Home component</div>'
    }
  },
  {
    name: 'Posts',
    component: {
      template: '<div>Posts component</div>'
    }
  },
  {
    name: 'Archive',
    component: {
      template: '<div>Archive component</div>'
    }
  }
];

new Vue({
  el: '#dynamic-component-demo',
  data: {
    tabs: tabs,
    currentTab: tabs[0]
  }
});
```

在上述示例中，`v-bind:is` 对应的值可以是：

- 已注册组件的名字
- 一个组件的选项对象

> 注意 : 这个 `is` attribute 可以用于常规 HTML 元素，但这些元素将被视为组件，这意味着所有的 attribute **都会作为 DOM attribute 被绑定**。对于像 `value` 这样的 property，若想让其如预期般工作，需要使用 `.prop` 修饰器。

#### 1.11.9 解析 DOM 模板时的注意事项

有些 HTML 元素，诸如 `<ul>`、`<ol>`、`<table>` 和 `<select>`，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 `<li>`、`<tr>` 和 `<option>`，只能出现在其它某些特定的元素内部。

这会导致使用这些有约束条件的元素时遇到一些问题。例如：

```html
<table>
  <blog-post-row></blog-post-row>
</table>
```

这个自定义组件 `<blog-post-row>` 会被作为无效的内容提升到外部，并导致最终渲染结果出错。幸好这个特殊的 `is` attribute 给了一个变通的办法：

```html
<table>
  <tr is="blog-post-row"></tr>
</table>
```

注意，**如果从以下来源使用模板的话，这条限制是不存在的**：

- 字符串 (例如：template: '...')
- 单文件组件 (.vue)
- `<script type="text/x-template">`

## 二. 深入了解组件

### 2.1 组件注册

#### 2.1.1 组件名

在注册一个组件的时候，始终需要给它一个名字。比如在全局注册的时候：

```js
Vue.component('my-component-name', {
  /* ... */
});
```

该组件名就是 `Vue.component` 的第一个参数。

> 当直接在 DOM 中使用一个组件 (而不是在字符串模板或单文件组件) 的时候，强烈推荐遵循 W3C 规范中的自定义组件名 (字母全小写且必须包含一个连字符)。这会帮助避免和当前以及未来的 HTML 元素相冲突。

**组件名大小写**
定义组件名的方式有两种：

使用 kebab-case

```js
Vue.component('my-component-name', {
  /* ... */
});
```

当使用 kebab-case (短横线分隔命名) 定义一个组件时，也必须在引用这个自定义元素时使用 kebab-case，例如 `<my-component-name>`。

使用 PascalCase

```js
Vue.component('MyComponentName', {
  /* ... */
});
```

当使用 PascalCase (首字母大写命名) 定义一个组件时，在引用这个自定义元素时两种命名法都可以使用。也就是说 `<my-component-name>` 和 `<MyComponentName>` 都是可接受的。注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。

#### 2.1.2 全局注册

使用 `Vue.component` 来创建组件：

```js
Vue.component('my-component-name', {
  // ... 选项 ...
});
```

这些组件是**全局注册**的。也就是说它们在注册之后可以用在任何新创建的 Vue 根实例 (`new Vue`) 的模板中。比如：

```js
Vue.component('component-a', {
  /* ... */
});
Vue.component('component-b', {
  /* ... */
});
Vue.component('component-c', {
  /* ... */
});

new Vue({ el: '#app' });
```

```html
<div id="app">
  <component-a></component-a>
  <component-b></component-b>
  <component-c></component-c>
</div>
```

在所有子组件中也是如此，也就是说这三个组件在各自内部也都可以相互使用。

#### 2.1.3 局部注册

全局注册往往是不够理想的。比如，如果使用一个像 webpack 这样的构建系统，全局注册所有的组件意味着即便已经不再使用一个组件了，它仍然会被包含在最终的构建结果中。这造成了用户下载的 JavaScript 的无谓的增加。

在这些情况下，可以通过一个普通的 JavaScript 对象来定义组件：

```js
var ComponentA = {
  /* ... */
};
var ComponentB = {
  /* ... */
};
var ComponentC = {
  /* ... */
};
```

然后在 `components` 选项中定义想要使用的组件：

```html
new Vue({ el: '#app', components: { 'component-a': ComponentA, 'component-b':
ComponentB } })
```

对于 `components` 对象中的每个 property 来说，其 property 名就是自定义元素的名字，其 property 值就是这个组件的选项对象。

> 注意 : **局部注册的组件在其子组件中不可用**。例如，如果希望 `ComponentA` 在 `ComponentB` 中可用，则需要这样写：

```js
var ComponentA = {
  /* ... */
};

var ComponentB = {
  components: {
    'component-a': ComponentA
  }
  // ...
};
```

或者如果通过 Babel 和 webpack 使用 ES2015 模块，那么代码看起来更像：

```js
import ComponentA from './ComponentA.vue';

export default {
  components: {
    ComponentA
  }
  // ...
};
```

> 注意 : 在 ES2015+ 中，在对象中放一个类似 `ComponentA` 的变量名其实是 `ComponentA: ComponentA` 的缩写，即这个变量名同时是：
>
> - 用在模板中的自定义元素的名称
> - 包含了这个组件选项的变量名

#### 2.1.4 模块系统

使用 `import/require` 使用一个模块系统的一些特殊的使用说明和注意事项。

##### 2.1.4.1 在模块系统中局部注册

使用了诸如 Babel 和 webpack 的模块系统。在这些情况下，推荐创建一个 components 目录，并将每个组件放置在其各自的文件中。

然后需要在局部注册之前导入每个想使用的组件。例如，在一个假设的 `ComponentB.js` 或 `ComponentB.vue` 文件中：

```js
import ComponentA from './ComponentA';
import ComponentC from './ComponentC';

export default {
  components: {
    ComponentA,
    ComponentC
  }
  // ...
};
```

现在 `ComponentA` 和 `ComponentC` 都可以在 `ComponentB` 的模板中使用了。

##### 2.1.4.2 基础组件的自动化全局注册

可能许多组件只是包裹了一个输入框或按钮之类的元素，是相对通用的。有时候会把它们称为**基础组件**，它们会在各个组件中被频繁的用到。

所以会导致很多组件里都会有一个包含基础组件的长列表，而只是用于模板中的一小部分。

如果使用了 webpack (或在内部使用了 webpack 的 Vue CLI 3+)，那么就可以使用 `require.context` 只全局注册这些非常通用的基础组件。这里有一份可以在应用入口文件 (比如 src/main.js) 中全局导入基础组件的示例代码：

```js
import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  );
});
```

记住**全局注册的行为必须在根 Vue 实例 (通过 `new Vue`) 创建之前发生**。

### 2.2 Prop

#### 2.2.1 Prop 的大小写 (camelCase vs kebab-case)

HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名：

```js
Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
});
```

```html
<!-- 在 HTML 中是 kebab-case 的 -->
<blog-post post-title="hello!"></blog-post>
```

> 如果使用字符串模板，那么这个限制就不存在了。

#### 2.2.2 Prop 类型

到这里，只看到了以字符串数组形式列出的 prop：

```js
props: ['title', 'likes', 'isPublished', 'commentIds', 'author'];
```

但是，通常会希望每个 prop 都有指定的值类型。这时，可以以对象形式列出 prop，这些 property 的名称和值分别是 prop 各自的名称和类型：

```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
```

这不仅为组件提供了文档，还会在它们遇到错误的类型时从浏览器的 JavaScript 控制台提示用户。

#### 2.2.3 传递静态或动态 Prop

像这样可以给 prop 传入一个静态的值：

```html
<blog-post title="My journey with Vue"></blog-post>
```

prop 可以通过 `v-bind` 动态赋值，例如：

```html
<!-- 动态赋予一个变量的值 -->
<blog-post v-bind:title="post.title"></blog-post>

<!-- 动态赋予一个复杂表达式的值 -->
<blog-post v-bind:title="post.title + ' by ' + post.author.name"></blog-post>
```

任何类型的值都可以传给一个 prop。

##### 2.2.3.1 传入一个数字

```html
<!-- 即便 `42` 是静态的，仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:likes="42"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:likes="post.likes"></blog-post>
```

##### 2.2.3.2 传入一个布尔值

```html
<!-- 包含该 prop 没有值的情况在内，都意味着 `true`。-->
<blog-post is-published></blog-post>

<!-- 即便 `false` 是静态的，仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:is-published="false"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:is-published="post.isPublished"></blog-post>
```

##### 2.2.3.3 传入一个数组

```html
<!-- 即便数组是静态的，仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:comment-ids="post.commentIds"></blog-post>
```

##### 2.2.3.4 传入一个对象

```html
<!-- 即便对象是静态的，仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post
  v-bind:author="{
    name: 'Veronica',
    company: 'Veridian Dynamics'
  }"
></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:author="post.author"></blog-post>
```

##### 2.2.3.5 传入一个对象的所有 property

如果想要将一个对象的所有 property 都作为 prop 传入，可以使用不带参数的 `v-bind` (取代 `v-bind:prop-name`)。例如，对于一个给定的对象 `post`：

```js
post: {
  id: 1,
  title: 'My Journey with Vue'
}
```

下面的模板:

```html
<blog-post v-bind="post"></blog-post>
```

等价于:

```html
<blog-post v-bind:id="post.id" v-bind:title="post.title"></blog-post>
```

#### 2.2.4 单向数据流

所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致应用的数据流向难以理解。

额外的，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着不应该在一个子组件内部改变 prop。如果这样做了，Vue 会在浏览器的控制台中发出警告。

这里有两种常见的试图变更一个 prop 的情形：

1. **这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用**。在这种情况下，最好定义一个本地的 data property 并将这个 prop 用作其初始值：

   ```js
   props: ['initialCounter'],
   data: function () {
     return {
       counter: this.initialCounter
     }
   }
   ```

2. **这个 prop 以一种原始的值传入且需要进行转换**。在这种情况下，最好使用这个 prop 的值来定义一个计算属性：

   ```js
   props: ['size'],
   computed: {
   normalizedSize: function () {
    return this.size.trim().toLowerCase()
     }
   }
   ```

> 注意 : 在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变变更这个对象或数组本身**将会影响到父组件的状态**。

#### 2.2.5 Prop 验证

可以为组件的 prop 指定验证要求，例如知道的这些类型。如果有一个需求没有被满足，则 Vue 会在浏览器控制台中警告你。这在开发一个会被别人用到的组件时尤其有帮助。

为了定制 prop 的验证方式，可以为 `props` 中的值提供一个带有验证需求的对象，而不是一个字符串数组。例如：

```js
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' };
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1;
      }
    }
  }
});
```

当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。

> 注意 : 那些 prop 会在一个组件实例创建之前进行验证，所以实例的 property (如 `data`、`computed` 等) 在 `default` 或 `validator` 函数中是不可用的。

##### 2.2.5.1 类型检查

`type` 可以是下列原生构造函数中的一个：

- `String`
- `Number`
- `Boolean`
- `Array`
- `Object`
- `Date`
- `Function`
- `Symbol`

额外的 `type` 还可以是一个自定义的构造函数，并且通过 `instanceof` 来进行检查确认。例如，给定下列现成的构造函数：

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
```

可以使用：

```js
Vue.component('blog-post', {
  props: {
    author: Person
  }
});
```

来验证 `author` prop 的值是否是通过 `new Person` 创建的。

#### 2.2.6 非 Prop 的 Attribute

一个非 prop 的 attribute 是指传向一个组件，但是该组件并没有相应 prop 定义的 attribute。

因为显式定义的 prop 适用于向一个子组件传入信息，然而组件库的作者并不总能预见组件会被用于怎样的场景。这也是为什么组件可以接受任意的 attribute，而这些 attribute 会被添加到这个组件的根元素上。

例如，通过一个 Bootstrap 插件使用了一个第三方的 `<bootstrap-date-input>` 组件，这个插件需要在其 `<input>` 上用到一个 `data-date-picker` attribute。可以将这个 attribute 添加到组件实例上：

```js
<bootstrap-date-input data-date-picker="activated"></bootstrap-date-input>
```

然后这个 data-date-picker="activated" attribute 就会自动添加到 `<bootstrap-date-input>` 的根元素上。

##### 2.2.6.1 替换/合并已有的 Attribute

如果 `<bootstrap-date-input>` 的模板是这样的：

```html
<input type="date" class="form-control" />
```

为了给日期选择器插件定制一个主题，可能需要像这样添加一个特别的类名：

```html
<bootstrap-date-input
  data-date-picker="activated"
  class="date-picker-theme-dark"
></bootstrap-date-input>
```

在这种情况下，定义了两个不同的 `class` 的值：

- `form-control`，这是在组件的模板内设置好的
- `date-picker-theme-dark`，这是从组件的父级传入的

对于绝大多数 attribute 来说，从外部提供给组件的值会替换掉组件内部设置好的值。所以如果传入 `type="text"` 就会替换掉 `type="date"` 并把它破坏！而 class 和 style attribute 会稍微智能一些，即两边的值会被合并起来，从而得到最终的值：`form-control date-picker-theme-dark`。

##### 2.2.6.2 禁用 Attribute 继承

如果不希望组件的根元素继承 attribute，可以在组件的选项中设置 `inheritAttrs: false`。例如：

```js
Vue.component('my-component', {
  inheritAttrs: false
  // ...
});
```

这尤其适合配合实例的 `$attrs` property 使用，该 property 包含了传递给一个组件的 attribute 名和 attribute 值，例如：

```js
{
  required: true,
  placeholder: 'Enter your username'
}
```

有了 `inheritAttrs: false` 和 `$attrs`，就可以手动决定这些 attribute 会被赋予哪个元素。在撰写基础组件的时候是常会用到的：

```js
Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `
});
```

> 注意 : `inheritAttrs: false` 选项不会影响 `style` 和 `class` 的绑定。

这个模式允许在使用基础组件的时候更像是使用原始的 HTML 元素，而不会担心哪个元素是真正的根元素：

```html
<base-input
  v-model="username"
  required
  placeholder="Enter your username"
></base-input>
```

### 2.3 自定义事件

#### 2.3.1 事件名

不同于组件和 prop，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。举个例子，如果触发一个 camelCase 名字的事件：

```js
this.$emit('myEvent');
```

则监听这个名字的 kebab-case 版本是不会有任何效果的：

```html
<!-- 没有效果 -->
<my-component v-on:my-event="doSomething"></my-component>
```

不同于组件和 prop，事件名不会被用作一个 JavaScript 变量名或 property 名，所以就没有理由使用 camelCase 或 PascalCase 了。并且 `v-on` 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以 `v-on:myEvent` 将会变成 `v-on:myevent` ——导致 `myEvent` 不可能被监听到。

因此，**推荐始终使用 kebab-case 的事件名**。

#### 2.3.2 自定义组件的 `v-model`

一个组件上的 `v-model` 默认会利用名为 `value` 的 prop 和名为 `input` 的事件，但是像单选框、复选框等类型的输入控件可能会将 value attribute 用于不同的目的。`model` 选项可以用来避免这样的冲突：

```js
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
});
```

现在在这个组件上使用 `v-model` 的时候：

```html
<base-checkbox v-model="lovingVue"></base-checkbox>
```

这里的 `lovingVue` 的值将会传入这个名为 `checked` 的 prop。同时当 `<base-checkbox>` 触发一个 change 事件并附带一个新的值的时候，这个 `lovingVue` 的 property 将会被更新。

> 注意 : 仍然需要在组件的 `props` 选项里声明 `checked` 这个 prop。

#### 2.3.3 将原生事件绑定到组件

可能想要在一个组件的根元素上直接监听一个原生事件。这时，可以使用 `v-on` 的 `.native` 修饰符：

```html
<base-input v-on:focus.native="onFocus"></base-input>
```

在有的时候这是很有用的，不过在尝试监听一个类似 `<input>` 的非常特定的元素时，这并不是个好主意。比如上述 `<base-input>` 组件可能做了如下重构，所以根元素实际上是一个 `<label>` 元素：

```html
<label>
  {{ label }}
  <input
    v-bind="$attrs"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  />
</label>
```

这时，父级的 `.native` 监听器将静默失败。它不会产生任何报错，但是 `onFocus` 处理函数不会如预期地被调用。

为了解决这个问题，Vue 提供了一个 `$listeners` property，它是一个对象，里面包含了作用在这个组件上的所有监听器。例如：

```js
{
  focus: function (event) { /* ... */ }
  input: function (value) { /* ... */ },
}
```

有了这个 `$listeners` property，就可以配合 `v-on="$listeners"` 将所有的事件监听器指向这个组件的某个特定的子元素。对于类似 `<input>` 的希望它也可以配合 `v-model` 工作的组件来说，为这些监听器创建一个类似下述 `inputListeners` 的计算属性通常是非常有用的：

```js
Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners: function () {
      var vm = this;
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 从父级添加所有的监听器
        this.$listeners,
        // 然后添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit('input', event.target.value);
          }
        }
      );
    }
  },
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
  `
});
```

现在 `<base-input>` 组件是一个完全透明的包裹器了，也就是说它可以完全像一个普通的 `<input>` 元素一样使用了：所有跟它相同的 attribute 和监听器都可以工作，不必再使用 `.native` 监听器。

#### 2.3.4 `.sync` 修饰符

在有些情况下，可能需要对一个 prop 进行“双向绑定”。不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以变更父组件，且在父组件和子组件都没有明显的变更来源。

这也是为什么推荐以 `update:myPropName` 的模式触发事件取而代之。举个例子，在一个包含 `title` prop 的假设的组件中，可以用以下方法表达对其赋新值的意图：

```js
this.$emit('update:title', newTitle);
```

然后父组件可以监听那个事件并根据需要更新一个本地的数据 property。例如：

```html
<text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
></text-document>
```

为了方便起见，为这种模式提供一个缩写，即 `.sync` 修饰符：

```html
<text-document v-bind:title.sync="doc.title"></text-document>
```

> 注意 : 带有 `.sync` 修饰符的 `v-bind` 不能和表达式一起使用 (例如 `v-bind:title.sync=”doc.title + ‘!’”` 是无效的)。取而代之的是，只能提供想要绑定的 property 名，类似 `v-model`。

当用一个对象同时设置多个 prop 的时候，也可以将这个 `.sync` 修饰符和 `v-bind` 配合使用：

```html
<text-document v-bind.sync="doc"></text-document>
```

这样会把 `doc` 对象中的每一个 property (如 `title`) 都作为一个独立的 prop 传进去，然后各自添加用于更新的 `v-on` 监听器。

> 将 `v-bind.sync` 用在一个字面量的对象上，例如 `v-bind.sync=”{ title: doc.title }”`，是无法正常工作的，因为在解析一个像这样的复杂表达式的时候，有很多边缘情况需要考虑。

### 2.4 插槽

> 在 2.6.0 中，为具名插槽和作用域插槽引入了一个新的统一的语法 (即 `v-slot` 指令)。它取代了 `slot` 和 `slot-scope` 这两个目前已被废弃但未被移除且仍在文档中的 attribute。新语法的由来可查阅这份 ![RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md)。

#### 2.4.1 插槽内容

Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 Web Components 规范草案，将 `<slot>` 元素作为承载分发内容的出口。

它允许像这样合成组件：

```html
<navigation-link url="/profile"> Your Profile </navigation-link>
```

然后在 `<navigation-link>` 的模板中可能会写为：

```html
<a v-bind:href="url" class="nav-link">
  <slot></slot>
</a>
```

当组件渲染的时候，`<slot></slot>` 将会被替换为“Your Profile”。插槽内可以包含任何模板代码，包括 HTML：

```html
<navigation-link url="/profile">
  <!-- 添加一个 Font Awesome 图标 -->
  <span class="fa fa-user"></span>
  Your Profile
</navigation-link>
```

甚至其它的组件：

```html
<navigation-link url="/profile">
  <!-- 添加一个图标的组件 -->
  <font-awesome-icon name="user"></font-awesome-icon>
  Your Profile
</navigation-link>
```

如果 `<navigation-link>` 的 `template` 中**没有包含**一个 `<slot>` 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。

#### 2.4.2 编译作用域

当想在一个插槽中使用数据时，例如：

```html
<navigation-link url="/profile"> Logged in as {{ user.name }} </navigation-link>
```

该插槽跟模板的其它地方一样可以访问相同的实例 property (也就是相同的“作用域”)，而不能访问 `<navigation-link>` 的作用域。例如 `url` 是访问不到的：

```html
<navigation-link url="/profile">
  Clicking here will send you to: {{ url }}
  <!--
  这里的 `url` 会是 undefined，因为其 (指该插槽的) 内容是
  _传递给_ <navigation-link> 的而不是
  在 <navigation-link> 组件*内部*定义的。
  -->
</navigation-link>
```

> 作为一条规则，请记住：**父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的**。

#### 2.4.3 后备(默认)内容

有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染。例如在一个 `<submit-button>` 组件中：

```html
<button type="submit">
  <slot></slot>
</button>
```

可能希望这个 `<button>` 内绝大多数情况下都渲染文本“Submit”。为了将“Submit”作为后备内容，可以将它放在 `<slot>` 标签内：

```html
<button type="submit">
  <slot>Submit</slot>
</button>
```

现在当在一个父级组件中使用 `<submit-button>` 并且不提供任何插槽内容时：

```html
<submit-button></submit-button>
```

后备内容“Submit”将会被渲染：

```html
<button type="submit">Submit</button>
```

但是提供内容：

```html
<submit-button> Save </submit-button>
```

则这个提供的内容将会被渲染从而取代后备内容：

```html
<button type="submit">Save</button>
```

#### 2.4.4 具名插槽

有时需要多个插槽。例如对于一个带有如下模板的 `<base-layout>` 组件：

```html
<div class="container">
  <header>
    <!-- 希望把页头放这里 -->
  </header>
  <main>
    <!-- 希望把主要内容放这里 -->
  </main>
  <footer>
    <!-- 希望把页脚放这里 -->
  </footer>
</div>
```

对于这样的情况，`<slot>` 元素有一个特殊的 attribute：`name`。这个 attribute 可以用来定义额外的插槽：

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

一个不带 `name` 的 `<slot>` 出口会带有隐含的名字“default”。

在向具名插槽提供内容的时候，可以在一个 `<template>` 元素上使用 `v-slot` 指令，并以 `v-slot` 的参数的形式提供其名称：

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

现在 `<template>` 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 `v-slot` 的 `<template>` 中的内容都会被视为默认插槽的内容。

然而，如果希望更明确一些，仍然可以在一个 `<template>` 中包裹默认插槽的内容：

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

任何一种写法都会渲染出：

```html
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>
```

> 注意 : `v-slot` 只能添加在 `<template>` 上 (只有一种[例外情况](#246-独占默认插槽的缩写语法))，这一点和已经废弃的 `slot` attribute 不同。

#### 2.4.5 作用域插槽

有时让插槽内容能够访问子组件中才有的数据是很有用的。例如，设想一个带有如下模板的 `<current-user>` 组件：

```html
<span>
  <slot>{{ user.lastName }}</slot>
</span>
```

可能想换掉备用内容，用名而非姓来显示。如下：

```html
<current-user> {{ user.firstName }} </current-user>
```

然而上述代码不会正常工作，因为只有 `<current-user>` 组件可以访问到 `user` 而插槽内容是在父级渲染的。

为了让 `user` 在父级的插槽内容中可用，可以将 `user` 作为 `<slot>` 元素的一个 attribute 绑定上去：

```html
<span>
  <slot v-bind:user="user"> {{ user.lastName }} </slot>
</span>
```

绑定在 `<slot>` 元素上的 attribute 被称为**插槽 prop**。现在在父级作用域中，可以使用带值的 `v-slot` 来定义提供的插槽 prop 的名字：

```html
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```

在这个例子中，选择将包含所有插槽 prop 的对象命名为 slotProps，也可以使用任意名字。

##### 2.4.5.1 独占默认插槽的缩写语法

在上述情况下，当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样就可以把 `v-slot` 直接用在组件上：

```html
<current-user v-slot:default="slotProps">
  {{ slotProps.user.firstName }}
</current-user>
```

这种写法还可以更简单。就像假定未指明的内容对应默认插槽一样，不带参数的 `v-slot` 被假定对应默认插槽：

```html
<current-user v-slot="slotProps"> {{ slotProps.user.firstName }} </current-user>
```

注意默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确：

```html
<!-- 无效，会导致警告 -->
<current-user v-slot="slotProps">
  {{ slotProps.user.firstName }}
  <template v-slot:other="otherSlotProps">
    slotProps is NOT available here
  </template>
</current-user>
```

只要出现多个插槽，请始终为所有的插槽使用完整的基于 `<template>` 的语法：

```html
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>

  <template v-slot:other="otherSlotProps"> ... </template>
</current-user>
```

##### 2.4.5.2 解构插槽 Prop

作用域插槽的内部工作原理是将插槽内容包裹在一个拥有单个参数的函数里：

```js
function (slotProps) {
  // 插槽内容
}
```

这意味着 `v-slot` 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。所以在支持的环境下 (单文件组件或现代浏览器)，也可以使用 ES2015 解构来传入具体的插槽 prop，如下：

```html
<current-user v-slot="{ user }"> {{ user.firstName }} </current-user>
```

这样可以使模板更简洁，尤其是在该插槽提供了多个 prop 的时候。它同样开启了 prop 重命名等其它可能，例如将 `user` 重命名为 `person`：

```html
<current-user v-slot="{ user: person }"> {{ person.firstName }} </current-user>
```

甚至可以定义后备内容，用于插槽 prop 是 undefined 的情形：

```html
<current-user v-slot="{ user = { firstName: 'Guest' } }">
  {{ user.firstName }}
</current-user>
```

#### 2.4.6 动态插槽名

动态指令参数也可以用在 `v-slot` 上，来定义动态的插槽名：

```html
<base-layout>
  <template v-slot:[dynamicSlotName]> ... </template>
</base-layout>
```

#### 2.4.7 具名插槽的缩写

跟 `v-on` 和 `v-bind` 一样，`v-slot` 也有缩写，即把参数之前的所有内容 (`v-slot:`) 替换为字符 `#`。例如 `v-slot:header` 可以被重写为 `#header`：

```html
<base-layout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

然而，和其它指令一样，该缩写只在其有参数的时候才可用。这意味着以下语法是无效的：

```html
<!-- 这样会触发一个警告 -->
<current-user #="{ user }"> {{ user.firstName }} </current-user>
```

如果希望使用缩写的话，必须始终以明确插槽名取而代之：

```html
<current-user #default="{ user }"> {{ user.firstName }} </current-user>
```

#### 2.4.8 其它示例

**插槽 prop 允许将插槽转换为可复用的模板，这些模板可以基于输入的 prop 渲染出不同的内容**。这在设计封装数据逻辑同时允许父级组件自定义部分布局的可复用组件时是最有用的。

例如，要实现一个 `<todo-list>` 组件，它是一个列表且包含布局和过滤逻辑：

```html
<ul>
  <li v-for="todo in filteredTodos" v-bind:key="todo.id">{{ todo.text }}</li>
</ul>
```

可以将每个 todo 作为父级组件的插槽，以此通过父级组件对其进行控制，然后将 todo 作为一个插槽 prop 进行绑定：

```html
<ul>
  <li v-for="todo in filteredTodos" v-bind:key="todo.id">
    <!--
    为每个 todo 准备了一个插槽，
    将 `todo` 对象作为一个插槽的 prop 传入。
    -->
    <slot name="todo" v-bind:todo="todo">
      <!-- 后备内容 -->
      {{ todo.text }}
    </slot>
  </li>
</ul>
```

现在当使用 `<todo-list>` 组件的时候，可以选择为 todo 定义一个不一样的 `<template>` 作为替代方案，并且可以从子组件获取数据：

```html
<todo-list v-bind:todos="todos">
  <template v-slot:todo="{ todo }">
    <span v-if="todo.isComplete">✓</span>
    {{ todo.text }}
  </template>
</todo-list>
```

### 2.5 动态组件 & 异步组件

#### 2.5.1 在动态组件上使用 `keep-alive`

之前曾经在一个多标签的界面中使用 `is` attribute 来切换不同的组件：

```html
<component v-bind:is="currentTabComponent"></component>
```

当在这些组件之间切换的时候，有时会想保持这些组件的状态，以避免反复重渲染导致的性能问题。

重新创建动态组件的行为通常是非常有用的，但是，有时候更希望那些标签的组件实例能够被在它们第一次被创建的时候缓存下来。为了解决这个问题，可以用一个 `<keep-alive>` 元素将其动态组件包裹起来。

```html
<!-- 失活的组件将会被缓存！-->
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```

> 注意 : 这个 `<keep-alive>` 要求被切换到的组件都有自己的名字，不论是通过组件的 `name` 选项还是局部/全局注册。

#### 2.5.2 异步组件

在大型应用中，可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。为了简化，Vue 允许以一个工厂函数的方式定义组件，这个工厂函数会异步解析组件定义。Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。例如：

```js
Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // 向 `resolve` 回调传递组件定义
    resolve({
      template: '<div>I am async!</div>'
    });
  }, 1000);
});
```

这个工厂函数会收到一个 `resolve` 回调，这个回调函数会在从服务器得到组件定义的时候被调用。也可以调用 `reject(reason)` 来表示加载失败。这里的 setTimeout 是为了演示用的，如何获取组件取决于自己。一个推荐的做法是将异步组件和 [webpack 的 code-splitting](https://webpack.js.org/guides/code-splitting/) 功能一起配合使用：

```js
Vue.component('async-webpack-example', function (resolve) {
  // 这个特殊的 `require` 语法将会告诉 webpack
  // 自动将你的构建代码切割成多个包，这些包
  // 会通过 Ajax 请求加载
  require(['./my-async-component'], resolve);
});
```

也可以在工厂函数中返回一个 `Promise`，所以把 webpack 2 和 ES2015 语法加在一起，可以这样使用动态导入：

```js
Vue.component(
  'async-webpack-example',
  // 这个动态导入会返回一个 `Promise` 对象。
  () => import('./my-async-component')
);
```

当使用局部注册的时候，也可以直接提供一个返回 `Promise` 的函数：

```html
new Vue({ // ... components: { 'my-component': () =>
import('./my-async-component') } })
```

##### 2.5.2.1 处理加载状态

这里的异步组件工厂函数也可以返回一个如下格式的对象：

```js
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./MyComponent.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
});
```

> 注意 : 如果希望在 Vue Router 的路由组件中使用上述语法的话，必须使用 Vue Router 2.4.0+ 版本。

### 2.6 处理边界情况

<!-- TODO 待学习 -->

## 三. 过渡 & 动画

### 3.1 进入/离开 & 列表过渡

#### 3.1.1 概述

Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。包括以下工具：

- 在 CSS 过渡和动画中自动应用 class
- 可以配合使用第三方 CSS 动画库，如 Animate.css
- 在过渡钩子函数中使用 JavaScript 直接操作 DOM
- 可以配合使用第三方 JavaScript 动画库，如 Velocity.js

在这里，只会讲到进入、离开和列表的过渡，也可以看下一节的管理过渡状态。

#### 3.1.2 单元素/组件的过渡

Vue 提供了 `transition` 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡

- 条件渲染 (使用 `v-if`)
- 条件展示 (使用 `v-show`)
- 动态组件
- 组件根节点

这里是一个典型的例子：

```html
<div id="demo">
  <button v-on:click="show = !show">Toggle</button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
```

```js
new Vue({
  el: '#demo',
  data: {
    show: true
  }
});
```

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```

当插入或删除包含在 `transition` 组件中的元素时，Vue 将会做以下处理：

1. 自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。

2. 如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用。

3. 如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 Vue 的 `nextTick` 概念不同)

##### 3.1.2.1 过渡的类名

在进入/离开的过渡中，会有 6 个 class 切换。

1. `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

2. `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

3. v-enter-to：2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

4. v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

5. v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

6. v-leave-to：2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。

![单元素、组件的过渡-过渡的类名](./image/单元素、组件的过渡-过渡的类名.png)

对于这些在过渡中切换的类名来说，如果使用一个没有名字的 `<transition>`，则 `v-` 是这些类名的默认前缀。如果使用了 `<transition name="my-transition">`，那么 `v-enter` 会替换为 `my-transition-enter`。

`v-enter-active` 和 `v-leave-active` 可以控制进入/离开过渡的不同的缓和曲线，在下面章节会有个示例说明。

##### 3.1.2.2 CSS 过渡

## 四. 可复用性 & 组合

## 五. 工具

## 六. 规模化

### 6.1 路由

#### 6.1.1 官方路由

对于大多数单页面应用，都推荐使用官方支持的 [vue-router](./vue-router.md) 库。

#### 6.1.2 从零开始简单的路由

如果只需要非常简单的路由而不想引入一个功能完整的路由库，可以像这样动态渲染一个页面级的组件：

```JS
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

const routes = {
  '/': Home,
  '/about': About
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
```

### 6.2 状态管理

由于状态零散地分布在许多组件和组件之间的交互中，大型应用复杂度也经常逐渐增长。为了解决这个问题，Vue 提供 [vuex](./vuex.md)（有受到 Elm 启发的状态管理库）。vuex 甚至集成到 vue-devtools，无需配置即可进行时光旅行调试 (time travel debugging)。

## 七. 内在

## 八.Cookbook

### 8.1 在 VS Code 中调试

1. 先安装 VS Code 以及适合的浏览器，并且安装激活了最新版的相应的 Debugger 扩展：

   - Debugger for Chrome
   - Debugger for Firefox

   通过 Vue CLI 创建一个项目。然后进入这个新创建的应用的目录，打开 VS Code。

2. 在从 VS Code 调试 Vue 组件之前，需要更新 webpack 配置以构建 source map。做了这件事之后，调试器就有机会将一个被压缩的文件中的代码对应回其源文件相应的位置。这会确保可以在一个应用中调试，即便资源已经被 webpack 优化过了也没关系。

   如果使用的是 Vue CLI 3，设置并更新 `vue.config.js` 内的 `devtool` property：

   ```js
   module.exports = {
     configureWebpack: {
       devtool: 'source-map'
     }
   };
   ```

3. 从 VS Code 启动应用

   在 Debug 视图中点击齿轮图标来配置一个 `launch.json` 的文件，选择 **Chrome/Firefox：Launch** 环境。然后将生成的 `launch.json` 的内容替换成为相应的配置：

   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "chrome",
         "request": "launch",
         "name": "vuejs: chrome",
         "url": "http://localhost:8080",
         "webRoot": "${workspaceFolder}/src",
         "breakOnLoad": true,
         "sourceMapPathOverrides": {
           "webpack:///src/*": "${webRoot}/*",
           "webpack:///./src/*.js": "${webRoot}/*.js"
         }
       },
       {
         "type": "firefox",
         "request": "launch",
         "name": "vuejs: firefox",
         "url": "http://localhost:8080",
         "webRoot": "${workspaceFolder}/src",
         "pathMappings": [{ "url": "webpack:///src/", "path": "${webRoot}/" }]
       }
     ]
   }
   ```

4. 设置断点，并启动 Vue 应用，来到 Debug 视图，选择“vuejs：chrome/firefox”配置，然后按 F5 或点击绿色的 play 按钮。

#### 8.1.1 替代方案

##### 8.1.1.1 Vue Devtools

使用 Chrome 版本和 Firefox 版本的 Vue.js devtools。使用 devtools 有很多好处，比如它可以让能够实时编辑数据 property 并立即看到其反映出来的变化。另一个主要的好处是能够为 Vuex 提供时间旅行式的调试体验。

> 注意 : 如果页面使用了一个生产环境/压缩后的 Vue.js 构建版本 (例如来自一个 CDN 的标准的链接)，devtools 的审查功能是默认被禁用的，所以 Vue 面板不会出现。如果切换到一个非压缩版本，可能需要强制刷新该页面来看到它。

##### 8.1.1.2 简单的 debugger 语句

可以直接在代码中使用[原生的 debugger](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/debugger) 语句。如果选择了这种方式，记得调试完毕之后把这个语句移除。

```js
<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    const hello = 'Hello World!'
    debugger
    this.message = hello
  }
};
</script>
```

## 九. 杂项

### 9.1 template 和 JSX 的对比以及它们的本质

**template**:

- 模板语法（HTML 的扩展）
- 数据绑定使用 Mustache 语法（双大括号）

```vue
<span>Message: {{ msg }}</span>
```

优缺点：学习成本低、大量内置指令简化开发、组件作用域 CSS，但是灵活性低

**JSX**:

- JavaScript 语法的扩展
- 数据绑定使用单引号

```jsx
<span>Message: {this.msg}</span>
```

优缺点：灵活性高

两者都是语法糖，可以混合使用。最终都是编译成 `createElement`

```js
createElement('span', `Message: ${this.msg}`);
```

### 9.2 为 Vue 文件配置 JSDoc

1. 安装 `jsdoc`、 `jsdoc-vuejs` 和 `minami` JSDoc 模板

   ```sh
   npm install --save-dev jsdoc jsdoc-vuejs minami
   ```

2. 新建 `.jsdoc.conf.json` 文件，在文件中配置，详细配置与各种标签看 [jsdoc 在线中文手册](http://www.dba.cn/book/jsdoc/)

   ```json
   {
     "tags": {
       // 是否允许未知标签 默认 false
       "allowUnknownTags": true,
       // 词典
       "dictionaries": ["jsdoc"]
     },
     // 递归深度
     "recurseDepth": 10,
     "source": {
       "include": ["./src"],
       "exclude": [],
       "includePattern": "\\.(vue|js)$",
       "excludePattern": "(^|\\/|\\\\)_"
     },
     "plugins": ["./node_modules/jsdoc-vuejs"],
     "templates": {
       "cleverLinks": false,
       "monospaceLinks": true,
       "useLongnameInNav": false,
       "showInheritedInNav": true
     },
     "opts": {
       // 文档输出路径
       "destination": "./static/doc",
       "encoding": "utf8",
       "private": true,
       "recurse": true,
       // 使用模板
       "template": "./node_modules/minami"
     }
   }
   ```

3. 在 `package.json` 的 `script` 字段中加入 `"doc": "jsdoc -r -c .jsdoc.conf.json"`

**注意事项**：

- JSDoc 只能写在 export default 前，才能被解析到
- jsdoc-vuejs 只支持以下四种 _@Vue-_ 标签

```js
/**
 * @vue-prop {Number} initialCounter-初始计数器的值
 * @vue-data {Number}计数器-当前计数器的值
 * @vue-event {Number}递增-递增后发出计数器的值
 * @vue-computed 更新count
 */
export default {};
```
