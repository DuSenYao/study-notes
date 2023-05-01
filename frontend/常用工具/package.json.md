# package.json

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [package.json](#packagejson)
  - [一. 必须属性](#一-必须属性)
    - [1.1 name](#11-name)
    - [1.2 version](#12-version)
  - [二. 描述信息](#二-描述信息)
    - [2.1 type](#21-type)
  - [三. 依赖配置](#三-依赖配置)
    - [3.1 dependencies](#31-dependencies)
    - [3.2 devDependencies](#32-devdependencies)
    - [3.3 peerDependencies](#33-peerdependencies)
      - [3.3.1 peerDependenciesMeta](#331-peerdependenciesmeta)
    - [3.4 optionalDependencies](#34-optionaldependencies)
    - [3.5 bundledDependencies](#35-bundleddependencies)
    - [3.6 engines](#36-engines)
  - [四. 脚本配置](#四-脚本配置)
    - [4.1 scripts](#41-scripts)
    - [4.2 config](#42-config)
  - [五. 文件和目录](#五-文件和目录)
    - [5.1 main](#51-main)
    - [5.2 browser](#52-browser)
    - [5.3 module](#53-module)
    - [5.4 bin](#54-bin)
    - [5.5 files](#55-files)
    - [5.6 man](#56-man)
    - [5.7 directories](#57-directories)
    - [5.8 workspaces](#58-workspaces)
  - [六. 发布配置](#六-发布配置)
    - [6.1 private](#61-private)
    - [6.2 preferGlobal](#62-preferglobal)
    - [6.3 publishConfig](#63-publishconfig)
    - [6.4 os](#64-os)
    - [6.5 cpu](#65-cpu)
    - [6.6 license](#66-license)
    - [6.7 exports](#67-exports)
  - [七. 第三方配置](#七-第三方配置)
    - [7.1 typings](#71-typings)
    - [7.2 eslintConfig](#72-eslintconfig)
    - [7.3 babel](#73-babel)
    - [7.4 unpkg](#74-unpkg)
    - [7.5 lint-staged](#75-lint-staged)
    - [7.6 gitHooks](#76-githooks)
    - [7.7 browserslist](#77-browserslist)
  - [八. package-lock.json](#八-package-lockjson)
    - [8.1 意外更改的原因和防止的方法](#81-意外更改的原因和防止的方法)

<!-- /code_chunk_output -->

在每个前端项目中，都有 package.json 文件，它是项目的配置文件，常见的配置有配置项目启动、打包命令，声明依赖包等。当搭建一个新项目时，往往脚手架就初始化好了一个 package.json 配置文件，它位于项目的根目录中。

当克隆一个新的项目到本地时，需要执行 npm install 命令来安装项目所需的依赖文件。执行该命令时，会根据 package.json 文件中的配置信息来自动下载所需的模块，也就是配置项目所需的运行和开发环境。

package.json 常见配置项如下：

![package.json 常见配置项](./image/package.json%20%E5%B8%B8%E8%A7%81%E9%85%8D%E7%BD%AE%E9%A1%B9.png)

## 一. 必须属性

package.json 中最重要的两个字段就是 name 和 version，它们都是必须的，如果没有，就无法正常执行 npm install 命令。npm 规定 package.json 文件是由名称和版本号作为唯一标识符的。

### 1.1 name

name 就是项目的名称，它是一个字符串。在给 name 字段命名时，需要注意以下几点：

- 名称的长度必须小于或等于 214 个字符，不能以 `.` 和 `_` 开头，不能包含大写字母（这是因为当软件包在 npm 上发布时，会基于此属性获得自己的 URL，所以不能包含非 URL 安全字符（non-url-safe））。

- 名称可以作为参数被传入 require("")，用来导入模块，所以应当尽可能的简短、语义化。

- 名称不能和其他模块的名称重复，可以使用 npm view 命令查询模块明是否重复，如果不重复就会提示 404。

### 1.2 version

version 字段表示该项目包的版本号，它是一个字符串。在每次项目改动后，即将发布时，都要同步的去更改项目的版本号。版本号的使用规范如下：

- 版本号的命名遵循语义化版本 2.0.0 规范，格式为：主版本号.次版本号.修订号，通常情况下，修改主版本号是做了大的功能性的改动，修改次版本号是新增了新功能，修改修订号就是修复了一些 bug。

- 如果某个版本的改动较大，并且不稳定，可能如法满足预期的兼容性需求，就需要发布先行版本，先行版本通过会加在版本号的后面，通过 `-` 号连接以点分隔的标识符和版本编译信息：内部版本（alpha）、公测版本（beta）和候选版本（rc，即 release candidate）。

可以通过以下命令来查看 npm 包的版本信息，以 react 为例：

```sh
# 查看最新版本
npm view react version
# 查看所有版本
npm view react versions
```

## 二. 描述信息

package.json 中有 7 个和项目包描述信息相关的配置字段：

1. **description**

   description 字段用来描述这个项目包，它是一个字符串，可以让其他开发者在 npm 的搜索中发现项目包。

2. **keywords**

   keywords 字段是一个字符串数组，表示这个项目包的关键词。和 description 一样，都是用来增加项目包的曝光率的。

3. **author**

   author 顾名思义就是作者，表示该项目包的作者。它有两种形式，一种是字符串格式：

   ```json
   "author": "a <xxxxx@xx.com> (https://juejin.cn/user/3544481220801815)"
   ```

   一种是对象形式：

   ```json
   "author": {
     "name" : "a",
     "email" : "xxxxx@xx.com",
     "url" : "https://juejin.cn/user/3544481220801815"
   }
   ```

4. **contributors**

   contributors 表示该项目包的贡献者，和 author 不同的是，该字段是一个数组，包含所有的贡献者，它同样有两种写法：

   ```json
   "contributors": [
     "a0 <xxxxx@xx.com> (https://juejin.cn/user/3544481220801815)",
     "a1 <xxxxx@xx.com> (https://juejin.cn/user/3544481220801815)"
   ]
   ```

   ```json
   "contributors": [
     {
       "name" : "a0",
       "email" : "xxxxx@xx.com",
       "url" : "https://juejin.cn/user/3544481220801815"
     },
     {
       "name" : "a1",
       "email" : "xxxxx@xx.com",
       "url" : "https://juejin.cn/user/3544481220801815"
     }
   ]
   ```

5. **homepage**
   homepage 就是项目的主页地址，它是一个字符串。

6. **repository**

   repository 表示代码的存放仓库地址，通常有两种书写形式。第一种是字符串形式：

   ```json
   "repository": "https://github.com/facebook/react.git"
   ```

   除此之外，还可以显式地设置版本控制系统，这时就是对象的形式：

   ```json
   "repository": {
     "type": "git",
     "url": "https://github.com/facebook/react.git"
   }
   ```

7. **bugs**

   bugs 表示项目提交问题的地址，该字段是一个对象，可以添加一个提交问题的地址和反馈的邮箱：

   ```json
   "bugs": {
     "url" : "https://github.com/facebook/react/issues",
     "email" : "xxxxx@xx.com"
   }
   ```

   最常见的 bugs 就是 Github 中的 issues 页面。

### 2.1 type

js 的模块化规范包含了 commonjs、CMD、UMD、AMD 和 ES module 等，最早先在 node 中支持的仅仅是 commonjs 字段，但是从 node13.2.0 开始后，node 正式支持了 ES module 规范，在 package.json 中可以通过 type 字段来声明 npm 包遵循的模块化规范。

```json
{
  "type": "module"
}
```

type 的默认值是 commonjs。当 type 字段指定值为 module 则采用 ESModule 规范。

当 type 字段指定时，目录下的所有 .js 后缀结尾的文件，都遵循 type 所指定的模块化规范。

除了 type 可以指定模块化规范外，通过文件的后缀来指定文件所遵循的模块化规范，以 .mjs 结尾的文件就是使用的 ESModule 规范，以 .cjs 结尾的遵循的是 commonjs 规范。

## 三. 依赖配置

通常情况下，项目会依赖一个或者多个外部的依赖包，根据依赖包的不同用途，可以将配置在下面的五个属性下：dependencies、devDependencies、peerDependencies、bundledDependencies、optionalDependencies。

### 3.1 dependencies

dependencies 字段中声明的是项目的生产环境中所必须的依赖包。当使用 npm 安装 npm 包时，该 npm 包会被自动插入到此配置项中：

```sh
npm install <PACKAGENAME>
```

当在安装依赖时使用 --save 参数，也会将新安装的 npm 包写入 dependencies 属性。

```sh
npm install --save <PACKAGENAME>
```

该字段的值是一个对象，该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围。

```json
"dependencies": {
  "react": "^17.0.2"
}
```

这里每一项配置都是一个键值对（key-value）， key 表示模块名称，value 表示模块的版本号。版本号遵循**主版本号.次版本号.修订号**的格式规定：

- **固定版本**：前面无符号，比如 `4.0.3` 就是固定版本，安装时只安装这个指定的版本。

- **波浪号**：比如 `~4.0.3`，表示安装 4.0.x 的最新版本（不低于 4.0.3），也就是说安装时不会改变主版本号和次版本号。

- **插入号**：比如 `^17.0.2`，表示安装 17.x.x 的最新版本（不低于 17.0.2），也就是说安装时不会改变主版本号。如果主版本号为 0，那么插入号和波浪号的行为是一致的。

- **latest**：安装最新的版本。

> **注意**：不要把测试或者过渡性的依赖放在 dependencies，避免生产环境出现意外的问题。

### 3.2 devDependencies

devDependencies 中声明的是开发阶段需要的依赖包，如 Webpack、Eslint、Babel 等，用于辅助开发。它们不同于 dependencies，因为它们只需安装在开发设备上，而无需在生产环境中运行代码。当打包上线时并不需要这些包，所以可以把这些依赖添加到 devDependencies 中，这些依赖依然会在本地指定 npm install 时被安装和管理，但是不会被安装到生产环境中。

当使用 npm 安装软件包时，指定以下参数后，新安装的 npm 包会被自动插入到此列表中：

```sh
npm install --save-dev <PACKAGENAME>
```

```json
"devDependencies": {
  "autoprefixer": "^7.1.2",
  "babel-core": "^6.22.1"
}
```

### 3.3 peerDependencies

有些情况下，项目和所依赖的模块，都会同时依赖另一个模块，但是所依赖的版本不一样。比如，项目依赖 A 模块和 B 模块的 1.0 版，而 A 模块本身又依赖 B 模块的 2.0 版。大多数情况下，这不是问题，B 模块的两个版本可以并存，同时运行。但是，有一种情况，会出现问题，就是这种依赖关系将暴露给用户。

最典型的场景就是插件，比如 A 模块是 B 模块的插件。用户安装的 B 模块是 1.0 版本，但是 A 插件只能和 2.0 版本的 B 模块一起使用。这时，用户要是将 1.0 版本的 B 的实例传给 A，就会出现问题。因此，需要一种机制，在模板安装的时候提醒用户，如果 A 和 B 一起安装，那么 B 必须是 2.0 模块。

peerDependencies 字段就是用来供插件指定其所需要的主工具的版本：

```json
"name": "chai-as-promised",
"peerDependencies": {
  "chai": "1.x"
}
```

上面代码指定在安装 chai-as-promised 模块时，主程序 chai 必须一起安装，而且 chai 的版本必须是 1.x。如果项目指定的依赖是 chai 的 2.0 版本，就会报错。

#### 3.3.1 peerDependenciesMeta

peerDependenciesMeta 就是详细修饰了 peerDependencies，比如在 react-redux 这个 npm 包中的 package.json 中有这么一段：

```json
{
  "peerDependencies": {
    "react": "^16.8.3 || ^17 || ^18"
  },
  "peerDependenciesMeta": {
    "react-dom": {
      "optional": true
    },
    "react-native": {
      "optional": true
    }
  }
}
```

这里指定了"react-dom"、"react-native"在 peerDependenciesMeta 中，且为可选项，因此如果项目中检测没有安装 "react-dom" 和 "react-native" 都不会报错。

> **注意**：通过 peerDependenciesMeta 确实是取消了限制，但是这里经常存在非 A 即 B 的场景，比如上述例子中，需要的是 “react-dom” 和 “react-native” 中安装一个，但是实际上通过上述的声明，实现不了这种提示。

### 3.4 optionalDependencies

如果需要在找不到包或者安装包失败时，npm 仍然能够继续运行，则可以将该包放在 optionalDependencies 对象中，optionalDependencies 对象中的包会覆盖 dependencies 中同名的包，所以只需在一个地方进行设置即可。

> **注意**：由于 optionalDependencies 中的依赖可能并为安装成功，所以一定要做异常处理，否则当获取这个依赖时，如果获取不到就会报错。

### 3.5 bundledDependencies

上面的几个依赖相关的配置项都是一个对象，而 bundledDependencies 配置项是一个数组，数组里可以指定一些模块，这些模块将在这个包发布时被一起打包。

> **注意**：这个字段数组中的值必须是在 dependencies，devDependencies 两个里面声明过的包才行。

### 3.6 engines

当维护一些旧项目时，可能对 npm 包的版本或者 Node 版本有特殊要求，如果不满足条件就可能无法将项目跑起来。为了让项目开箱即用，可以在 engines 字段中说明具体的版本号：

```json
"engines": {
 "node": ">=8.10.3 <12.13.0",
  "npm": ">=6.9.0"
}
```

> **注意**：engines 只是起一个说明的作用，即使用户安装的版本不符合要求，也不影响依赖包的安装。

## 四. 脚本配置

### 4.1 scripts

scripts 是 package.json 中内置的脚本入口，是 key-value 键值对配置，key 为可运行的命令，可以通过 npm run 来执行命令。除了运行基本的 scripts 命令，还可以结合 pre 和 post 完成前置和后续操作。例子：

```json
"scripts": {
  "dev": "node index.js",
  "predev": "node beforeIndex.js",
  "postdev": "node afterIndex.js"
}
```

这三个 js 文件中都有一句 console：

```js
// index.js
console.log('scripts: index.js');
// beforeIndex.js
console.log('scripts: before index.js');
// afterIndex.js
console.log('scripts: after index.js');
```

当执行 npm run dev 命令时，输出结果如下：

```sh
> learning-notes-and-materials@1.0.0 predev
> node beforeIndex.js

scripts: before index.js

> learning-notes-and-materials@1.0.0 dev
> node index.js

scripts: index.js

> learning-notes-and-materials@1.0.0 postdev
> node afterIndex.js

scripts: after index.js
```

可以看到，三个命令都执行了，执行顺序是 predev → dev → postdev。如果 scripts 命令存在一定的先后关系，则可以使用这三个配置项，分别配置执行命令。

### 4.2 config

config 字段用来配置 scripts 运行时的配置参数，如下所示：

```json
"config": {
 "port": 3000
}
```

如果运行 npm run start，则 port 字段会映射到 npm_package_config_port 环境变量中：

```js
console.log(process.env.npm_package_config_port); // 3000
```

用户可以通过 `npm config set foo:port 3001` 命令来重写 port 的值。

## 五. 文件和目录

### 5.1 main

main 字段用来指定加载的入口文件，在 browser 和 Node 环境中都可以使用。如果将项目发布为 npm 包，那么当使用 require 导入 npm 包时，返回的就是 main 字段所列出的文件的 module.exports 属性。如果不指定该字段，默认是项目根目录下的 index.js。如果没找到，就会报错。

该字段的值是一个字符串：

```json
"main": "./src/index.js"
```

### 5.2 browser

browser 字段可以定义 npm 包在 browser 环境下的入口文件。如果 npm 包只在 web 端使用，并且严禁在 server 端使用，使用 browser 来定义入口文件。

```json
"browser": "./src/index.js"
```

### 5.3 module

module 字段可以定义 npm 包的 ESM 规范的入口文件，browser 环境和 node 环境均可使用。如果 npm 包导出的是 ESM 规范的包，使用 module 来定义入口文件。

```json
"module": "./src/index.mjs"
```

> **注意**：`*.js` 文件是使用 commonJS 规范的语法（require('xxx')），`*.mjs` 是用 ESM 规范的语法（import 'xxx'）。

main、browser、module 的配置是有差别的，特别是在不同的使用场景下。在 Web 环境中，如果使用 loader 加载 ESM（ES module），那么这三个配置的加载顺序是 browser → module → main，如果使用 require 加载 CommonJS 模块，则加载的顺序为 main → module → browser。

Webpack 在进行项目构建时，有一个 target 选项，默认为 Web，即构建 Web 应用。如果需要编译一些同构项目，如 node 项目，则只需将 webpack.config.js 的 target 选项设置为 node 进行构建即可。如果在 Node 环境中加载 CommonJS 模块，或者 ESM，则只有 main 字段有效。

### 5.4 bin

bin 字段用来指定各个内部命令对应的可执行文件的位置：

```json
"bin": {
  "someTool": "./bin/someTool.js"
}
```

这里，someTool 命令对应的可执行文件为 bin 目录下的 someTool.js，someTool.js 会建立符号链接 node_modules/.bin/someTool。由于 node_modules/.bin/ 目录会在运行时加入系统的 PATH 变量，因此在运行 npm 时，就可以不带路径，直接通过命令来调用这些脚本。因此，下面的写法可以简写：

```txt
scripts: {
  start: "./node_modules/bin/someTool.js build"
}

// 简写
scripts: {
  start: "someTool build"
}
```

所有 node_modules/.bin/ 目录下的命令，都可以用 `npm run [命令]` 的格式运行。

上面的配置在 package.json 包中提供了一个映射到本地文件名的 bin 字段，之后 npm 包将链接这个文件到 prefix/fix 里面，以便全局引入。或者链接到本地的 node_modules/.bin/ 文件中，以便在本项目中使用。

### 5.5 files

files 配置是一个数组，用来描述当把 npm 包作为依赖包安装时需要说明的文件列表。当 npm 包发布时，files 指定的文件会被推送到 npm 服务器中，如果指定的是文件夹，那么该文件夹下面所有的文件都会被提交。

```json
"files": [
  "LICENSE",
  "Readme.md",
  "index.js",
  "lib/"
]
```

如果有不想提交的文件，可以在项目根目录中新建一个 .npmignore 文件，并在其中说明不需要提交的文件，防止垃圾文件推送到 npm 上。这个文件的形式和 .gitignore 类似。写在这个文件中的文件即便被写在 files 属性里也会被排除在外。比如可以在该文件中这样写：

```txt
node_modules
.vscode

build

.DS_Store
```

### 5.6 man

man 命令是 Linux 中的帮助指令，通过该指令可以查看 Linux 中的指令帮助、配置文件帮助和编程帮助等信息。如果 node.js 模块是一个全局的命令行工具，在 package.json 通过 man 属性可以指定 man 命令查找的文档地址：

```json
"man": [
  "./man/npm-access.1",
  "./man/npm-audit.1"
]
```

man 字段可以指定一个或多个文件，当执行 `man {包名}` 时，会展现给用户文档内容。

**注意**：

- man 文件必须以数字结尾，如果经过压缩，还可以使用 .gz 后缀。这个数字表示文件安装到哪个 man 节中。
- 如果 man 文件名称不是以模块名称开头的，安装的时候会加上模块名称前缀。

### 5.7 directories

directories 字段用来规范项目的目录。node.js 模块是基于 CommonJS 模块化规范实现的，需要严格遵循 CommonJS 规范。模块目录下除了必须包含包项目描述文件 package.json 以外，还需要包含以下目录：

- bin：存放可执行二进制文件的目录
- lib：存放 js 代码的目录
- doc：存放文档的目录
- test：存放单元测试用例代码的目录
- ...

在实际的项目目录中，可能没有按照这个规范进行命名，那么就可以在 directories 字段指定每个目录对应的文件路径：

```json
"directories": {
  "bin": "./bin",
  "lib": "./lib",
  "doc": "./doc",
  "test": "./test",
  "man": "./man"
}
```

这个属性实际上没有什么实际的作用，当然不排除未来会有什么比较有意义的用处。

### 5.8 workspaces

在项目过大的时候，最近越来越流行 monorepo。提到 monorepo 就绕不开 workspaces。它解决了本地文件系统中如何在一个顶层 root package 下管理多个子 packages 的问题，在 workspaces 声明目录下的 package 会软链到最上层 root package 的 node_modules 中。

```json
{
  "name": "my-project",
  "workspaces": ["packages/a"]
}
```

在一个 npm 包名为 my-project 的 npm 包中，存在 workspaces 配置的目录。

```sh
+-- package.json
+-- index.js
`-- packages
   +-- a
   |  `-- package.json
```

并且该最上层的名为 my-project 的 root 包，有 packages/a 子包。此时，如果 npm install，那么在 root package 中 node_modules 中安装的 npm 包 a，指向的是本地的 package/a。

```sh
+-- node_modules
|  `-- packages/a -> ../packages/a
+-- package-lock.json
+-- package.json
`-- packages
   +-- a
   |   `-- package.json
```

## 六. 发布配置

### 6.1 private

private 字段可以防止意外的将私有库发布到 npm 服务器。只需要将该字段设置为 true：

```json
"private": true
```

### 6.2 preferGlobal

preferGlobal 字段表示当用户不把该模块安装为全局模块时，如果设置为 true 就会显示警告。它并不会真正的防止用户进行局部的安装，只是对用户进行提示，防止产生误解：

```json
"preferGlobal": true
```

### 6.3 publishConfig

publishConfig 配置会在模块发布时生效，用于设置发布时一些配置项的集合。如果不想模块被默认标记为最新，或者不想发布到公共仓库，可以在这里配置 tag 或仓库地址。更详细的配置可以参考 [npm-config](https://docs.npmjs.com/cli/v8/commands/npm-config)。

通常情况下，publishConfig 会配合 private 来使用，如果只想让模块发布到特定 npm 仓库，就可以这样来配置：

```json
"private": true,
"publishConfig": {
  "tag": "1.1.0",
  "registry": "https://registry.npmjs.org/",
  "access": "public"
}
```

### 6.4 os

os 字段可以设置该 npm 包可以在什么操作系统使用，不能再什么操作系统使用。如果希望开发的 npm 包只运行在 linux，为了避免出现不必要的异常，建议使用 Windows 系统的用户不要安装它，这时就可以使用 os 配置：

```json
"os": ["linux"]   // 适用的操作系统
"os": ["!win32"]  // 禁用的操作系统
```

### 6.5 cpu

该配置和 OS 配置类似，用 CPU 可以更准确的限制用户的安装环境：

```json
"cpu": ["x64", "AMD64"]   // 适用的 cpu
"cpu": ["!arm", "!mips"]  // 禁用的 cpu
```

### 6.6 license

license 字段用于指定软件的开源协议，开源协议表述了其他人获得代码后拥有的权利，可以对代码进行何种操作，何种操作又是被禁止的。常见的协议如下：

- **MIT**：只要用户在项目副本中包含了版权声明和许可声明，他们就可以拿你的代码做任何想做的事情，你也无需承担任何责任。
- **Apache**：类似于 MIT ，同时还包含了贡献者向用户提供专利授权相关的条款。
- **GPL**：修改项目代码的用户再次分发源码或二进制代码时，必须公布他的相关修改。

```json
"license": "MIT"
```

### 6.7 exports

这个字段定义的内容是该 npm 包的真实和全部的导出，优先级会高于 main 和 file、module、browser 等字段。

```json
{
  "name": "pkg",
  "exports": {
    ".": "./main.mjs",
    "./foo": "./foo.js"
  }
}
```

```js
import { something } from 'pkg'; // from "pkg/main.mjs"

const { something } = require('pkg/foo'); // require("pkg/foo.js")
```

从上述的例子来看，exports 可以定义不同 path 的导出。如果存在 exports 后，以前正常生效的 file 目录到处会失效，比如 require('pkg/package.json')，因为在 exports 中没有指定，就会报错。

exports 还有一个最大的特点，就是**条件引用**，比如可以根据不同的引用方式或者模块化类型，来指定 npm 包引用不同的入口文件。

```json
{
  "name": "pkg",
  "main": "./main-require.cjs",
  "exports": {
    ".": {
      "import": "./main-module.js",
      "require": "./main-require.cjs"
    },
    "./package.json": "./package.json"
  },
  "type": "module"
}
```

```js
const p = require('pkg'); // 引用的是 "./main-require.cjs"

import p from 'pkg'; // 引用的是 "./main-module.js"
```

## 七. 第三方配置

package.json 文件还可以承载命令特有的配置，例如 Babel、ESLint 等。它们每个都有特有的属性，例如 eslintConfig、babel 等。它们是命令特有的，可以在相应的命令/项目文档中找到如何使用它们。下面来看几个常用的第三方配置项。

### 7.1 typings

typings 字段用来指定 TypeScript 的入口文件：

```json
"typings": "types/index.d.ts",
```

### 7.2 eslintConfig

eslint 的配置可以写在单独的配置文件 .eslintrc.js 中，也可以写在 package.json 文件的 eslintConfig 配置项中。

### 7.3 babel

babel 用来指定 Babel 的编译配置，代码如下：

```json
"babel": {
 "presets": ["@babel/preset-env"],
 "plugins": [...]
}
```

### 7.4 unpkg

使用该字段可以让 npm 上所有的文件都开启 cdn 服务，该 CND 服务由 unpkg 提供：

```json
"unpkg": "dist/vue.js"
```

### 7.5 lint-staged

lint-staged 是一个在 Git 暂存文件上运行 linters 的工具，配置后每次修改一个文件即可给所有文件执行一次 lint 检查，通常配合 gitHooks 一起使用。

```json
"lint-staged": {
 "src/**/*.{js,ts,tsx,vue}": [
    "eslint --cache --max-warnings 0 --fix"
  ]
}
```

使用 lint-staged 时，每次提交代码只会检查当前改动的文件。

### 7.6 gitHooks

gitHooks 用来定义一个钩子，在 [git 执行的特定点](/public_knowledge/Git/Git.md#15-githooks)中触发操作。

例如：在执行 `git commit` 命令前，先执行 lint-staged 命令，这个命令在上一节中有定义，它会自动修复暂存区的文件。在执行 pre-commit 命令之后，如果没有错误，才会开始执行 git commit 命令：

```json
"gitHooks": {
 "pre-commit": "lint-staged"
}
```

### 7.7 browserslist

browserslist 字段用来告知支持哪些浏览器及版本。Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器：

```json
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```

这里指定了一个对象，里面定义了生产环境和开发环境的浏览器要求。上面的 development 就是指定开发环境中支持最后一个版本的 chrome、Firefox、safari 浏览器。这个属性是不同的前端工具之间共用目标浏览器和 node 版本的配置工具，被很多前端工具使用，比如 Babel、Autoprefixer 等。

## 八. package-lock.json

本质上 package-lock.json 文件是为了锁版本，在 package.json 中指定的子 npm 包比如：react: "^16.0.0"，在实际安装中，只要高于 react 的版本都满足 package.json 的要求。这样就使得根据同一个 package.json 文件，两次安装的子依赖版本不能保证一致。

### 8.1 意外更改的原因和防止的方法

原因：

- **package.json 文件修改了**

- **挪动了包的位置**
  将部分包的位置从 dependencies 移动到 devDependencies 这种操作，虽然包未变，但是也会影响 package-lock.json，会将部分包的 dev 字段设置为 true

- **registry 的影响**

  node_modules 文件夹下的包中下载时，就算版本一样，安装源 registry 不同，执行 npm i 时也会修改 package-lock.json

一般情况下 npm install 是可以的，它能保证根据 package-lock.json 还原出开发时的 node_modules。但是为了防止出现刚刚提到的意外情况，除非涉及到对包的调整，其他情况下建议使用 `npm ci` 来安装依赖，会避免异常的修改 package-lock.json，

持续集成工具中更推荐是用 npm ci，保证构建环境的准确性，npm i 和 npm ci 的区别可以参考官方文档 [npm-ci](https://docs.npmjs.com/cli/v8/commands/npm-ci)。
