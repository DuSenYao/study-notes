# JavaScript 进阶

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [JavaScript 进阶](#javascript-进阶)
  - [一. JavaScript 之道](#一-javascript-之道)
    - [1.1 函数式 vs 面向对象：响应未知和不确定](#11-函数式-vs-面向对象响应未知和不确定)

<!-- /code_chunk_output -->

![JavaScript进阶知识图](./image/JavaScript%E8%BF%9B%E9%98%B6%E7%9F%A5%E8%AF%86%E5%9B%BE.webp)

## 一. JavaScript 之道

### 1.1 函数式 vs 面向对象：响应未知和不确定

编程模式（programming paradigm）可以说是编程语言的**元认知**。从编程模式的角度看 JS，它是结构化的、事件驱动的动态语言，且支持声明式和指令式两种模式。所以，JS 是一个多模式（multi-paradigm）的语言，也是一门“丰富”的语言。

![编程模式](./image/%E7%BC%96%E7%A8%8B%E6%A8%A1%E5%BC%8F.webp)

在 JS 所支持的编程模式中，用得最多的是**面向对象**（OOP object oriented programming）和**函数式**（FP functional programming）两种，其中又以面向对象的普及率最高。

> 函数式 + 响应式编程可以对抗**不确定性**。这个概念不只是在编程中，它也是一个跨学科的研究。比如在 AI、机械和航空航天工程这些硬科技的领域，以及很多知名的大学（如伯克利、麻省理工）和政府机构（如 NASA），都对 System Dynamics and Controls 开展了很深入的研究。其核心就是研究在动态情况下如何做到系统控制，其中很重要的一点就是**处理波动和干扰**。

在函数式编程中，通常会把各种干扰，就叫做**副作用**（Side effect）。

![JavaScript 之道](./image/JavaScript%20%E4%B9%8B%E9%81%93.webp)

#### 1.1.1 函数式编程

一个函数由输入、函数和输出组成，这和在初中就学过的函数一样，**函数是数据集到目标的一种关系**，它所做的就是把行为封装起来，从而达到目标。

![函数](./image/%E5%87%BD%E6%95%B0.webp)

函数的输入值不仅可以是一个基础类型数据（primitive type），也可以是一个相对复杂些的对象类型数据（object type），包括对象本身和数组。甚至，函数本身作为对象，也可以是输入或输出值，把这种函数就叫做**高阶函数**（higher order functions）。

![函数](./image/%E5%87%BD%E6%95%B0.webp)

##### 1.1.1.1 函数的副作用

函数已经把算法封装了起来，那么函数里相对就是可控的，而比较不可控的是**外部环境**。可以把不可控的外部环境分为三大类：

- **全局变量**：这是函数中最常见的副作用

  ```js
  let x = 1;
  // 没法保证这些函数没有改变这个变量的值，也没法保证每次输出的结果是 1。所以从输入开始，这种不确定性就存在了。
  foo();
  console.log(x);
  bar();
  console.log(x);
  baz();
  console.log(x);
  ```

- **IO 影响**：这里的 IO 是类似前端浏览器中的用户行为，比如鼠标和键盘的输入，或者如果是服务器端的 Node 的话，就是文件系统、网络连接以及 stream 的 stdin（标准输入）和 stdout（标准输出）。

- **网络请求**：比如要针对一个用户下单的动作发起一个网络请求，需要先获得用户 ID，再连着用户的 ID 一起发送。如果在没获取到用户 ID 前，就发起下单请求，可能就会收到报错。

**减少副作用**
在函数式编程中，有两个核心概念：

- **纯函数**（pure function）

  **一个函数的返回结果的变化只依赖其参数，并且执行过程中没有副作用**。面对外界的复杂多变，要先保证函数封装的部分本身是稳固的。

- **不可变**（immutability）

  ```js
  const beforeList = [1, 2, 3, 4];
  console.log(beforeList.splice(0, 2)); // [1, 2]
  console.log(beforeList.splice(0, 2)); // [3, 4]

  const beforeList = [1, 2, 3, 4];
  console.log(beforeList.slice(0, 2)); // [1, 2]
  console.log(beforeList.slice(0, 2)); // [1, 2]
  ```

  可以看到，数组中的 splice 方法，在对数据进行了处理后，改变了全局中的 beforeList 的值，所以是可变的。而 slice 在执行之后的结果，没有影响全局中的 beforeList 的值，所以它是不可变的。也是因为这样，**在开发中，如果要保证不可变，就不能用 splice，而用 slice**。

  所以，不可变就是在减少程序被外界影响的同时，也减少对外界的影响。因为如果把一个外部变量作为参数作为输入，在函数里做了改变，作为输出返回。那么这个过程中，可能不知道这种变化会对整个系统造成什么样的结果。

另外，从纯函数和不可变的设计思想中，还可以抽象出一个概念。因为“副作用”首先是一个作用（effect），而作用遵循的是一个因果（cause and effect）关系。那么，从值的角度来看，**“纯函数”对值只影响一次，而“不可变”完全不影响**。
