---
title: JS代码规范
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [JS 代码规范](#js代码规范)
  - [一. 命名规范](#一-命名规范)
    - [不要使用拼音命名](#不要使用拼音命名)
    - [js 中普通变量使用 小写开头驼峰命名法，而非不区分大小写，或使用下划线命名等等](#js-中普通变量使用-小写开头驼峰命名法而非不区分大小写或使用下划线命名等等)
    - [如果不想让使用者使用的属性能够看到，需要使用下划线开头。例如 `_value`，代表内部的值，外部不应该直接访问](#如果不想让使用者使用的属性能够看到需要使用下划线开头例如-_value代表内部的值外部不应该直接访问)
    - [不要使用无意义的前缀命名](#不要使用无意义的前缀命名)
  - [二. ES6](#二-es6)
    - [优先使用 `const/let`](#优先使用-constlet)
    - [在 class 或 Object 中使用新的函数声明方式](#在-class-或-object-中使用新的函数声明方式)
    - [优先使用 箭头函数 而不是使用传统的函数，尤其是使用 匿名函数 时](#优先使用-箭头函数-而不是使用传统的函数尤其是使用-匿名函数-时)
    - [不要使用 if 判断后再赋予默认值](#不要使用-if-判断后再赋予默认值)
    - [优先使用 Map 做键值对映射而非传统的对象](#优先使用-map-做键值对映射而非传统的对象)
    - [优先使用模板字符串拼接多个字符串变量](#优先使用模板字符串拼接多个字符串变量)
    - [当独立参数超过 3 个时使用对象参数并解构](#当独立参数超过-3-个时使用对象参数并解构)
    - [不要写多余的 await](#不要写多余的-await)
    - [不要使用 == 进行比较](#不要使用-进行比较)
    - [使用计算属性名替代使用方括号表示法赋值](#使用计算属性名替代使用方括号表示法赋值)
    - [简单的选项列表优先使用 `Map` 而非数组](#简单的选项列表优先使用-map-而非数组)
    - [存放 id 标识列表使用 Set 而非数组](#存放-id-标识列表使用-set-而非数组)
  - [三. 逻辑代码](#三-逻辑代码)
    - [不要判断一个 Boolean 值并以此返回 Boolean 值](#不要判断一个-boolean-值并以此返回-boolean-值)
    - [不要使用多余的变量](#不要使用多余的变量)
    - [不要使用嵌套 if](#不要使用嵌套-if)
    - [不要先声明空对象然后一个个追加属性](#不要先声明空对象然后一个个追加属性)
    - [不要使用无意义的函数包裹](#不要使用无意义的函数包裹)
    - [不要使用三元运算符进行复杂的计算](#不要使用三元运算符进行复杂的计算)
    - [如果变量有所关联则使用对象而非多个单独的变量](#如果变量有所关联则使用对象而非多个单独的变量)
    - [使用类型定义参数对象](#使用类型定义参数对象)
    - [尽量扁平化代码](#尽量扁平化代码)
    - [自执行函数前面必须加分号](#自执行函数前面必须加分号)

<!-- /code_chunk_output -->

# JS 代码规范

## 一. 命名规范

### 不要使用拼音命名

### js 中普通变量使用 小写开头驼峰命名法，而非不区分大小写，或使用下划线命名等等

### 如果不想让使用者使用的属性能够看到，需要使用下划线开头。例如 `_value`，代表内部的值，外部不应该直接访问

### 不要使用无意义的前缀命名

## 二. ES6

### 优先使用 `const/let`

### 在 class 或 Object 中使用新的函数声明方式

ES6 推出了一种更简洁的函数声明方式，在 **class** 或 **Object** 中声明函数, 不需要写 **function**，只要 `名字 + ()` 即可。

```js
const use = {
  name: "Tom",
  hello() {
    console.log("hello" + this.Tom);
  }
};
```

### 优先使用 箭头函数 而不是使用传统的函数，尤其是使用 匿名函数 时

### 不要使用 if 判断后再赋予默认值

如果函数需要对参数做默认值处理，不要使用 if 判空之后再修改参数，而是使用 ES6 的 [默认参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters) 和 [解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。

主要优点:

- 减少代码，JS 是动态语言，维护起来较为麻烦，代码越少，错误越少
- 清晰明了，可以一眼就能看出这个参数的默认值，而不需要关心函数内部的逻辑
- IDE 大多对此进行了支持，代码提示时便会告诉参数是可选的并且有默认值

```js
function multiply(a, b = 1) {
  return a * b;
}
```

### 优先使用 Map 做键值对映射而非传统的对象

如果需要 键值映射，不要使用一般的对象，而是用 ES6 的 [Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)。它不仅可以使用 **任意类型的键**，另外 Map 本身也是 **有序** 的。

```js
const map = new Map().set(2, "Tom").set(1, "cat").set("age", 18);
// [2, 1, "age"]，因为是按照插入顺序排序的
console.log(Array.from(map.keys()));
```

### 优先使用模板字符串拼接多个字符串变量

### 当独立参数超过 3 个时使用对象参数并解构

```js
function hello({ name, age, sex }) {
  return `name: ${name}, age: ${age}, sex: ${sex}`;
}
```

### 不要写多余的 await

如果 await 是不必要的（在返回语句时，那么就不要用 async 标识函数），这是没有必要的 – 除非，需要在这个函数内异步操作完成后有其他操作。

### 不要使用 == 进行比较

在 js 中使用 `==` 比较危险，因为 js 会做各种隐式转换。而如果使用 `===` 比较，则会同时比较 **值** 和 **类型** 是否都相同，避免了各种不确定的问题。

### 使用计算属性名替代使用方括号表示法赋值

ES6 已经有了 [计算属性名](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D) 用以在初始化时计算属性名，所以不需要再先声明对象再使用 方括号表示法 进行赋值了。

```js
// es5 写法
const state = {
  "user.name": function () {},
};
state[Date.now()] = new Date();
```

```js
const state = {
  'user.name' : function () {},
  [Date.now()] : new Date();
}
```

### 简单的选项列表优先使用 `Map` 而非数组

```js
const item = {
  id: 1,
  role: [1, 2],
  name: "",
};
const options = new Map().set(1, "黄金糕").set(2, "双皮奶").set(3, "蚵仔煎");

function calcName(role) {
  return role
    .map((k) => options.get(k))
    .filter((s) => s)
    .join(",");
}

item.name = calcName(item.role);
```

### 存放 id 标识列表使用 Set 而非数组

使用 Set 可以从数据结构层面避免掉可能重复的问题。

```js
const item = {
  id: 1,
  role: new Set([1, 2]),
  name: "",
};
```

## 三. 逻辑代码

### 不要判断一个 Boolean 值并以此返回 Boolean 值

### 不要使用多余的变量

如果一个表达式立刻被使用并且只会被使用一次，就不要使用变量声明，直接在需要的地方使用。

### 不要使用嵌套 if

不要使用多级的 if 嵌套，这会让代码变得丑陋且难以调试，应当优先使用 **提前 return** 的策略。

### 不要先声明空对象然后一个个追加属性

### 不要使用无意义的函数包裹

### 不要使用三元运算符进行复杂的计算

### 如果变量有所关联则使用对象而非多个单独的变量

### 使用类型定义参数对象

如果一个函数需要一个对象参数，最好专门定义一个类型，并在注释上说明，便于在使用时 IDE 进行提示，而不需要去查找文档手册。

```js
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

const str = formatUser(new User("rx", "123456"));
console.log(str);
```

### 尽量扁平化代码

尽量将 a 调用 b, b 调用 c，然后 b 调用 d，优化为依次调用 a, b, c, d。

### 自执行函数前面必须加分号

如果需要使用自执行函数，则开头必须加上 `;` 以避免可能出现的歧义。

```js
function returnItself(o) {
  return o;
}

returnItself(() => console.log(1));
(() => {
  console.log(2);
})();
```
