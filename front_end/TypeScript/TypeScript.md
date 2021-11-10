---
title: TypeScript
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [TypeScript](#typescript)
  - [一. 介绍](#一-介绍)
    - [1.1 什么是 TypeScript](#11-什么是-typescript)
      - [1.1.1 始于 JS，终于 JS](#111-始于-js终于-js)
      - [1.1.2 TypeScript 特性](#112-typescript-特性)
    - [1.2 TypeScript 优势](#12-typescript-优势)
  - [二. 类型系统](#二-类型系统)
    - [2.1 tsconfig.json](#21-tsconfigjson)
    - [2.1 类型基础](#21-类型基础)
      - [2.1.1 类型注解](#211-类型注解)
      - [2.1.2 类型检查](#212-类型检查)
      - [2.1.3 原始类型](#213-原始类型)
        - [2.1.3.1 symbol 和 unique symbol](#2131-symbol-和-unique-symbol)

<!-- /code_chunk_output -->

# TypeScript

## 一. 介绍

### 1.1 什么是 TypeScript

时间回到 2004 年，距离 HTML 版本(4.01)更新已有四年之久。就在这一年知名浏览器厂商（Apple、Mozilla、Opera 和 Google）集结在一起，其初衷是想要发展下一代 HTML 技术，从而使浏览器拥有更优的用户体验。与此同时，新一轮的浏览器大战也开了序幕。要拥有更好的用户体验，那么提供完善的功能与出色的性能这两点缺一不可。浏览器厂商们纷纷开始支新特性，并且在 JS 引擎优化方面展开了一场 “军备竞赛”。从那之后， JS 程序的运行速度有了数十倍的提升，这为使用 JS 语言开发大型应用程序提供了强有力的支撑。如今 JS 不仅能够用在网页端程序的开发，还被用在了服务器端应用的开发上。但有一个不争的事实 JS 语言不是为编写大型大型应用程序而设计的。例如：JS 语言在相当长的时间里都缺少对模块的支持。此外，在编写 JS 代码的过程中也缺少开发者工具的支持。因此，编写并维护大型 JS 程序是困难的。

微软公司有一部分产品是使用 JS 语言进行开发和维护

因此微软也面临同样的题。在微软技术院士 Steve Lucco 先生的带领下，微软公司组建了一个数十人的团队开始着手设计和实现一种 JS 开发工具，用以解决产品开发和维护中遇到的问题。随后，另一位重要成员也加入了这个团队，他就是 C# 和 Turbo pascal 编程语言之父、微软技术院 Anders Hejlsberg 先生。该团队决定推出一款新的编程语言来解决 JS 程序开发与维护过程中所面临的难题。凭借微软公司在编程语言设计与开发方面的丰富经验，在历经了约两年的开发后，2012 年 10 月 1 日，微软对外发布了 TypeScript 第一个公开预览版 v0.8。2014 年 4 月 2 日，TypeScript 1.0 版本发布；2016 年 9 月 22 日，TypeScript 2.0 版本发布；2018 年 7 月 30 日，TypeScript 3.0 版本发布

#### 1.1.1 始于 JS，终于 JS

TypeScript 是一门专为开发大规模 JS 应用程序而设计的编程语言，是 JS 的超集，包含了 JS 现有的全部功能，并且使用了与 JS 相同的语法和语义。因此， JS 程序本身已经是合法的 TypeScript 程序了。

开发者不但能够快速地将现有的 JS 程序迁移 TypeScript，而且能够继续使用依赖的 JS 库，比如 jQuery 等。因此，就算现有工程依赖的第三方代码库没有迁移到 TypeScript，它也不会阻碍程序开发。反之， TypeScript 能够更好地利用现有的 JS 代码库。

TypeScript 代码不能直接运行，它需要先被编译成 JS 代码 然后才能 TypeScript 编译器（tsc）将负责把 TypeScript 代码编译为 JS 代码。例如：

```ts
function sum(x: number, y: number): number {
  return x + y;
}
const total = sum(1, 2);
```

```js
"use strict";
function sum(x, y) {
  return x + y;
}
const total = sum(1, 2);
```

对比编译之前和之后的代码，能够看到编译器生成的 JS 代码既清晰又简洁，并且两者之间在代码结构上几乎没有明显变化。实际上这种行为是 TypeScript 语言的基本设计原则之一。TypeScript 语言的设计原则中包含了以下几个基本原则：

- 保留 JS 代码的运行时行为
- 避免增加表达式级别的语法，仅增加类型相关语法
- 与当前和未来版本的 ECMAScrip 规范保持—致
- 应该生成简洁、符合编写习惯并易于识别的 JS 代码
- 不应该进行激进的性能优化

_语法糖_
: 在计算机科学中，语法糖指的是编程语言里的某种语法，这种语法对语言的功能没有影响，但是会方便开发者的使用，能够让程序更加简洁，具有更高的可读性。

#### 1.1.2 TypeScript 特性

- **可选的静态类型**

  如 TypeScript 其名，类型系统是它的核心特性。TypeScript 为 JS 添加了静态类型的支持。可以使用类型注解为程序添加静态类型信息。

  同时，TypeScript 中的静态类型是**可选的**，它不强制要求为程序中的每一部分都添加类型注解。TypeScript 支持类型推断的功能，编译器能够自动推断出大部分表达式的类型信息，开发者只需要在程序中添加少量的类型注解便能拥有完整的类型信息。

- **开放与跨平台**

  TypeScript 语言是开放的。TypeScript 语言规范使用了 Open Web Foundations Final Specification Agreement（OWF 1.0）协议。开放 Web 基金会（ Open Web Foundation，OWF）是一个致力于开发和保护新兴网络技术规范的非营利组织。该基金会遵循类似 Apache 软件基金会的开源模式。微软公司实现的 TypeScript 编译器也是开源的，它的源代码托管在 Github 平台上并且使用了较为宽松的开源许可协议 Apache License 2.0，该协议允许使用者对源代码进行修改发行以及用于商业用途。

  TypeScript 语言是跨平台的。TypeScript 程序经过编译后可以在任意的浏览器、JS 宿主环境和操作系统上运行。

### 1.2 TypeScript 优势

- **易于发现代码的错误**

  不论使用哪种编程，编写高质量代码都是重中之重。JS 是一门具有动态类型和弱类型的编程语言。其特点是数据类型检查发生在程序运行时，并且允许（隐式地）数据类型转换。

  例如，JS 代码在真正运行前无法很好地检测代码中是否存在拼写错误，那么在编写的过程中 JS 无法识别出该错误。只有在程序运行时 JS 才能够发现这个错误并且可能终止程序的运行。如果使用了 TypeScript 语言，那么在编译程序时就能够发现拼写错误。如果使用了支持 TypeScript 的代码编辑器，那么在编写代码的过程中就能够检查出拼写错误。

- **提高生产力**

  如果开发者习惯了使用静态类型编程语言，例如 Java 和 c# 等进行开发，那么在开始使用 JS 语言编写程序时很可能会产生较大落差。因为会发现那些习以为常的开发者工具都没有被很好地支持，例如代码自动补全、跳转到定义和重命名标识符等。因为 TypeScript 为 JS 添加了静态类型的支持，所以 TypeScript 有能力提供这些便利的开发者工具。如：重命名符号名、提取到函数或方法、提取类型。

  TypeScript 还提供了一些代码快速修复工具，如：自动删除未使用的声明、自动删除执行不到的代码、自动添加缺少的模块导入语句。

- **支持 JS 的最新特性**

  JS 实现遵循了由 TC39 委员会制定 ECMAScript（ES）标准。同时，JS 语言也成了 ECMAScript 标准最知名的一个实现。两者的发展相辅相成。

  随着 JS 语言的应用越来广泛，人们也在积极地修订 ECMAScript 标准，不断加入新的特性，比如类、async 和 await 等。但由于兼容性问题，ECMAScript 标准中新引入的特性往往无法直接在实际项目中使用，因为 JS 运行环境通常不会很快支持新特性。

  在 TypeScript 程序中，可以直接使用这些新特性而不必过多担心兼容问题。TypeScript 编译器会负责把代码编译成兼容指定 ECMAScript 版本的 JS 代码。

## 二. 类型系统

### 2.1 tsconfig.json

tsconfig.json 是 TypeScript 编译器默认使用的配置文件。下面的例子中指定模块类型为 CommonJS，并将输岀 JS 的版本指定为 ECMAScript2017：

```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "CommonJS"
  }
}
```

在 VSCode 中使用快捷键 `Ctrl + Shift + B` 或从菜单栏里选择 `终端 -> 运行生成任务` 打开并运行构建任务面板，然后选择 "tsc: -p tsconfig.json" 来编译 TypeScript 程序。编译完成后，会在当前文件目录下生成同名 JS 文件。

### 2.1 类型基础

#### 2.1.1 类型注解

在 TypeScript 中可以使用类型注解来明确标识类型。**类型注解的语法由一个冒号 “:" 和某种具体类型 “Type” 组成**，并且总是放在被修饰的实体之后：

```ts
const greeting: string = "Hello，World";
```

TypeScript 中的类型注解是可选的，编译器在大部分情况下都能够自动推断岀表达式的类型。关于类型推断的详细介绍参考 7.3 节<!--TODO-->。

#### 2.1.2 类型检查

类型检查是验证程序中类型约束是否正确的过程。类型检查既可以在程序编译时进行，即静态类型检査；也可以在程序运行时进行，即动态类型检查。TypeScript 支持静态类型检查，Javascrip 支持动态类型检查。

为了满足不同用户的需求，TypeScript 提供了两种静态类型检查模式：

- **非严格类型检查**（默认方式）

  严格类型检査是 TypeScript 默认的类型检査模式。在该模式下，类型检査的规则相对宽松。例如，在非严格类型检查模式下不会对 undefined 值和 null 值做过多限制，允许将 undefined 值和 null 值赋值给 string 类型的
  变量。当进行 JS 代码到 TypeScript 代码的迁移工作时，非严格类型检查是一个不错的选择，因为它能够帮助快速地完成迁移工作。

- **严格类型检查**

  该模式下的类型检査比较激进，会尽可能地发现代码中的错误。例如，在严格类型检査模式下不允许将 undefined 值和 null 值赋值给 string 类型的变量。启用严格类型检査模式能够最大限度地利用 TypeScript 静争态类型检査带来的益处。从长远来讲，使用严格类型检查模式对提高代码质量更加有利，因此建议在新的工程中启用。

  TypeScript 提供了若干个与严格类型检查相关的编译选项，例如：“-strictNullChecks” 和 “--noImplicitAny” 等。关于严格类型检查编译选项的详细介绍参考 8.2 <!--TODO-->节。

  也可以在工程的 tsconfig.json 配置文件中启用 “strict" 编译选项：

  ```json
  {
    "compilerOptions": {
      "strict": true
    }
  }
  ```

  将 “strict” 编译选项设置为 true 将开启所有的严格类型检査编译选项。它包含了前面提到的 “-strictNullChecks” 和 “--noImplicitAny” 编译选项。关于配置文件的详细介绍请参考 8.3 节<!--TODO-->

#### 2.1.3 原始类型

JS 语言中的每种原始类型都有与之对应的 TypeScript 类型。除此之外，TypeScript 还对原始类型进行了细化与扩展，增加了枚举类型和字面量类型等。到目前为止，TypeScript 中的原始类型包含以下几种：

- **boolean**
  TypeScript 中的 boolean 类型对应于 JS 中的 Boolean 原始类型。该类型能够表示两个逻辑值：true 和 false。

- **string**
  TypeScript 中的 string 类型对应于 JS 中的 String 原始类型。该类型能够表示采用 Unicode UTF-16 编码格式存储的字符序列。

- **number**

  TypeScript 中的 number 类型对应于 JS 中的 Number 原始类型。该类型能够表示采用双精度 64 位二进制浮点数格式存储的数字。

- **bigint**

  TypeScript 中的 bigint 类型对应于 JS 中的 BigInt 原始类型。该类型能够表示仼意精度的整数，但也仅能表示整数。bigint 采用了特殊的对象数据结构来表示和存储一个整数。

- **[symbol 和 unique symbol](#2131-symbol-和-unique-symbol)**

- **undefined 和 null**
- void
- 枚举类型
- 字面量类型

##### 2.1.3.1 symbol 和 unique symbol

TypeScript 中的 symbol 类型对应于 JS 中的 Symbol 原始类型。该类型能够表示任意的 Symbol 值。

字面量能够表示一个固定值。例如，数字字面量 3 表示固定数值 3；字符串字面量 "up" 表示固定字符串 "up"。symbol 类型不同于其他原始类型，它不存在字面量形式。symbol 类型的值只能通过 `Symbol()` 和 `Symbol.for()` 函数来创建或直接引用某个 “Well-Known Symbol” 值：

```ts
const s0: symbol = Symbol();
const s1: symbol = Symbol.for("foo");
const s2: symbol = Symbol.hasInstance;
const s3: symbol = s0;
```

为了能够将一个 Symbol 值视作表示固定值的字面量，TypeScript 引入了 `unique symbol` 类型。unique symbol 类型使用 `unique symbol` 关键字来表示。

**unique symbol 类型的主要用途是用作接口、类等类型中的可计算属性名**。因为如果使用可计算属性名

在接口中添加了一个类型成员，那么必须保证该类型成员的名字是固定的，否则接口定义将失去意义。下例中，允许将 unique symbol 类型的常量 x 作为接口的类型成员，而 symbol 类型的常量 y 不能作为接口的类型成员，因为 symbol 类型不止包含一个可能值：

```ts
const x: unique symbol = Symbol();
const y: symbol = Symbol();

interface Foo {
  [x]: string; // 正确
  [y]: string; // 错误：接口中计算属性名称必须引用类型为字面量类型或 unique symbol 的表达式
}
```

实际上，unique symbol 类型的设计初衷是作为一种变通方法，让一个 Symbol 值具有字面量的性质，即仅表示一个固定的值。unique symbol 类型没有改变 Symbol 值没有字面量表示形式的事实。为了能够将某个 Symbol 值视作表示固定值的字面量，TypeScript 对 unique symbol 类型和 Symbol 值的使用施加了限制。

TypeScript 选择将一个 Symbol 值与声明它的标识符绑定在一起，并通过绑定了该 Symbol 值的标识符来表示 "Symbol 字面量"。这种设计的前提是要确保 Symbol 值与标识符之间的绑定关系是不可变的。因此，TypeScript 中只允许使用 const 声明或 readonly 属性声明来定义 unique symbol 类型的值：

```ts
// 必须使用 const 声明
const a: unique symbol = Symbol();
interface WithUniqueSymbol {
  // 必须使用 readonly 修饰
  readonly b: unique symbol;
}
class C {
  // 必须使用 static 和 readonly 修饰符
  static readonly C: unique symbol = Symbol();
}
```

上例第 1 行，常量 a 的初始值为 Symbol 值，其类型为 unique symbol 类型。在标识符 a 与其初始值 Symbol 值之间形成了绑定关系，并且该关系是不可变
的。这是因为常量的值是固定的，不允许再被赋予其他值。标识符 a 能够固定表示该 Symbol 值，标识符 a 的角色相当于该 Symbol 值的字面量形式。

如果使用 let 或 var 声明定义 unique symbol 类型的变量，那么将产生错误，因为标识符与 Symbol 值之间的绑定是可变的。

> **注意**：unique symbol 类型的值只允许使用 Symbolo() 函数或 Symbol.for() 方法的返回值进行初始化，因为只有这样才能够 “确保” 引用了唯一的 Symbol 值。但是，使用相同的参数调用 Symbol.for() 方法实际上返回的是相同的 Symbol 值。因此，可能出现多个 unique symbol 类型的值实际是同一个 Symbol 值的情况。由于设计上的局限性，TypeScript 目前无法识别岀这种情况，因此不会产生编译错误，必须要留意这种特殊情况。

在设计上，每一个 unique symbol 类型都是一种独立的类型。在不同的 unique symbol 类型之间不允许相互赋值；在比较两个 unique symbol 类型的值时，也将永远返回 false。

由于 unique symbol 类型是 symbol 类型的子类型，因此可以将 unique symbol 类型的值赋值给 symbol 类型。

如果程序中未使用类型注解来明确定义是 symbol 类型还是 unique symbol 类型，那么 TypeScript 会自动地推断类型：

```ts
// a 和b 均为 symbol 类型，因为没有使用 const 声明
let a = Symbol();
let b = Symbol.for();
// c 和 d 均为 unique symbol 类型
const c = Symbol();
const d = Symbol.for();
// e 和 f 为 symbol 类型，没有使用 Symbol 或 Symbol.for()
const e = a;
const f = a;
```

##### 2.1.3.2 Nullable

TypeScript 中的 Nullable 类型指的是值可以为 undefined 或 null 的类型。JS 中有两个比较特殊的原始类型，即 Undefined 类型和 Null 类型。两者分别仅包含一个原始值，即 undefined 值和 null 值。

在 TypeScript 早期的版本中，没有提供与 JS 中 Undefined 类型和 Null 类型相对应的类型。TypeScript 允许将 undefined 值和 null 值赋值给仼何其他类型。虽然在 Type Script 语言的内部实现中确实存在这两种原始类
