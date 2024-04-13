# JS 设计模式

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [JS 设计模式](#js-设计模式)
  - [一. 简介](#一-简介)
  - [二. 创建型](#二-创建型)
    - [2.1 工厂模式](#21-工厂模式)
      - [2.1.1 简单工厂](#211-简单工厂)
      - [2.1.2 抽象工厂](#212-抽象工厂)

<!-- /code_chunk_output -->

## 一. 简介

在软件工程中，**设计模式（design pattern）是对软件设计中普遍存在（反复出现）的各种问题，所提出的解决方案**。

前端不变的是，**驾驭技术的能力**，具体来说，它分为以下三个层次：

- 能用健壮的代码去解决具体的问题
- 能用抽象的思维去应对复杂的系统
- 能用工程化的思想去规划更大规模的业务

**SOLID 设计原则**
"SOLID" 是由罗伯特·C·马丁在 21 世纪早期引入的记忆术首字母缩略字，指代了面向对象编程和面向对象设计的五个基本原则，它可以帮助规避不良的软件设计：

- **单一功能原则**（Single Responsibility Principle）
- **开放封闭原则**（Opened Closed Principle）
- **里式替换原则**（Liskov Substitution Principle）
- **接口隔离原则**（Interface Segregation Principle）
- **依赖反转原则**（Dependency Inversion Principle）

在 JS 设计模式中，主要用到的设计模式基本都围绕 “单一功能” 和 “开放封闭” 这两个原则来展开。

**设计模式的核心思想——封装变化**
设计模式出现的背景，是软件设计的复杂度日益飙升。软件设计越来越复杂的“罪魁祸首”，就是**变化**。

在实际开发中，不发生变化的代码可以说是不存在的。能做的只有将这个变化造成的影响最小化 —— **将变与不变分离，确保变化的部分灵活、不变的部分稳定**。这个过程，就叫“**封装变化**”。这样的代码，就是所谓的“健壮”的代码，它可以经得起变化的考验。而设计模式出现的意义，就是帮写出这样的代码。

[经典的设计模式有 23 种](/computer_basics/设计模式/设计模式.md#13-设计模式)。

## 二. 创建型

### 2.1 工厂模式

#### 2.1.1 简单工厂

```js
function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
}

function Factory(name, age, career) {
  let work;
  switch (career) {
    case 'coder':
      work = ['写代码', '写系分', '修Bug'];
      break;
    case 'xxx':
    // 其它工种的职责分配
    // ...
  }
  return new User(name, age, career, work);
}
```

工厂模式其实就是**将创建对象的过程单独封装**。

#### 2.1.2 抽象工厂

在实际的业务中，往往面对的复杂度并非数个类、一个工厂可以解决，而是需要动用多个工厂。
