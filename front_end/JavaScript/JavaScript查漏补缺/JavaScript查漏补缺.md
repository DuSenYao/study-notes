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

### 3.1 整数字面量支持的进制表示

1. 以 `0x` 或 `0X` 开头，后跟一个十六进制数字字符串。
2. ES6 及以后的版本中，也可以通过二进制或八进制表示整数分别使用前缀 `0b` 和 `0o`。

### 3.2 数值字面量中的分隔符

可以使用下划线将数值字面量分隔为容易看清的数字段。

```js
let billion = 1_000_000_000; // 以下划线作为千分位分隔符
let bytes = 0x89_ab_cd_ef; // 作为字节分隔符
let bits = 0b0001_1101_0111; // 作为半字节分隔符
let fraction = 0.123_456_789; // 也可以使用小数部分
```

> 这个特性暂时没有成为 JS 标准，但已经进入标准化流程的后期，而且已经被所有主流浏览器以及 Node 实现了。

### 3.2 JS 通过 Math 对象提供了一组函数和常量，以支持更复杂的数学计算

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

### 3.3 Number ES6 新增属性

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

### 3.4 通过 BigInt 表示任意精度整数

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
