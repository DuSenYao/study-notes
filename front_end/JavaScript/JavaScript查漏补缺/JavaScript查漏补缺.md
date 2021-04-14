---
title: JavaScript查漏补缺
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

# JavaScript 查漏补缺

## 一. 基础

1. **在通过对象使用函数时，称其为方法**，所有的 JS 对象都有方法。

2. JS 支持面向对象的编程风格，但与“经典的”面向对象编程语言非常不一样

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

3. 字符频率柱形图，这个 Node 程序使用标准输入读取文本，计算该文本的 *字符频率柱形图* 和 *总字符数*，然后打印出来。

   ```js
   node charFreq.js < ../JavaScript查漏补缺.md
   ```

## 二. 词法结构
