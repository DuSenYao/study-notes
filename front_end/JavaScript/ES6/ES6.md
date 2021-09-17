---
title: ES6
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [ES6](#es6)
  - [一. ECMAScript 6 简介](#一-ecmascript-6-简介)
    - [1.2 ES6 与 ECMAScript 2015 的关系](#12-es6-与-ecmascript-2015-的关系)
    - [1.3 语法提案的批准流程](#13-语法提案的批准流程)
    - [1.4 ECMAScript 的历史](#14-ecmascript-的历史)
    - [1.5 部署进度](#15-部署进度)
    - [1.6 Babel 转码器](#16-babel-转码器)

<!-- /code_chunk_output -->

# ES6

## 一. ECMAScript 6 简介

1.1 ECMAScript 和 JS 的关系

要讲清楚这个问题，需要回顾历史。1996 年 11 月，JS 的创造者 Netscape 公司，决定将 JS 提交给国际标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布了 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。

该标准从一开始就是针对 JS 语言制定的，但是并没有称其为 JS，主要有以下两方面原因：

- 一是商标，Java 是 Sun 公司的注册商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，而且 JavaScript 本身也已被 Netscape 公司注册为商标。

- 二是想体现这门语言的制定者是 ECMA，而不是 Netscape，这样有利于保证这门语言的开放性和中立性。

因此，ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。在日常场合，这两个词是可以互换的。

### 1.2 ES6 与 ECMAScript 2015 的关系

2011 年，ECMAScript 5.1 版本发布后，6.0 版本便开始制定了。因此，ES6 这个词的原意就是指，JS 语言的下一个版本。

由于这个版本引入的语法功能太多，而且在制定过程当中还有很多组织和个人不断提交新功能。因此，不可能在同一个版本里面包括所有将要引入的功能。常规的做法是先发布 6.0 版本，过一段时间再发布 6.1 版本，然后是 6.2 版本、6.3 版本等。

但是，标准的制定者不想这样做。他们想让标准的升级成为常规流程：任何人在任何时候都可以向标准委员会提交新语法的提案，然后标准委员会每个月开一次会，评估这些提案是否可以接受，需要哪些改进。经过多次会议，如果一个提案足够成熟，便可以正式进入标准。也就是说，标准的版本升级成为了一个不断滚动的流程，每个月都会有所变动。

标准委员会最终决定，每年 6 月正式发布一次标准，作为当年的正式版本。接下来的时间就在这个版本的基础上进行改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。

ES6 的第一个版本就这样在 2015 年 6 月发布了，正式名称是《ECMAScript 2015 标准》（简称 ES2015）。2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，因为两者的差异非常小（只新增了数组实例的 includes 方法和指数运算符），基本上可以认为是同一个标准。根据计划，2017 年 6 月会发布 ES2017 标准。

因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版本以后的 JS 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等，而 ES2015 则是正式名称，特指当年发布的正式版本的语言标准。本书中提到的 ES6，一般是指 ES2015 标准，但有时也是泛指 “下一代 JS 语言”。

### 1.3 语法提案的批准流程

任何人都可以向标准委员又称（TC39 委员会）提案，要求修改语言标准。一种新的语法从提案到变成正式标准，需要经历五个阶段。每个阶段的变动都要由 TC39 委员会批准：

- Stage 0：Strawman（展示阶段）
- Stage 1：Proposal（征求意见阶段）
- Stage 2: Draft（草案阶段）
- Stage 3：Candidate（候选阶段）
- Stage 4：Finished（定案阶段）

只要一个提案只要能进入 Stage 2，就基本认为其会包括在以后的正式标准里面。ECMAScript 当前的所有提案都可以在 TC39 的[官方网站](https://www.github.com/tc39/ecma262) 中查看。

### 1.4 ECMAScript 的历史

ES6 从开始制定到最后发布，整整用了 15 年。ECMAScript 1.0 是 1997 年发布的，接下来的两年连续发布了 ECMAScript 2.0（1998 年 6 月）和 ECMAScript 3.0（1999 年 12 月）。3.0 版是一个巨大的成功，在业界得到广泛支持，成为通行标准，它奠定了 JS 语言的基本语法，被其后的版本完全继承。直到今天，初学者一开始学习 JS，其实就是在学习 3.0 版的语法。

2000 年，ECMAScript 4.0 开始酝酿。这个版本最后没有通过，但其大部分内容被 ES6 所继承。因此，ES6 制定的起点其实是在 2000 年。为什么 ES4 没有通过呢？因为这个版本太激进了，对 ES3 做了彻底升级，导致标准委员会的一些成员不愿意接受。ECMA 的第 39 号技术专家委员会（Technical Committee9，简称 TC39）负责制订 ECMAScript 标准，成员包括 Microsoft、 Mozilla、 Google 等大公司。

2007 年 10 月，ECMAScript 4.0 版草案发布，本来预计次年 8 月发布正式版本。但是，各方对于是否通过这个标准，发生了严重分歧。以 Yahoo、Microsoft、Google 为首的大公司，反对 JS 的大幅升级，主张小幅改动；以 JS 创造者 Brendan Eich 为首的 Mozilla 公司，则坚持当前的草案。

2008 年 7 月，由于对于下一个版本应该包括哪些功能，各方分歧太大，争论过于激烈，ECMA 开会决定，中止 ECMAScript 4.0 的开发，将其中涉及现有功能改善的一小部分发布为 ECMAScript 3.1，而将其他激进的设想扩大范围，放入以后的版本，由于会议的气氛，该版本的项目代号为 Harmony（和谐）。会后不久，ECMAScript 3.1 就改名为 ECMAScript 5 了。

2009 年 12 月，ECMAScript 5.0 版正式发布。Harmony 项目则一分为二，一些较为可行的设想定名为 JavaScript.next 继续开发，后来演变成 ECMAScript 6；一些不是很成熟的设想则被视为 JavaScript.next.next
在更远的将来再考虑推出。TC39 委员会的总体考虑是，ES5 与 ES3 基本保持兼容，较大的语法修正和新功能的加入，将由 JavaScript.next 完成。当时，JavaScript.next 指的是 ES6，第 6 版发布以后就指 ES7。TC39 的判断是，ES5 会在 2013 年的年中成为 JS 开发的主流标准，并在此后 5 年中一直保持这个位置。

2011 年 6 月，ECMAScript 5.1 版发布，并且成为 ISO 国际标准（ISO/IEC 16262:2011）。

2013 年 3 月，ECMAScript 6 草案冻结，不再添加新功能。新的功能设想将被放到 ECMAScript 7 中。

2013 年 12 月，ECMAScript 6 草案发布。此后是 12 个月的讨论期，以听取各方反馈意见。

2015 年 6 月，ECMAScript 6 正式通过，成为国际标准。从 2000 年算起，已经过去了 15 年。

### 1.5 部署进度

关于各大浏览器最新版本对于 ES6 的支持，可以[参阅](https://kangax.github.io/es5-compat-table/es6)。随着时间的推移，支持度已经越来越高，超过 90% 的 ES6 语法特性都实现了。

Node 是 JS 语言的服务器运行环境（runtime），它对 ES6 的支持度更高。除了那些默认打开的功能，还有一些语法功能也已经实现了，但是默认没有打开。使用如下命令，可以查看 Node 中已经实现的 ES6 特性。

```sh
node --v8-options
```

### 1.6 Babel 转码器

Babel（babeljs.io）是一个广为使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在浏览器或其他环境执行。这意味着，可以用 ES6 的方式编写程序，而不用担心现有环境是否支持。下面是一个例子：

```js
// 转码前
input.map(item => item + 1);
// 转码后
input.map(function (item) {
  return item + 1;
});
```

上面的原始代码用了箭头函数，Babel 将其转为普通函数，这样就能在不支持箭头函数的 JS 环境中执行了。