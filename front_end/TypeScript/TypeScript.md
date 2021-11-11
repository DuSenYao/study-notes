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
    - [2.1 tsconfig.json](#21-tsconfigjson)
  - [二. 类型基础](#二-类型基础)
    - [2.1 类型注解](#21-类型注解)
    - [2.2 类型检查](#22-类型检查)
    - [2.3 原始类型](#23-原始类型)
      - [2.3.1 symbol 和 unique symbol](#231-symbol-和-unique-symbol)
      - [2.3.2 Nullable](#232-nullable)
      - [2.3.3 枚举类型](#233-枚举类型)

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
'use strict';
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

### 2.1 tsconfig.json

<!--TODO-->

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

## 二. 类型基础

### 2.1 类型注解

在 TypeScript 中可以使用类型注解来明确标识类型。**类型注解的语法由一个冒号 “:" 和某种具体类型 “Type” 组成**，并且总是放在被修饰的实体之后：

```ts
const greeting: string = 'Hello，World';
```

TypeScript 中的类型注解是可选的，编译器在大部分情况下都能够自动推断岀表达式的类型。关于类型推断的详细介绍参考 7.3 节<!--TODO-->。

### 2.2 类型检查

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

### 2.3 原始类型

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

- **[undefined 和 null](#2132-nullable)**

- **void**
  void 类型表示某个值不存在，该类型用作函数的返回值类型。若一个函数没有返回值，那么该函数的返回值类型为 void 类型。除了将 void 类型作为函数返回值类型外，在其他地方使用 void 类型是无意义的。关于函数类型的详细介绍请参考 5.12 <!--TODO-->

  > 当启用 strictNullChecks 编译选项时，只允许将 undefined 值赋值给 void 类型。没有启用 strictNullChecks 编译选项，那么允许将 undefined 和 null 赋值给 void 类型。

- **枚举类型**

- **字面量类型**

#### 2.3.1 symbol 和 unique symbol

TypeScript 中的 symbol 类型对应于 JS 中的 Symbol 原始类型。该类型能够表示任意的 Symbol 值。

字面量能够表示一个固定值。例如，数字字面量 3 表示固定数值 3；字符串字面量 "up" 表示固定字符串 "up"。symbol 类型不同于其他原始类型，它不存在字面量形式。symbol 类型的值只能通过 `Symbol()` 和 `Symbol.for()` 函数来创建或直接引用某个 “Well-Known Symbol” 值：

```ts
const s0: symbol = Symbol();
const s1: symbol = Symbol.for('foo');
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

#### 2.3.2 Nullable

TypeScript 中的 Nullable 类型指的是值可以为 undefined 或 null 的类型。JS 中有两个比较特殊的原始类型，即 Undefined 类型和 Null 类型。两者分别仅包含一个原始值，即 undefined 值和 null 值。

在 TypeScript 早期的版本中，没有提供与 JS 中 Undefined 类型和 Null 类型相对应的类型。TypeScript 允许将 undefined 值和 null 值赋值给仼何其他类型。虽然在 TypeScript 语言的内部实现中确实存在这两种原始类型，但之前没有开放给开发者使用。

TypeScript 2.0 版本的一个改变就是增加了 undefined 类型和 null 类型供开发者使用。虽然看上去是一项普通的改进，但却有着非凡的意义。因为，不当地使用 undefined 值和 null 值是程序缺陷的主要来源之一。

现在，在 TypeScript 程序中能够明确地指定某个值的类型是否为 undefined 类型或 null 类型。TypeScript 编译器也能够对代码进行更加细致的检査以找出程序中潜在的错误。

**strictNullChecks**
TypeScript 2.0 还增加了新的编译选项 `strictNullchecks`，即严格的 null 检查模式。虽然该编译选项的名字中只提及了 null，但实际上它同时作用于 undefined 类型和 null 类型的类型检查。

在默认情况下，`strictNullchecks` 编译选项没有被启用。这时候，除尾端类型外的所有类型都是 Nullable 类型。也就是说，除尾端类型外所有类型都能够接受 undefined 值和 null 值。关于尾端类型的详细介绍请参考 5.8 节<!--TODO-->。

当启用了 `strictNullchecks` 编译选项时，undefined 值和 null 值不再能够赋值给不相关的类型。例如，undefined 值和 null 值不允许赋值给 string 类型。在该模式下，undefined 值只能够赋值给 undefined、顶端、void 类型；null 值只能赋值给 null 类型和顶端类型。

#### 2.3.3 枚举类型

枚举类型由零个或多个枚举成员构成，每个枚举成员都是一个命名的常量。在 TypeScript 中，枚举类型是一种原始类型，它通过 `enum` 关键字来定义：

```ts
enum Season {
  Spring,
  Summer,
  Fall,
  Winter
}
```

按照枚举成员的类型可以将枚举类型划分为以下三类：

- 数值型枚举
- 字符串枚举
- 异构型枚举

##### 2.3.3.1 数值型枚举

数值型枚举是最常用的枚举类型，是 number 类型的子类型，它由一组命名的数值常量构成。定义数值型枚举的方法如下所示：

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

const direction: Direction = Direction.Up;
```

此例中，使用 enum 关键字定义了枚举类型 Direction，它包含了四个枚举成员 Up、Down、Left 和 Right。在使用枚举成员时，可以像访问对象属性一样访问枚举成员。

每个数值型枚举成员都表示一个具体的数字。如果在定义枚举时没有设置枚举成员的值，那么 TypeScript 将自动计算枚举成员的值。根据 TypeScript 语言的规则，第一个枚举成员的值为 0，其后每个枚举成员的值等于前一个枚举成员的值加 1。因此，Direction 枚举中 Up 的值为 0、Down 的值为 1，以此类推。

在定义数值型枚举时，可以为一个或多个枚举成员设置初始值。对于未指定初始值的枚举成员，其值为前一个枚举成员的值加 1：

```ts
enum Direction {
  Up = 1,
  Down, // 2
  Left = 10,
  Right // 11
}
```

数值型枚举是 number 类型的子类型，因此允许将数值型枚举类型赋值给 number 类型：

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}
const direction: number = Direction.Up;
```

number 类型也能够赋值给枚举类型，即使 number 类型的值不在枚举成员值的列表中也不会产生错误：

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}
const d1: Direction = 0; // Direction.Up
const d2: direction = 10; // 不会产生错误
```

##### 2.3.3.2 字符串枚举

字符串枚举与数值型枚举相似。在字符串枚举中，枚举成员的值为字符串。字符串枚举成员必须使用字符串字面量或另一个字符串枚举成员来初始化。字符串枚举成员没有自增长的行为：

```ts
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',

  U = Up,
  D = Down,
  L = Left,
  R = Right
}
```

字符串枚举是 string 类型的子类型，因此允许将字符串枚举类型赋值给 string 类型。但是反过来，**不允许将 string 类型赋值给字符串枚举类型**，这点与数值型枚举是不同的。

##### 2.3.3.3 异构型枚举

TypeScript 允许在一个枚举中同时定义数值型枚举成员和字符串枚举成员，将这种类型的枚举称作异构型枚举。异构型枚举在实际代码中很少被使用，虽然在语法上允许定义昇构型枚举，但是**不推荐在代码中使用舁构型枚举**。可以尝试使用对象来代替异构型枚举：

```ts
enum Color {
  Black = 0,
  White = 'White'
}
```

**注意**：

1. 在定义异构型枚举时，不允许使用计算的值作为枚举成员的初始值。
2. 在异构型枚举中，必须为紧跟在字符串枚举成员之后的数值型枚举成员指定一个初始值。

##### 2.3.3.4 枚举成员映射

不论是哪种类型的枚举，都可以通过枚举成员名去访问枚举成员值。对于数值型枚举，不但可以通过枚举成员名来获取枚举成员值，也可以反过来通过枚举成员值去获取枚举成员名：

```ts
enum Bool {
  False = 0,
  True = 1
}

Bool.False; // 0
Bool[Bool.True]; // "True"
```

对于字符串枚举和异构型枚举，则不能够通过枚举成员值去获取枚举成员名。

##### 2.3.3.5 常量枚举成员与计算枚举成员

每个枚举成员都有一个值，根据枚举成员值的定义可以将枚举成员划分为以下两类：

- **常量枚举成员**

  若枚举类型的第一个枚举成员没有定义初始值，那么该枚举成员是常量枚举成员并且初始值为 0。

  若枚举成员没有定义初始值并且与之紧邻的前一个枚举成员值是数值型常量，那么该枚举成员是常量枚举成员并且初始值为紧邻的前枚举成员值加 1。如果紧邻的前一个枚举成员的值不是数值型常量，那么将产生错误。

  若枚举成员的初始值是常量枚举表达式，那么该枚举成员是常量枚举成员。常量枚举表达式是 TypeScript 表达式的子集，它能够在编译阶段被求值。常量枚举表达式的具体规则如下：

  - 可以是数字字面量、字符串字面量和不包含替换值的模板字面量。
  - 可以是对前面定义的常量枚举成员的引用。
  - 可以是用分组运算符包围起来的常量枚举表达。
  - 可以使用一元运算符操作数 "+" "-" "~"，操作数必须为常量枚举表达式。
  - 可以使用二元运算符 "+" "-" `"*"` `"**"` "/" "%" "<<" ">>" ">>>" "&" "|" "^"，两个操作数必须为常量枚举表达式。

  例如，下例中的枚举成员均为常量枚举成员：

  ```ts
  enum Foo {
    A = 0, // 数字字面量
    B = 'B', // 字符串字面量
    C = `C`, // 无替换值的模板字面量
    D = A // 引用前面定义的常量枚举成员
  }
  enum Bar {
    A = -1, // 一元运算符
    B = 1 + 2, // 二元运算符
    C = (4 / 2) * 3 // 分组运算符（小括号）
  }
  ```

  字面量枚举成员是常量枚举成员的子集。字面量枚举成员是指满足下列条件之一的枚举成员，具体条件如下：

  - 枚举成员没有定义初始值。
  - 枚举成员的初始值为数字字面量、字符串字面量和不包含替换值的模板字面量。
  - 枚举成员的初始值为对其他字面量枚举成员的引用。

  下例中，Foo 枚举的所有成员都是字面量枚举成员，同时它们也都是常量枚举成员：

  ```ts
  enum Foo {
    A,
    B = 1,
    C = -3,
    D = 'foo',
    E = `bar`,
    F = A
  }
  ```

- **计算枚举成员**

  除常量枚举成员之外的其他枚举成员都属于计算枚举成员：

  ```ts
  enum Foo {
    A = 'A'.length,
    B = Math.pow(2, 3)
  }
  ```

**使用示例**
**枚举表示一组有限元素的集合，并通过枚举成员名来引用集合中的元素**。有时候，程序中并不关注枚举成员值。在这种情况下，让 TypeScript 去自动计算枚举成员值是很方便的：

```ts
enum Direction {
  Up,
  Right,
  Left,
  Down
}

function move(direction: Direction) {
  switch (direction) {
    case Direction.Up:
      console.log('Up');
      break;
    case direction.Down:
      console.log('Down');
      break;
    case Direction.Left:
      console.log('Left');
    case Direction.Right:
      console.log('Right');
  }
}
move(Direction.Up); // 'Up'
```

**程序不依赖枚举成员值时，能够降低代码耦合度，使程序易于扩展**。例如，想给 Direction 枚举添加一个名为 None 的枚举成员来表示未知方向。按照惯例，None 应作为第一个枚举成员。因此，可以将代码修改如下：

```ts
enum Direction {
  None,
  Up,
  Right,
  Left,
  Down
}

function move(direction: Direction) {
  switch (direction) {
    case Direction.None:
      console.log('None');
      break;
    case Direction.Up:
      console.log('Up');
      break;
    case direction.Down:
      console.log('Down');
      break;
    case Direction.Left:
      console.log('Left');
    case Direction.Right:
      console.log('Right');
  }
}
move(Direction.None); // 'None'
```

此例中，枚举成员 Up、Down、Left 和 Right 的值已经发生了改变，Up 的值由 0 变为 1，以此类推。由于 move() 函数的行为不直接依赖枚举成员的值，因此本次代码修改对 move() 函数的已有功能不产生任何影响。但如果程序中依赖了枚举成员的具体值，那么这次代码修改就会破坏现有的代码。

##### 2.3.3.6 联合枚举类型

**当枚举类型中的所有成员都是字面量枚举成员时，该枚举类型成了联合枚举类型**。

**联合枚举成员类型**
联合枚举类型中的枚举成员除了能够表示一个常量值外，还能够表示一种类型，即联合枚举成员类型。**联合枚举成员类型是联合枚举类型的子类型，因此可以将联合枚举成员类型赋值给联合枚举类型**。

下例中，Direction 枚举是联合枚举类型，Direction 枚举成员 Up、DoWn、Le 和 Right 既表示数值常量，也表示联合枚举成员类型：

```ts
enum Direction {
  Up,
  Right,
  Left,
  Down
}
// 第一个 Direction.Up 表示联合枚举成员类型，第二个 Direction.Up 则表示数值常量 0
const up: Direction.Up = Direction.Up;
// 常量 up 的类型是联合枚举成员类型 Direction.Up，常量 direction 的类型是联合枚举类型 Direction。
// 由于 Direction.Up 类型是 Direction 类型的子类型，因此可以将常量 up 赋值给常量 direction
const direction: Direction = up;
```

**联合枚举类型**
联合枚举类型是由所有联合枚举成员类型构成的联合类型。示例如下

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

type UnionDirectionType = Direction.Up | Direction.Down | Direction.Left | Direction.Right;
```

上例中 Direction 枚举是联合枚举类型，它等同于联合类型 UnionDirectionType 其中 “|” 符号是定义联合类型的语法。关于联合类型的详细介绍请参考 6.3 节<!--TODO-->。

由于联合枚举类型是由固定数量的联合枚举成员类型构成的联合类型，因此编译器能够利用该性质对代码进行类型检査。示例如下：

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// 编译器能够分析岀 Direction 联合枚举类型只包含四种可能的联合枚举成员类型。
function f(direction: Direction) {
  if (direction === Direction.Up) {
    //  Direction.Up
  } else if (direction === Direction.Down) {
    // Direction.Down
  } else if (direction === Direction.Left) {
    // Direction.Left
  } else {
    // 在 if-else 语句中，编译器能够根据控制流分析出最后的 else 分支中 Direction 的类型为 Direction.Right
    direction;
  }
}
```

下面再来看另外一个例子。Foo 联合枚举类型由两个联合枚举成员类型 Foo.A 和 Foo.B 构成。编译器能够检查出在第 7 行 if 条件判断语句中的条件表达式结果永远为 true，因此将产生编译错误：

```ts
enum Foo {
  A = 'A',
  B = 'B'
}

function bar(foo: Foo) {
  if (fool !== Foo.A || Foo !== Foo.B) {
    // 编译错误：该条件永远为 true
  }
}
```

下例中，由于 Foo 联合枚举类型等同于联合类型 Foo.A|Foo.B，因此它是联合类型 'A'|'B' 的子类型：

```ts
enum Foo {
  A = 'A',
  B = 'B'
}

enum Bar {
  A = 'A'
}

enum Baz {
  B = 'B',
  C = 'C'
}

// f1 接受 'A'|'B' 联合类型的参数
function f1(x: 'A' | 'B') {
  console.log(x);
}

function f2(foo: Foo, bar: Bar, baz: Baz) {
  // 允许使用 Foo 枚举类型的参数 foo 调用函数 f1，因为 Foo 枚举类型是 'A'|'B' 类型的子类型
  f1(foo);
  // 允许使用 Bar 枚举类型的参数 bar 调用函数 f1，因为 Bar 枚举类型是 'A' 类型的子类型，也是 'A'|'B' 类型的子类型
  f1(bar);
  // 不允许使用 Baz 枚举类型的参数 baz 调用函数 f1，因为 Baz 枚举类型是 'B'|'C' 类型的子类型
  // 错误：类型 'Baz' 不能赋值给参数类型 'A' | 'B'
  f1(baz);
}
```

关于子类型兼容性的详细介绍请参考 7.1 节

##### 2.3.3.7 const 枚举类型

枚举类型是 TypeScript 对 JS 的扩展，JS 语言本身并不支持枚举类型。在编译时，TypeScript 编译器会将枚举类型编译为 JS 对象。例如，定义如下的枚举：

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

const d: Direction = Direction.Up;
```

此例中的代码编译后生成的 JS 代码如下所示，为了支持枚举成员名与枚举成员值之间的正、反向映射关系，TypeScript 还生成了一些额外的代码：

```js
'use strict';
var Direction;
(function (Direction) {
  Direction[(Direction['Up'] = 0)] = 'Up';
  Direction[(Direction['Down'] = 1)] = 'Down';
  Direction[(Direction['Left'] = 2)] = 'Left';
  Direction[(Direction['Right'] = 3)] = 'Right';
})(Direction || (Direction = {}));

const d = Direction.Up;
```

有时候不会使用枚举成员值到枚举成员名的反向映射，因此没有必要生成额外的反向映射代码，只需要生成如下代码就能够满足需求：

```js
'use strict';
var Direction;
(function (Direction) {
  Direction['Up'] = 0;
  Direction['Down'] = 1;
  Direction['Left'] = 2;
  Direction['Right'] = 3;
})(Direction || (Direction = {}));

const d = Direction.Up;
```

更进一步讲，如果只关注枚举类型的使用方式就会发现，完全不需要生成与 Direction 对象相关的代码，只需要将 Direction.Up 替换为它所表示的常量 0 即可。经过此番删减后的代码量将大幅减少，并且不会改变程序的运行结果，如下所示：

```js
'usestrict';
const d = 0;
```

const 枚举类型具有相似的效果。**const 枚举类型将在编译阶段被完全删除，并且在使用了 const 枚举类型的地方会直接将 const 枚举成员的值内联到代码中**。const 枚举类型使用 `const enum` 关键字定义。

```ts

```
