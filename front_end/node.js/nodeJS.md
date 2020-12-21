---
title: Node.js
author: dsy
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Node.js](#nodejs)
  - [一. Node.js简介](#一-nodejs简介)
    - [1.1 Node.js](#11-nodejs)
    - [1.2 JS在Node.js和在Chrome的区别](#12-js在nodejs和在chrome的区别)
    - [1.3 Node.js 特点](#13-nodejs-特点)
    - [1.4 Node.js 的应用场景](#14-nodejs-的应用场景)
    - [1.5 Node.js作用](#15-nodejs作用)
  - [二. Node.js安装与入门](#二-nodejs安装与入门)
    - [2.1 3m安装法](#21-3m安装法)
      - [2.1.1 nvm](#211-nvm)
        - [2.1.1.1 安装](#2111-安装)
        - [2.1.1.2 查看可安装版本](#2112-查看可安装版本)
        - [2.1.1.3 nvm安装Node.js](#2113-nvm安装nodejs)
        - [2.1.1.4 指定远端下载地址](#2114-指定远端下载地址)
      - [2.1.2 npm](#212-npm)
        - [2.1.2.1 使用npm安装模块](#2121-使用npm安装模块)
      - [2.1.3 nrm(不在维护)](#213-nrm不在维护)
    - [2.2 使用Node.js](#22-使用nodejs)
      - [2.2.1 CommonJS规范](#221-commonjs规范)
      - [2.2.2 创建一个最简单的HTTP服务](#222-创建一个最简单的http服务)

<!-- /code_chunk_output -->

# Node.js

---

## 一. Node.js简介

### 1.1 Node.js

Node.js 是一个基于 **Chrome V8 引擎** 的 JavaScript 运行时环境，同时结合 libuv(事件循环处理库) 扩展了JavaScript库，使得 JS 能够支持浏览器DOM等操作，同时具有后端语言才有的 **I/O** 、文件读写与操作数据库等能力，是目前最简单的全栈式环境。

Node.js 使用 npm 作为包管理器。Node.js 应用程序运行于 **单个进程** 中，无需为每个请求创建新的线程。 Node.js 在其标准库中提供了一组 **异步的 I/O 原生功能**（用以防止 JavaScript 代码被阻塞），并且 Node.js 中的库通常是使用 **非阻塞的范式** 编写的（从而使阻塞行为成为例外而不是规范）。

当 Node.js 执行 **I/O** 操作时（例如从网络读取、访问数据库或文件系统），Node.js 会在响应返回时恢复操作，而不是阻塞线程并浪费 CPU 循环等待。

Node.js 的目标是让并发编程更简单，主要应用在以网络编程为主的I/O密集型应用中。轻量且高效，尤其在I/O处理方面。

### 1.2 JS在Node.js和在Chrome的区别

在Node.js里运行JS和在Chrome里运行JS区别在于：

1. Node.js没有浏览器API,即 **document** 、**window** 等。
2. 加了许多 Node.js **API**

![JS在NodeJS和浏览器中的异同](./image/JS在NodeJS和浏览器中的异同.jpg)

### 1.3 Node.js 特点

Node.js 是可扩展的适合用于构建高性能Web应用的最简单的解决方案。

- 适合构建Web应用
    1. 构建网站
      是指构建传统网站，不进行前后端分离，将视图渲染和数据库访问都放在同一项目中。用 Node.js 做入门开发，和传统的 Java、PHP开发没什么区别。构建成功的应用是典型的单体式应用。
    2. 构建API
      移动端包含IOS、Android、HTML5等多种客户端开，导致为这些客户端提供可以复用的API接口变得更加困难。
      移动端API与前端Ajax调用、API调用一样，一般以返回JSON或XML结构数据为主。API的写法很多，推荐的写法是对返回的数据加壳。
    3. 构建RPC服务
      数据库访问，将返回的数据进行包裹，以TCP形式传输给调用方。
    4. 前后端分离
      前后端分离的应用场景大致有以下四个
        - 前端页面静态化 (Page Static)
        - 前端页面服务化 (PaaS, Page as Service)
        - 服务端渲染 (SSR, Server Side Render)
        - 渐进式Web应用 (PWA, Progressive Web App)
    5. 适用于 Serverless
      有了 Serverless，前端就无须关心运维实现，写一个函数就能搞定API、服务端渲染等，大幅优化了开发方式。无须关心运维(Serverless平台自带运维功能，一般集成Kubernetes这种容器编排管理系统)，无须关心流量 (Serverless平台自带服务网格功能)，无须关心高并发(API层有缓存)。
- 高性能
  - **执行速度快** : Node.js 是构建在 Chrome V8 引擎之上的，执行速度可能是动态语言运行时环境里最快的。
  - **天生异步** : 事件驱动和非阻塞I/O特性决定了Node.js必须采用异步机制，每个I/O任务都是异步的，因此集成到 libuv 的事件循环里才能让开发者代码对并发操作无感知。
  - **适用于I/O密集的网络应用开发** : 网络应用开发 (包括Web应用开发) 的瓶颈在于I/O处理，而这恰恰是Node.js的强项。对于CPU密集型应用而言，能够使用其他语言开发最好使用其他语言，如果必须使用Node.js，可以通过C/C++扩展机制来实现。合理采用其他技术栈，利用其优势部分，除了能够加快开发迭代的速度，对系统稳定性也是非常有帮助的。
- 简单
  - 语法简单 : JS语法简单易学。
  - 并发编程简单 : 有了事件驱动和非阻塞I/O机制，Node.js可以使用非常少的资源处理非常多的连接和任务，处理低延时请求，完美应对实时及I/O密集型应用等高并发场景。
  - 部署运维简单 : 无需额外的服务器软件，不像Java需要用到Tomcat之类的JavaEE容器，在分布式集群中，负载均衡、多核系统方面都有完善的配套设施，现有的各种自动化运维工具 (如Ansible、SaltStack等) 都可以直接使用。
  - 开发简单 : 目前Node.js 内置模块和npm上的模块都遵守 "小而美" 的设计哲学，相对比较简单，对开发、迭代、上线有明显帮助。
- 可扩展
  - 可以使用npm上的大量模块。
  - 可以通过编写C/C++扩展实现CPU密集型任务
  - 可以轻松搭建Java、Rust等语言使用。
  - 架构互补 : 在架构上以业务边界来进行服务拆分，外加各种 "组合"，可以让合适的轮子出现在合适的位置上，比如Java在基础平台建设及大数据等领域有非常深厚的基础，那么直接使用即可。

### 1.4 Node.js 的应用场景

Node.js的应用场景主要分为一下四大类
![nodeJS应用场景分类](./image/nodeJS应用场景分类.jpg)

![nodeJS实际具体场景](./image/nodeJS实际具体场景.jpg)

### 1.5 Node.js作用

1. 搜索引擎优化 + 浏览器首屏速度优化 = 服务端渲染
2. 服务端渲染 + 前后端同构 = Node.js
3. 构建工作流 webpack
4. 开发工具 Visual Studio Code
5. 可扩展性
    - 使用Node.js 做复杂本地应用,可以利用JS的灵活性提供外部扩展
6. 客户端应用
    在已有网站的情况下需要新开发客户端应用，用Node.js客户端技术（electron）实现，最大限度复用现有工程

## 二. Node.js安装与入门

在实际生产环境中，推荐使用Linux服务器，常用的是 CentOS 或 Ubuntu，选用对应的64位LTS (长期支持) 版本。

### 2.1 3m安装法

Node.js 的版本更新非常快，开发机器上可能需要同时存在几个Node.js的大版本，每个Node.js内置的npm又有版本的差异，而国内网络访问npmjs.org镜像的速度非常慢。所以推荐使用3m安装法。
> 安装完Node.js后，node命令会存在于环境变量中，可以在终端的任何位置使用。node命令是用于解释并执行Node.js代码的，由于 JavaScript 是脚本语言，所以 node 命令实际上是 Node.js 代码的解释器。

- **nvm** (node version manager) : 用于开发阶段，解决多版本共存、切换、测试等问题。
- **npm** (node package manager) : 解决Node.js模块安装问题，其本身也是一个Node.js模块，每次安装都会内置某个版本的npm。
- **nrm** (node registry manager) : 解决npm镜像访问慢的问题，提供测速、切换下载源 (registry) 功能。

#### 2.1.1 nvm

nvm 是一个开源的 **Node.js版本管理器** ，通过简单的shell脚本来管理和切换多个Node.js版本。nvm中有nvmw(现不再维护)，可以支持Window系统，另外 nvs 默认支持Windows系统。

nvm 除了安装方便，可以随意切换需要安装的Node.js版本，还可以免除安装权限，通过nvm命令安装的Node.js位于用户目录下，而非系统目录下。在 npm 安装全局模块时，可以避免操作系统超级用户授权问题。

##### 2.1.1.1 安装

在安装 Node.js之前，需要先安装 nvm，然后通过nvm命令去安装多个版本的Node.js。nvm本身是shell脚本，直接下载安装即可。首先在终端执行以下命令。
> `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.37.2/install.sh | bash`

安装完成后，脚本将nvm存储库克隆到 ~/.nvm，并尝试将下面代码段中的源代码行添加到正确的配置文件中（~/.bash_profile、~/.zshrc、~/.profile或~/.bashrc）
> export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
> [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

查看是否存在以上源代码后，通过执行 source 命令，使系统环境变量生效
> source ~/.bashrc

在终端执行 `nvm --version` 后可以查看版本号。

##### 2.1.1.2 查看可安装版本

通过 `nvm ls-remote` 命令可列出当前nvm可安装的版本。

- **LTS版本** : 长期支持(Long-Term Support) 版本，有官方支持，推荐给绝大多数用户使用，一般在生产环境中使用，对于Bug 和 安全问题的修复相当及时。
- **Current版本** : 当前正在开发的尝鲜版本。它通常较新，具有大的功能变动，需要经过一段时间的测试、开发、修复Bug才可能编程LTS版本，一般用于开发者学习，基本不会用在线上生产环境中。

> Node.js 的可用版本非常多，一般奇数版本(v7.x, v9.x)都是尝试性的，其中包含最新的特性，而偶数版本(v8.x, v10.x)都是LTS版本，稳定且适合在线上生产环境中使用。

##### 2.1.1.3 nvm安装Node.js

1. 确定安装位置
  通过nvm安装的Node.js位于用户目录下，而非系统目录下。在 npm 安装全局模块时，可以避免操作系统超级用户授权问题。
2. 指定默认版本
  如果想要默认使用Node.js v6.11.2来编译代码，需要手动指定一个 default 别名，使用命令 `nvm alias default node`
  此时，输入 `node -v` ，以后再终端的任何地方使用的默认版本都会是设置的默认版本。
3. 切换版本
  先使用 `nvm install 10` 安装Node.js ，然后切换到10.x版本 `nvm use 10` ，注意Node.js内置的npm版本。
  此时，Node.js代码就可以在10.x版本下执行了，可以使用任何10.x版本支持的特性。像上面这样使用 `nvm use` 命令实现的切换版本，只在当前终端会话内有效，是一次性切换，要和设置默认别名区分开。
4. 列出本机版本
  `nvm ls`
5. 重新安装全局模块
  nvm提供了一键安装全局模块的 nvm reinstall-packages 命令。
  例 : `nvm reinstall-packages 6`

##### 2.1.1.4 指定远端下载地址

nvm 的默认远端下载地址是 `https://nodejs.org/dist` ，大部分开发场景使用的Node.js都可以从这个地址下载。如果想安装自定义的Node.js版本，可以指定nvm的远程下载地址，比如一些正在测试的尝鲜版本
> `NVM_NODEJS_ORG_MIRROR-https://nodejs.org/download/test`

查看远端可用版本的命令 `nvm ls-remote`，获取到版本信息后，直接根据版本号安装即可 `nvm install version`。

#### 2.1.2 npm

npm，通常称为Node.js包管理器，它的主要功能是管理Node.js包，包括安装、卸载、更新、查看、搜索、发布等。可以实现JS、React、移动开发、Angular、浏览器、JQuery、Cordova、Bower、Gulp、Gunt、Browserify、Docpad 等包或模块管理，是目前开源世界里最大、生态最健全的包管理器。

npm是随Node.js一起安装的包管理器，能解决Node.js在模块管理上的许多问题，常见的应用场景有以下几种。

- 从npm镜像服务器下载第三方模块。
- 从npm镜像服务器下载并执行安装命令行程序到本地。
- 发布模块到npm镜像服务器供他人使用。

##### 2.1.2.1 使用npm安装模块

npm的包安装是最核心的功能，分为本地安装 (local) 、全局安装 (global) 两种。

![npm常用参数及说明](./image/npm常用参数及说明.jpg)

本地安装，具体说明:

- 将包放在 node_modules (运行npm命令时所在的目录)下，如果没有 node_module 目录，则会在当前执行npm命令的目录下生成。
- 可以通过 require() 来引入本地的包
  例 : 先安装常用的Node.js调试模块 `npm install debug`，安装好后，debug包存在于工程目录下的node_modules目录中，因此在代码中只执行 `const debug = require('debug')`即可，无需指定第三方包路径。

全局安装，具体缩颈:

- 如果不是使用nvm安装的，安装包将放在 /user/local 下，安装全局模块需要超级用户授权。
- 不能通过 require() 来引入本地的包

> **注意**: 为避免引用模块缺失保证依赖模块都出现在package.json里，可以使用 `npm i --save`

#### 2.1.3 nrm(不在维护)

Node.js和其他语言一样都提供了模块管理工具，默认将模块托管在npmjs.org下，其他组织和个人可以自建下载源，同步时间一般在10分钟左右，npm官方源是在国外托管的，所以国内用户访问会比较慢。

nrm可以简单、快速地在不同的npm之间进行切换，它默认内置了很多常用的源，包括 npm、cnpm、taobao、nj等，也可以通过 `nrm add` 命令来维护自己的源。nrm是工程复杂到一定程度的必然产物，也是最佳实践。

1. 安装
  nrm本身是node.js命令行模块，需要使用 -g 参数来进行全局安装 `npm install -g nrm`
2. 测速
  可以使用 `nrm test` 测速
3. 查看源使用 `nrm ls` 命令即可
4. 使用 `nrm use cnpm` 就可以快速切换源
5. 增加源

> 例 : `nrm add project https://registry.npm.taobao.org/`

### 2.2 使用Node.js

> `node fileName.js` 可以直接运行js文件，在JS文件里，建议使用严格模式，如: [test.js](./sampleFolder/test.js)

#### 2.2.1 CommonJS规范

Node.js基于CommonJS规范的实现，即每个文件都是一个模块，每个模块内部代码都遵循CommonJS规范，**多文件调用的核心基于模块对外暴露接口和相互引用**。

- 使用 `module.exports` 定义模块 [commonjs_test1.js](./sampleFolder/CommonJS规范/commonjs_test1.js)
- 通过 `require` 关键字引入模块  [commonjs_test2.js](./sampleFolder/CommonJS规范/commonjs_test2.js)

#### 2.2.2 创建一个最简单的HTTP服务
