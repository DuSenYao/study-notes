# JS 开发优化技巧

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [JS 开发优化技巧](#js-开发优化技巧)
  - [一. 功能类](#一-功能类)
    - [1.1 关闭页面弹出框](#11-关闭页面弹出框)
    - [1.2 用异或运算交换两个整数的值](#12-用异或运算交换两个整数的值)
  - [二. 函数类](#二-函数类)
  - [三. JS 语句简化类](#三-js-语句简化类)
    - [3.1 带有多个条件的 if 语句](#31-带有多个条件的-if-语句)
    - [3.2 null undefined 和空值检查](#32-null-undefined-和空值检查)
    - [3.3 使用 ?? 检查 null 或 undefined](#33-使用-检查-null-或-undefined)
    - [3.4 给多个变量赋值](#34-给多个变量赋值)
    - [3.5 用于多个条件判断的 && 操作符](#35-用于多个条件判断的-操作符)
    - [3.6 forEach 循环](#36-foreach-循环)
    - [3.7 14. 简短的函数调用](#37-14-简短的函数调用)
    - [3.8 隐式返回](#38-隐式返回)
    - [3.9 延展操作符简化](#39-延展操作符简化)
    - [3.10 解构赋值](#310-解构赋值)
    - [3.11 数组 find 简化](#311-数组-find-简化)
    - [3.12 将对象转换为对象数组](#312-将对象转换为对象数组)
    - [3.13 将 Object 转换为 Map](#313-将-object-转换为-map)
    - [3.14 重复字符串多次](#314-重复字符串多次)
    - [3.15 查找数组的最大值和最小值](#315-查找数组的最大值和最小值)
  - [四. 命名规范](#四-命名规范)
    - [4.1 js 中普通变量使用小写开头驼峰命名法，而非不区分大小写，或使用下划线命名](#41-js-中普通变量使用小写开头驼峰命名法而非不区分大小写或使用下划线命名)
    - [4.2 如果不想让使用者使用的属性能够看到，需要使用下划线开头。例如 `_value`，代表内部的值，外部不应该直接访问](#42-如果不想让使用者使用的属性能够看到需要使用下划线开头例如-_value代表内部的值外部不应该直接访问)
  - [五. 优化](#五-优化)
    - [5.1 用 Class 取代需要 prototype 的操作](#51-用-class-取代需要-prototype-的操作)
    - [5.2 简单的键值对数据结构优先使用 Map](#52-简单的键值对数据结构优先使用-map)
    - [5.3 当独立参数超过 3 个时使用对象参数并解构](#53-当独立参数超过-3-个时使用对象参数并解构)
    - [5.4 不要写多余的 await](#54-不要写多余的-await)
    - [5.5 使用计算属性名替代使用方括号表示法赋值](#55-使用计算属性名替代使用方括号表示法赋值)
    - [5.6 存放 id 标识列表使用 Set 而非数组](#56-存放-id-标识列表使用-set-而非数组)
    - [5.7 不要先声明空对象然后一个个追加属性](#57-不要先声明空对象然后一个个追加属性)
    - [5.8 不要使用无意义的函数包裹](#58-不要使用无意义的函数包裹)
    - [5.9 不要使用三元运算符进行复杂的计算](#59-不要使用三元运算符进行复杂的计算)
    - [5.10 如果变量有所关联则使用对象而非多个单独的变量](#510-如果变量有所关联则使用对象而非多个单独的变量)
    - [5.11 使用类型定义参数对象](#511-使用类型定义参数对象)
    - [5.12 尽量扁平化代码](#512-尽量扁平化代码)

<!-- /code_chunk_output -->

## 一. 功能类

### 1.1 关闭页面弹出框

```js
window.addEventListener('beforeunload', event => {
  event.preventDefault();
  event.returnValue = '确定离开当前页面吗？';
});
```

### 1.2 用异或运算交换两个整数的值

```js
// 异或运算有个特征，两次异或运算相当于取消
let a = 102;
let b = 304;
a = a ^ b; // 342  102 ^ 304 = 342
b = a ^ b; // 102  342 ^ 304 = 102
a = a ^ b; // 304  342 ^ 102 = 304
console.log(a, b); // 304 102
```

## 二. 函数类

## 三. JS 语句简化类

### 3.1 带有多个条件的 if 语句

把多个值放在一个数组中，然后调用数组的 `includes()` 方法。

```js
//longhand
if (x === 'abc' || x === 'def' || x === 'ghi' || x === 'jkl') {
  //logic
}
//shorthand
if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
  //logic
}
```

### 3.2 null undefined 和空值检查

当创建了新变量，有时候想要检查引用的变量是不是为非 null 或 undefined。JS 有一个很好的快捷方式来实现这种检查。

```js
// Longhand
if (test1 !== null || test1 !== undefined || test1 !== '') {
  let test2 = test1;
}
// Shorthand
let test2 = test1 || '';
```

### 3.3 使用 ?? 检查 null 或 undefined

如果左边值为 null 或 undefined，就返回右边的值。默认情况下，它将返回左边的值。

```js
const test = null ?? 'default';
console.log(test);
// expected output: "default"
const test1 = 0 ?? 2;
console.log(test1);
// expected output: 0
```

### 3.4 给多个变量赋值

```js
//Longhand
let test1, test2, test3;
test1 = 1;
test2 = 2;
test3 = 3;
//Shorthand
let [test1, test2, test3] = [1, 2, 3];
```

### 3.5 用于多个条件判断的 && 操作符

如果只在变量为 true 时才调用函数，可以使用 `&&` 操作符。

```js
//Longhand
if (test1) {
  callMethod();
}
//Shorthand
test1 && callMethod();
```

### 3.6 forEach 循环

这是一种常见的循环简化技巧。

```js
function testData(element, index, array) {
  console.log('test[' + index + '] = ' + element);
}

[11, 24, 32].forEach(testData);
// logs: test[0] = 11, test[1] = 24, test[2] = 32
```

### 3.7 14. 简短的函数调用

可以使用三元操作符来实现多个函数调用。

```js
// Longhand
function test1() {
  console.log('test1');
}
function test2() {
  console.log('test2');
}
let test3 = 1;
if (test3 == 1) {
  test1();
} else {
  test2();
}

// Shorthand
(test3 === 1 ? test1 : test2)();
```

### 3.8 隐式返回

通过使用箭头函数，当外面没有 `{}` 时，默认直接返回值，不需要 `return` 语句。

```js
//longhand
function calculate(diameter) {
  return Math.PI * diameter
}
//shorthand
calculate = diameter => (
  Math.PI * diameter;
)
```

### 3.9 延展操作符简化

```js
// longhand
// 使用 concat 拼接数组
const data = [1, 2, 3];
const test = [4, 5, 6].concat(data);
// shorthand
// 拼接数组
const data = [1, 2, 3];
const test = [4, 5, 6, ...data];
console.log(test); // [ 4, 5, 6, 1, 2, 3]
```

也可以使用延展操作符进行克隆。

```js
//longhand
// cloning arrays
const test1 = [1, 2, 3];
const test2 = test1.slice();
//shorthand
// cloning arrays
const test1 = [1, 2, 3];
const test2 = [...test1];
```

### 3.10 解构赋值

```js
//longhand
const test1 = this.data.test1;
const test2 = this.data.test2;
const test2 = this.data.test3;
//shorthand
const { test1, test2, test3 } = this.data;
```

### 3.11 数组 find 简化

当有一个对象数组，并想根据对象属性找到特定对象，`find` 方法会非常有用。

```js
const data = [
  {
    type: 'test1',
    name: 'abc'
  },
  {
    type: 'test2',
    name: 'cde'
  },
  {
    type: 'test1',
    name: 'fgh'
  }
];
function findTest1(name) {
  for (let i = 0; i < data.length; ++i) {
    if (data[i].type === 'test1' && data[i].name === name) {
      return data[i];
    }
  }
}

//Shorthand
filteredData = data.find(data => data.type === 'test1' && data.name === 'fgh');
console.log(filteredData); // { type: 'test1', name: 'fgh' }
```

### 3.12 将对象转换为对象数组

`Object.entries` 可以将对象转换为对象数组。

```js
const data = { test1: 'abc', test2: 'cde', test3: 'efg' };
const arr = Object.entries(data);
console.log(arr);
/** Output:
[ [ 'test1', 'abc' ],
  [ 'test2', 'cde' ],
  [ 'test3', 'efg' ]
]
**/
```

### 3.13 将 Object 转换为 Map

new Map() 构造函数接受一个可迭代的 `entries`。借助 `Object.entries` 方法可以很容易的将 `Object` 转换为 `Map`:

```js
var obj = { foo: 'bar', baz: 42 };
var map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }
```

### 3.14 重复字符串多次

重复操作相同的字符，优先使用 `repeat()` 方法：

```js
//longhand
let test = '';
for (let i = 0; i < 5; i++) {
  test += 'test ';
}
console.log(str); // test test test test test

//shorthand
'test '.repeat(5);
```

### 3.15 查找数组的最大值和最小值

```js
const arr = [1, 2, 3];
Math.max(...arr); // 3
Math.min(...arr); // 1
```

## 四. 命名规范

### 4.1 js 中普通变量使用小写开头驼峰命名法，而非不区分大小写，或使用下划线命名

### 4.2 如果不想让使用者使用的属性能够看到，需要使用下划线开头。例如 `_value`，代表内部的值，外部不应该直接访问

## 五. 优化

### 5.1 用 Class 取代需要 prototype 的操作

用 Class 取代需要 prototype 的操作。因为 Class 的写法更简洁，更易于理解。

```js
// bad
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function () {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
};

// good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }

  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
```

### 5.2 简单的键值对数据结构优先使用 Map

如果需要键值映射，不要使用一般的对象，而是用 ES6 的 [Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)。它不仅可以使用**任意类型的键**，另外 Map 本身也是有序的，有内建的遍历机制。

```js
const map = new Map().set(2, 'Tom').set(1, 'cat').set('age', 18);
// [2, 1, "age"]，因为是按照插入顺序排序的
console.log(Array.from(map.keys()));
```

### 5.3 当独立参数超过 3 个时使用对象参数并解构

```js
function hello({ name, age, sex }) {
  return `name: ${name}, age: ${age}, sex: ${sex}`;
}
```

### 5.4 不要写多余的 await

如果 await 是不必要的（在返回语句时，那么就不要用 async 标识函数），这是没有必要的。除非，需要在这个函数内异步操作完成后有其他操作。

### 5.5 使用计算属性名替代使用方括号表示法赋值

ES6 已经有了[计算属性名](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D)用以在初始化时计算属性名，所以不需要再先声明对象再使用方括号表示法进行赋值了。

```js
// es5
const state = {
  'user.name': function () {}
};
state[Date.now()] = new Date();

// es6
const state = {
  'user.name' : function () {},
  [Date.now()] : new Date();
}
```

### 5.6 存放 id 标识列表使用 Set 而非数组

使用 Set 可以从数据结构层面避免掉可能重复的问题：

```js
const item = {
  id: 1,
  role: new Set([1, 2]),
  name: ''
};
```

### 5.7 不要先声明空对象然后一个个追加属性

### 5.8 不要使用无意义的函数包裹

### 5.9 不要使用三元运算符进行复杂的计算

### 5.10 如果变量有所关联则使用对象而非多个单独的变量

### 5.11 使用类型定义参数对象

如果一个函数需要一个对象参数，最好专门定义一个类型，并在注释上说明，便于在使用时 IDE 进行提示，而不需要去查找文档手册：

```js
/**
 * 用户类
 * @param {String} username 用户名
 * @param {String} password 密码
 * */
class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
}

/**
 * 格式化用户
 * @param {User} user 格式化的用户对象
 */
function formatUser(user) {
  const { username, password } = user || {};
  return `user, username: ${username}, password: ${password}`;
}

const str = formatUser(new User('rx', '123456'));
console.log(str);
```

### 5.12 尽量扁平化代码

尽量将 a 调用 b, b 调用 c，然后 b 调用 d，优化为依次调用 a, b, c, d。
