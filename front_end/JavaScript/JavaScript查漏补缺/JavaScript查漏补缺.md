---
title: JavaScript查漏补缺
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [JavaScript 查漏补缺](#javascript-查漏补缺)
  - [一. 基础](#一-基础)
    - [1.1 方法与函数的区别](#11-方法与函数的区别)
    - [1.2 JS 支持面向对象的编程风格，但与“经典的”面向对象编程语言非常不一样](#12-js-支持面向对象的编程风格但与经典的面向对象编程语言非常不一样)
    - [1.3. 使用 JS 分析文件中的字符频率](#13-使用-js-分析文件中的字符频率)
  - [二. 词法结构](#二-词法结构)
    - [2.1 字面量含义](#21-字面量含义)
    - [2.2 JS 标识符命名规则](#22-js-标识符命名规则)
    - [2.3 Unicode 转义序列](#23-unicode-转义序列)
    - [2.4 箭头函数的 `=>` 必须跟参数列表在同一行](#24-箭头函数的-必须跟参数列表在同一行)
  - [三. 类型、值和变量](#三-类型-值和变量)
    - [3.1 整数字面量支持的进制表示](#31-整数字面量支持的进制表示)
    - [3.2 数值字面量中的分隔符](#32-数值字面量中的分隔符)
    - [3.2 JS 通过 Math 对象提供了一组函数和常量，以支持更复杂的数学计算](#32-js-通过-math-对象提供了一组函数和常量以支持更复杂的数学计算)
    - [3.3 Number ES6 新增属性](#33-number-es6-新增属性)
    - [3.4 通过 BigInt 表示任意精度整数](#34-通过-bigint-表示任意精度整数)

<!-- /code_chunk_output -->

# JavaScript 查漏补缺

## 一. 基础

### 1.1 方法与函数的区别

**在通过对象使用函数时，称其为方法**，所有的 JS 对象都有方法。

### 1.2 JS 支持面向对象的编程风格，但与“经典的”面向对象编程语言非常不一样

```js
// 定义 Point 类以表示几何平面上的一个点，作为这个类的实例的对象有一个方法，叫做 distance()，用于计算该点与原点的距离
class Point {
  // 按惯例，类名需要首字母大写
  constructor(x, y) {
    // 构造函数用于初始化新实例
    this.x = x; // this 关键字代表要初始化的新对象
    this.y = y; // 将函数参数保存为对象属性
  } // 构造函数中不需要 return 语句

  distance() {
    // 计算从原点到当前点的距离的方法
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// 使用 Point() 构造函数和 new 创建Point对象
let p = new Point(1, 1); // 几何平面上的点

// 调用 Point 对象 p 的方法
p.distance(); // Math.SQRT2
```

### 1.3. 使用 JS 分析文件中的字符频率

这个 [Node 程序](./examples/charFreq.js) 使用标准输入读取文本，计算该文本的 _字符频率柱形图_ 和 _总字符数_，然后打印出来。

```js
node charFreq.js < ../JavaScript查漏补缺.md
```

## 二. 词法结构

编程语言的词法结构是一套基本规则，规定了如何使用这门编程语言编写程序。词法结构是一门语言最低级的语法，规定了变量如何命名、注释的界定符，以及如何分隔程序的语句。

### 2.1 字面量含义

字面量（literal）是一种直接出现在程序中的数据值。

### 2.2 JS 标识符命名规则

JS 标识符必须以字母、下划线`_` 或美元符号`$`开头。后续字符可以是字母、数字、`_` 或 `$`（**数字不能作为第一个字符，以便 JS 区分标识符和数值**）。

### 2.3 Unicode 转义序列

为了方便程序员编码和支持老技术的系统，JS 定义了转义序列，从而可以仅使用 ASCII 字符来表示 Unicode 字符。有两种方式来表示：

- 已 `\u` 开头，后跟 4 位十六进制数字（包括大小写的 A~F）
- 包含在一对花括号中内的 1~6 位十六进制数字。ES6 新增，为了更好的支持大于 16 位的 Unicode 码点，比如表情符号

  ```js
  console.log('\u{1F600}'); // 打印一个笑脸符号
  ```

### 2.4 箭头函数的 `=>` 必须跟参数列表在同一行

## 三. 类型、值和变量

### 3.1 数值

#### 3.1.1 整数字面量支持的进制表示

1. 以 `0x` 或 `0X` 开头，后跟一个十六进制数字字符串。
2. ES6 及以后的版本中，也可以通过二进制或八进制表示整数分别使用前缀 `0b` 和 `0o`。

#### 3.1.2 数值字面量中的分隔符

可以使用下划线将数值字面量分隔为容易看清的数字段。

```js
let billion = 1_000_000_000; // 以下划线作为千分位分隔符
let bytes = 0x89_ab_cd_ef; // 作为字节分隔符
let bits = 0b0001_1101_0111; // 作为半字节分隔符
let fraction = 0.123_456_789; // 也可以使用小数部分
```

> 这个特性暂时没有成为 JS 标准，但已经进入标准化流程的后期，而且已经被所有主流浏览器以及 Node 实现了。

#### 3.1.3 JS 通过 Math 对象提供了一组函数和常量，以支持更复杂的数学计算

```js
// 9007199254740992: 2的53次方
Math.pow(2, 53);
// 1.0: 舍入到最接近的整数
Math.round(0.6);
// 1.0: 向上舍入到一个整数
Math.ceil(0.6);
// 0.0: 向下舍入到一个整数
Math.floor(0.6);
// 5: 绝对值
Math.abs(-5);
// 返回最大的参数
Math.max(x, y, z);
// 返回最小的参数
Math.min(x, y, z);
// 伪随机数 x,范围 0 <= x < 1.0
Math.random();
// π 圆周率
Math.PI;
// 自然对数的底数
Math.E;
// 3**0.5: 3的平方根
Math.sqrt(3);
// 3**(1/3): 3的立方根
Math.pow(3, 1 / 3);
// 三角函数，还有 Math.cos、Math.atan 等
Math.sin(0);
// 10 的自然对数
Math.log(10);
// 以 10 为底 100 的对数
Math.log(100) / Math.LN10;
// 以 2 为底 512 的对数
Math.log(512) / Math.LN2;
// Math.E 的立方
Math.exp(3);
```

ES6 在 Math 对象上又定义了一批函数

```js
// 3: 立方根
Math.cbrt(27);
// 5: 所有参数平方和的平方根
Math.hypot(3, 4);
// 2: 以 10 为底的对数
Math.log10(100);
// 10：以 2 为底的对数
Math.log2(1024);
// (1+x) 的自然对数；精确到非常小的x
Math.log1p(x);
// Math.exp(x)-1; Math.log1p() 的逆运算
Math.expm1(1);
// 对 <、== 或 >0 的参数返回 -1、0 或 1
Math.sign(x);
// 6：优化的32位整数乘法
Math.imul(2, 3);
// 28: 32位整数中前导 0 的位数
Math.clz32(0xf);
// 3: 减掉小数部分得到整数
Math.trunc(3.9);
// 舍入到最接近的 32 位浮点数
Math.fround(x);
// 双曲线正弦，还有 Math.cosh() 和 Math.tanh()
Math.sinh(x);
// 双曲线反正弦，还有 Math.acosh() 和 Math.atanh()
Math.asinh(x);
```

#### 3.1.4 Number ES6 新增属性

```js
// 同全局 parseInt() 函数
Number.parseInt();
// 同全局 parseFloat() 函数
Number.parseFloat();
Number.isNaN(x);
Number.isFinite(x);
// 判断 x 是不是整数
Number.isInteger(x);
// -(2**53 - 1)
Number.MIN_SAFE_INTEGER;
// 2**53 -1
Number.MAX_SAFE_INTEGER;
// 数值与数值之间最小的差
Number.EPSILON;
```

#### 3.1.5 通过 BigInt 表示任意精度整数

ES2020 为 JS 定义了一种新的数值类型 BigInt。之所以增加了这个类型，**主要是为了表示 64 位整数，这对于兼容很多其他语言和 API 是必需的**。

BigInt 字面量写作一串数字后跟小写字母 `n`。默认情况下，进制是 10，但也可以通过前缀 `0b`、`0o`、`0x` 来表示二进制、八进制和十六进制 BigInt。

```js
1234n;
0b11241n; // 二进制 BigInt
0o777n; // 八进制 BigInt
```

可以使用 `BigInt()` 函数把常规 JS 数值或字符串转换为 BigInt 值。

```js
BigInt(123); // 123n
let string = '1' + '0'.repeat(100);
BigInt(string); // 10n**100n: 一个天文数字
```

> 注意：
>
> 1. 算术操作符不能 混用 BigInt 操作数和常规数值操作数。
> 2. 比较操作符允许混用操作数类型。
> 3. 位操作符通常可以用于 BigInt 操作数。
> 4. Math 对象的任何函数都不接受 BigInt 操作数。

### 3.2 文本

JS 中表示文本的类型是 String，即字符串。字符串是 16 位值的不可修改的有序序列，其中每个值都表示一个 Unicode 字符。

#### 3.2.1 使用字符串

```js
let s = 'Hello，world';

// 取得字符串的一部分
s.substring(1, 4); // "ell": 第 2~4 个字符
s.slice(1, 4); // "ell": 同上
s.slice(-3); // rld: 最后 3 个字符
s.split(', '); // ["hello", "world"]: 从界定符处拆开

// 搜索字符串
s.indexOf('l'); // 2: 第一个字母 l 的位置
s.indexOf('l', 3); // 3: 位置3后面第一个 "l" 的位置
s.indexOf('zz'); // -1: s 并不包含子串 "zz"
s.lastIndexOf('l'); // 10: 最后一个字母 "l" 的位置

// ES6 及之后版本中的布尔值搜索函数
s.startsWith('Hell'); // true：字符串是以这些字符开头的
s.endWith('!'); // false：s 不是以它结尾的
s.includes('or'); // true: s 包含子串 "or"

// 创建字符串的修改版本
s.replace('llo', 'ya'); // "Heya, world"
s.toLowerCase(); // "hello，world"
s.toUpperCase(); // "HELLO，WORLD"
s.normalize(); // Unicode NFC 归一化：ES6 新增
s.normalize('NFD'); // NFD 归一化。还有 "NFKC" "NFKD"

// 访问字符串中的个别（16位值）字符
s.charAt(0); // "H": 第一个儿字符
s.charAt(s.length - 1); // "d"：最后一个字符
s.charCodeAt(0); // 72：指定位置的16位数值
s.codePointAt(0); // 72: ES6，适用于码点大于 16 位的情况

// ES2017 新增的字符串填充函数
'x'.padStart(3); // "  x"：在左侧添加空格，让字符串长度变成 3
'x'.padEnd(3); // "x  ": 在右侧添加空格，让字符串长度变成 3
'x'.padStart(3, '*'); // "**x"：在左侧添加星号，让字符串长度变成 3
'x'.padEnd(3, '-'); // "x--"：在右侧添加破折号，让字符串长度变成 3

// 删除空格函数，trim() 是 ES5 就有的，其他是 ES2019 增加的
' test'.trim(); // "test"：删除开头和结尾的空格
' test'.trimStart(); // "test "：删除左侧空格。也叫 trimLeft
' test '.trimEnd(); // " test"：删除右侧空额。也叫 trimRight

// 未分类字符串方法
s.concat('!'); // "Hello，world!"：可以用 + 操作符代替
'<>'.repeat(3); // "<><><>"：拼接 n 次，ES6 新增
```

> 注意：JS 中的字符串是不可修改的，像 replace() 这样的方法都是返回的新字符串，它们并不会修改调用它们的字符串。

#### 3.2.2 模板字符串

**标签化模板字面量**
模板字面量有一个强大但不太常用的特性，如果在开头的反引号前面有一个函数名（标签），那么模板字面量中的文本和表达式的值将作为参数传给这个函数。

这个特性可以用于先对某些值进行 HTML 或 SQL 转义，然后在把它们插入文本中。

ES6 提供了一个内置的标签函数：`String.row()`。这个函数返回反引号中未经处理的文本，即不会处理任何反斜杠转义。

```js
`\n`.length; // 1: 字符串中只包含一个换行符
String.raw`\n`.length; // 2: 一个反写杠字符和一个字母 n
```

> 注意：即使标签化模板字面量的标签部分是函数，在调用这个函数时也没有圆括号。在这种特殊的情况下，反引号字符充当开头和结尾的圆括号。

### 3.3 null 与 undefined

- `undefined` 可以表示一种系统级别、意料之外或类似错误的没有值。
- `null` 可以表示程序级别，正常或意料之外的没有值。

### 3.4 Symbol

符号（Symbol）是 ES6 新增的一种原始类型。用作非字符串的属性名。要理解 Symbol，需要了解 JS 的基础类型 Object 是一个属性的无序集合，其中每一个属性都有一个名字和一个值。属性名通常是字符串。但在 ES6 及之后的版本中，Symbol 也可以作为属性名：

```js
let strname = 'string name'; // 可以用作属性名的字符串
let symname = Symbol('propname'); // 可以用作属性名的符号
typeof strname; // string：strname 是字符串
typeof symname; // Symbol：symname 是符号
let o = {}; // 创建一个新对象
// 使用字符串名顶一个属性
o[strname] = 1;
// 使用符号名定义一个属性
o[symname] = 2;
o[strname]; // 1
o[symname]; // 2
```

Symbol 类型没有字面量语法。要获取一个 Symbol 值，需要调用 `Symbol()` 函数。这个函数永远不会返回相同的值，即使每次传入的参数都一样。这意味着可以将调用 `Symbol()` 取得的符号值安全地用于为对象添加属性，而无需担心可能重写已有的同名属性。

如果定义了 Symbol 属性但没有共享相关 Symbol，也可以确信程序中的其他代码不会意外重写这个属性。

实践中，Symbol 通常作为一种语言扩展机制。ES6 新增了 [for/of 循环]<!--TODO 5.4.4 -->和 可迭代对象<!--第12章-->，为此就需要定义一种标准的机制让类可以实现，从而把自身变得可迭代。但选择任何特定的字符串作为这个迭代器方法的名字都有可能破坏已有的代码。

为此，Symbol 应运而生，`Symbol.iterator` 是一个符号值，可以作一个方法名，让对象变得可迭代。

`Symbol()` 函数可选地接收一个字符串参数，返回唯一的符号值。如果提供了字符串参数，那么调用返回符号值的 `toString()` 方法得到的结果中会包含该字符串。

为了定义一些可以与其他代码共享的 Symbol 值，JS 定义了一个全局符号注册表。`Symbol.for()` 函数接收一个字符串参数，返回一个与该字符串关联的符号值。如果没有 Symbol 与该字符串关联，则会创建并返回一个新 Symbol；否则，会返回已有的 Symbol。

`Symbol.for()` 与 `Symbol()` 完全不同：`Symbol()` 永远不会返回相同的值。而在以相同字符串调用 `Symbol.for()` 时始终返回相同的值。传给 `Symbol.for()` 的字符串会出现在 `toString()` 的输出中。而且，这个字符串也可以通过将返回的符号传给 `Symbol.keyFor()` 来得到：

```js
let s = Symbol.for('shared');
let t = Symbol.for('shared');
s === t; // true
s.toString(); // "Symbol(shared)"
Symbol.keyFor(t); // "shared"
```
