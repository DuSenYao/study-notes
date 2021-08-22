---
title: JS代码规范
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [JS 代码规范](#js-代码规范)
  - [一. 命名规范](#一-命名规范)
    - [1.1 不要使用拼音命名](#11-不要使用拼音命名)
    - [1.2 js 中普通变量使用小写开头驼峰命名法，而非不区分大小写，或使用下划线命名](#12-js-中普通变量使用小写开头驼峰命名法而非不区分大小写或使用下划线命名)
    - [1.3 如果不想让使用者使用的属性能够看到，需要使用下划线开头。例如 `_value`，代表内部的值，外部不应该直接访问](#13-如果不想让使用者使用的属性能够看到需要使用下划线开头例如-_value代表内部的值外部不应该直接访问)
    - [1.4 不要使用无意义的前缀命名](#14-不要使用无意义的前缀命名)
  - [二. 代码风格](#二-代码风格)
    - [2.1 优先使用 `const/let`](#21-优先使用-constlet)
    - [2.2 函数](#22-函数)
      - [2.2.1 箭头函数取代 Function.prototype.bind，不应再用 self/\_this/that 绑定 this](#221-箭头函数取代-functionprototypebind不应再用-self_thisthat-绑定-this)
      - [2.2.2 在 `class` 或 `Object` 中使用新的函数声明方式](#222-在-class-或-object-中使用新的函数声明方式)
      - [2.2.3 优先使用 箭头函数 而不是使用传统的函数，尤其是使用匿名函数时](#223-优先使用-箭头函数-而不是使用传统的函数尤其是使用匿名函数时)
      - [2.2.4 不要再函数体内使用 arguments 变量](#224-不要再函数体内使用-arguments-变量)
    - [2.3 Class](#23-class)
      - [2.3.1 用 Class 取代需要 prototype 的操作](#231-用-class-取代需要-prototype-的操作)
    - [2.4 不要使用 `if` 判断后再赋予默认值](#24-不要使用-if-判断后再赋予默认值)
    - [2.5 简单的键值对数据结构优先使用 Map](#25-简单的键值对数据结构优先使用-map)
    - [2.6 优先使用模板字符串拼接多个字符串变量](#26-优先使用模板字符串拼接多个字符串变量)
    - [2.7 当独立参数超过 3 个时使用对象参数并解构](#27-当独立参数超过-3-个时使用对象参数并解构)
    - [2.8 不要写多余的 await](#28-不要写多余的-await)
    - [2.9 不要使用 == 进行比较](#29-不要使用-进行比较)
    - [2.10 使用计算属性名替代使用方括号表示法赋值](#210-使用计算属性名替代使用方括号表示法赋值)
    - [2.11 存放 id 标识列表使用 Set 而非数组](#211-存放-id-标识列表使用-set-而非数组)
  - [三. 逻辑代码](#三-逻辑代码)
    - [3.1 不要判断一个 Boolean 值并以此返回 Boolean 值](#31-不要判断一个-boolean-值并以此返回-boolean-值)
    - [3.2 不要使用多余的变量](#32-不要使用多余的变量)
    - [3.3 不要使用嵌套 if](#33-不要使用嵌套-if)
    - [3.4 不要先声明空对象然后一个个追加属性](#34-不要先声明空对象然后一个个追加属性)
    - [3.5 不要使用无意义的函数包裹](#35-不要使用无意义的函数包裹)
    - [3.6 不要使用三元运算符进行复杂的计算](#36-不要使用三元运算符进行复杂的计算)
    - [3.7 如果变量有所关联则使用对象而非多个单独的变量](#37-如果变量有所关联则使用对象而非多个单独的变量)
    - [3.8 使用类型定义参数对象](#38-使用类型定义参数对象)
    - [3.9 尽量扁平化代码](#39-尽量扁平化代码)
    - [3.10 自执行函数前面必须加分号](#310-自执行函数前面必须加分号)

<!-- /code_chunk_output -->

# JS 代码规范

## 一. 命名规范

### 1.1 不要使用拼音命名

### 1.2 js 中普通变量使用小写开头驼峰命名法，而非不区分大小写，或使用下划线命名

### 1.3 如果不想让使用者使用的属性能够看到，需要使用下划线开头。例如 `_value`，代表内部的值，外部不应该直接访问

### 1.4 不要使用无意义的前缀命名

## 二. 代码风格

### 2.1 优先使用 `const/let`

### 2.2 函数

#### 2.2.1 箭头函数取代 Function.prototype.bind，不应再用 self/\_this/that 绑定 this

#### 2.2.2 在 `class` 或 `Object` 中使用新的函数声明方式

ES6 推出了一种更简洁的函数声明方式，在 **class** 或 **Object** 中声明函数, 不需要写 `function`，只要 **名字 + ()** 即可：

```js
const use = {
  name: 'Tom',
  hello() {
    console.log('hello' + this.Tom);
  }
};
```

#### 2.2.3 优先使用 箭头函数 而不是使用传统的函数，尤其是使用匿名函数时

#### 2.2.4 不要再函数体内使用 arguments 变量

不要再函数体内使用 arguments 变量，使用 `...` 代替。因为扩展运算符可以先显示表明想要获取参数。

### 2.3 Class

#### 2.3.1 用 Class 取代需要 prototype 的操作

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

### 2.4 不要使用 `if` 判断后再赋予默认值

如果函数需要对参数做默认值处理，不要使用 if 判空之后再修改参数，而是使用 ES6 的 [默认参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters) 和 [解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。

主要优点：

- 减少代码，JS 是动态语言，维护起来较为麻烦，代码越少，错误越少
- 清晰明了，可以一眼就能看出这个参数的默认值，而不需要关心函数内部的逻辑
- IDE 大多对此进行了支持，代码提示时便会告诉参数是可选的并且有默认值

```js
function multiply(a, b = 1) {
  return a * b;
}
```

### 2.5 简单的键值对数据结构优先使用 Map

如果需要键值映射，不要使用一般的对象，而是用 ES6 的 [Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)。它不仅可以使用**任意类型的键**，另外 Map 本身也是有序的，有内建的遍历机制。

```js
const map = new Map().set(2, 'Tom').set(1, 'cat').set('age', 18);
// [2, 1, "age"]，因为是按照插入顺序排序的
console.log(Array.from(map.keys()));
```

### 2.6 优先使用模板字符串拼接多个字符串变量

### 2.7 当独立参数超过 3 个时使用对象参数并解构

```js
function hello({ name, age, sex }) {
  return `name: ${name}, age: ${age}, sex: ${sex}`;
}
```

### 2.8 不要写多余的 await

如果 await 是不必要的（在返回语句时，那么就不要用 async 标识函数），这是没有必要的 – 除非，需要在这个函数内异步操作完成后有其他操作。

### 2.9 不要使用 == 进行比较

在 js 中使用 `==` 比较危险，因为 js 会做各种隐式转换。而如果使用 `===` 比较，则会同时比较**值**和**类型**是否都相同，避免了各种不确定的问题。

### 2.10 使用计算属性名替代使用方括号表示法赋值

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

### 2.11 存放 id 标识列表使用 Set 而非数组

使用 `Set` 可以从数据结构层面避免掉可能重复的问题：

```js
const item = {
  id: 1,
  role: new Set([1, 2]),
  name: ''
};
```

## 三. 逻辑代码

### 3.1 不要判断一个 Boolean 值并以此返回 Boolean 值

### 3.2 不要使用多余的变量

如果一个表达式立刻被使用并且只会被使用一次，就不要使用变量声明，直接在需要的地方使用。

### 3.3 不要使用嵌套 if

不要使用多级的 if 嵌套，这会让代码变得丑陋且难以调试，应当优先使用**提前 return** 的策略。

### 3.4 不要先声明空对象然后一个个追加属性

### 3.5 不要使用无意义的函数包裹

### 3.6 不要使用三元运算符进行复杂的计算

### 3.7 如果变量有所关联则使用对象而非多个单独的变量

### 3.8 使用类型定义参数对象

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

### 3.9 尽量扁平化代码

尽量将 a 调用 b, b 调用 c，然后 b 调用 d，优化为依次调用 a, b, c, d。

### 3.10 自执行函数前面必须加分号

如果需要使用自执行函数，则开头必须加上 `;` 以避免可能出现的歧义。

```js
function returnItself(o) {
  return o;
}

returnItself(() => console.log(1));

;(() => {
  console.log(2);
})();
```
