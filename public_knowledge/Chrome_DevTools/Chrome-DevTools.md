---
title: Chrome DevTools Chrome浏览器调试工具
date: 2020-12-10 9:22:34
author: 杜森垚
keywords: 'Chrome DevTools'
categories: Chrome DevTools
tags:
  - Chrome DevTools
---
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Chrome DevTools Chrome浏览器调试工具](#chrome-devtools-chrome浏览器调试工具)
  - [一.基础](#一基础)
    - [1.面板简介](#1面板简介)
      - [元素面板(Elements)](#元素面板elements)
      - [源代码面板(Sources)](#源代码面板sources)
      - [网络面板(NetWork)](#网络面板network)
      - [性能面板(Performance)](#性能面板performance)
      - [内存面板(Memory)](#内存面板memory)
      - [应用面板(Application)](#应用面板application)
      - [安全面板(Security)](#安全面板security)
    - [2.通用篇](#2通用篇)
      - [2.1 copy(...)](#21-copy)
      - [2.2 Store Object as global variable(**存储为全局变量**)](#22-store-object-as-global-variable存储为全局变量)
      - [2.3. 保存堆栈信息(Save as…)](#23-保存堆栈信息save-as)
      - [2.4 快捷键](#24-快捷键)
        - [2.4.1 切换 `DevTools` 窗口的展示布局](#241-切换-devtools-窗口的展示布局)
        - [2.4.2 切换 `DevTools` 的面板](#242-切换-devtools-的面板)
        - [2.4.3 递增/递减](#243-递增递减)
        - [2.4.4 elements， logs， sources & network 中的查找](#244-elements-logs-sources-network-中的查找)

<!-- /code_chunk_output -->

# Chrome DevTools Chrome浏览器调试工具

---

## 一.基础

### 1.面板简介

#### 元素面板(Elements)

可以自由操作 DOM 和 CSS 来迭代布局和设计页面。

```txt
功能:
  ① 检查和调整页面
  ② 编辑样式
  ③ 编辑DOM
  ```

#### 控制台面板(Console)

在开发期间，可以记录诊断信息，或者使用它作为 shell 在页面上与 JS 进行交互。

```txt
功能:
  ① 使用控制台面板
  ② 命令行交互
  ```
  
#### 源代码面板(Sources)

可以设置断点来调试 JS ，或者通过 Workspaces （工作区）连接本地文件来使用开发者工具的实时编辑器

```txt
功能:
  ① 断点调试
  ② 调试混淆的代码
  ③ 使用开发者工具的 WorkSpaces 进行保存
```

#### 网络面板(NetWork)

了解请求和下载的资源文件并优化网页加载性能

```txt
功能:
  ① 网络面板基础
  ② 资源时间轴
  ③ 网络带宽限制
```
  
#### 性能面板(Performance)
  
记录和查看网站生命周期内发生的各种事件和运行时间，了解并优化性能

```txt
功能:
  ① 记录和查看网站生命周期内发生的各种事件
  ② 提高页面的运行时性能
```

#### 内存面板(Memory)
  
```txt
功能:
  ① 跟踪内存泄漏。
  ② JavaScript CPU 分析器
  ③ 内存堆区分析器
```

#### 应用面板(Application)

```txt
功能:
  ① 检查加载的所有资源
  ② IndexedDB 与 Web SQL
  ③ 本地和会话存储， cookie
  ④ 应用程序缓存，图像，字体和样式表
```

#### 安全面板(Security)

```txt
功能:
  ① 证书问题
  ② 安全相关问题
```

### 2.通用篇

#### 2.1 copy(...)

可以通过全局的方法 `copy()` 在 `console` 里 `copy` 任何能拿到的资源。

#### 2.2 Store Object as global variable(**存储为全局变量**)

在 `console` 中打印了一组数据，然后想对这些数据做一些额外的操作。那就可以将它转换成一个全局变量，只需要 **右击** 它，并选择 “`Store as global variable`” (保存为全局变量) 选项。
第一次使用的话，它会创建一个名为 temp1 的变量，第二次创建 temp2，以此类推。通过使用这些变量来操作对应的数据，不用再担心影响到他们原来的值。

#### 2.3. 保存堆栈信息(Save as…)

对于 `Console` 面板上的信息，可以使用 **右击**，选择 `Save as…`，把堆栈跟踪的信息保存为一个 `.log` 文件。

#### 2.4 快捷键

##### 2.4.1 切换 `DevTools` 窗口的展示布局

快捷键 `Ctrl + Shift + D` 切换 DevTools 的位置

##### 2.4.2 切换 `DevTools` 的面板

快捷键 `Ctrl + [ | ]`，可以从当前面板分别向左向右切换

##### 2.4.3 递增/递减

使用带修饰符或不带修饰键的 `上/下` 箭头，可以实现递增/递减`数值`类型的值。

##### 2.4.4 elements， logs， sources & network 中的查找

`DevTools` 中的前4个主要的面板，都支持 `ctrl + f` 快捷方式，你可以使用对应的查询方式来查找信息:

- 在 `Element` 面板中 - 通过 `string` 和 `XPath` 来查找。

- 在 `Console`， `Network` 以及 `Source` 面板 - 通过 `区分大小写` 或 `正则表达式`， 来查找。
