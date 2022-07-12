# package.json

在每个前端项目中，都有 package.json 文件，它是项目的配置文件，常见的配置有配置项目启动、打包命令，声明依赖包等。当搭建一个新项目时，往往脚手架就初始化好了一个 package.json 配置文件，它位于项目的根目录中。

当克隆一个新的项目到本地时，需要执行 npm install 命令来安装项目所需的依赖文件。执行该命令时，会根据 package.json 文件中的配置信息来自动下载所需的模块，也就是配置项目所需的运行和开发环境。

package.json 常见配置项如下：

![package.json 常见配置项](./image/package.json%20%E5%B8%B8%E8%A7%81%E9%85%8D%E7%BD%AE%E9%A1%B9.png)

## 一. 必须属性

package.json 中最重要的两个字段就是 name 和 version，它们都是必须的，如果没有，就无法正常执行 npm install 命令。npm 规定 package.json 文件是由名称和版本号作为唯一标识符的。

1. **name**
   name 就是项目的名称，它是一个字符串。在给 name 字段命名时，需要注意以下几点：

   - 名称的长度必须小于或等于 214 个字符，不能以 `.` 和 `_` 开头，不能包含大写字母（这是因为当软件包在 npm 上发布时，会基于此属性获得自己的 URL，所以不能包含非 URL 安全字符（non-url-safe））。

   - 名称可以作为参数被传入 require("")，用来导入模块，所以应当尽可能的简短、语义化。

   - 名称不能和其他模块的名称重复，可以使用 npm view 命令查询模块明是否重复，如果不重复就会提示 404。

2. **version**

   version 字段表示该项目包的版本号，它是一个字符串。在每次项目改动后，即将发布时，都要同步的去更改项目的版本号。版本号的使用规范如下：

   - 版本号的命名遵循语义化版本 2.0.0 规范，格式为：主版本号.次版本号.修订号，通常情况下，修改主版本号是做了大的功能性的改动，修改次版本号是新增了新功能，修改修订号就是修复了一些 bug。

   - 如果某个版本的改动较大，并且不稳定，可能如法满足预期的兼容性需求，就需要发布先行版本，先行版本通过会加在版本号的后面，通过 `-` 号连接以点分隔的标识符和版本编译信息：内部版本（alpha）、公测版本（beta）和候选版本（rc，即 release candidate）。

   可以通过以下命令来查看 npm 包的版本信息，以 react 为例：

   ```sh
   // 查看最新版本
   npm view react version
   // 查看所有版本
   npm view react versions
   ```

## 二. 描述信息

package.json 中有五个和项目包描述信息相关的配置字段，下面就分别来看看这些字段的含义。

1. **description**

   description 字段用来描述这个项目包，它是一个字符串，可以让其他开发者在 npm 的搜索中发现项目包。

2. **keywords**

   keywords 字段是一个字符串数组，表示这个项目包的关键词。和 description 一样，都是用来增加项目包的曝光率的。

3. author
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

- **波浪号**： 比如 `~4.0.3`，表示安装 4.0.x 的最新版本（不低于 4.0.3），也就是说安装时不会改变主版本号和次版本号。

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

peerDependencies 字段就是用来供插件指定其所需要的主工具的版本。

```json
"name": "chai-as-promised",
"peerDependencies": {
  "chai": "1.x"
}
```

上面代码指定在安装 chai-as-promised 模块时，主程序 chai 必须一起安装，而且 chai 的版本必须是 1.x。如果项目指定的依赖是 chai 的 2.0 版本，就会报错。

> **注意**：从 npm 3.0 版开始，peerDependencies 不再会默认安装了。

### 3.4 optionalDependencies

如果需要在找不到包或者安装包失败时，npm 仍然能够继续运行，则可以将该包放在 optionalDependencies 对象中，optionalDependencies 对象中的包会覆盖 dependencies 中同名的包，所以只需在一个地方进行设置即可。

> **注意**：由于 optionalDependencies 中的依赖可能并为安装成功，所以一定要做异常处理，否则当获取这个依赖时，如果获取不到就会报错。

### 3.5 bundledDependencies

上面的几个依赖相关的配置项都是一个对象，而 bundledDependencies 配置项是一个数组，数组里可以指定一些模块，这些模块将在这个包发布时被一起打包。

> **注意**：这个字段数组中的值必须是在 dependencies, devDependencies 两个里面声明过的包才行。

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
