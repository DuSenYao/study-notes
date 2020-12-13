---
title: Chrome DevTools Chrome浏览器调试工具
date: 2020-12-10 9:22:34
author: 杜森垚
keywords: 'Chrome DevTools'
categories: Chrome DevTools
tags:
  - Chrome DevTools
---
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Chrome DevTools Chrome浏览器调试工具](#chrome-devtools-chrome浏览器调试工具)
  - [一.基础](#一基础)
    - [1.1.面板简介](#11面板简介)
      - [元素面板(Elements)](#元素面板elements)
      - [源代码面板(Sources)](#源代码面板sources)
      - [网络面板(NetWork)](#网络面板network)
      - [性能面板(Performance)](#性能面板performance)
      - [内存面板(Memory)](#内存面板memory)
      - [应用面板(Application)](#应用面板application)
      - [安全面板(Security)](#安全面板security)
    - [1.2.通用篇](#12通用篇)
      - [1.2.1 copy(...)](#121-copy)
      - [1.2.2 Store Object as global variable(**存储为全局变量**)](#122-store-object-as-global-variable存储为全局变量)
      - [1.2.3. 保存堆栈信息(Save as…)](#123-保存堆栈信息save-as)
      - [1.2.4 快捷键](#124-快捷键)
        - [1.2.4.1 切换 `DevTools` 窗口的展示布局](#1241-切换-devtools-窗口的展示布局)
        - [1.2.4.2 切换 `DevTools` 的面板](#1242-切换-devtools-的面板)
        - [1.2.4.3 递增/递减](#1243-递增递减)
        - [1.2.4.4 elements， logs， sources & network 中的查找](#1244-elements-logs-sources-network-中的查找)
        - [1.2.4.5 使用 Command](#1245-使用-command)
          - [1.2.4.5.1 快捷键](#12451-快捷键)
          - [1.2.4.5.2 截屏](#12452-截屏)
          - [1.2.4.5.3 切换面板布局](#12453-切换面板布局)
          - [1.2.4.5.4 代码片段](#12454-代码片段)
  - [二. Console篇](#二-console篇)
    - [2.1 Console中的 `$`](#21-console中的)
    - [2.2 异步的 `Console`](#22-异步的-console)
    - [2.3 Ninja console (忍者打印)](#23-ninja-console-忍者打印)
    - [2.4 自定义格式转换器](#24-自定义格式转换器)
      - [2.4.1 自定义格式化转换器的应用实践](#241-自定义格式化转换器的应用实践)
    - [2.5 对象&方法](#25-对象方法)
      - [2.5.1 queryObjects(对象查询)方法](#251-queryobjects对象查询方法)
      - [2.5.2 monitor (监听函数)方法](#252-monitor-监听函数方法)
      - [2.5.3 monitorEvents (监听事件)方法](#253-monitorevents-监听事件方法)
    - [2.6 Console类中的各种方法](#26-console类中的各种方法)
      - [2.6.1 console.assert](#261-consoleassert)
      - [2.6.2 增强 `log`的阅读体验](#262-增强-log的阅读体验)
      - [2.6.3 `console.table`](#263-consoletable)
      - [2.6.4 console.dir](#264-consoledir)
      - [2.6.5 给 `logs` 加上时间戳](#265-给-logs-加上时间戳)
      - [2.6.6 检测执行时间](#266-检测执行时间)
      - [2.6.7 让 `console.log` 基于调用堆栈自动缩进](#267-让-consolelog-基于调用堆栈自动缩进)
      - [2.6.8 直接在回调中使用 `console.log`](#268-直接在回调中使用-consolelog)
      - [2.6.9 给 `console.log` 加上 `CSS` 样式](#269-给-consolelog-加上-css-样式)
      - [2.6.10 实时表达式](#2610-实时表达式)
  - [三. NetWork 篇](#三-network-篇)
    - [3.1 隐藏 network Overview](#31-隐藏-network-overview)
    - [3.2 Request initiator 显示调用堆栈信息](#32-request-initiator-显示调用堆栈信息)

<!-- /code_chunk_output -->

# Chrome DevTools Chrome浏览器调试工具

---

## 一.基础

### 1.1.面板简介

#### 元素面板(Elements)

可以自由操作 DOM 和 CSS 来迭代布局和设计页面。

```txt
功能:
  ① 检查和调整页面
  ② 编辑样式
  ③ 编辑DOM
  ```

#### 控制台面板(Console)

在开发期间，可以记录诊断信息，或者使用它作为 shell 在页面上与 JS 进行交互。

```txt
功能:
  ① 使用控制台面板
  ② 命令行交互
  ```
  
#### 源代码面板(Sources)

可以设置断点来调试 JS ，或者通过 Workspaces （工作区）连接本地文件来使用开发者工具的实时编辑器

```txt
功能:
  ① 断点调试
  ② 调试混淆的代码
  ③ 使用开发者工具的 WorkSpaces 进行保存
```

#### 网络面板(NetWork)

了解请求和下载的资源文件并优化网页加载性能

```txt
功能:
  ① 网络面板基础
  ② 资源时间轴
  ③ 网络带宽限制
```
  
#### 性能面板(Performance)
  
记录和查看网站生命周期内发生的各种事件和运行时间，了解并优化性能

```txt
功能:
  ① 记录和查看网站生命周期内发生的各种事件
  ② 提高页面的运行时性能
```

#### 内存面板(Memory)
  
```txt
功能:
  ① 跟踪内存泄漏。
  ② JavaScript CPU 分析器
  ③ 内存堆区分析器
```

#### 应用面板(Application)

```txt
功能:
  ① 检查加载的所有资源
  ② IndexedDB 与 Web SQL
  ③ 本地和会话存储， cookie
  ④ 应用程序缓存，图像，字体和样式表
```

#### 安全面板(Security)

```txt
功能:
  ① 证书问题
  ② 安全相关问题
```

### 1.2.通用篇

#### 1.2.1 copy(...)

可以通过全局的方法 `copy()` 在 `console` 里 `copy` 任何能拿到的资源。

#### 1.2.2 Store Object as global variable(**存储为全局变量**)

在 `console` 中打印了一组数据，然后想对这些数据做一些额外的操作。那就可以将它转换成一个全局变量，只需要 **右击** 它，并选择 “`Store as global variable`” (保存为全局变量) 选项。
第一次使用的话，它会创建一个名为 temp1 的变量，第二次创建 temp2，以此类推。通过使用这些变量来操作对应的数据，不用再担心影响到他们原来的值。

#### 1.2.3. 保存堆栈信息(Save as…)

对于 `Console` 面板上的信息，可以使用 **右击**，选择 `Save as…`，把堆栈跟踪的信息保存为一个 `.log` 文件。

#### 1.2.4 快捷键

##### 1.2.4.1 切换 `DevTools` 窗口的展示布局

快捷键 `Ctrl + Shift + D` 切换 DevTools 的位置

##### 1.2.4.2 切换 `DevTools` 的面板

快捷键 `Ctrl + [ | ]`，可以从当前面板分别向左向右切换

##### 1.2.4.3 递增/递减

使用带修饰符或不带修饰键的 `上/下` 箭头，可以实现递增/递减`数值`类型的值。

##### 1.2.4.4 elements， logs， sources & network 中的查找

`DevTools` 中的前4个主要的面板，都支持 `ctrl + f` 快捷方式，你可以使用对应的查询方式来查找信息:

- 在 `Element` 面板中 - 通过 `string` 和 `XPath` 来查找。

- 在 `Console`， `Network` 以及 `Source` 面板 - 通过 `区分大小写` 或 `正则表达式`， 来查找。

##### 1.2.4.5 使用 Command

这个功能可以快速查找所有命令

###### 1.2.4.5.1 快捷键

> 在 `Chrome` 调试打开的情况下，使用 `Ctrl + Shift + P`

下图是可供选择的命令列表，分为几个部分:

![Command命令列表分类](image\Command命令列表分类.png)

###### 1.2.4.5.2 截屏

当只想对某个 `DOM节点` 截屏时，可以在 `Elements` 界面，选中节点并在右键菜单中选择 `Capture node screenshot`，也可以选中节点后，使用 `Command` 查找命令。

还可以通过 `Capture full size screenshot` 命令，进行 **全页面截屏**

###### 1.2.4.5.3 切换面板布局

`DevTools` 使用双面板模式，一般是: `元素面板` + `资源面板`，它根据屏幕可用的部分，经常将不同面板横向或者纵向的排列，以适合阅读的方式展示出来。

打开 `Commands` 菜单并且输入 `layout` ，会看到 2 到 3 个可供选择的项(这里不再显示已经激活的选项)：

- Use horizontal panel layout (使用横向面板布局)
- Use vertical panel layout (使用纵向面板布局)
- Use automatic panel layout (使用自动面板布局)

###### 1.2.4.5.4 代码片段
  
`Sources` 中的 `Snippets`，可以存放 `代码片段`，方便复用。

![Sources-Snippets](image\DevTools-Sources-Snippets.png)

> 快速执行代码片段: 在 `Command Menu` 里，使用 `!`，就可以根据名字来筛选预设代码片段。

## 二. Console篇

### 2.1 Console中的 `$`

- `$0` 在 Chrome 的 Elements 面板中，是对当前选中的 html 节点的引用。`$1` 是对上一次选择的节点的引用，`$2` 是对在那之前选择的节点的引用，等等。一直到 `$4`。

- 如果没有在 `页面` 中定义过 `$` 变量 (例如 jQuery )的话，它在 `Console` 中就是函数 `document.querySelector` 的别名。

- `$_` 是对上次执行结果的引用

### 2.2 异步的 `Console`

在 `Console` 面板中 `console` 默认被 `async` 包裹

- `Storage` 系统的 **占用数** 和 **空闲数**

> console.table(await navigator.storage.estimate());

- 媒体能力

```js
let query = {type: 'file', audio: {contentType: "audio/ogg"}}
console.table(await navigator.mediaCapabilities.decodingInfo(query));
```

### 2.3 Ninja console (忍者打印)

- `Conditional breakpoints` 条件断点

```markdown
  在 `Source` 的JS文件中右击行号，选择 `Add conditional breakpoint...(添加条件断点)` 或 右击一个已经设置的断点并且选择 `Edit breakpoint(编辑断点)`
  然后输入一个执行结果为 `true` 或者 `false` 的表达式（它的值其实不需要完全为 true 或者 false）。
  在这个表达式中可以使用任何这段代码可以获取到的值（当前行的作用域）。
  如果条件成立，这个断点就会暂停代码的执行。
```

- The Ninja `console`
  
得益于条件断点，`console` 也有了新玩法：

```markdown
  每一个条件都必须经过判断 - 当应用执行到这一行的时候进行判断
  并且如果条件返回的是 `falsy` 的值(这里的 `falsy` 并非是笔误， `falsy` 指的是被判定为 `false` 的值，例如 `undefined` )，它并不会暂停。
  可以直接使用条件判断来将 `console.log/console.table/console.time` 等 "连接"到 `Source` 面板中。
  它们会一直执行，并且当不再需要它们的时候，在 `断点部分` 会清晰的列出它们，可以轻松移除。
```

### 2.4 自定义格式转换器

大多数的情况下，习惯使用 `DevTools` 的 `console` 默认对 `object` 的转换，但还可以自定义输出对象的函数，它通常被称为 `Custom Formatter` 。
> 注意: 在写之前，需要在 `Settings` (或按下 `F1`) 中把对应的设置打开。
> ![Enable_Custom_Formatter位置](image/Enable_Custom_Formatter位置.png)

`formatters` 是一个对象，最多包含三个方法

- `header`: 处理展示在 `Console` 的日志中的头部分

> header 方法返回了一个 JsonML (注： JsonML : JSON Markup Language - JSON 标记语言) 数组，由这些组成：
> · 标签名
> · 属性对象
> · 内容 (文本值或者其他元素)

- `hasBody`: 返回是否显示用来展开对象的 `▶` 箭头

- `body`: 定义显示在展开部分的内容。

#### 2.4.1 自定义格式化转换器的应用实践

每当遇到结构不寻常的对象时，或大量的日志(最好避免这样的情况，但是有时候很有用)而想从中做区分时，你可以采用 `custom formatter` 来处理。

> 技巧: 直接将不关心，不需要区别对待的对象过滤出来，直接在 `header` 方法里面 `return null`。让 `DevTools` 使用默认的格式化方式来处理这些值。

自定义格式化转换器的示例

```js
window.devtoolsFormatters = [{
    header: function(obj){
      if (!obj.__clown) {
        return null;
      }
      delete obj.__clown;
      const style = `
        color: red;
        border: 2px dotted #ccc;
        border-radius: 5px;
        padding: 5px;
      `
      const content = `${JSON.stringify(obj, null, 2)}`;

      try {
        return ['div', {style}, content]
      } catch (err) { // for circular structures
        return null;  // use the default formatter
      }
    },
    hasBody: function(){
        return false;
    }
}]

console.clown = function (obj) {
  console.log({...obj, __clown: true});
}

console.clown({message: 'hello!'}); // a silly log
```

### 2.5 对象&方法

#### 2.5.1 queryObjects(对象查询)方法

`DevTools` 里的 `queryObjects` 函数，可以查询 `特定的时刻 + 特定的执行上下文` 有哪些对象

> new String("example"); queryObjects(String);

#### 2.5.2 monitor (监听函数)方法

`monitor` 是 `DevTools` 的一个方法， 它能够 "监听" 到任何 `_function calls(方法的调用)` 中：每当一个 `被监听` 的方法运行的时候，`console 控制台` 会把它的实例打印出来，包含 `函数名` 以及 `调用它的参数` 。取消监听函数的方法是 `unmonitor`。

在 `Source` 的 `Snippets` 中创建一个类，然后运行:

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return this.getMessage('greeting', "tom");
  }

  getMessage(type, js) {
    if (type === 'greeting') {
      return `Hello, I'm ${this.name}!`;
    }
  }
}
```

控制台试验结果:
![monitor](image/Chrome_DevTools_monitor监听函数.png)

#### 2.5.3 monitorEvents (监听事件)方法

在上面是监听函数的方法，还可以使用 `monitorEvents` 的方法，对 `events` 做同样的事，取消监听事件的方法是 `unmonitorEvents`。

### 2.6 Console类中的各种方法

#### 2.6.1 console.assert

如果断言为 `false`，则将一个错误消息写入控制台。如果断言是 true，没有任何反应。
通过它，可以摆脱累赘的 `if` 表达式，还可以获得堆栈信息。

```js
console.assert(assertion, obj1 [, obj2, ..., objN]);
console.assert(assertion, msg [, subst1, ..., substN]);

参数
  `assertion`: 一个布尔表达式。如果 assertion 为假，消息就会被输出到控制台之中
  `obj1 ... objN`: 被用来输出的Javascript对象列表，最后输出的字符串是各个对象依次拼接的结果。
  `msg`: 一个包含零个或多个子串的Javascript字符串。
  `subst1 ... substN`: 各个消息作为字串的Javascript对象。这个参数可以让你能够控制输出的格式。
```

#### 2.6.2 增强 `log`的阅读体验

`console.log` 可以通过 `{}` 将参数包装，可以将一组数据打印成一个对象，这是 `ECMAScript 2015` 引入的 `enhanced object literal(增强对象文字面量)`。

示例

```js
const name = "tom";
let date = new Date();
var age  = 18;
let isHealthy = true;

console.log({name, date, age, isHealthy});
```

#### 2.6.3 `console.table`

 如果有一个 **数组** (或者是 **类数组** 的对象，或者就是一个 **对象** )需要打印，可以使用 `console.table` 方法将它以一个漂亮的表格的形式打印出来。它不仅会根据数组中包含的对象的所有属性，去计算出表中的列名，而且这些列都可以 **缩放** 和 **排序**。

如果觉得展示的列太多了，还可以使用第二个参数，传入想要展示的列的名字。

`console.table` 还可以和 `{}` 的配合

#### 2.6.4 console.dir

使用 `console.log` 打印元素，回将元素渲染成像是从 `Elements` 中剪切出来的一样。使用 `console.dir` 会将元素打印为这个节点所关联到的 `js对象`。

#### 2.6.5 给 `logs` 加上时间戳

给打印出来的信息加上时间戳，有两种方法

1. Settings -> Preferences -> Console 中开启 `Show timestamps`

2. Ctrl + Shift + P 打开 Command，搜索 `timestamps`

#### 2.6.6 检测执行时间

可以使用以下两个 `console` 方法，来检测某段代码的执行时间

> console.time([timerName]) — 开启一个计时器
> console.timeEnd([timerName]) — 结束计时并且将结果在 console 中打印出来

#### 2.6.7 让 `console.log` 基于调用堆栈自动缩进

配合 `Error` 对象的 `stack` 属性，可以让 `log` 可以根据堆栈的调用自动缩进

```js
function log(message) {
  console.log(
    // 这句话是重点。使用 new 出来的 Error 对象的 stack 信息中的换行符，换行符出现的次数 等同于 它在堆栈调用时的深度。
    '  '.repeat(new Error().stack.match(/\n/g).length - 2) + message
  );
}

function foo() {
  log('foo');
  return bar() + bar();
}

function bar() {
  log('bar');
  return baz() + baz();
}

function baz() {
  log('baz');
  return 17;
}

foo();
```

#### 2.6.8 直接在回调中使用 `console.log`

在确定要将什么传递给回调函数的情况下，可以在回调函数里面添加一个 `console.log` 来检查。

有两种方式来实现:

- 在回调方法的内部使用 console.log
- 直接使用 console.log 来作为回调方法。
推荐使用第二种，因为这不仅减少了输入，还可能在回调中接收多个参数。(这在第一个解决方案中是没有的)

```js
function getInput(options, callback) {
  if(typeof callback == "function") {
    callback(options, "add");
  }
}
// console.log 是一个函数，可以作为回调函数
getInput([1, 2], console.log);
```

#### 2.6.9 给 `console.log` 加上 `CSS` 样式

如果给打印文本加上 `%c` ，那么 `console.log` 的第二个参数就变成了 `CSS` 规则
> console.log("%c999", 'color:#f40;font-size:40px');

#### 2.6.10 实时表达式

在 `Console` 区域的上方，有一个"眼睛"的符号，点击眼睛符号，就可以在那里定义任何 `JS` 表达式。它会不断更新，所以表达的结果将永远是最新的。支持同时定义多个。

## 三. NetWork 篇

### 3.1 隐藏 network Overview

如果用不到 请求的时间轴信息，可以隐藏掉它

![overview](image/NetWork-Show_Overview位置.png)

### 3.2 Request initiator 显示调用堆栈信息

`Network` 面板中的 `initiator` 这一列显示了是哪个脚本的哪一行触发了请求。它显示了在调用堆栈中触发请求的最后一步。
将鼠标悬停在显示的 `initiator`上，可以将看到完整的调用堆栈，包括文件。
