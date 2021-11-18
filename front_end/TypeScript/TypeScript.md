# TypeScript

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
    - [2.4 枚举类型](#24-枚举类型)
      - [2.4.1 数值型枚举](#241-数值型枚举)
      - [2.4.2 字符串枚举](#242-字符串枚举)
      - [2.4.3 异构型枚举](#243-异构型枚举)
      - [2.4.4 枚举成员映射](#244-枚举成员映射)
      - [2.4.5 常量枚举成员与计算枚举成员](#245-常量枚举成员与计算枚举成员)
      - [2.4.6 联合枚举类型](#246-联合枚举类型)
      - [2.4.7 const 枚举类型](#247-const-枚举类型)
    - [2.5 字面量类型](#25-字面量类型)
    - [2.6 单元类型](#26-单元类型)
    - [2.7 顶端类型](#27-顶端类型)
      - [2.7.1 any](#271-any)
      - [2.7.1 unknown](#271-unknown)
    - [2.8 尾端类型](#28-尾端类型)
      - [2.8.1 never](#281-never)
      - [2.8.2 应用场景](#282-应用场景)
    - [2.9 数组类型](#29-数组类型)
      - [2.9.1 数组类型定义](#291-数组类型定义)
      - [2.9.2 数组元素类型](#292-数组元素类型)
      - [2.9.3 只读数组](#293-只读数组)
        - [2.9.3.1 注意事项](#2931-注意事项)
    - [2.10 元组类型](#210-元组类型)
      - [2.10.1 只读元组](#2101-只读元组)
      - [2.10.2 访问元组中的元素](#2102-访问元组中的元素)
      - [2.10.3 元组类型中的可选元素](#2103-元组类型中的可选元素)
      - [2.10.4 元组类型中的剩余元素](#2104-元组类型中的剩余元素)
      - [2.10.5 元组的长度](#2105-元组的长度)
    - [2.11 对象类型](#211-对象类型)
      - [2.11.1 Object](#2111-object)
      - [2.11.2 object](#2112-object)
      - [2.11.3 对象类型字面量](#2113-对象类型字面量)
        - [2.11.3.1 属性签名](#21131-属性签名)
        - [2.11.3.2 可选类型](#21132-可选类型)
        - [2.11.3.3 只读属性](#21133-只读属性)
        - [2.11.3.4 空对象类型字面量](#21134-空对象类型字面量)
      - [2.11.4 弱类型](#2114-弱类型)
      - [2.11.5 多余属性](#2115-多余属性)
        - [2.11.5.1 多余属性检查](#21151-多余属性检查)
        - [2.11.5.2 允许多余属性](#21152-允许多余属性)
    - [2.12 函数类型](#212-函数类型)
      - [2.12.1 常规参数类型](#2121-常规参数类型)
      - [2.12.2 可选参数类型](#2122-可选参数类型)
      - [2.12.3 默认参数类型](#2123-默认参数类型)
      - [2.12.4 剩余参数类型](#2124-剩余参数类型)
      - [2.12.5 解构参数类型](#2125-解构参数类型)
      - [2.12.6 返回值类型](#2126-返回值类型)
      - [2.12.7 函数类型字面量](#2127-函数类型字面量)
      - [2.12.8 调用签名](#2128-调用签名)
      - [2.12.9 构造函数类型字面量](#2129-构造函数类型字面量)
      - [2.12.10 构造签名](#21210-构造签名)
      - [2.12.11 调用签名与构造签名](#21211-调用签名与构造签名)
      - [2.12.12 重载函数](#21212-重载函数)
        - [2.12.12.1 函数重载](#212121-函数重载)
        - [2.12.12.2 函数实现](#212122-函数实现)
        - [2.12.12.3 函数重载解析顺序](#212123-函数重载解析顺序)
        - [2.12.12.4 重载函数的类型](#212124-重载函数的类型)
      - [2.12.13 函数中 this 值的类型](#21213-函数中-this-值的类型)
        - [2.12.13.1 --noImplicitThis](#212131-noimplicitthis)
        - [2.12.13.2 函数的 this 参数](#212132-函数的-this-参数)
    - [2.13 接口](#213-接口)
      - [2.13.1 接口声明](#2131-接口声明)
      - [2.13.2 方法签名](#2132-方法签名)
      - [2.13.3 索引签名](#2133-索引签名)
        - [2.13.3.1 字符串索引签名](#21331-字符串索引签名)
        - [2.13.3.2 数值索引签名](#21332-数值索引签名)
      - [2.13.4 可选属性与方法](#2134-可选属性与方法)
      - [2.13.5 只读属性与方法](#2135-只读属性与方法)
      - [2.13.6 接口的继承](#2136-接口的继承)
    - [2.14 类型别名](#214-类型别名)
      - [2.14.1 类型别名声明](#2141-类型别名声明)
      - [2.14.2 递归的类型别名](#2142-递归的类型别名)
      - [2.14.3 类型别名与接口的差别](#2143-类型别名与接口的差别)
    - [2.15 类](#215-类)
      - [2.15.1 类的定义](#2151-类的定义)
        - [2.15.1.1 类声明](#21511-类声明)
        - [2.15.1.2 类表达式](#21512-类表达式)
      - [2.15.2 成员变量](#2152-成员变量)
        - [5.15.2.1 --strictPropertyInitialization](#51521-strictpropertyinitialization)
        - [2.15.2.2 readonly 属性](#21522-readonly-属性)
      - [2.15.3 成员函数](#2153-成员函数)
      - [2.15.4 成员存取器](#2154-成员存取器)
      - [2.15.5 索引成员](#2155-索引成员)
      - [2.15.6 成员可访问性](#2156-成员可访问性)

<!-- /code_chunk_output -->

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
  void 类型表示某个值不存在，该类型用作函数的返回值类型。若一个函数没有返回值，那么该函数的返回值类型为 void 类型。除了将 void 类型作为[函数返回值类型](#2126-返回值类型)外，在其他地方使用 void 类型是无意义的。

  > 当启用 strictNullChecks 编译选项时，只允许将 undefined 值赋值给 void 类型。没有启用 strictNullChecks 编译选项，那么允许将 undefined 和 null 赋值给 void 类型。

- **[枚举类型](#24-枚举类型)**

- **[字面量类型](#25-字面量类型)**

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

**unique symbol 类型的主要用途是用作接口、类等类型中的可计算属性名**。因为如果使用可计算属性名在接口中添加了一个类型成员，那么必须保证该类型成员的名字是固定的，否则接口定义将失去意义。下例中，允许将 unique symbol 类型的常量 x 作为接口的类型成员，而 symbol 类型的常量 y 不能作为接口的类型成员，因为 symbol 类型不止包含一个可能值：

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

在默认情况下，`strictNullchecks` 编译选项没有被启用。这时候，除尾端类型外的所有类型都是 Nullable 类型。也就是说，除[尾端类型](#28-尾端类型)外所有类型都能够接受 undefined 值和 null 值。

当启用了 `strictNullchecks` 编译选项时，undefined 值和 null 值不再能够赋值给不相关的类型。例如，undefined 值和 null 值不允许赋值给 string 类型。在该模式下，undefined 值只能够赋值给 undefined、顶端、void 类型；null 值只能赋值给 null 类型和顶端类型。

### 2.4 枚举类型

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

#### 2.4.1 数值型枚举

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

#### 2.4.2 字符串枚举

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

#### 2.4.3 异构型枚举

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

#### 2.4.4 枚举成员映射

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

#### 2.4.5 常量枚举成员与计算枚举成员

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

#### 2.4.6 联合枚举类型

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

#### 2.4.7 const 枚举类型

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
const enum Directions {
  Up,
  Down,
  Left,
  Right
}

const directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```

TypeScript 编译器编译后生成的 JS 代码：

```js
'use strict';
const directions = [0 /*Up*/, 1 /*Down*/, 2 /*Left*/, 3 /*Right*/];
```

为了便于代码调试与保持代码的可读性，TypeScript 编译器在内联了 const 枚举成员的位置还额外添加了注释，注释的内容为枚举成员的名字。

### 2.5 字面量类型

TypeScript 支持将字面量作为类型使用，称之为字面量类型。每一个字面量类型都只有一个可能的值，即字面量本身。

- **boolean 字面量类型**

  boolean 字面量类型只有两种：true、false。原始类型 boolean 等同于由 true 字面量类型和 false 字面量类型构成的联合类型，即：

  ```ts
  type BooleanAlias = true | false;
  ```

  true 字面量类型只能接受 true 值；同理，false 字面量类型只能接受 false 值：

  ```ts
  const a: true = true;
  const b: false = false;
  ```

  boolean 字面量类型是 boolean 类型的子类型，因此可以将 boolean 字面量类型赋值给 boolean 类型。

- **string 字面量类型**

  字符串字面量和模板字面量都能够创建字符串。字符串字面量和不带参数的模板字面量可以作为 string 字面量类型使用：

  ```ts
  const a: 'hello' = 'hello';
  const b: `world` = `world`;
  ```

  string 字面量类型是 string 类型的子类型，因此可以将 string 字面量类型赋值给 string 类型。

- **数字字面量类型**

  数字字面量类型包含以下两类：

  - number 字面量类型
  - bigint 字面量类型

  所有的二进制、八进制、十进制和十六进制数字字面量都可以作为数字字面量类型：

  ```ts
  const a0: 0b1 = 1;
  const b0: 0o1 = 1;
  const c0: 1 = 1;
  const d0: 0x1 = 1;

  const a1: 0b1n = 1n;
  const b1: 0o1n = 1n;
  const c1: 1n = 1n;
  const d1: 0x1n = 1n;
  ```

  number 字面量类型和 bigint 字面量类型分别是 number 类型和 bigint 类型的子类型，因此可以进行赋值操作。

- **枚举成员字面量类型**

  在[枚举类型](#24-枚举类型)中介绍了联合枚举成员类型。也可以将其称作枚举成员字面量类型，因为联合枚举成员类型使用枚举成员字面量形式表示。

### 2.6 单元类型

单元类型（Unit Type）也叫作单例类型（Singleton Type），指的是仅包含一个可能值的类型。由于这个特殊的性质，编译器在处理单元类型时甚至不需要关注单元类型表示的具体值。TypeScript 中的单元类型有以下几种：

- undefined
- null
- unique symbol
- void
- 字面量类型
- 联合枚举成员类型

能够看到这些单元类型均只包含一个可能值。示例如下：

```ts
const a: undefined = undefined;
const b: null = null;
const c: unique symbol = Symbol();
const d: void = undefined;
const e: 'hello' = 'hello';

enum Foo {
  A,
  B
}
const f: Foo.A = Foo.A;
```

### 2.7 顶端类型

顶端类型（Top Type）源自于数学中的类型论，同时它也被广泛应用于计算机编程语言中。顶端类型是一种通用类型，有时也称为通用超类型，因为在类型系统中，所有类型都是顶端类型的子类型，或者说顶端类型是所有其他类型的父类型。顶端类型涵盖了类型系统中所有可能的值。TypeScript 中有以下两种顶端类型：

- any
- unknown

#### 2.7.1 any

any 类型是从 TypeScript 1.0 开始就支持的一种顶端类型。any 类型使用 `any` 关键字作为标识。在 TypeScript 中，所有类型都是 any 类型的子类型。可以将任何类型的值赋值给 any 类型。

> **注意**：虽然 any 类型是所有类型的父类型，但是 TypeScript 允许将 any 类型赋值给任何其他类型。

在 any 类型上**允许执行任意的操作而不会产生编译错误**。例如，可以读取 any 类型的属性或者将 any 类型当作函数调用，就算 any 类型的实际值不支持这些操作也不会产生编译错误。

在程序中，使用 any 类型来跳过编译器的类型检查。如果声明了某个值的类型为 any 类型，那么就相当于告诉编译器：“不要对这个值进行类型检查。”当 TypeScript 编译器看到 any 类型的值时，也会对它开启 “绿色通道”，让其直接通过类型检查。在将已有的 JS 程序迁移到 TypeScript 程序的过程中，使用 any 类型来暂时绕过类型检査是一项值得掌握的技巧。

从长远来看，应该**尽量减少在代码中使用 any 类型**。因为只有开发者精确地描述了类型信息，TypeScript 蝙编译器才能够更加准确有效地进行类型检查，这也是选择使用 TypeScript 语言的主要原因之一。

**--noImplicitAny**
TypeScript 中的类型注解是可选的。若一个值没有明确的类型注解，编译器又无法自动推断出它的类型，那么这个值的默认类型为 any 类型。示例如下：

```ts
function f1(x) {
  //  参数 x 的类型为 any
  console.log(x);
}

function f2(x: any) {
  console.log(x);
}
```

此例中，函数 f1 的参数 x 没有使用类型注解，编译器也无法从代码中推断出参数 x 的类型。于是，函数 f1 的参数 x 将隐式地获得 any 类型。最终，函数 f1 的类型等同于函数 f2 的类型。在这种情况下，编译器会默默地忽略对参数 x 的类型检査，这会导致编译器无法检查岀代码中可能存在的错误。

在大多数情况下，想要避免上述情况的发生。因此 TypeScript 提供了一个 `--noImplicitAny` 编译选项来控制该行为。当启用了该编译选项时，如果发生了隐式的 any 类型转换，那么会产生编译错误。关于配置文件的详细介绍参考 8.3 节<!--TODO-->。

#### 2.7.1 unknown

TypeScript 3.0 版本引入了另一种顶端类型 unknown。unknown 类型使用 `unknown` 关键字作为标识。

根据顶端类型的性质，任何其他类型都能够赋值给 unknown 类型，该行为与 any 类型是一致的。unknown 类型是比 any 类型更安全的顶端类型，因为 unknown 类型只允许赋值给 any 类型和 unknown 类型，而不允许赋值给任何其他类型，该行为与 any 类型是不同的。

```ts
let x: unknown;

// 正确
const a1: any = x;
const b1: unknown = x;
// 错误
const a2: boolean = x;
const b2: string = x;
const c2: number = x;
const d2: bigint = x;
const e2: symbol = x;
const f2: undefined = x;
const g2: null = x;
```

同时，在 unknown 类型上也**不允许执行绝大部分操作**。在程序中使用 unknown 类型时，必须将其细化为某种具体类型，否则将产生编译错误。

```ts
function f(message: unknown) {
  return message.length;
  // 编译错误！属性 length 不存在于 unknown 类型上
}
```

下面的例子中，使用 typeof 运算符去检查参数 message 是否为字符串，只有当 message 是一个字符串时，才会去读取其 length 属性。这样修改之后，既不会产生编译错误，也不会产生运行时错误。

```ts
function f2(message: unknown) {
  if (typeof message === 'string') {
    return message.length;
  }
}

t2(undefined);
```

### 2.8 尾端类型

在类型系统中，尾端类型（Bottom Type）是所有其他类型的子类型。由于一个值不可能同时属于所有类型，例如一个值不可能同时为数字类型和字符串类型，因此尾端类型中不包含任何值。尾端类型也称作 0 类型或者空类型。TypeScript 中只存在一种尾端类型，即 `never` 类型。

#### 2.8.1 never

TypeScript 2.0 版本引入了仅有的尾端类型 never 类型。never 类型使用 `never` 关键字来标识，不包含任何可能值。示例如下：

```ts
function f(): never {
  throw new Error();
}
```

根据尾端类型的定义，never 类型是所有其他类型的子类型。所以，**never 类型允许赋值给任何类型**，尽管并不存在 never 类型的值。正如尾端类型其名，它在类型系统中位于类型结构的最底层，没有类型是 never 类型的子类型。因此，**除 never 类型自身外，所有其他类型都不能够赋值给 never 类型**。

> **注意**：就算是类型约束最宽松的 any 类型也不能赋值给 never 类型。

#### 2.8.2 应用场景

never 类型主要有以下几种典型的应用场景：

1. never 类型**可以作为函数的返回值类型**，它表示该函数无法返回一个值。

   如果函数体中没有使用 return 语句，那在正常执行完函数代码后会返回一个 undefined 值。在这种情况下，函数的返回值类型是 void 类型而不是 never 类型。只有在函数根本无法返回一个值的时候，函数的返回值类型才是 never 类型。

   - 一种情况就是函数中抛出了异常，这会导致函数终止执行，从而不会返回任何值。在这种情况下，函数的返回值类型为 never 类型。

     ```ts
     function throwError(): never {
       throw new Error();
       // 该函数永远无法执行到末尾，返回值类型为 never
     }
     ```

     若函数中的代码不是直接抛出异常而是间接地抛出异常，那么函数的返回值类型也是 never 类型：

     ```ts
     function throwError(): never {
       throw new Error();
     }

     function fail(): never {
       return throwError();
     }
     ```

   - 另一种情况函数是：如果函数体中存在无限循环从而导致函数的执行永远也不会结束，那么在这种情况下函数的返回值类型也为 never 类型：

     ```ts
     function infiniteLoop(): never {
       while (true) {
         console.log('endless...');
       }
     }
     ```

2. **在 “条件类型” 中常使用 never 类型来帮助完成一些类型运算**。例如，`Exclude<T, U>` 类型是 TypeScript 内置的工具类型之一，它借助于 never 类型实现了从类型 T 中过滤掉类型 U 的功能：

   ```ts
   type EXclude<T, U> = T extends U ? never : T;
   ```

   下例中，使用 `Exclude<T, U>` 工具类型从联合类型 "boolean | string" 中剔除了 string 类型，最终得到的结果类型为 boolean 类型：

   ```ts
   type T = EXclude<boolean | string, string>; // boolean
   ```

   关于条件类型的详细介绍请参考 6.7 节<!--TODO-->。

3. 在 TypeScript 编译器**执行类型推断操作时，如果发现已经没有可用的类型**，那么推断结果为 never 类型：

   ```ts
   function getLength(message: string) {
     if (typeof message === 'string') {
       message; // string
     } else {
       message; // never
     }
   }
   ```

   在 else 分支中参数 message 的类型应该是非 string 类型。而函数声明中又定义了参数 message 的类型是 string 类型，因此 else 分支中已经不存在其他可选类型。在这种情况下，TypeScript 编译器会将参数 message 的类型推断为 never 类型，表示不存在这样的值。

### 2.9 数组类型

数组是十分常用的数据结构，它表示一组有序元素的结合。在 TypeScript 中，数组值的数据类型为数组类型。

#### 2.9.1 数组类型定义

TypeScript 提供了以下两种方式来定义数组类型：

- **简便数组类型表示法**

  简便数组类型表示法借用了数组字面量的语法，通过在数组元素类型之后添加一对方括号 "[]" 来定义数组类型：

  ```ts
  TElement[]
  ```

  该语法中，TElement 代表数组元素的类型，"[]" 代表数组类型。在 TElement 与 "[]" 之间不允许出现换行符号。

  下例中，使用 "number[]" 类型注解定义了常量 digits 的类型为 number 数组类型，它表示 digits 数组中元素的类型为 number 类型。

  ```ts
  const digits: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  ```

  如果数组中元素的类型为复合类型，则需要在数组元素类型上使用分组运算符，即小括号。例如，下例中的 red 数组既包含字符串元素也包含数字元素。因此，red 数组元素的类型为 string 类型和 number 类型构成的联合类型，即 "string|number"。在使用简便数组类型表示法时，必须先将联合类型放在分组运算符内，然后再在后面添加一对方括号：

  ```ts
  const red: (string | number)[] = ['f', 0, 0, 0, 0];
  ```

  此例中，若在类型注解里没有使用分组运算符，则表示 string 类型和 number 类型的联合类型，即 "string |(number[])"。该类型与实际数组类型不兼容，因此将产生编译错误。

- **泛型数组类型表示法**

  泛型数组类型表示法是另一种表示数组类型的方法。顾名思义，泛型数组类型表示法就是使用泛型来表示数组类型。它的语法如下所：

  ```ts
  Array<TElement>
  ```

  该语法中，Array 代表数组类型；`<TElement>` 是类型参数的语法，其中 Element 代表数组元素的类型。关于泛型的详细介绍请参考 6.1 节<!--TODO-->。

  下例中，使用 `Array<number>` 类型注解定义了常量 digits 的类型为 number 数组类型，它表示 digits 数组中元素的类型为 number 类型：

  ```ts
  const digits: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  ```

  在使用泛型数组类型表示法时，就算数组中元素的类型为复合类型也不需要使用分组运算符。还是以既包含字符串元素也包含数字元素的 red 数组为例：

  ```ts
  const red: Array<string | number> = ['f', 0, 0, 0, 0];
  ```

**简便数组类型表示法和泛型数组类型表示法在功能上没有任何差别，两者只是在编程风格上有所差别**。

在定义简单数组类型时，如数组元素为单一原始类型或类型引用，使用简便数组类型表示法更加清晰和简洁。如果数组元素是复杂类型，如对象类型和联合类型等，则可以选择使用泛型数组类型表示法。它也许能让代码看起来更加整洁一些。目前存在以下三种常见的编码风格参考：

- 始终使用简便数组类型表示法
- 始终使用泛型数组类型表示法
- 当数组元素类型为单一原始类型或类型引用时，始终使用简便数组类型表示法；在其他情况下不做限制。

#### 2.9.2 数组元素类型

在定义了数组类型之后，当访问数组元素时能够获得正确的元素类型信息：

```ts
const digits: number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// number类型
const zero = digits[0];
```

此例中，虽然没有给常量 zero 添加类型注解，但是 TypeScript 编译器能够从数组类型中推断出 zero 的类型为 number 类型。知道，当访问数组中不存在的元素时将返回 undefined 值。TypeScript 的类型系统无法推断岀是否存在数组访问越界的情况，因此即使访问了不存在的数组元素，还是会得到声明的数组元素类型。

#### 2.9.3 只读数组

只读数组与常规数组的区别在于，只读数组仅允许程序读取数组元素而不允许修改数组元素。TypeScript 提供了以下三种方式来定义一个只读数组，这三种定义只读数组的方式只是语法不同，它们在功能上没有任何差别：

- 使用 `ReadonlyArray<T>` 内置类型
  在 TypeScript 早期版本中，提供了 `ReadonlyArray<T>` 类型专门用于定义只读数组。在该类型中，类型参数 T 表示数组元素的类型。

  ```ts
  const red: ReadonlyArray<number> = [255, 0, 0];
  ```

- 使用 `readonly` 修饰符
  TypeScript 3.4 版本中引入了一种新语法，使用 readonly 修饰符能够定义只读数组。在定义只读数组时，将 readonly 修饰符置于数组类型之前即可。

  ```ts
  const red: readonly number[] = [255, 0, 0];
  ```

  > **注意**：readonly 修饰符不允许与泛型数组类型表示法一起使用。

- 使用 `Readonly<T>` 工具类型
  `Readonly<T>` 是 TypeScript 提供的一个内置工具类型，用于定义只读对象类型。该工具类型能够将类型参数 T 的所有属性转换为只读属性，定义如下：

  ```ts
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
  ```

  由于 TypeScript 3.4 支持了使用 readonly 修饰符来定义只读数组，所以从 TypeScript 3.4 开始可以使用 `Readonly<T>` 工具类型来定义只读数组。

  ```ts
  const red: Readonly<number[]> = [255, 0, 0];
  ```

  > **注意**：类型参数 T 的值为数组类型 number[]，而不是数组元素类型 number。

##### 2.9.3.1 注意事项

1. 可以通过数组元素索引来访问只读数组元素，但是不能修改只读数组元素。
2. 在只读数组上也不支持任何能够修改数组元素的方法，如 push 和 pop 方法等。
3. 在进行赋值操作时，允许将常规数组类型赋值给只读数组类型，但是不允许将只读数组类型赋值给常规数组类型。换句话说，不能通过赋值操作来放宽对只读数组的约束。

### 2.10 元组类型

**元组（Tuple）表示由有限元素构成的有序列表**。在 JS 中没有提供原生的元组数据类型。TypeScrip 对此进行了补充，提供了元组数据类型。由于元组与数组之间存在很多共性，因此 TypeScript 使用数组来表示元组。在 TypeScript 中，**元组类型是数组类型的子类型。元组是长度固定的数组，并且元组中每个元素都有确定的类型**。

定义元组类型的语法与定义数组字面量的语法相似，语法如下：

```ts
[T0, T1, ..., Tn]
```

该语法中的 T0、T1 和 Tn 表示元组中元素的类型，针对元组中每个位置上的元素都需要定义其数据类型。

下例中，使用元组来表示二维坐标系中的一个点。该元组中包含两个 number 类型的元素，分别表示点的横坐标和纵坐标：

```ts
const point: [number, number] = [0, 0];
```

元组中每个元素的类型不必相同。例如，可以定义一个表示考试成绩的元组，元组的第一个元素是 string 类型的科目名，第二个元素是 number 类型的分数：

```ts
const score: [string, number] = ['math', 100];
```

**注意**：

1. 元组的值实际上是一个数组，在给元组类型赋值时，数组中每个元素的类型都要与元组类型的定义保持兼容。
2. 若数组元素的类型与元组类型的定义不匹配，则会产生编译错误。
3. 在给元组类型赋值时，还要保证数组中元素的数量与元组类型定义中元素的数量保持一致，否则将产生编译错误。

#### 2.10.1 只读元组

元组可以定义为只读元组，这与只读数组是类似的。只读元组类型是只读数组类型的子类型。定义只读元组有以下两种方式：

- **使用 readonly 修饰符**
  TypeScript 3.4 版本中引入了一种新语法，使用 readonly 修饰符能够定义只读元组。在定义只读元组时，将 readonly 修饰符置于元组类型之前即可：

  ```ts
  const point: readonly [number, number] = [0, 0];
  ```

- **使用 `Readonly<T>` 工具类型**

  由于 TypeScript 3.4 支持了使用 readonly 修饰符来定义只读元组，所以从 TypeScript 3.4 开始可以使用 `Readonly<T>` 工具类型来定义只读元组：

  ```ts
  const point: Readonly<[number, number]> = [0, 0];
  ```

> 在进行赋值操作时，允许将常规元组类型赋值给只读元组类型，但是不允许将只读元组类型赋值给常规元组类型。换句话说，不能通过赋值操作来放宽对只读元组的约束。

#### 2.10.2 访问元组中的元素

由于元组在本质上是数组，所以可以使用访问数组元素的方法去访问元组中的元素。在访问元组中指定位置上的元素时，编译器能够推断出相应的元素类型。

当访问数组中不存在的元素时不会产生编译错误。与之不同的是当**访问元组中不存在的元素时会产生编译错误**。

修改元组元素值的方法与修改数组元素值的方法相同。

#### 2.10.3 元组类型中的可选元素

在定义元组时，可以将某些元素定义为可选元素。定义元组可选元素的语法是在元素类型之后添加一个问号 “?”：

```ts
[T0?, T1?, ..., Tn?]
```

该语法中的 T0、T1 和 Tn 表示元组中元素的类型。如果元组中同时存在可选元素和必选元素，那么可选元素必须位于必选元素之后。

#### 2.10.4 元组类型中的剩余元素

在定义元组类型时，可以将最后一个元素定义为剩余元素。定义元组剩余元素类型的语法如下所示：

```ts
[...T[]]
```

该语法中，元组的剩余元素是数组类型，T 表示剩余元素的类型。

下例中，在元组 tuple 的定义中包含了剩余元素。其中，元组的第一个元素为 number 类型，其余的元素均为 string 类型：

```ts
const tuple: [number, ...string[]] = [0, 'a', 'b'];
```

如果元组类型的定义中含有剩余元素，那么该元组的元素数量是开放的，它可以包含零个或多个指定类型的剩余元素。

#### 2.10.5 元组的长度

对于经典的元组类型，即不包含可选元素和剩余元素的元组而言，元组中元素的数量是固定的。也就是说，元组拥有一个固定的长度。TypeScript 编译器能够识别出元组的长度并充分利用该信息来进行类型检查。示例如下：

```ts
function f(point: [number, numbert]) {
  //  编译器推断出 length 的类型为数字字面量类型 2
  const length = point.length;

  // 编译错误!条件表达式永远为 false
  if (length === 3) {
    // ...
  }
}
```

当元组中包含了可选元素时，元组的长度不再是一个固定值。编译器能够根据元组可选元素的数量识别出元组所有可能的长度，进而构造出一个由数字字面量类型构成的联合类型来表示元组的长度。示例如下：

```ts
const tuple: [boolean, string?, ...?number] = [true, 'yes', 1];
let len = tuple.length; // 1 | 2 | 3

len = 1;
len = 2;
len = 3;
len = 4; // 编译错误！类型 4 不能赋值给 1 | 2 | 3
```

若元组类型中定义了剩余元素，那么该元组拥有不定数量的元素。因此，该元组 length 属性的类型将放宽为 number 类型。

### 2.11 对象类型

在 JS 中存在一种说法，就是 “一切皆为对象"。有这种说法是因为 JS 中的绝大多数值都可以使用对象来表示。例如，函数、数组和对象字面量等本质上都是对象。对于原始数据类型，如 String 类型，JS 提供了相应的构造函数来创建能够表示原始值的对象。

在某些操作中，原始值还会自动地执行封箱操作，将原始数据类型转换为对象数据类型。例如，在字符串字面量上直接调用内置的 `toUpperCase()` 方法时，JS 会先将字符串字面量转换为对象类型，然后再调用字符串对象上的 toUpperCase() 方法。

前面已经介绍过的数组类型、元组类型以及后面章节中将介绍的函数类型、接口等都属于对象类型。由于对象类型的应用非常广泛，因此 TypeScript 提供了多种定义对象类型的方式。在本节中，将首先介绍三种基本的对象类型：

- Object 长类型（首字母为大写字母 O）
- object 类型（首字母为小写字母 o）
- 对象类型字面量

#### 2.11.1 Object

这里的 Object 指的是 Object 类型，而不是 JS 内置的 Object() 构造函数。Object 类型表示一种类型，而 Object() 构造函数则表示一个值。因为 Object() 构造函数是一个值，因此它也有自己的类型。

接下来，深入分析一下 TypeScript 源码中对 Object 构造函数的类型定义。下面仅摘取一部分着重关注的类型定义：

```ts
interface ObjectConstructor {
  readonly prototype: Object;
  // 省略了其他成员
}
declare var Object: ObjectConstructor;
```

由该定义能够直观地了解到 Object() 构造函数的类型是 ObjectConstructor 类型而不是 Object 类型，它们是不同的类型。prototype 属性的类型为 Object 类型。构造函数的 prototype 属性值决定了实例对象的原型。此外，`Object.prototype` 是一个特殊的对象，它是 JS 中的公共原型对象。也就是说，如果程序中没有刻意地修改一个对象的原型，那么该对象的原型链上就会有 Object.prototype 对象，因此也会继承 Object.prototype 对象上的属性和方法。

现在，可以正式地引出 Object 类型。Object 类型是特殊对象 `Object.prototype` 的类型，该类型的主要作用是描述 JS 中几乎所有对象都共享（通过原型继承）的属性和方法。Object 类型里定义的方法都是通用的对象方法。

**兼容性**
Object 类型有一个特点，那就是**除了 undefined 值和 null 值外，其他任何值都可以赋值给 Object 类型**。

对象能够赋值给 Object 类型是理所当然的，但为什么原始值也同样能够赋值给 Object 类型呢？实际上，这样设计正是为了遵循 JS 语言的现有行为。前面介绍了 JS 语言中存在自动封箱操作。当在原始值上调用某个方法时，JS
会对原始值执行封箱操作，将其转换为对象类型，然后再调用相应方法。Object 类型描述了所有对象共享的属性和方法，而 JS 允许在原始值上直接访问这些方法，因此 TypeScript 允许将原始值赋值给 Object 类型。

**常见错误**
在使用 Object 类型时容易出现的一个错误是，将 Object 类型应用于自定义变量、参数或属性等的类型：

```ts
const point: Object = { x: 0, y: 0 };
```

此例中，将常量 point 的类型定义为 Object 类型。虽然该代码不会产生任何编译错误，但它是一个明显的使用错误。因为 Object 类型的用途是描述 Object.prototype 对象的类型，即所有对象共享的属性和方法。在描述自定乂对象类型时有很多更好的选择完全不需要使用 Object 长类型，例如接下来要介绍的 object 类型和对象字面量类型等。在 [TypeScript 官方文档](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#number-string-boolean-symbol-and-object)中也明确地指出了不应该使用 Object 类型，而是应该使用 `object` 类型来代替。

#### 2.11.2 object

在 TypeScript 2.2 版本中，增加了一个新的 object 类型表示非原始类型。object 类型使用 `object` 关键字作为标识。

**object 类型的关注点在于类型的分类，它强调一个类型是非原始类型，即对象类型**。object 类型的关注点不是该对象类型具体包含了哪些属性，例如对象类型是否包含一个名为 name 的属性，因此，不允许读取和修改 object 类型上的自定义属性。示例如下：

```ts
const obj: object = { foo: 0 };

//  编译错误!属性 foo 不存在于类型 object 上
obj.foo;
// 编译错误!属性 foo 不存在于类型 object 上
obj.foo = 0;
```

在 object 类型上仅允许访问对象的公共属性和方法，也就是 Object 类型中定义的属性和方法。

**类型兼容性**
JS 中的数据类型可以划分为原始数据类型和对象数据类型两大类。针对 JS 中的每一种原始数据类型，TypeScript 都提供了对应的类型。但是在以前的版本中， TypeScript 唯独没有提供一种类型用来表示非原始类型，也就是对象类型。Object 类型无法表示非原始类型，因为允许将原始类型赋值给 Object 类型。

新的 object 类型填补了这个功能上的缺失。object 类型能够准确地表示非原始类型，因为原始类型不允许赋给 object 类型。只有非原始类型，也就是对象类型能够赋给 object 类型。

object 类型仅能够赋值给以下三种类型：

- **顶端类型 any 和 unknown**：由于所有类型都是顶端类型的子类型，所以 object 类型能够赋值给顶端类型 any 和 unknown。

- **Object 类型**：Object 长类型描述了所有对象都共享的属性和方法，所以很自然地表示对象类型的 object 类型能够赋值给 Object 类型。

- **[空对象类型字面量 `{}`](#21134-空对象类型字面量)**

**实例应用**
在 JS 中，有一些内置方法只接受对象作为参数。例如，Object.create() 方法，该方法的第一个参数必须传入对象或者 null 值作为新创建对象的原型。如果传入了原始类型的值，那么将产生运行时的类型错误。

在没有引入 object 类型之前，没有办法很好地描述 Object.create() 方法签名的类型。TypeScript 也只好将该方法第一个参数的类型定义为 any 类型。如此定义参数类型显然不够准确，而且对类型检查也没有任何帮助。

在引入了 object 类型之后，TypeScript 更新了 Object.create() 方法签名的类型，使用 object 类型来替换 any 类型。示例如下：

```ts
interface ObjectConstructor {
create(o: object | null, ... ): any;
// 省略了其他成员
}
```

现在，能够正确描述 Object.create() 方法的参数类型。如果传入了原始类型的参数，编译器在进行静态类型检査时就能够发现这个错误。

#### 2.11.3 对象类型字面量

对象类型字面量的语法与对象字面量的语法相似。在定义对象类型字面量时，需要将类型成员依次列出。在各个类型成员之间，不但可以使用分号 `;` 进行分隔，还可以使用逗号 `，` 进行分隔，这两种分隔符不存在功能上的差异。

```ts
const point: { x: number; y: number } = { x: 0, y: 0 }; // 对象类型字面量
```

对象类型字面量的类型成员可分为以下五类：

- 属性签名
- 调用签名
- 构造签名
- 方法签名
- 索引签名

下面将以属性签名为例来介绍对象类型字面量的使用方法，其他种类的类型成员将在 5.12 节和 5.13 节中进行详细介绍。<!--TODO-->

##### 2.11.3.1 属性签名

属性签名声明了对象类型中属性成员的名称和类型。语法如下：

```ts
{
  PropertyName: Type;
}
```

在该语法中，PropertyName 表示对象属性名，可以为标识符、字符串、数字和可计算属性名；Type 表示该属性的类型。

下例中，使用对象类型字面量定义了 Point 对象类型，该类型表示二维坐标系中的点。Point 对象类型包含两个属性签名类型成员，分别为表示横坐标的属性 x 和表示纵坐标的属性 y，两者的类型均为 number 类型。示例如下：

```ts
let point: { x: number; y: number } = { x: 0, y: 0 };
```

属性签名中的属性名可以为可计算属性名，但需要该可计算属性名满足以下条件之一：

- 可计算属性名的类型为 string 字面量类型或 number 字面量类型
- 可计算属性名的类型为 `unique symbol` 类型
- 可计算属性名符合 "Symbol.xx" 的形式。示例如下：

  ```ts
  let obj: {
    [Symbol.toStringTag]: string;
  };
  ```

在属性签名的语法中，**表示类型的 Type 部分是可以省略的，允许只列出属性名而不定义任何类型**。在这种情况下，该属性的类型默认为 any 类型。示例如下

```ts
{
  x;
  y;
}
// 等同于
{
  x: any;
  y: any;
}
```

> **注意**：此例中的代码仅在没有启用 `--noImplicitAny` 编译选项的情况下才能够正常编译。若启用了 `--noImplicitAny` 编译选项，则会产生编译错误，因为对象属性隐式地获得了 any 类型。在程序中，不推荐省略属性签名中的类型。

##### 2.11.3.2 可选类型

在默认情况下，通过属性签名定义的对象属性是必选属性。如果在属性签名中的属性名之后添加一个问号 `?`，那么将定义一个可选属性。在给对象类型赋值时，可选属性可以被忽略。下例中，修改了前面定义的 Point 对象类型，添加一个可选属性 z 来表示点的 Z 轴坐标。这样 Point 对象类型也能够表示三维坐标系中的点：

```ts
let point: { x: number; y: number; z?: number };
// Point 对象类型
point = { x: 0, y: 0 };
point = { x: 0, y: 0, z: 0 };
```

在 `--strictNullChecks` 模式下，TypeScript 会自动在可选属性的类型定义中添加 undefined 类型。因此，下例中两个 Point 对象类型的定义是等价的：

```ts
{
  x: number;
  y: number;
  z?: number;
}
// 等同于
{
  x: number;
  y: number;
  z?: number | undefined;
}
```

该行为的结果是可以为可选属性传入 undefined 值来明确地表示忽略该属性的值，示例如下：

```ts
let point: { x: number; y: number; z?: number };
point = { x: 0, y: 0 };
point = { x: 0, y: 0, z: undefined };
point = { x: 0, y: 0, z: 0 };
```

同时也要注意，在 `--strictNullChecks` 模式下，null 类型与 undefined 类型是区别对待的。下例中，不允许给属性 z 赋予 null 值：

```ts
let point: { x: number; y: number; z?: number };
point = { x: 0， y: 0， z: null };
// 编译错误!类型 null 不能赋值给类型 number| undefined"
```

在非 `--strictNullChecks` 模式下，null 值与 undefined 值均可以赋值给可选属性。因为在该模式下，null 值与 undefined 值几乎可以赋值给任意类型。

在操作对象类型的值时，只允许读写对象类型中已经定义的必选属性和可选属性。若访问了未定义的属性，则会产生编译错误。例如：下例中 point 的类型里没有定义属性 t，因此不允许读写属性 t：

```ts
let point: { x: number; y: number; z?: number };

// 正确
point = { x: 0, y: 0 };
point.x;
point.y;

// 正确
point = { x: 0, y: 0, z: 0 };
point.x;
point.y:
point.z;

point = { x: 0, y: 0, z: 0, t: 0 }; // 编译错误
point.t; // 编译错误
```

##### 2.11.3.3 只读属性

在属性签名定义中添加 `readonly` 修饰符能够定义对象只读属性。

```ts
{
  readonly PropertyName: Type;
}
```

下例中，我们将 Point 对象类型中的属性 x 和属性 y 定义为只读属性：

```ts
let point: {
  readonly x: number;
  readonly y: number;
};
point = { x: 0, y: 0 };
```

只读属性的值在初始化后不允许再被修改，示例如下：

```ts
let point: {
  readonly x: number;
};

// 正确，初始化
point = { x: 0 };
point.x = 1; // 编译错误！不允许给 x 赋值，因为它是只读属性
```

##### 2.11.3.4 空对象类型字面量

如果对象类型字面量没有定义任何类型成员，那么它就成了一种特殊的类型，即空对象类型字面量 `{}`。空对象类型字面量表示不带有任何属性的对象类型，因此不允许在 `{}` 类型上访问任何自定义属性。在空对象类型字面量 `{}` 上，允许访问对象公共的属性和方法也就是 Object 类型上定义的方法和属性。

现在，会发现空对象类型字面量 `{}` 与 Object 类型十分相似。而事实上也正是如此，**单从行为上来看两者是可以互换使用的**。例如，除了 undefined 值和 null 值外，其他仼何值都可以赋值给空对象类型字面量 `{}` 和 Object 类型。同时，空对象类型字面量和 Object 类型之间也允许互相赋值。

两者的区别主要在于语义上：

- 全局的 Object 类型用于描述对象公共的属性和方法，它相当于一种专用类型，因此程序中不应该将自定义变量、参数等类型直接声明为 Object 长类型。
- 空对象类型字面量 `{}` 强调的是不包含属性的对象类型，同时也可以作为 object 类型的代理来使用。

#### 2.11.4 弱类型

弱类型（Weak Type）是 TypeScript 2.4 版本中引入的一个概念。弱类型指的是同时满足以下条件的对象类型：

- 对象类型中至少包含一个属性。
- 对象类型中所有属性都是可选属性。
- 对象类型中不包含字符串索引签名、数值索引签名、调用签名和构造签名(详细介绍请参考 5.13 节<!--TODO-->)

```ts
let config: {
  url?: string;
  async?: boolean;
  timeout?: number;
};
```

#### 2.11.5 多余属性

对象多余属性可简单理解为多出来的属性。多余属性会对类型间关系的判定产生影响。例如，一个类型是否为另一个类型的子类型或父类型，以及一个类型是否能够赋值给另一个类型。显然，多余属性是一个相对的概念，只有在比较两个对象类型的关系时谈论多余属性才有意义。

假设存在源对象类型和目标对象类型两个对象类型，那么当满足以下条件时，说源对象类型相对于目标对象类型存在多余属性：

- 源对象类型是一个 "全新（Fresh）的对象字面量类型"
- 源对象类型中存在一个或多个在目标对象类型中不存在的属性。
- "全新的对象字面量类型" 指的是由对象字面量推断出的类型

![全新的对象字面量类型](./image/全新的对象字面量类型.png)

此例中，由赋值语句右侧的对象字面量 `{x:0, y:0}` 推断出的类型为全新的对象字面量类型 `{x:0, y:0}`。同时也要注意区分，赋值语句左侧类型注解中的 `{x: number, y: number}` 不是全新的对象字面量类型。如果将赋值语句右侧的类型视作源对象类型，将赋值语句左侧的类型视作目标对象类型，那么不存在多余属性。

对这段代码稍加修改：

```ts
const point: { x: number; y: number } = {
  x: 0,
  y: 0,
  // z 是多余属性
  z: 0
};
```

为赋值语句右侧的对象字面量增加了一个 z 属性。这时，赋值语句右侧的类型仍为全新的对象字面量类型。若仍将 `{x: number, y: number}` 视为目标对象类型，那么源对象类型 `{x:0, y:0, z:0}` 存在一个多余属性 z。**目标对象类型中的可选属性与必选属性是被同等对待的**。

##### 2.11.5.1 多余属性检查

多余属性检查是 TypeScript 1.6 引入的功能。多余属性会影响类型间的子类型兼容性以及赋值兼容性，也就是说编译器不允许在一些操作中存在多余属性。例如，将对象字面量赋值给变量或属性时，或者将对象字面量作为函数参数来调用函数时，编译器会严格检查是否存在多余属性。若存在多余属性，则会产生编译错误。示例如下：

```ts
let point: {
  x: number;
  y: number;
} = { x: 0, y: 0, z: 0 };
// 编译错误！z 是多余属性
function f(point: { x: number; y: number }) {}
// 编译错误！z 是多余属性
f({ x: 0, y: 0, z: 0 });
```

在了解了多余属性检査的基本原理之后，来思考一下它背后的设计意图。在正常的使用场景中，如果直接将一个对象字面量赋值给某个确定类型的变量，那么通常没有理由去故意添加多余属性。

再换一个角度，从类型可靠性的角度来看待多余属性检查。当把对象字面量赋值给目标对象类型时，若存在多余属性，那么将意味着对象字面量本身的类型彻底丢失了。

![多余属性检查](./image/多余属性检查.png)

上图中，将包含多余属性的对象字面量赋值给类型为 `{x: number; y: number}` 的 point 常量后，程序中就再也无法引用对象字面量 `{x:0, y:0, z:0}` 的类型了。从类型系统的角度来看，该赋值操作造成了类型信息的永久性丢失，因此编译器认为这是一个错误。

多余属性检査能够带来的最直接的帮助是发现属性名的拼写错误：

```ts
const task: { canceled?: boolean } = { cancelled: true };
// 编译错误！对象字面量只允许包含已知属性 cancelled 不存在于 { canceled?: boolean } 类型中是否指的是 canceled 属性
```

此例中，常量 task 的类型为 `{canceled?: boolean}`。其中 canceled 属性是可选属性，因此允许不设置该属性的值。在赋值语句右侧的 `{cancelled: true}` 对象字面量中，只包含 cancelled 属性。仔细査看该代码会发现，对象字面量 `{cancelled:true}` 与 `{canceled?: boolean}` 类型中的属性名拼 写相差了一个字母 "l"。如果编译器不进行多余属性检査，那么此例中的代码不会产生编译错误。更糟糕的是，常量 task 中的 canceled 属
性没有按照预期被设置为 true，而是使用默认值 undefined。undefined 是一个“假”值，它与想要设置的 true 正好相反。这就给程序注入了一个让人难以察觉的错误。

如果编译器能够执行多余属性检査，那么它能够识别出对象字面量中的 cancelled 属性是一个多余属性，从而产生编译错误。更好的是，编译器不但能够提示多余属性的错误，还能够根据 "Levenshtein distance" 算法来推测可能的属性名。这也是为什么在上例中，编译器能够提示出 _“是否指的是 canceled"属性_ 这条消息。

##### 2.11.5.2 允许多余属性

上一节，介绍了什么是多余属性以及为什么要进行多余属性检査。多余属性检査在绝大多数场景中都是合理的，因此推荐在程序中尽可能地利用这个功能。但如果确定不想让编译器对代码进行多余属性检査，那么有多种方式能够实现这个效果。以下面的代码为例来介绍每一种方法：

```ts
const point: { x: number } = { x: 0, y: 0 }; // y 是多余属性
```

能够忽略多余属性检查的方法如下：

- **使用类型断言**（推荐）
  类型断言能够对类型进行强制转换。例如，可以将对象字面量 `{x:0， y:0}` 的类型强制转换为 `{x: number}` 类型。关于类型断言的详细介绍请参考 6.10<!--TODO--> 节。类型断言能够绕过多余属性检查的真正原因是，**处于类型断言表达式中的对象字面量将不再是 “全新的对象字面量类型”**，因此编译器也就不会对其进行多余属性检査。

  ```ts
  // 无编译错误
  const p0: { x: number } = { x: 0, y: 0 } as { x: number };
  // 无编译错误
  const p1: { x: number } = { x: 0, y: 0 } as { x: 0; y: 0 };
  ```

- **启用 `--suppressExcessPropertyErrors` 编译选项**
  启用该编译选项能够完全禁用整个 TypeScript 工程的多余属性检查，但同时也将完全失去多余属性检査带来的帮助。可以在 tsconfig.json 配置文件中或命令行上启用该编译选项。关于配置文件的详细介绍请参考 8.3 节。<!--TODO-->

- **使用 "// @ts-ignore" 注释指令**

  该注释指令能够禁用针对某一行代码的类型检査。关于注释指令的详细介绍请参考 8.5.2 节。

- **为目标对象类型添加索引签名**

  若目标对象类型上存在索引签名，那么目标对象可以接受仼意属性，因此也就谈不上多余属性。关于索引签名的详细介绍请参考 5.13.6 节。示例如下：

  ```ts
  const point: {
    x: number;
    [prop: string]: number; // 索引签名
  } = { x: 0, y: 0 };
  ```

  最后一种方法也许不是很好理解。如果先将对象字面量赋值给某个变量，然后再将该变量赋值给目标对象类型，那么将不会执多余属性检査。这种方法能够生效的原理与类型断言类似，那就是令源对象类型不为 “全新的对象字面量类型”，于是编译器将不执多余属性检查。下面代码的第 4 行，赋值语句右侧不是对象字面量而是一个标识符，因此 temp 的类型不是 “全新的对象字面量类型”：

  ```ts
  const temp = { x: 0, y: 0 };
  // 无编译错误
  const point: { x: number } = temp;
  ```

### 2.12 函数类型

将介绍如何为函数添加类型，包括参数类型、返回值类型、this 类型以及函数重载等。

#### 2.12.1 常规参数类型

在函数形式参数列表中，为参数添加类型注解就能够定义参数的类型。例如，下例中将 add 函数声明中的参数 x 和参数 y 的类型都定义为 number 类型：

```ts
function add(x: number, y: number) {
  return x + y;
}
```

针对函数表达式和匿名函数，也可以使用相同的方法来定义参数的类型：

```ts
const f = function (x: number, y: number) {
  return x + y;
};
```

如果在函数形式参数列表中没有明确指定参数类型，并且编译器也无法推断参数类型，那么参数类型将默认为 any 类型：

```ts
function add(x, y) {
  // 参数 x 和 y 隐式地获得了any类型
  return x + y;
}
```

> **注意**：如果启用了 `--noImplicitAny` 编译选项，那么上例中的代码将会产生编译错误。必须指明参数的类型，如果期望的类型就是 any 类型，则需要使用类型注解来明确地标注。

#### 2.12.2 可选参数类型

在 JS 中，函数的每一个参数都是可选参数，而在 TypeScrip 中，默认情况下函数的每一个参数都是必选参数。在调用函数时，编译器会检查传入实际参数的个数与函数定义中形式参数的个数是否相等。如果两者不相等，则会产生编译错误。如果一个参数是可选参数，那么就需要在函数类型定乂中明确指定。在函数形式参数名后面添加一个问号 `?` 就可以将该参数声明为可选参数。

> **注意**：函数的可选参数必须位于函数参数列表的未尾位置。在可选参数之后不允许再出现必选参数，否则将产生编译错误。

在 `--strictNullChecks` 模式下，TypeScript 会自动为可选参数添加 undefined 类型。

TypeScript 允许给可选参数传入一个 undefined 值。为参数添加 undefined 类型不等同于该参数是可选参数。若省略了 `?` 符号，则参数将成为必选参数，在调用时必须传入一个实际参数值。

#### 2.12.3 默认参数类型

函数默认参数类型可以通过类型注解定义，也可以根据默认参数值自动地推断类型。例如，下例中函数默认参数 x 的类型通过类型注解明确定义，而默认参数 y 的类型则是根据默认值 0 推断岀的类型，最后两个参数的类型均为 number 类型：

```ts
function add(x: number, y = 0) {
  return x + y;
}
```

如果函数定义了默认参数，并且默认参数处于函数参数列表未尾的位置，那么该参数将被视为可选参数，在调用该函数时可以不传入对应的实际参数值。

**注意**：

1. 在语法上，同一个函数参数不允许同时声明为可选参数和默认参数，否则将产生编译错误。
2. 如果默认参数之后存在必选参数，那么该默认参数不是可选的参数，在调用函数时必须传入对应的实际参数值。

#### 2.12.4 剩余参数类型

必选参数、可选参数和默认参数处理的都是单个参数，而剩余参数处理的则是多个参数。如果函数定义中声明了剩余参数，那么在调用函数时会将多余的实际参数收集到剩余参数列表中。因此，剩余参数的类型应该为数组类型或元组类型。虽然剩余参数也可以定义为顶端类型或尾端类型，但是实际意义不大。

**数组类型的剩余参数**
最常见的做法是将剩余参数的类型声明为数组类型。例如，下例中的函数定义了 number[] 类型的剩余参数：

```ts
function f(...args: number[]) {}
```

在调用定义了剩余参数的函数时，剩余参数可以接受零个或多个实际参数。

**元组类型的剩余参数**
剩余参数的类型也可以定义为元组类型。例如，下例中剩余参数 args 的类型为包含两个元素的元组类型：

```ts
function f(...args: [boolean, number]) {}
```

如果剩余参数的类型为元组类型，那么编译器会将剩余参数展开为独立的形式参数声明，主要包括以下几种情况：

- **常规元组类型**

  ```ts
  function f0(...args: [boolean, number]) {}
  // 等同于
  function f1(args_0: boolean, args_1: number) {}
  ```

- **带有可选元素的元组类型**

  ```ts
  function f0(...args: [boolean, string?]) {}
  // 等同于
  function f1(args_0: boolean, args_1?: string) {}
  ```

- **带有剩余元素的元组类型**

  ```ts
  function f0(...args: [boolean, ...string[]]) {}
  // 等同于
  function f1(args_0: boolean, ...args_1: string[]) {}
  ```

  在了解了元组类型剩余参数的展开行为后，也就清楚了该如何参数对应的实际参数。

#### 2.12.5 解构参数类型

解构还可以应用在函数参数列表中。示例如下

```ts
function f0([x, y]) {}
f0([0, 1]);

function f1({ x, y }) {}
f1({ x: 0, y: 1 });
```

可以使用类型注解为解构参数添加类型信息：

```ts
function f0([x, y]: [number, number]) {}
f0(0, 1);

function f1({ x, y }: { x: number; y: number }) {}
f1({ x: 0, y: 1 });
```

#### 2.12.6 返回值类型

在函数形式参数列表之后，可以使用类型注解为函数添加返回值类型。例如，下例中定义了 add 函数的返回值类型为 number 类型：

```ts
function add(x: number, y: number): number {
  return x + y;
}
```

在绝大多数情况下，TypeScript 能够根据函数体内的 return 语句等自动推断出返回值类型，因此也可以省略返回值类型。

在 TypeScript 的原始类型里有一个特殊的空类型 `void`，该类型唯一有意义的使用场景就是作为函数的返回值类型。如果一个函数的返回值类型为 void，那么该函数只能返回 undefined 值。这意味着函数明确地返回了一个 undefined 值，或者函数没有调用 return 语句，在这种情况下函数默认返回 undefined 值。

> 如果没有启用 `--strictNullChecks` 编译选项，那么 void 返回值类型也允许返回 null 值。

#### 2.12.7 函数类型字面量

在前面几节中，介绍了如何为现有函数添加参数和返回值类型。在本节中，将介绍如何使用函数类型字面量来描述某个函数的类型。

函数类型字面量是定义函数类型的方法之一，它能够指定函数的参数类型、返回值类型以及将在 6.1 节<!--TODO-->中介绍的泛型类型参数。函数类型字面量的语法与箭头函数的语法相似，具体语法如下所示：

```ts
ParameterList => Type;
```

在该语法中，Parameterlist 表示可选的函数形式参数列表；Type 表示函数返回值类型；形式参数列表与返回值类型之间使用胖箭头 `=>` 连接。

下例中，变量 f 的类型为函数类型，这代表变量 f 的值是一个函数。该函数类型通过函数类型字面量进行定义，表示一个不接受任何参数且返回值类型为 void 的函数。示例如下：

```ts
let f: () => void; // 函数类型字面量
f = function () {
  /* no-op */
};
```

在函数类型字面量中定义函数参数的类型时，必须包含形式参数名，不允许只声明参数的类型。下例中，add 函数是正确的定义方式，而函数则是错误的定义方式。编译器会将 f 数参数列表中的 number 当作参数名，而不是参数类型。示例如下：

```ts
let add: (x: number, y: number) => number;
let f: (number) => number; // 编译错误
```

函数类型字面量中的形式参数名与实际函数值中的形式参数名不必相同。例如，下例中函数类型字面量中声明的形式参数名为 x，而实际函数值的形式参数名为 y：

```ts
let f: (x: number) => number;

f = function (y: number): number {
  return y;
};
```

函数类型字面量中的返回值类型必须明确指定，不允许省略。如果函数没有返回值，则需要指定 void 类型作为返回值类型：

```ts
let foo: () => void;
let bar: () => ; // 编译错误：未指定返回值类型
```

#### 2.12.8 调用签名

函数在本质上是一个对象，但特殊的地方在于函数是可调用的对象。因此，可以使用对象类型来表示函数类型。若在对象类型中定义了调用签名类型成员，那么称该对象类型为函数类型。调用签名的语法如下所示：

```ts
{
  (ParameterList): Type
}
```

在该语法中，ParameterList 表示函数形式参数列表类型，Type 表示函数返回值类型，两者都是可选的。

下例中，使用对象类型字面量和调用签名定义了一个函数类型，该函数类型接受两个 number 类型的参数，并返回 number 类型的值：

```ts
let add: { (x: number, y: number): number };

add = function (x: number, y: number): number {
  return x + y;
};
```

实际上，上一节介绍的函数类型字面量完全等同于仅包含一个类型成员并且是调用签名类型成员的对象类型字面量。换句话说，函数类型字面量是仅包含单个调用签名的对象类型字面量的简写形式，如下所示：

```ts
{(ParameterList): Type}
// 简写为
(ParameterList) => Type
```

例如，Math.abs() 是一个内置函数，它接受一个数字参数并返回该参数的绝对值。下面，分别使用函数类型字面量和带有调用签名的对象类型字面量来定义 Math.abs() 函数的类型：

```ts
const abs0: (x: number) => number = Math.abs;
const abs1: { (x: number): number } = Math.abs;
abs0(-1) === abs1(-1); // true
```

**函数类型字面量的优点是简洁，而对象类型字面量的优点是具有更强的类型表达能力**。知道函数是一种对象，因此函数可以拥有自己的属性。下例中，函数 f 除了可以被调用以外，还提供了一个 version 属性：

```ts
function f(x: number) {
  console.log(x);
}
f.version = '1.0';

f(1); // 1
f.version; // '1.0'
```

若使用函数类型字面量，则无法描述 string 类型的 version 属性，因此也就无法准确地描述函数 f 类型。示例如下：

```ts
function f(x: number) {
  console.log(x);
}
f.version = '1.0';

let foo: (x: number) => void = f;
const version = foo.version;
// 编译错误：(x: number) => void 类型上不存在 'version' 属性
```

在这种情况下，可以使用带有调用签名的对象类型字面量来准确地描述函数的类型。示例如下：

```ts
function f(x: number) {
  console.log(x);
}
f.version = '1.0';

let foo: { (x: number): void; version: string } = f;
const version = foo.version; // string 类型
```

#### 2.12.9 构造函数类型字面量

在面向对象编程中，构造函数是一类特殊的函数，它用来创建和始化对象。JS 中的函数可以作为构造函数使用，在调用构造函数时需要使用 new 运算符。例如，可以使用内置的 Date 构造函数来创建一个日期对象：

```ts
const date = new Date();
```

构造函数类型字面量是定义构造函数类型的方法之一，它能够指定构造函数的参数类型、返回值类型以及将在 6.1<!--TODO--> 节中介绍的泛型类型参数。构造函数类型字面量的具体语法如下所示：

```ts
new ParameterList() = Type;
```

在该语法中 `new` 是关键字，ParameterList 表示可选的构造函数形式参数列表类型，Type 表示构造函数返回值类型。

JS 提供了一个内置的 Error 构造函数，它接受一个可选的 message 作为参数并返回新创建的 Error。可以使用如下构造函数类型字面量来表示 Error 构造函数的类型。该构造函数有一个可选参数 message 并返回 Error 类型的对象。

```ts
let ErrorConstructor: new (message?: string) => Error;
```

#### 2.12.10 构造签名

构造签名的用法与调用签名类似。若在对象类型中定义了构造签名类型成员，那么称该对象类型为构造函数类型。构造签名的语法如下所示：

```ts
{
  new(ParameterList): Type;
}
```

在该语法中，`new` 是运算符关键字，Parameterlist 表示构造函数形式参数列表类型，Type 表示构造函数返回值类型，两者都是可选的。

下例中，使用对象类型字面量和构造签名定义了一个构造函数类型，该构造函数接受一个 string 类型的参数，并返回新创建的对象：

```ts
let Dog: { new (name: string): object };
Dog = class {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
};
let dog = new Dog('hua');
```

此例中，Dog 的类型为构造函数类型，它接受一个 string 类型的参数并返回 object 类型的值。

构造函数类型字面量完全等同于仅包含一个类型成员并且是构造签名类型成员的对象类型字面量。换句话说，构造函数类型字面量是仅包含单个构造签名的对象类型字面量的简写形式，如下所示：

```ts
{ new(ParameterList): Type }
// 简写为
new(ParameterList) => Type；
```

#### 2.12.11 调用签名与构造签名

有一些函数被设计为既可以作为普通函数使用，同时又可以作为构造函数来使用。例如，JS 内置的 Number() 函数和 String() 函数等都属于这类函数：

```ts
const a: number = Number(1);
const b: Number = new Number(1);
```

若在对象类型中同时定义调用签名和构造签名，则能够表示既可以被直接调用，又可以作为构造函数使用的函数类型。语法如下：

```ts
{
  new (x: number): Number; // 构造签名
  (x: number): number; // 调用签名
}
```

此例中，对象类型字面量定义了一个构造签名 `new (x: number): Number;`，它接受一个 number 类型的参数，并返回 Number 类型的值。同时，该对象类型字面量还定义了一个调用签名 `(x:number): number;`，它接受一个 number 类型的参数，并返回 number 类型的值。示例如下：

```ts
declare const F: {
  new (x: number): Number; // 构造签名
  (x: number): number; // 调用签名
};

// 作为普通函数调用
const a: number = F(1);
// 作为构造函数调用
const b: Number = new F(1);
```

此例中，函数 F 的类型既是函数类型又是构造函数类型。因此，允许直接调用 F 函数，或者以构造函数的方式调用 F 函数。

#### 2.12.12 重载函数

重载函数是指一个函数同时拥有多个同类的函数签名。例如，个函数拥有两个及以上的调用签名，或者一个构造函数拥有两个及以上的构造签名。当使用不同数量和类型的参数调用重载函数时，可以执行不同的函数实现代码。

TypeScript 中的重载函数与其他编程语言中的重载函数略有不同。首先，看一个重载函数的例子。下例中定义了一个重载函数 add。它接受两个参数，若两个参数的类型为 number，则返回它们的和；若两个参数的类型为数组，则返回合并后的数组。在调用 add 函数时，允许使用这两个调用签名之一并且能够得到正确的返回值类型：

```ts
function add(x: number, y: number): number;
function add(x: any[], y: any[]): any[];
function add(x: number | any[], y: number | any[]): any {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }

  if (Array.isArray(x) && Array.isArray(y)) {
    return [...x, ...y];
  }
}

const a: number = add(1, 2);
const b: number[] = add([1], [2]);
```

在使用函数声明定义函数时能够定义重载函数。重载函数的定义由以下两部分组成：

- 一条或多条函数重载语句
- 一条函数实现语句

##### 2.12.12.1 函数重载

不带有函数体的函数声明语句叫作函数重载。例如，下例中的 add 函数声明没有函数体，因此它属于函数重载：

```ts
function add(x: number, y: number): number;
```

函数重载的语法中不包含函数体，它只提供了函数的类型信息函数重载只存在于代码编译阶段，在编译生成 JS 代码时会被完全删除，因此在最终生成的 JS 代码中不包含函数重载的代码。

函数重载允许存在一个或多个，但只有多于一个的函数重载才有意义，因为若只有一个函数重载，则可以直接定义函数实现。在函数重载中，不允许使用默认参数。函数重载应该位于函数实现(<!--TODO-->将在下节中介绍)之前，每一个函数重载中的函数名和函数实现中的函数名必须一致：

```ts
function add(x: number, y: number): number;
function add(x: any[], y: any[]): any[];
function add(x: number | any[], y: number | any[]): any {
  // 省略了实现代码
}
```

> **注意**：在各个函数重载语句之间以及函数重载语句与函数实现语句之间不允许出现任何其他语句，否则将产生编译错误。

##### 2.12.12.2 函数实现

函数实现包含了实际的函数体代码，该代码不仅在编译时存在在编译生成的 JS 代码中同样存在。每一个重载函数只允许有一个函数实现，并且它必须位于所有函数重载语句之后，否则将产生编译错误。示例如下：

```ts
function add(x: number, y: number): number;
function add(x: any[], y: any[]): any[];
// 函数实现必须位于最后
function add(x: number | any[], y: number | any[]): any {
  // 省略了实现代码
}
```

TypeScript 中的重载函数最令人迷惑的地方在于，函数实现中的函数签名不属于重载函数的调用签名之一，只有函数重载中的函数签名能够作为重载函数的调用签名。因此，可以使用两个 number 类型的值来调用 add 函数，或者使用两个数组类型的值来调用 add 函数。但是，不允许使用一个 number 类型和一个数组类型的值来调用 add 函数，尽管在函数实现的函数签名中允许这种调用方式。

函数实现需要兼容每个函数重载中的函数签名，函数实现的函数签名类型必须能够赋值给函数重载的函数签名类型：

```ts
function foo(x: number): boolean;
// 编译错误：重载签名与实现签名的返回值类型不匹配
function foo(x: string): void;
// 编译错误：重载签名与实现签名的参数类型不匹配
function foo(x: number): void {
  // 省略函数体代码
}
```

此例中，重载函数 foo 可能的参数类型为 number 类型或 string 类型，同时返回值类型可能为 boolean 类型或 void 类型。因此，在函数实现中的参数 x 必须同时兼容 number 类型和 string 类型，而返回值类型则需要兼容 boolean 类型和 void 类型。可以使用联合类型来解决这些问题：

```ts
function foo(x: number): boolean;
function foo(x: string): void;
function foo(x: number | string): any {
  // 省略函数体代码
}
```

在其他一些编程语言中允许存在多个函数实现，并且在调用重载函数时编程语言负责选择合适的函数实现执行。在 TypeScript 中，重载函数只能存在一个函数实现，开发者需要在这个唯一的函数实现中实现所有函数重载的功能。这就需要开发者自行去检测参数的类型及数量，并根据判断结果去执行不同的操作：

```ts
function add(x: number, y: number): number;
function add(x: any[], y: any[]): any;
function add(x: number | any[], y: number | any[]): any {
  if (typeof x === number && typeof y === number) {
    return x + y;
  }

  if (Array.isArray(x) && Array.isArray(y)) {
    return [...x, ...y];
  }
}
```

TypeScript 不支持为不同的函数重载分别定义不同的函数实现。

##### 2.12.12.3 函数重载解析顺序

当程序中调用了一个重载函数时，编译器将首先构建出一个候选函数重载列表。一个函数重载需要满足如下条件才能成为本次函数调用的候选函数重载：

- 函数实际参数的数量不少于函数重载中定义的必选参数的数量
- 函数实际参数的数量不多于函数重载中定义的参数的数量
- 每个实际参数的类型能够赋值给函数重载定义中对应形式参数的类型

候选函数重载列表中的成员将以函数重载的声明顺序作为初始顺序，然后进行简单的排序，将参数类型中包含字面量类型的函数重载排名提前，如果构建的候选函数重载列表为空列表，则会产生编译错误：

```ts
function f(x: string): void; // 函数重载1
function f(y: 'specialized'): void; // 函数重载2
function f(x: string) {
  // 省略函数体代码
}

f('specialized');
```

使用字符串参数 'specialized' 调用重载函数 f，函数重载 1 和函数重载 2 都满足候选函数重载的条件，因此两者都在候选函数重载列表中。但是因为函数重载 2 的函数签名中包含字面量类型，所以比函数重载 1 的优先级更高。

通过以上的介绍能够知道，函数重载的解析顺序依赖于函数重载的声明顺序以及函数签名中是否包含字面量类型。因此，TypeScript 中的函数重载功能可能没有其他一些编程语言那么 “智能”。这就要求开发者在编写函数重载代码时一定要将最精确的函数重载定义放在最前面，因为它们定义的顺序将影响函数调用签名的选择：

```ts
function f(x: any): number; // 函数重载1
function f(x: string): 0 | 1; // 函数重载2
function f(x: any): any {
  // ...
}

const a: 0 | 1 = f('hi'); // 编译错误!类型 number 不能赋值给类型 0
```

此例中，函数重载 2 比函数重载 1 更加精确，但函数重载 2 是在函数重载 1 之后定义的。由于函数重载 2 的参数中不包含字面量类型，因此编译器不会对候选函数重载列表进行重新排序。当使用字符串调用函数是，函数重载 1 位于候选函数重载列表的首位，并被选为最终使用的函数重载。能看到 f('hi') 的返回值类型为 number 类型，而不是更精确的 "0|1" 联合类型。若想要修复这个问题，只需将函数重载 1 和函数重载 2 的位置互换即可。

到这里，已经介绍了重载函数的大部分功能。因为 TypeScript 语言的自身特点，所以它提供的函数重载功能可能不如其他编程语言那样便利。实际上在很多场景中并不需要声明重载函数，尤其是在函数返回值类型不变的情况下：

```ts
function foo(x: string): boolean;
function foo(x: string, y: number): boolean;
function foo(x: string, y?: number): boolean {
  // ...
}
const a = foo('hello');
const b = foo('hello', 2);

function bar(x: string, y?: number): boolean {
  // ...
}
const a = bar('hello');
const b = bar('hello', 2);
```

上例中，foo 函数是重载函数，而 bar 函数则为普通函数声明。两个函数在功能上以及可接受的参数类型和函数返回值类型都是相同的。但是，bar 函数的声明代码更少也更加清晰。

##### 2.12.12.4 重载函数的类型

重载函数的类型可以通过包含多个调用签名的对象类型来表示。例如，有以下重载函数定义：

```ts
function f(X: string): 0 | 1;
function f(x: any): number;
function f(X: any): any {}
```

可以使用如下对象类型字面量来表示重载函数 f 的类型。在该对象类型字面量中，定义了两个调用签名类型成员，分别对应于重载函数的两个函数重载。示例如下：

```ts
{
  (x: string): 0 | 1;
  (x: any): number;
}
```

在定义重载函数的类型时，有以下两点需要注意：

- 函数实现的函数签名不属于重载函数的调用签名之一
- 调用签名的书写顺序是有意义的，它决定了函数重载的解析顺序，一定要确保更精确的调用签名位于更靠前的位置

对象类型字面量以及后面会介绍的接口都能够用来定义重载函数的类型，但是函数类型字面量无法定义重载函数的类型，因为它只能够表示一个调用签名。

本节中，主要介绍了重载函数的定义和解析规则，以及如何描述重载函数的类型。实际上构造函数也支持重载并且与重载函数是类似的。关于重载构造函数的详细介绍请参考 5.15.7 节。<!--TODO-->

#### 2.12.13 函数中 this 值的类型

this 是 JS 中的关键字，它可以表示调用函数的对象或者实例对象等。本节将介绍函数声明和函数表达式中 this 值的类型。

在默认情况下，编译器会将函数中的 this 值设置为 any 类型，并允许程序在 this 值上执行任意的操作。因为，编译器不会对 any 类型进行类型检査。例如，下例中在 this 值上的所有访问操作都是允许的：

```ts
function f() {
  // 以下语句均没有错误
  this.a = true;
  this.b++;
  this.c = () => {};
}
```

##### 2.12.13.1 --noImplicitThis

将 this 值的类型设置为 any 类型对类型检查没有任何帮助。因此 TypeScript 提供了一个 `--noImplicitThis` 编译选项。当启用了该编译选项时，如果 this 值默认获得了 any 类型，那么将产生编译错淏；如果
函数体中没有引用 this 值，则没有任何影响。示例如下：

```ts
// --noImplicitThis = true

function f0() {
  this.a = tue; // 编译错误
  this.b++; // 编译错误
  this.c = () => {}; // 编译错误
}
```

函数中 this 值的类型可以通过一个特殊的 this 参数来定义。下面将介绍这个特殊的 this 参数。

##### 2.12.13.2 函数的 this 参数

TypeScript 支持在函数形式参数列表中定义一个特殊的 this 参数来描述该函数中 this 值的类型。示例如下：

```ts
function foo(this: { name: string }) {
  this.name = 'Patrick';
  this.name = 0; // 编译错误！类型 0 不能赋值给类型 'string'
}
```

this 参数固定使用 `this` 作为参数名。**this 参数是一个可选的参数，若存在，则必须作为函数形式参数列表中的第一个参数**。this 参数的类型即为函数体中 this 值的类型。this 参数不同于常规的函数形式参数，它只存在于编译阶段，在编译生成的 JS 代码中会被完全删除，在运行时的代码中不存在这个 this 参数。

如果想要定义一个纯函数或者是不想让函数代码依赖于 this 的值，那么在这种情况下可以明确地将 this 参数定义为 void 类型。这样做之后，在函数体中就不允许读写 this 的属性和方法。示例如下：

```ts
function add(this: void, x: number, y: number) {
  this.name = 'Patrick'; // 编译错误！属性 'name' 不存在与类型 'void'
}
```

当调用定义了 this 参数的函数时，若 this 值的实际类型与函数定义的期望类型不匹配，则会产生编译错误。示例如下：

```ts
function foo(this: { bar: string }, baz: numbert) {
  // ...
}

// 编译错误
// this 类型为 void，不能赋值给 {bar: string} 类型的 this
foo(0);
foo.call({ bar: 'hello' }, 0); // 正确
```

foo 函数 this 值的类型设置为对象类型 `{ bar: string }`。第一个调用 foo 时 this 值的类型为 void 类型，它与期望的类型不匹配，因此产生编译错误。第二个调用 foo 函数时指定了 this 值为 {bar:'hello'}，其类型符合 this 参数的类型定义，因此不会产生错误。

### 2.13 接口

类似于对象类型字面量，接口类型也能够表示任意的对象类型。不同的是，接口类型能够给对象类型命名以及定义类型参数。接口类型无法表示原始类型，如 boolean 类型等。

接口声明只存在于编译阶段，在编译后生成的 JS 代码中不包含任何接口代码。

#### 2.13.1 接口声明

通过接口声明能够定义一个接口类型。接口声明的基础语法如下：

```ts
interface InterfaceName {
  TypeMember;
  TypeMember;
  // ...
}
```

在该语法中，`interface` 是关键字，`InterfaceName` 表示接口名，它必须是合法的标识符，TypeMember 表示接口的类型成员，所有类型成员都置于一对大括号 `{}` 之内。

按照惯例，接口名的首字母需要大写。因为接口定义了一种类型而类型名的首字母通常需要大写。在接口名之后，由一对大括号 `{}` 包围起来的是接口类型中的类型成员。这部分的语法与[对象类型字面量](#2113-对象类型字面量)的语法完全相同。从语法的角度来看，接口声明就是在对象类型字面量之前添加了 `interface` 关键字和接口名。因此，[对象类型字面量](#2113-对象类型字面量)的语法规则同样适用于接口声明。例如，类型成员间的分隔符和类型成员的尾后分号、逗号。

同样地，接口类型的类型成员也分为以下五类：

- [属性签名](#21131-属性签名)
- [调用签名](#2128-调用签名)
- [构造签名](#21210-构造签名)
- 方法签名
- 索引签名

#### 2.13.2 方法签名

方法签名是声明函数类型的属性成员的简写。方法签名的语法如下所示：

```ts
Property Name(ParameterList): Type;
```

在该语法中，PropertyName 表示对象属性名，可以为标识符字符串、数字和可计算属性名；Parameterlist 表示可选的方法形式参数列表类型；Type 表示可选的方法返回值类型。从语法的角度来看，方法签名是在调用签名之前添加一个属性名作为方法名。

下例中定义了 Document 接口，它包含一个方法签名类型成员该方法的方法名为 getElementById，它接受一个 string 类型的参数并返回 "HTMLElement | null" 类型的值。示例如下：

```ts
interface Document {
  getElementById(elementId: string): HTMLElement | null;
}
```

之所以说方法签名是声明函数类型的属性成员的简写，是因为方法签名可以改写为具有同等效果但语法稍显复杂的属性签名：

```ts
PropertName(ParameterList): Type
// 同等效果的属性签名
PropertName:{(ParameterList): Type}
```

在改写后的语法中，属性名保持不变并使用对象类型字面量和调用签名来表示函数类型。由于该对象类型字面量中仅包含一个调用签名，因此也可以使用函数类型字面量来代替对象类型字面量：

```ts
PropertyName: ParameterList => Type;
```

下面通过一个真实的例子来演示这三种可以互换的接口定义方式：

```ts
interface A {
  f(x: boolean): string; // 方法签名
}
interface B {
  f: { (x: boolean): string }; // 属性签名和对象类型字面量
}
interface C {
  f: (x: boolean) => string; // 属性签名和函数类型字面量
}
```

此例中定义了三个接口 A、B 和 C，它们都表示同一种类型即定义了方法的对象类型，方法 f 接收一个 boolean 类型的参数并返回 string 类型的值。

方法签名中的属性名可以为[可计算属性名]#2113-对象类型字面量)，这一点与属性签名中属性名的规则是相同的。

若接口中包含多个名字相同但参数列表不同的方法签名成员，则表示该方法是重载方法。例如，下例中的方法穠是一个重载方法，它具有三种调用签名：

```ts
interface A {
  f(): number;
  f(x: boolean): boolean;
  f(x: string, y: string): string;
}
```

#### 2.13.3 索引签名

JS 支持使用索引去访问对象的属性，即通过方括号 `[]` 语法去访问对象属性：

```ts
const colors = ['red', 'green', 'blue'];
// 访问数组中的第一个元素
const red = colors[0];
// 访问数组对象的 length 属性
const len = colors['length'];
```

接口中的索引签名能够描述使用索引访问的对象属性的类型。索引签名只有以下两种 a 字符串索引签名。数值索引签名。

##### 2.13.3.1 字符串索引签名

字符串索引签名的语法如下所示：

```ts
[IndexName: string]: Type;
```

在该语法中，IndexName 表示索引名，它可以为任意合法的标识符。索引名只起到占位的作用，它不代表真实的对象属性名；在字符串索引签名中，索引名的类型必须为 string 类型；Type 表示索引值的类型，它可以为任意类型。示例如下：

```ts
interface A {
  [Prop: string]: number;
}
```

一个接口中最多只能定义一个字符串索引签名。**字符串索引签名会约束该对象类型中所有属性的类型**。例如，下例中的字符串索引签名定义了索引值的类型为 number 类型。那么，该接口中所有属性的类型必须能够赋值给 number 类型。示例如下：

```ts
interface A {
  [prop: string]: number;

  a: number;
  b: 0;
  c: 1 | 2;
}
```

此例中，属性 a、b 和 c 的类型都能够赋值给字符串索引签名中定义的 number 类型，因此不会产生错误。接下来，再来看一个错误的例子：

```ts
interface B {
  [prop: string]: number;

  a: boolean; // 编译错误
  b: () => number; // 编译错误
  c(): number; // 编译错误
}
```

此例中，字符串索引签名中定义的索引值类型依旧为 number 类型。属性 a 的类型为 boolean 类型，它不能赋值给 number 类型，因此产生编译错误。属性 b 和方法 c 的类型均为函数类型，不能赋值给 number 类型，因此也会产生编译错误。

##### 2.13.3.2 数值索引签名

数值索引签名的语法如下所示：

```ts
[IndexName: number]: Type;
```

在该语法中，IndexName 表示索引名，它可以为任意合法的标识符。索引名只起到占位的作用，它不代表真实的对象属性名；在数值索引签名中，索引名的类型必须为 number 类型；Type 表示索引值的类型，它可以为任意类型。示例如下：

```ts
interface A {
  [prop: number]: string;
}
```

一个接口中最多只能定义一个数值索引签名。数值索引签名约束了数值属性名对应的属性值的类型。示例如下：

```ts
interface A {
  [prop: number]: string;
}
const obj: A = ['a', 'b', 'c'];
obj[0]; // string
```

若接口中同时存在字符串索引签名和数值索引签名，那么**数值索引签名的类型必须能够赋值给字符串索引签名的类型**。因为在 JS 中，对象的属性名只能为字符串（或 Symbol）。虽然 JS 允许使用数字等其他值作为对象的索引，但最终它们都会被转换为字符串类型。因此，数值索引签名能够表示的属性集合是字符串索引签名能够表示的属性集合的子集。

下例中，字符串索引签名的类型为 number 类型，数值索引签名的类型为数字字面量联合类型 "0|1"。由于 "0|1" 类型能够赋值给 number 类型，因此该接口定义是正确的。示例如下：

```ts
interface A {
  [prop: string]: number;
  [prop: number]: 0 | 1;
}
```

但如果交换字符串索引签名和数值索引签名的类型，则会产生编译错误。示例如下：

```ts
interface A {
  [prop: string]: 0 | 1;
  [prop: number]: number; // 编译错误
}
```

#### 2.13.4 可选属性与方法

在默认情况下，接口中属性签名和方法签名定乂的对象属性都是必选的。在给接口类型赋值时，如果未指定必选属性则会产生编译错误：

```ts
interface Foo {
  x: string;
  y(): number;
}
 const a: Foo={x: 'hi'}
// 编译错误！缺少属性 y
const b: Foo = {y(): {return 0;}}
// 编译错误！缺少属性 x

// 正确
 const c: Foo = {
   x: 'hi',
   y(): {return 0; }
};
```

可以在属性名或方法名后添加一个问号 `?`，从而将该属性或方法定义为可选的。可选属性签名和可选方法签名的语法如下所：

```ts
PropertyName?: Type;
PropertyName?(ParameterList): Type;
```

下例中，接口 Foo 的属性 x 和方法 y 都是可选的：

```ts
interface Foo {
  x?: string;
  y?(): number;
}
const a: Foo = {};
const b: Foo = { x: 'hi' };
const c: Foo = {
  y() {
    return 0;
  }
};
const d: Foo = {
  x: 'hi',
  y() {
    return 0;
  }
};
```

如果接口中定义了重载方法，那么所有重载方法签名必须同时为必选的或者可选的。示例如下：

```ts
// 正确
interface Foo {
  a(): void;
  a(x: boolean): boolean;

  b?(): void;
  b?(x: boolean): boolean;
}

// 编译错误：重载签名必须全部为必选的或可选的
interface Bar {
  a(): void;
  a?(x: boolean): boolean;
}
```

#### 2.13.5 只读属性与方法

在接口声明中，使用 `readonly` 修饰符能够定义只读属性。readonly 修饰符只允许在属性签名和索引签名中使用，具体语法如下：

```ts
readonly propertyName: Type
readonly [IndexName: string]: Type
readonly [IndexName: number]: Type
```

例如，下例的接口 A 中定义了只读属性 a 和只读的索引签名：

```ts
interface A {
  readonly a: string;
  readonly [prop: string]: string;
  readonly [prop: number]: string;
}
```

若接口中定义了只读的索引签名，那么接口类型中的所有属性都是只读属性。示例如下：

```ts
interface A {
  readonly [prop: string]: number;
}

const a: A = { x: 0 };
a.x = 1; // 编译错误!不允许修改属性值
```

如果接口中既定义了只读索引签名，又定义了非只读的属性签名，那么非只读的属性签名定义的属性依旧是非只读的，除此之外的所有属性都是只读的。例如，下例的接口 A 中定义了只读索引签名和非只读属性 x。最终的结果为，属性 x 是非只读的，其余的属性为只读属性。示例如下

```ts
interface A {
  readonly [prop: string]: number;
  x: number;
}
const a: A = { x: 0, y: 0 };
a.x = 1; // 正确
a.y = 1; // 错误
```

#### 2.13.6 接口的继承

接口可以继承其他的对象类型，这相当于将继承的对象类型中的类型成员复制到当前接口中。接口可以继承的对象类型如下：

- 接口
- 对象类型的类型别名
- 类
- 对象类型的交叉类型

本节将通过接口与接口之间的继承来介绍接口继承的具体使用方法。关于类型别名的详细介绍请参考 5.14 节。关于类的详细介绍请参考 5.15 节。关于交叉类型的详细介绍请参考 6.4 节。<!--TODO-->

接口的继承需要使用 `extends` 关键字。下例中，Circle 接口继承了 Shape 接口。可以将 Circle 接口称作子接口，同时将 Shape 接口称作父接口。示例如下：

```ts
interface Shape {
  name: string;
}

interface Circle extends Shape {
  radius: number;
}
```

接口可以同时继承多个接口，父接口名之间使用逗号分隔。下例中，Circle 接口同时继承了 Style 接口和 Shape 接口：

```ts
interface Style {
  color: string;
}
interface Shape {
  name: string;
}

interface Circle extends style, Shape {
  radius: number;
}
```

当一个接口继承了其他接口后，子接口既包含了自身定义的类型成员，也包含了父接口中的类型成员。下例中，Circle 接口同时继承了 Style 接口和 Shape 接口，因此 Circle 接口中包含了 color、name 和 radius 属性：

```ts
interface Style {
  color: string;
}

interface Shape {
  name: string;
}

interface Circle extends Style, Shape {
  radius: number;
}

const c: Circle = {
  color: 'red',
  name: 'circle',
  radius: 1
};
```

如果子接口与父接口之间存在同名的类型成员，那么子接口中的类型成员具有更高的优先级。同时，子接口与父接口中的同名类型成员必须是类型兼容的。也就是说，子接口中同名类型成员的类型需要能够赋值给父接口中同名类型成员的类型，否则将产生编译错误：

```ts
interface Style {
  color: string;
}
interface Shape {
  name: string;
}

// 编译错误：color 类型不兼容，number 类型不能赋值给 string 类型
interface Circle extends Style, Shape {
  name: 'circle';
  color: number;
}
```

如果仅是多个父接口之间存在同名的类型成员，而子接口本身没有该同名类型成员，那么父接口中同名类型成员的类型必须是完全相同的，否则将产生编译错误：

```ts
interface Style {
  draw(): { color: string };
}
interface Shape {
  draw(): { x: number; y: number };
}

// 编译错误
interface Circle extends Style, Shape {}
```

两个 draw 方法返回值不同。所以，当 Circle 接口尝试将两个 draw 方法合并时发生冲突，因此产生了编译错误。

解决这个问题的一个办法是，在 Circle 接口中定义一个同名的 draw 方法。这样 Circle 接口中的 draw 方法会拥有更高的优先级，从而取代父接口中的 draw 方法。这时编译器将不再进行类型合并操作，因此也就不会发生合并冲突。但是，Circle 接口中定义的 draw 方法一定要与所有父接口中的 draw 方法是**类型兼容**的：

```ts
interface Style {
  draw(): { color: string };
}
interface Shape {
  draw(): { x: number; y: number };
}

interface Circle extends Style, Shape {
  draw(): { color: string; x: number; y: number };
}
```

此例中，Circle 接口中定义了一个 draw 方法，它的返回值类型为 `{ color: string;x: number;y: number}`。它既能赋值给 `{ color: string}` 类型，也能赋值给 `{x: number;y: number}` 类型，因此不会产生编译错误。

关于类型兼容性的详细介绍请参考 7.1 节。<!--TODO-->

### 2.14 类型别名

如同接口声明能够为对象类型命名，类型别名声明则能够为 TypeScript 中的任意类型命名。

#### 2.14.1 类型别名声明

类型别名声明能够定义一个类型别名，它的基本语法如下所示：

```ts
type AliasName = Type;
```

在该语法中，type 是声明类型别名的关键字；AliasName 表示类型别名的名称；Type 表示类型别名关联的具体类型。

类型别名的名称必须为合法的标识符。由于类型别名表示一种类型，因此类型别名的首字母通常需要大写。同时需要注意，不能使用 TypeScript 内置的类型名作为类型别名的名称，例如 boolean、number 和 any 等。下例中，声明了一个类型别名 Point，它表示包含两个属性的对象类型：

```ts
type Point = { x: number; y: number };
```

类型别名引用的类型可以为任意类型，例如原始类型、对象类型、联合类型和交叉类型等：

```ts
type Stringtype = string;

type BooleanType = true | false;

type Point = { x: number; y: number; z?: number };
```

在类型别名中，也可以引用其他类型别名：

```ts
type Numeric = number | bigint;
// string number bigint
type StringOrNumber = string | Numeric;
```

类型别名不会创建出一种新的类型，它只是给已有类型命名并接引用该类型。在程序中，使用类型别名与直接使用该类型别名引用的类型是完全等价的。因此，在程序中可以直接使用类型别名引用的类型来替换掉类型别名：

```ts
type Point = { x: number; y: number };

let a: Point;
// let a: { x: number; y: number }
```

在程序中，可能会有一些比较复杂的或者书写起来比较长的类型，这时就可以声明一个类型别名来引用该类型，这也便于对这个类型进行重用。例如，下例中的 DecimalDigit 类型比较长，如果在每个引用该类型的地方都完整地写出该类型会很不方便。使用类型别名不但能够简化代码，还能够给该类型起一个具有描述性的名字：

```ts
type DecimalDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const digit: DecimalDigit = 6;
```

#### 2.14.2 递归的类型别名

一般情况下，在类型别名声明中赋值运算符右侧的类型不允许引用当前定义的类型别名。因为类型别名对其引用的类型使用的是及早求值的策略，而不是惰性求值的策略。因此，如果类型别名引用了自身，那么在解析类型别名时就会出现无限递归引用的问题：

```ts
type T = T; // 编译错误!类型别名 T 存在循环的自身引用
```

在 TypeScript 3.7 版本中，编译器对类型别名的解析进行了一些优化。在类型别名所引用的类型中，使用惰性求值的策略来解析泛型类型参数。因此，允许在泛型类型参数中递归地使用类型别名。总结起来，目前允许在以下场景中使用递归的类型别名：

1. 若类型别名引用的类型为接口类型、对象类型字面量、函数类型字面量和构造函数类型字面量，则允许递归引用类型别名：

   ```ts
   type T0 = { name: T0 };
   type T1 = () => T1;
   type T2 = new () => T2;
   ```

2. 若类型别名引用的是数组类型或元组类型，则允许在元素类型中递归地引用类型别名：

   ```ts
   type T0 = Array<T0>;
   type T1 = T1[];
   type T3 = [number, T3];
   ```

3. 若类型别名引用的是泛型类或泛型接口，则允许在类型参数中递归的引用类型别名。关于泛型的详细介绍请参考 6.1 节：<!--TODO-->

   ```ts
   interface A<T> {
     name: T;
   }
   type T0 = A<T0>;

   class B<T> {
     name: T | undefined;
   }
   type T1 = B<T1>;
   ```

通过递归的类型别名能够定义一些特别常用的类型。TypeScript 官方文档中给出了使用递归的类型别名来定义 Json 类型的例子：

```ts
type Json = string | number | boolean | null | { [property: string]: Json } | Json[];

const data: Json = {
  name: 'TypeScript',
  version: { major: 3 }
};
```

#### 2.14.3 类型别名与接口的差别

类型别名与接口相似，它们都可以给类型命名并通过该名字来引用表示的类型。虽然在大部分场景中两者是可以互换使用的，但类型别名和接口之间还是存在一些差别：

1. **类型别名能够表示非对象类型，而接口则只能表示对象类型**。因此，当想要表示原始类型、联合类型和交叉类型等类型时只能使用类型别名：

   ```ts
   type NumericType = number | bigint;
   ```

2. **接口可以继承其他的接口、类等对象类型，而类型别名则不支持继承**：

   ```ts
   interface Shape {
     name: string;
   }
   interface Circle extends shape {
     radius: number;
   }
   ```

   若要对类型别名实现类似继承的功能，则需要使用一些变通方法。例如，当类型别名表示对象类型时，可以**借助于交叉类型来实现继承的效果**：

   ```ts
   type Shape = { name: string };
   type Circle = Shape & { radius: number };
   function foo(circle: Circle) {
     const name = circle.name;
     const radius = circle.radius;
   }
   ```

   此例中的方法只适用于表示对象类型的类型别名。如果类型别名表示非对象类型，则无法使用该方法。关于交叉类型的详细介绍请参考 6.4 节<!--TODO-->。

3. 接口名总是会显示在编译器的诊断信息（例如，错误提示和警告）和代码编辑器的智能提示信息中，而类型别名的名字只在特定情况下才会显示出来：

   ```ts
   type NumericType = number | bigint;
   interface Circle {
     radius: number;
   }

   function f(value: NumericType, circle: Circle) {
     // 编译错误! Type 'number | bigint' is not assignable to type boolean
     const bar: boolean = value;
     // 编译错误! Type 'Circle' is not assignable to type 'boolean'
     const baz: boolean = circle;
   }
   ```

   此例中，分别定义了 NumericType 类型别名和 Circle 接口。在 f 函数中，有意制造了两个和它们有关的类型错误。第一个与类型别名有关的错误消息没有显示出类型别名的名字，而是将类型别名表示的具体类型展开显示，即 "number | bigint" 联合类型。第二个在与接口有关的错误消息中直接显示了接口的名字 "Circle"。

   只有当类型别名表示数组类型、元组类型以及类或接口的泛型实例类型时，才会在相关提示信息中显示类型别名的名字：

   ```ts
   type Point = [number, number];

   function f(value: Point) {
     // 编译错误! Type 'Point' is not assignable to type 'boolean'
     const bar: boolean = value;
   }
   ```

4. **接口具有声明合并的行为，而类型别名则不会进行声明合并**：

   ```ts
   interface A {
     x: number;
   }
   interface A {
     y: number;
   }
   ```

   此例中，定义了两个同名接口 A，最终这两个接口中的类型成员会被合并。合并后的接口 A 如下所示：

   ```ts
   interface A {
     x: number;
     y: number;
   }
   ```

   关于声明合并的详细介绍请参考 7.10<!--TODO-->

### 2.15 类

JS 是一门面向对象的编程语言，它允许通过对象来建模和解决实际问题。同时，JS 支持基于原型链的对象继承机制。虽然大多数的面向对象编程语言都支持类，但是 JS 语在很长一段时间内都没有支持它。在 JS 程序中，需要使用函数来实现类的功能。

在 ECMAScript 2015 规范中正式地定义了类。同时，TypeScript 语言也对类进行了全面的支持。

#### 2.15.1 类的定义

虽然 JS 支持了类，但其本质上仍是函数，类是一种语法糖。TypeScript 语言对 JS 中的类进行了扩展，为其添加了类型支持，如实现接口、泛型类等。

定义一个类需要使用 `class` 关键字。类似于函数定义，类的定义也有以下两种方式：

- 类声明
- 类表达式

##### 2.15.1.1 类声明

类声明能够创建一个类，类声明的语法如下所示

```ts
class className {
  // ...
}
```

在该语法中，`class` 是关键字；ClassName 表示类的名字。在类声明中的类名是必选的。按照惯例，类名的首字母应该大写：

```ts
class Circle {
  radius: number;
}

const c = new Circle();
```

此例中，声明了一个 Circle 类，它包含一个 number 类型的 radius 属性。使用 `new` 关键字能够创建类的实例。

与函数声明不同的是，类声明不会被提升，因此必须先声明后使用：

```ts
 const c0= new Circle();∥/错误

 class circle
 radius: number.


 const c1= new Circle(;∥l确
```

在使用类声明时，不允许声明同名的类，否则将产生错误：

```ts
// 错误! 重复的类声明
class Circle {
  radius: number;
}
class Circle {
  radius: number;
}
```

##### 2.15.1.2 类表达式

类表达式是另一种定义类的方式，它的语法如下所示：

```ts
const Name = class className {
  // ...
};
```

在该语法中，`class` 是关键字；Name 表示引用了该类的变量名；ClassName 表示类的名字。在类表达式中，类名 ClassName 是可选的例如，下例中使用类表达式定义了一个匿名类，同时使用常量 Circle 引用了该匿名类：

```ts
const Circle = class {
  radius: number;
};
const a = new Circle();
```

如果在类表达式中定义了类名，则该类名只能够在类内部使用在类外不允许引用该类名：

```ts
const A = class B {
  name = B.name;
};
const b = new B(); // 错误
```

#### 2.15.2 成员变量

在类中定义成员变量的方法如下所示：

```ts
class Circle {
  radius: number = 1;
}
```

此例中，Circle 类只包含一个成员变量。其中，radius 是成员变量名，成员变量名之后的类型注解定义了该成员变量的类型。最后，将该成员变量的初始值设置为 1。除了在成员变量声明中设置初始值，还可以在类的构造函数中设置成员变量的初始值：

```ts
class Circle {
  radius: number;

  constructor() {
    this.radius;
  }
}
```

此例中，在构造函数里将 radius 成员变量的值初始化为 1。同时，在构造函数中引用成员变量时需要使用 `this` 关键字。

##### 5.15.2.1 --strictPropertyInitialization

虽然类的成员变量设置初始值是可选的，但是对成员变量进行初始化是一个好的编程实践，它能够有效避免使用未初始化的值而引发的错误。因此，TypeScript 提供了 `--strictPropertyInitialization` 编译选项来帮助严格检査未经初始化的成员变量。当启用了该编译选项时，成员变量必须在声明时进行初始化或者在构造函数中进行初始化，否则将产生编译错误。

> **注意**：`--strictPropertyInitialization` 编译选项必须与 `--strictNullChecks` 编译选项同时启用，否则 `--strictPropertyInitialization` 编译选项将不起作用。

```ts
class A {
  // 正确
  a: number = 0;

  // 正确，在构造函数中初始化
  b: number;
  // 错误！未初始化
  c: number;
  constructor() {
    this.b = 0;
  }
}
```

在此例中，类 A 的成员变量 a 在声明时进行了初始化，成员变量 b 在构造函数中进行了初始化，只有成员变量 c 始终没有进行初始化，因此将产生未初始化的编译错误。

若启用了 `--strictPropertyInitialization` 编译选项并且仅在构造函数中对成员变量迸行了初始化操作，那么需要在构造函数中直接进行赋值操作。如果通过在构造函数中调用某个方法，进而在该方法中间接地初始化成员变量，那么编译器将无法检测到该初始化操作，因此会产生编译错误。示例如下：

```ts
class a {
  // 编译错误！未初始化
  a: number;

  init() {
    this.a = 0;
  }

  constructor() {
    this.init();
  }
}
```

在一些场景中，确实想要通过调用某些方法来初始化类的成员变量。这时可以使用非空类型断言 `!` 来通知编译器该成员变量已经进行初始化，以此来避免产生编译错误：

```ts
class A {
  // 非空类型断言
  a!: number;
  init() {
    this.a = 0;
  }
  constructor() {
    this.init();
  }
}
```

##### 2.15.2.2 readonly 属性

在声明类的成员变量时，在成员变量名之前添加 `readonly` 修饰符能够将该成员变量声明为只读的。**只读成员变量必须在声明时初始化或在构造函数里初始化**：

```ts
class A {
  readonly a = 0;
  readonly b: number;
  readonly c: number; // 编译错误

  constructor() {
    this.b = 0;
  }
}
```

> 关于类只读成员变量的一个最佳实践是，若类的成员变量不应该被修改，那么应该为其添加 `readonly` 修饰符。就算不确定是否允许修改类的某个成员变量，也可以先将该成员变量声明为只读的，当发现需要对该成员变量进行修改时再将 `readonly` 修饰符去掉。

#### 2.15.3 成员函数

成员函数也称作方法，声明成员函数与在对象字面量中声明方法是类似的：

```ts
class Circle {
  radius: number = 1;

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
```

此例中，area 是一个成员函数。在成员函数中，需要使用 ·this` 关键字来引用类的其他成员。

#### 2.15.4 成员存取器

成员存取器由 `get` 和 `set` 方法构成，并且会在类中声明一个属性成员存取器的定义方式与对象字面量中属性存取器的定义方式是完全相同的。如果一个类属性同时定义了 get 方法和 set 方法，那么 get 方法的返回值类型必须与 set 方法的参数类型一致，否则将产生错误：

```ts
class C {
  // 正确
  private _foo: number = 0;
  get foo(): number {
    return this._foo;
  }
  set foo(value: number) {}

  // 错误! get 和 set 存取器必须具有相同的类型
  private _bar: string = '';
  get bar(): string {
    return this._bar;
  }
  set bar(value: number) {}
}
```

**如果一个类属性同时定义了 get 方法和 set 方法，那么 get 方法和 set 方法必须具有相同的可访问性**。例如，不允许将 get 方法定义为公有的，而将 set 方法定义为私有的。关于成员可访问性的详细介绍<!--TODO-->参考 5.15.6 节。

存取器是实现数据封装的一种方式，它提供了一层额外的访问控制。类可以将成员变量的访问权限制在类内部，在类外部通过存取器方法来间接地访问成员变量。在存取器方法中，还可以加入额外的访可控制等处理逻辑：

```ts
class Circle {
  private _radius: number = 0;
  get radius(): number {
    return this._radius;
  }
  set radius(value: number) {
    if (value >= 0) {
      this._radius = value;
    }
  }
}

const circle = new Circle();
circle.radius; // 0

circle.radius = -1;
circle.radius; // 0

circle.radius = 10;
circle.radius; // 10
```

#### 2.15.5 索引成员

类的索引成员会在类的类型中引入索引签名。索引签名包含两种：

- 字符串索引签名
- 数值索引签名

在实际应用中，定义类的索引成员并不常见。类中所有的属性和方法必须符合字符串索引签名定义的类型。同时，只有当类具有类似数组的行为时，数值索引签名才有意义。

类的索引成员与接口中的索引签名类型成员具有完全相同的语法和语义，这里不再重复。关于索引签名的详细介绍请参考 5136 节。示例如下:

```ts
 class A {
 x:number =0
 [prop: string]: number

 [prop: number]: number

```

在类的索引成员上不允许定义可访问性修饰符，如 public 和 private 等。

#### 2.15.6 成员可访问性

成员可访问性定义了类的成员允许在何处被访问。TypeScript 为类成员提供了以下三种可访问性修饰符：

- public
- protected
- private

这三种可访问性修饰符是 TypeScript 语言对 JS 语言的补充。在 JS 中不支持这三种可访问性修饰符。本节会涉及与继承相关的部分内容，关于继承的详细介绍参考 5.15.9 <!--TODO-->
