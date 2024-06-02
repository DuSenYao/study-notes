# SCSS

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [SCSS](#scss)
  - [一. 介绍](#一-介绍)
    - [1.1 安装 Sass 和 Compass](#11-安装-sass-和-compass)
      - [1.1.1 前期准备 Ruby](#111-前期准备-ruby)
      - [1.1.2 安装 sass 和 Compass](#112-安装-sass-和-compass)
    - [1.2 编译 sass](#12-编译-sass)
      - [1.2.1 命令行编译](#121-命令行编译)
        - [1.2.1.1 命令行编译配置选项](#1211-命令行编译配置选项)
        - [1.2.1.2 四种编译排版演示](#1212-四种编译排版演示)
      - [1.2.2 软件方式编译](#122-软件方式编译)
  - [二. SCSS 语法](#二-scss-语法)
    - [2.1 CSS 功能拓展（CSS Extensions）](#21-css-功能拓展css-extensions)
      - [2.1.1 嵌套规则（Nested Rules）](#211-嵌套规则nested-rules)
      - [2.1.2 父选择器 `&`](#212-父选择器-)
      - [2.1.3 属性嵌套（Nested Properties）](#213-属性嵌套nested-properties)
      - [2.1.4 占位符选择器 `%foo`](#214-占位符选择器-foo)
    - [2.2 注释 `/* */` 与 `//`](#22-注释---与-)
    - [2.3 SassScript](#23-sassscript)
      - [2.3.1 Interactive Shell](#231-interactive-shell)
      - [2.3.2 变量 `$`](#232-变量-)
      - [2.3.3 数据类型（Data Types）](#233-数据类型data-types)
        - [2.3.3.1 字符串（Strings）](#2331-字符串strings)
        - [2.3.3.2 数组（Lists）](#2332-数组lists)
        - [2.3.3.3 Maps](#2333-maps)
      - [2.3.4 运算（Operations）](#234-运算operations)
        - [2.3.4.1 数字运算（Number Operations）](#2341-数字运算number-operations)
        - [2.3.4.2 除法运算 `/`](#2342-除法运算-)
        - [2.3.4.3 颜色值运算（Color Operations）](#2343-颜色值运算color-operations)
        - [2.3.4.4 字符串运算（String Operations）](#2344-字符串运算string-operations)
        - [2.3.4.5 布尔运算（Boolean Operations）](#2345-布尔运算boolean-operations)
        - [2.3.4.6 数组运算（List Operations）](#2346-数组运算list-operations)
      - [2.3.5 圆括号（Parentheses）](#235-圆括号parentheses)
      - [2.3.6 函数（Functions）](#236-函数functions)
      - [2.3.7 关键词参数（Keyword Arguments）](#237-关键词参数keyword-arguments)
      - [2.3.8 插值语句 `#{}`](#238-插值语句-)
      - [2.3.9 `&` in SassScript](#239--in-sassscript)
      - [2.3.10 变量默认值 `!default`](#2310-变量默认值-default)
    - [2.4 `@-Rules` 与指令](#24--rules-与指令)
      - [2.4.1 `@import`](#241-import)
        - [2.4.1.1 局部模板](#2411-局部模板)
        - [2.4.2.2 嵌套 `@import`](#2422-嵌套-import)
      - [2.4.2 `@media`](#242-media)
      - [2.4.3 `@extend`](#243-extend)
        - [2.4.3.1 工作原理](#2431-工作原理)
        - [2.4.3.2 延伸复杂的选择器（Extending Complex Selectors）](#2432-延伸复杂的选择器extending-complex-selectors)
        - [2.4.3.3 多重延伸（Multiple Extends）](#2433-多重延伸multiple-extends)
        - [2.4.3.4 继续延伸（Chaining Extends）](#2434-继续延伸chaining-extends)
        - [2.4.3.5 选择器列（Selector Sequences）](#2435-选择器列selector-sequences)
          - [2.4.3.5.1 合并选择器列（Merging Selector Sequences）](#24351-合并选择器列merging-selector-sequences)
        - [2.4.3.6 `@extend-Only` 选择器](#2436-extend-only-选择器)
        - [2.4.3.7 `!optional` 声明](#2437-optional-声明)
        - [2.4.3.8 在指令中使用 `@extend` 的限制](#2438-在指令中使用-extend-的限制)
      - [2.4.4 `@at-root`](#244-at-root)
        - [2.4.4.1 `@at-root (without: ...)` and `@at-root (with: ...)`](#2441-at-root-without--and-at-root-with-)
      - [2.4.5 `@debug`](#245-debug)
      - [2.4.5 `@warn`](#245-warn)
      - [2.4.6 `@error`](#246-error)
    - [2.5 控制指令](#25-控制指令)
      - [2.5.1 `if()`](#251-if)
      - [2.5.2 `@if`](#252-if)
      - [2.5.3 `@for`](#253-for)
      - [2.5.4 `@each`](#254-each)
        - [2.5.4.1 多重赋值](#2541-多重赋值)
      - [2.5.5 `@while`](#255-while)
    - [2.6 混合指令（Mixin Directives）](#26-混合指令mixin-directives)
      - [2.6.1 定义混合指令 `@mixin`](#261-定义混合指令-mixin)
      - [2.6.2 引用混合样式 `@include`](#262-引用混合样式-include)
      - [2.6.3 参数（Arguments）](#263-参数arguments)
        - [2.6.3.1 参数变量（Variable Arguments）](#2631-参数变量variable-arguments)
      - [2.6.4 向混合样式中导入内容](#264-向混合样式中导入内容)
        - [2.6.4.1 可变范围和内容块](#2641-可变范围和内容块)
    - [2.7 函数指令](#27-函数指令)
    - [2.8 输出格式（Output Style）](#28-输出格式output-style)
      - [2.8.1 `:nested`](#281-nested)
      - [2.8.2 `:expanded`](#282-expanded)
      - [2.8.3 `:compact`](#283-compact)
      - [2.8.4 `:compressed`](#284-compressed)

<!-- /code_chunk_output -->

## 一. 介绍

Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了**变量（variables）**、**嵌套（nested rules）**、**混合（mixins）**、**导入（inline imports）** 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。

1. **特色功能**（Features）

   - 完全兼容 CSS3
   - 在 CSS 基础上增加变量、嵌套（nesting）、混合（mixins）等功能
   - 通过函数进行颜色值与属性值的运算
   - 提供控制指令（control directives）等高级功能
   - 自定义输出格式

2. **语法格式**（Syntax）

   Sass 有两种语法格式。首先是 SCSS（Sassy CSS）—— 也是本文示例所使用的格式 —— 这种格式仅在 CSS3 语法的基础上进行拓展，所有 CSS3 语法在 SCSS 中都是通用的，同时加入 Sass 的特色功能。此外，SCSS 也支持大多数 CSS hacks 写法以及浏览器前缀写法（vendor-specific syntax），以及早期的 IE 滤镜写法。这种格式以 `.scss` 作为拓展名。

   另一种也是最早的 Sass 语法格式，被称为缩进格式（Indented Sass）通常简称 "Sass"，是一种简化格式。它使用 “缩进” 代替 “花括号” 表示属性属于某个选择器，用 “换行” 代替 “分号” 分隔属性，很多人认为这样做比 SCSS 更容易阅读，书写也更快速。缩进格式也可以使用 Sass 的全部功能，只是与 SCSS 相比个别地方采取了不同的表达方式，具体请查看 [the indented syntax reference](https://sass-lang.com/documentation/syntax)。这种格式以 `.sass` 作为拓展名。

   任何一种格式可以直接 [导入 (@import)](#241-import) 到另一种格式中使用，或者通过 `sass-convert` 命令行工具转换成另一种格式：

### 1.1 安装 Sass 和 Compass

#### 1.1.1 前期准备 Ruby

sass 基于 Ruby 语言开发而成，因此安装 sass 前需要[安装 Ruby](https://rubyinstaller.org/downloads/)。（注:mac 下自带 Ruby 无需在安装 Ruby!）

安装完成后需测试安装有没有成功,运行 `CMD` 输入以下命令：

```sh
ruby -v
// 如安装成功会打印
ruby 2.6.4p104 (2019-08-28 revision 67798) [x64-mingw32]
```

尽可能用比较新的 RubyGems 版本，建议 2.6.x 以上。

```sh
gem update --system //该命令请翻墙一下
gem -v
3.0.3

// 删除替换原gem源
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
// 打印是否替换成功
gem sources -l
https://gems.ruby-china.com
# 确保只有 gems.ruby-china.com
```

**如果使用 Gemfile 和 Bundler** (例如：Rails 项目)

可以用 Bundler 的 [Gem 源代码镜像命令](https://bundler.io/v1.5/bundle_config.html#gem-source-mirrors)。

```sh
bundle config mirror.https://rubygems.org https://gems.ruby-china.com
```

这样不用改 Gemfile 的 source。

```sh
source 'https://rubygems.org/'
gem 'rails', '4.2.5'
```

**SSL 证书错误**
正常情况下，是不会遇到 SSL 证书错误的，除非 Ruby 安装方式不正确。

如果遇到 SSL 证书问题，又无法解决，请修改 `~/.gemrc` 文件，增加 `ssl_verify_mode: 0` 配置，以便于 RubyGems 可以忽略 SSL 证书错误。

```sh
---
:sources:
- https://gems.ruby-china.com
:ssl_verify_mode: 0
```

如果在意 Gem 下载的安全问题，请正确安装 Ruby、OpenSSL，建议部署 Linux 服务器的时候采用 [这个 RVM 安装脚本](https://github.com/huacnlee/init.d/blob/master/install_rvm) 的方式安装 Ruby。

**其他说明**
`Bundler::GemspecError: Could not read gem at /home/xxx/.rvm/gems/ruby-2.1.8/cache/rugged-0.23.3.gem. It may be corrupted.`，这类错误是网络原因下载到了坏掉的文件到本地，请直接删除那个文件。

#### 1.1.2 安装 sass 和 Compass

`Ruby` 自带一个叫做 `RubyGems` 的系统，用来安装基于 `Ruby` 的软件。可以使用这个系统来 轻松地安装 `Sass` 和 `Compass`。要安装最新版本的 `Sass` 和 `Compass`，需要输入下面的命令：

```sh
// 安装如下(如mac安装遇到权限问题需加 sudo gem install sass)
gem install sass
gem install compass
```

在每一个安装过程中，都会看到如下输出：

```sh
Fetching: sass-3.x.x.gem (100%)
Successfully installed sass-3.x.x
Parsing documentation for sass-3.x.x
Installing ri documentation for sass-3.x.x
Done installing documentation for sass after 6 secon
1 gem installed
```

安装完成之后，应该通过运行下面的命令来确认应用已经正确地安装到了电脑中：

```sh
sass -v
Sass 3.x.x (Selective Steve)
```

```sh
compass -v
Compass 1.x.x (Polaris)
Copyright (c) 2008-2015 Chris Eppstein
Released under the MIT License.
Compass is charityware.
Please make a tax deductable donation for a worthy cause: http://umdf.org/compass
```

sass 常用更新、查看版本、sass 命令帮助等命令：

```sh
// 更新sass
gem update sass

// 查看sass版本
sass -v

// 查看sass帮助
sass -h
```

### 1.2 编译 sass

`sass` 编译有很多种方式，如命令行编译模式、sublime 插件 SASS-Build、编译软件 koala、前端自动化软件 codekit、Grunt 打造前端自动化工作流 `grunt-sass`、Gulp 打造前端自动化工作流 `gulp-ruby-sass` 等。

#### 1.2.1 命令行编译

```sh
// 单文件转换命令
sass input.scss output.css

// 单文件监听命令
sass --watch input.scss:output.css

// 如果有很多的sass文件的目录，也可以告诉sass监听整个目录：
sass --watch app/sass:public/stylesheets
```

##### 1.2.1.1 命令行编译配置选项

命令行编译 `sass` 有配置选项，如编译过后 css 排版、生成调试 map、开启 debug 信息等，可通过使用命令 `sass -h` 查看详细。一般常用两种 `--style`、`--sourcemap。`

```sh
// 编译格式
sass --watch input.scss:output.css --style compact

// 编译添加调试 map
sass --watch input.scss:output.css --sourcemap

// 选择编译格式并添加调试 map
sass --watch input.scss:output.css --style expanded --sourcemap

//开启 debug 信息
sass --watch input.scss:output.css --debug-info
```

- `--style` 表示解析后的 css 是什么排版格式
  sass 内置有四种编译格式:nested`expanded`compact``compressed。
- `--sourcemap` 表示开启 `sourcemap` 调试。开启 `sourcemap` 调试后，会生成一个后缀名为 `.css.map` 文件。

##### 1.2.1.2 四种编译排版演示

```scss
//未编译样式
.box {
  width: 300px;
  height: 400px;
  &-title {
    height: 30px;
    line-height: 30px;
  }
}
```

**nested 编译排版格式**:

```sh
/*命令行内容*/
sass style.scss:style.css --style nested

/*编译过后样式*/
.box {
  width: 300px;
  height: 400px; }
  .box-title {
    height: 30px;
    line-height: 30px; }
```

**expanded 编译排版格式**:

```sh
/*命令行内容*/
sass style.scss:style.css --style expanded

/*编译过后样式*/
.box {
  width: 300px;
  height: 400px;
}
.box-title {
  height: 30px;
  line-height: 30px;
}
```

**compact 编译排版格式**:

```sh
/*命令行内容*/
sass style.scss:style.css --style compact

/*编译过后样式*/
.box { width: 300px; height: 400px; }
.box-title { height: 30px; line-height: 30px; }
```

**compressed 编译排版格式**:

```sh
/*命令行内容*/
sass style.scss:style.css --style compressed

/*编译过后样式*/
.box{width:300px;height:400px}.box-title{height:30px;line-height:30px}
```

#### 1.2.2 软件方式编译

**LESS/Sass 编译工具 Koala 介绍**
易上手的 Sass 编译工具 koala 支持多个环境的安装文件 [下载 Koala](https://www.sass.hk/skill/koala-app.html)

koala 是一个国产免费前端预处理器语言图形编译工具，支持 Less、Sass、Compass、CoffeeScript，帮助 web 开发者更高效地使用它们进行开发。跨平台运行，完美兼容 windows、linux、mac。

**Live Sass Compiler**
VSCode 扩展，可通过实时浏览器重新加载来帮助实时将 SASS / SCSS 文件编译/转换为 CSS 文件。

**用法/快捷方式**:

1. `Watch Sass` 从状态栏单击以打开实时编译，然后 `Stop Watching Sass` 从状态栏单击以打开实时编译。

2. 按 `F1` 或 `ctrl+shift+P` 键入 `Live Sass: Watch Sass` 以开始实时编译，或者键入 `Live Sass: Stop Watching Sass` 以停止实时编译。

3. 按 `F1` 或 `ctrl+shift+P` 键入一次 `Live Sass: Compile Sass - Without Watch Mode` 以编译 Sass 或 Scss。

## 二. SCSS 语法

### 2.1 CSS 功能拓展（CSS Extensions）

#### 2.1.1 嵌套规则（Nested Rules）

Sass 允许将一套 CSS 样式嵌套进另一套样式中，内层的样式将它外层的选择器作为父选择器，例如：

```scss
#main p {
  color: #00ff00;
  width: 97%;

  .redbox {
    background-color: #ff0000;
    color: #000000;
  }
}
```

编译为

```.css
#main p {
  color: #00ff00;
  width: 97%; }
  #main p .redbox {
    background-color: #ff0000;
    color: #000000; }
```

**嵌套功能避免了重复输入父选择器，而且令复杂的 CSS 结构更易于管理**：

```scss
#main {
  width: 97%;

  p,
  div {
    font-size: 2em;
    a {
      font-weight: bold;
    }
  }

  pre {
    font-size: 3em;
  }
}
```

编译为:

```.css
#main {
  width: 97%; }
  #main p, #main div {
    font-size: 2em; }
    #main p a, #main div a {
      font-weight: bold; }
  #main pre {
    font-size: 3em; }
```

#### 2.1.2 父选择器 `&`

在嵌套 CSS 规则时，有时也需要直接使用嵌套外层的父选择器，例如，当给某个元素设定 `hover` 样式时，或者当 body 元素有某个 `classname` 时，可以用 `&` 代表嵌套规则外层的父选择器：

```scss
a {
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  body.firefox & {
    font-weight: normal;
  }
}
```

编译为:

```.css
a {
  font-weight: bold;
  text-decoration: none; }
  a:hover {
    text-decoration: underline; }
  body.firefox a {
    font-weight: normal; }
```

编译后的 CSS 文件中 `&` 将被替换成嵌套外层的父选择器，**如果含有多层嵌套，最外层的父选择器会一层一层向下传递**：

```scss
#main {
  color: black;
  a {
    font-weight: bold;
    &:hover {
      color: red;
    }
  }
}
```

编译为:

```.css
#main {
  color: black; }
  #main a {
    font-weight: bold; }
    #main a:hover {
      color: red; }
```

**`&` 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器**，例如：

```scss
#main {
  color: black;
  &-sidebar {
    border: 1px solid;
  }
}
```

编译为:

```.css
#main {
  color: black; }
  #main-sidebar {
    border: 1px solid; }
```

> 当父选择器含有不合适的后缀时，Sass 将会报错。

#### 2.1.3 属性嵌套（Nested Properties）

有些 CSS 属性遵循相同的命名空间（namespace），比如 `font-family`, `font-size`, `font-weight` 都以 `font` 作为属性的命名空间。为了便于管理这样的属性，同时也为了避免了重复输入，Sass 允许将属性嵌套在命名空间中，例如：

```scss
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
```

编译:

```.css
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; }
```

**命名空间也可以包含自己的属性值**，例如：

```scss
.funky {
  font: 20px/24px {
    family: fantasy;
    weight: bold;
  }
}
```

编译为:

```.css
.funky {
  font: 20px/24px;
    font-family: fantasy;
    font-weight: bold; }
```

#### 2.1.4 占位符选择器 `%foo`

Sass 额外提供了一种特殊类型的选择器：**占位符选择器**（placeholder selector）。与常用的 id 与 class 选择器写法相似，只是 `#` 或 `.` 替换成了 `%`。必须通过 `@extend` 指令调用，更多介绍请查阅 [@extend-Only Selectors](#2436-extend-only-选择器)。

> 当占位符选择器单独使用时（未通过 `@extend` 调用），不会编译到 CSS 文件中。

### 2.2 注释 `/* */` 与 `//`

Sass 支持标准的 CSS 多行注释 `/* */`，以及单行注释 `//`，前者会被完整输出到编译后的 CSS 文件中，而后者则不会，例如：

```scss
/* This comment is
 * several lines long.
 * since it uses the CSS comment syntax,
 * it will appear in the CSS output. */
body {
  color: black;
}

// These comments are only one line long each.
// They won't appear in the CSS output,
// since they use the single-line comment syntax.
a {
  color: green;
}
```

编译为:

```.css
/* This comment is
 * several lines long.
 * since it uses the CSS comment syntax,
 * it will appear in the CSS output. */
body {
  color: black; }

a {
  color: green; }
```

> 将 `!` 作为多行注释的第一个字符表示在压缩输出模式下保留这条注释并输出到 CSS 文件中，通常用于添加版权信息。

**插值语句 (interpolation) 也可写进多行注释中输出变量值**：

```scss
$version: '1.2.3';
/* This CSS is generated by My Snazzy Framework version #{$version}. */
```

编译为：

```.css
/* This CSS is generated by My Snazzy Framework version 1.2.3. */
```

### 2.3 SassScript

在 CSS 属性的基础上 Sass 提供了一些名为 SassScript 的新功能。**SassScript 可作用于任何属性，允许属性使用变量、算数运算等额外功能**。

通过 interpolation，SassScript 甚至可以生成选择器或属性名，这一点对编写 mixin 有很大帮助。

#### 2.3.1 Interactive Shell

Interactive Shell 可以在命令行中测试 SassScript 的功能。在命令行中输入 `sass -i`，然后输入想要测试的 SassScript 查看输出结果：

```sh
$ sass -i
>> "Hello, Sassy World!"
"Hello, Sassy World!"
>> 1px + 1px + 1px
3px
```

#### 2.3.2 变量 `$`

SassScript 最普遍的用法就是变量，变量以 `$` 开头，赋值方法与 CSS 属性的写法一样：

```scss
$width: 5em;
```

直接使用即调用变量：

```css
#main {
  width: $width;
}
```

变量支持块级作用域，嵌套规则内定义的变量只能在嵌套规则内使用（局部变量），不在嵌套规则内定义的变量则可在任何地方使用（全局变量）。将局部变量转换为全局变量可以添加 `!global` 声明：

```scss
#main {
  $width: 5em !global;
  width: $width;
}

#sidebar {
  width: $width;
}
```

编译为

```css
#main {
  width: 5em;
}

#sidebar {
  width: 5em;
}
```

#### 2.3.3 数据类型（Data Types）

SassScript 支持 6 种主要的数据类型：

- **数字**：`1, 2, 13, 10px`
- **字符串**：有引号字符串与无引号字符串，`"foo"`, `'bar'`, `baz`
- **颜色**：`blue`, `#04a3f9`, `rgba(255,0,0,0.5)`
- **布尔型**：`true`, `false`
- **空值**：`null`
- **数组（list）**：用空格或逗号作分隔符，`1.5em 1em 0 2em, Helvetica, Arial, sans-serif`
- **maps**：相当于 JS 的 Object，`(key1: value1, key2: value2)`

SassScript 也支持其他 CSS 属性值，比如 Unicode 字符集，或 `!important` 声明。然而 Sass 不会特殊对待这些属性值，一律视为无引号字符串。

##### 2.3.3.1 字符串（Strings）

SassScript 支持 CSS 的两种字符串类型：

- **有引号字符串**（quoted strings），如 `"Lucida Grande" 'http://sass-lang.com'`
- **无引号字符串**（unquoted strings），如 `sans-serif bold`

在编译 CSS 文件时不会改变其类型。只有一种情况例外，使用 `#{}`（interpolation）时，有引号字符串将被编译为无引号字符串，这样便于在 mixin 中引用选择器名：

```scss
@mixin firefox-message($selector) {
  body.firefox #{$selector}:before {
    content: 'Hi, Firefox users!';
  }
}
@include firefox-message('.header');
```

编译为:

```.css
body.firefox .header:before {
  content: "Hi, Firefox users!"; }
```

##### 2.3.3.2 数组（Lists）

数组（lists）指 Sass 如何处理 CSS 中 `margin: 10px 15px 0 0` 或者 `font-face: Helvetica, Arial, sans-serif` 这样通过空格或者逗号分隔的一系列的值。事实上，独立的值也被视为数组 —— 只包含一个值的数组。

数组本身没有太多功能，但 `Sass list functions` 赋予了数组更多新功能：

- `nth` 函数可以直接访问数组中的某一项
- `join` 函数可以将多个数组连接在一起
- `append` 函数可以在数组中添加新值
- `@each` 指令能够遍历数组中的每一项

数组中可以包含子数组，比如 `1px 2px, 5px 6px` 是包含 `1px 2px` 与 `5px 6px` 两个数组的数组。如果内外两层数组使用相同的分隔方式，需要用圆括号包裹内层，所以也可以写成 `(1px 2px) (5px 6px)`。变化是，之前的 `1px 2px, 5px 6px` 使用逗号分割了两个子数组（comma-separated），而 `(1px 2px) (5px 6px)` 则使用空格分割（space-separated）。

当数组被编译为 CSS 时，Sass 不会添加任何圆括号（CSS 中没有这种写法），所以 `(1px 2px) (5px 6px)` 与 `1px 2px, 5px 6px` 在编译后的 CSS 文件中是完全一样的，但是它们在 Sass 文件中却有不同的意义，前者是包含两个数组的数组，而后者是包含四个值的数组。

用 `()` 表示不包含任何值的空数组（在 Sass 3.3 版之后也视为空的 map）。空数组不可以直接编译成 CSS，比如编译 `font-family: ()` Sass 将会报错。如果数组中包含空数组或空值，编译时将被清除，比如 `1px 2px () 3px` 或 `1px 2px null 3px`。

基于逗号分隔的数组允许保留结尾的逗号，这样做的意义是强调数组的结构关系，尤其是需要声明只包含单个值的数组时。例如 `(1,)` 表示只包含 `1` 的数组，而 `(1 2 3,)` 表示包含 `1 2 3` 这个以空格分隔的数组的数组。

##### 2.3.3.3 Maps

`Maps` 可视为键值对的集合，键被用于定位值 在 css 中没有对应的概念。 和 Lists 不同 Maps 必须被圆括号包围，键值对被都好分割。

`Maps` 中的 keys 和 values 可以是 SassScript 的任何对象。（包括任意的 SassScript 表达式 arbitrary SassScript expressions）和 Lists 一样 Maps 主要为 SassScript 函数服务，如：

- `map-get` 函数用于查找键值
- `map-merge` 函数用于 map 和新加的键值融合
- `@each` 命令可添加样式到一个 map 中的每个键值对

Maps 可用于任何 Lists 可用的地方，在 List 函数中 Map 会被自动转换为 List ， 如 `(key1: value1, key2: value2)` 会被 List 函数转换为 `key1 value1, key2 value2` ，反之则不能。

#### 2.3.4 运算（Operations）

所有数据类型均支持相等运算 `==` 或 `!=`，此外，每种数据类型也有其各自支持的运算方式。

##### 2.3.4.1 数字运算（Number Operations）

SassScript 支持数字的加减乘除、取整等运算 (`+`, `-`, `*`, `/`, `%`)，如果必要会在不同单位间转换值。

```scss
p {
  width: 1in + 8pt;
}
```

编译为:

```.css
p {
  width: 1.111in; }
```

关系运算 `<`, `>`, `<=`, `>=` 也可用于数字运算，相等运算 `==`, `!=` 可用于所有数据类型。

##### 2.3.4.2 除法运算 `/`

`/` 在 CSS 中通常起到分隔数字的用途，SassScript 作为 CSS 语言的拓展当然也支持这个功能，同时也赋予了 `/` 除法运算的功能。也就是说，如果 `/` 在 SassScript 中把两个数字分隔，编译后的 CSS 文件中也是同样的作用。

以下三种情况 `/` 将被视为除法运算符号：

- 如果值，或值的一部分，是变量或者函数的返回值
- 如果值被圆括号包裹
- 如果值是算数表达式的一部分

如果值是算数表达式的一部分

```scss
p {
  font: 10px/8px; // 纯CSS，无除法
  $width: 1000px;
  width: $width/2; // 使用变量进行除法
  width: round(1.5) / 2; // 使用函数，进行除法
  height: (500px/2); // 使用括号进行除法
  margin-left: 5px + 8px/2px; // 使用 + 进行除法
}
```

编译为:

```.css
p {
  font: 10px/8px;
  width: 500px;
  height: 250px;
  margin-left: 9px; }
```

如果需要使用变量，同时又要确保 `/` 不做除法运算而是完整地编译到 CSS 文件中，只需要用 `#{}` 插值语句将变量包裹。

```scss
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
```

编译为:

```.css
p {
  font: 12px/30px; }
```

##### 2.3.4.3 颜色值运算（Color Operations）

1. 颜色值的运算是分段计算进行的，也就是分别计算红色，绿色，以及蓝色的值：

   ```scss
   p {
     color: #010203 + #040506;
   }
   ```

   计算 `01 + 04 = 05` `02 + 05 = 07` `03 + 06 = 09`，然后编译为：

   ```.css
   p {
     color: #050709; }
   ```

   使用 color functions 比计算颜色值更方便一些。

2. 数字与颜色值之间也可以进行算数运算，同样也是分段计算的，比如：

   ```scss
   p {
     color: #010203 * 2;
   }
   ```

   计算 `01 * 2 = 02` `02 * 2 = 04` `03 * 2 = 06`，然后编译为：

   ```.css
   p {
     color: #020406; }
   ```

   > **注意**：如果颜色值包含 alpha channel（rgba 或 hsla 两种颜色值），必须拥有相等的 alpha 值才能进行运算，因为算术运算不会作用于 alpha 值。

   ```scss
   p {
     color: rgba(255, 0, 0, 0.75) + rgba(0, 255, 0, 0.75);
   }
   ```

   编译为：

   ```.css
   p {
     color: rgba(255, 255, 0, 0.75); }
   ```

3. 颜色值的 alpha channel 可以通过 `opacify` 或 `transparentize` 两个函数进行调整：

   ```scss
   $translucent-red: rgba(255, 0, 0, 0.5);
   p {
     color: opacify($translucent-red, 0.3);
     background-color: transparentize($translucent-red, 0.25);
   }
   ```

   编译为：

   ```.css
   p {
     color: rgba(255, 0, 0, 0.8);
     background-color: rgba(255, 0, 0, 0.25); }
   ```

4. IE 滤镜要求所有的颜色值包含 alpha 层，而且格式必须固定 `#AABBCCDD`，使用 `ie_hex_str` 函数可以很容易地将颜色转化为 IE 滤镜要求的格式：

   ```scss
   $translucent-red: rgba(255, 0, 0, 0.5);
   $green: #00ff00;
   div {
     filter: progid:DXImageTransform.Microsoft.gradient(enabled='false', startColorstr='#{ie-hex-str($green)}', endColorstr='#{ie-hex-str($translucent-red)}');
   }
   ```

   编译为:

   ```.css
   div {
     filter: progid:DXImageTransform.Microsoft.gradient(enabled='false', startColorstr=#FF00FF00, endColorstr=#80FF0000);
   }
   ```

##### 2.3.4.4 字符串运算（String Operations）

1. `+` 可用于连接字符串

   ```scss
   p {
     cursor: e + -resize;
   }
   ```

   编译为:

   ```.css
   p {
     cursor: e-resize; }
   ```

   > **注意**：如果有引号字符串（位于 `+` 左侧）连接无引号字符串，运算结果是有引号的，相反，无引号字符串（位于 `+` 左侧）连接有引号字符串，运算结果则没有引号。

   ```scss
   p:before {
     content: 'Foo ' + Bar;
     font-family: sans- + 'serif';
   }
   ```

   编译为

   ```.css
   p:before {
     content: "Foo Bar";
     font-family: sans-serif; }
   ```

2. 运算表达式与其他值连用时，用空格做连接符：

   ```scss
   p {
     margin: 3px + 4px auto;
   }
   ```

   编译为:

   ```.css
   p {
     margin: 7px auto; }
   ```

3. 在有引号的文本字符串中使用 `#{}` 插值语句可以添加动态的值：

   ```scss
   p:before {
     content: 'I ate #{5 + 10} pies!';
   }
   ```

   编译为

   ```.css
   p:before {
     content: "I ate 15 pies!"; }
   ```

   空的值被视作插入了空字符串：

   ```scss
   $value: null;
   p:before {
     content: 'I ate #{$value} pies!';
   }
   ```

   编译为

   ```.css
   p:before {
     content: "I ate pies!"; }
   ```

##### 2.3.4.5 布尔运算（Boolean Operations）

SassScript 支持布尔型的 `and` `or` 以及 `not` 运算。

##### 2.3.4.6 数组运算（List Operations）

数组不支持任何运算方式，只能使用 list functions 控制。

#### 2.3.5 圆括号（Parentheses）

圆括号可以用来影响运算的顺序：

```scss
p {
  width: 1em + (2em * 3);
}
```

编译为：

```.css
p {
  width: 7em; }
```

#### 2.3.6 函数（Functions）

SassScript 定义了多种函数，有些甚至可以通过普通的 CSS 语句调用：

```scss
p {
  color: hsl(0, 100%, 50%);
}
```

编译为:

```.css
p {
  color: #ff0000; }
```

#### 2.3.7 关键词参数（Keyword Arguments）

Sass 函数允许使用关键词参数（keyword arguments），上面的例子也可以写成：

```scss
p {
  color: hsl($hue: 0, $saturation: 100%, $lightness: 50%);
}
```

虽然不够简明，但是阅读起来会更方便。关键词参数给函数提供了更灵活的接口，以及容易调用的参数。关键词参数可以打乱顺序使用，如果使用默认值也可以省缺，另外，参数名被视为变量名，下划线、短横线可以互换使用。

通过 [Sass::Script::Functions](https://sass-lang.com/documentation/modules) 查看完整的 Sass 函数列表，参数名，以及如何自定义函数。

#### 2.3.8 插值语句 `#{}`

通过 `#{}` 插值语句可以在选择器或属性名中使用变量：

```scss
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```

编译为：

```.css
p.foo {
  border-color: blue; }
```

`#{}` 插值语句也可以在属性值中插入 SassScript，大多数情况下，这样可能还不如使用变量方便，但是使用 `#{}` 可以避免 Sass 运行运算表达式，直接编译 CSS：

```css
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
```

编译为：

```.css
p {
  font: 12px/30px; }
```

#### 2.3.9 `&` in SassScript

与在选择器中使用时一样，`&` in SassScript 引用当前父选择器。它是一个逗号分隔的列表，由空格分隔。例如：

```scss
.foo.bar .baz.bang,
.bip.qux {
  $selector: &;
}
```

`$selector` 的值现在是 ((".foo.bar" ".baz.bang"), ".bip.qux"). 复合选择器在这里被引用以表示它们是字符串，但实际上它们是不被引用的。即使父选择器不包含逗号或空格，`&` 也将始终具有两级嵌套，因此可以一致地访问它.

如果没有父选择器，`&` 的值将为空。这意味着可以在 `@mixin` 中使用它来检测父选择器是否存在：

```scss
@mixin does-parent-exist {
  @if & {
    &:hover {
      color: red;
    }
  } @else {
    a {
      color: red;
    }
  }
}
```

#### 2.3.10 变量默认值 `!default`

可以在变量的结尾添加 `!default` 给一个未通过 `!default` 声明赋值的变量赋值，此时，如果变量已经被赋值，不会再被重新赋值，但是如果变量还没有被赋值，则会被赋予新的值。

```scss
$content: 'First content';
$content: 'Second content?' !default;
$new_content: 'First time reference' !default;

#main {
  content: $content;
  new-content: $new_content;
}
```

编译为:

```.css
#main {
  content: "First content";
  new-content: "First time reference"; }
```

变量是 null 空值时将视为未被 `!default` 赋值：

```scss
$content: null;
$content: 'Non-null content' !default;

#main {
  content: $content;
}
```

编译为

```.css
#main {
  content: "Non-null content"; }
```

### 2.4 `@-Rules` 与指令

Sass 支持所有的 CSS3 @-Rules，以及 Sass 特有的 “指令”（directives）。更多资料看 [控制指令 (control directives)](#25-控制指令) 与 [混合指令 (mixin directives)](#26-混合指令mixin-directives) 两个部分。

#### 2.4.1 `@import`

Sass 拓展了 `@import` 的功能，允许其导入 SCSS 或 Sass 文件。被导入的文件将合并编译到同一个 CSS 文件中，另外，被导入的文件中所包含的变量或者混合指令（mixin）都可以在导入的文件中使用。

Sass 在当前地址，或 Rack, Rails, Merb 的 Sass 文件地址寻找 Sass 文件，如果需要设定其他地址，可以用 `:load_paths` 选项，或者在命令行中输入 `--load-path` 命令。

通常，`@import` 寻找 Sass 文件并将其导入，但在以下情况下，`@import` 仅作为普通的 CSS 语句，不会导入任何 Sass 文件：

- 文件拓展名是 `.css`
- 文件名以 `http://` 开头；
- 文件名是 `url()`
- `@import` 包含 `media queries`

如果不在上述情况内，文件的拓展名是 `.scss` 或 `.sass`，则导入成功。没有指定拓展名，Sass 将会试着寻找文件名相同，拓展名为 `.scss` 或 `.sass` 的文件并将其导入：

```scss
@import 'foo.scss';

@import 'foo';
```

都会导入文件 foo.scss，但是：

```scss
@import 'foo.css';
@import 'foo' screen;
@import 'http://foo.com/bar';
@import url(foo);
```

编译为：

```css
@import 'foo.css';
@import 'foo' screen;
@import 'http://foo.com/bar';
@import url(foo);
```

Sass 允许同时导入多个文件，例如同时导入 rounded-corners 与 text-shadow 两个文件：

```scss
@import 'rounded-corners', 'text-shadow';
```

导入文件也可以使用 `#{ }` 插值语句，但不是通过变量动态导入 Sass 文件，只能作用于 CSS 的 `url()` 导入方式：

```scss
$family: unquote('Droid+Sans');
@import url('http://fonts.googleapis.com/css?family=\#{$family}');
```

编译为

```css
@import url('http://fonts.googleapis.com/css?family=Droid+Sans');
```

##### 2.4.1.1 局部模板

如果需要导入 SCSS 或者 Sass 文件，但又不希望将其编译为 CSS，只需要在文件名前添加下划线，这样会告诉 Sass 不要编译这些文件，但导入语句中却不需要添加下划线。

例如，将文件命名为 `_colors.scss`，便不会编译 `_colours.css` 文件。

```scss
@import 'colors';
```

上面的例子，导入的其实是 `_colors.scss` 文件

> **注意**：不可以同时存在添加下划线与未添加下划线的同名文件，添加下划线的文件将会被忽略。

##### 2.4.2.2 嵌套 `@import`

大多数情况下，一般在文件的最外层（不在嵌套规则内）使用 `@import`，其实，也可以将 `@import` 嵌套进 CSS 样式或者 `@media` 中，与平时的用法效果相同，只是这样导入的样式只能出现在嵌套的层中。

假设 example.scss 文件包含以下样式：

```scss
.example {
  color: red;
}
```

然后导入到 `#main` 样式内

```scss
#main {
  @import 'example';
}
```

将会被编译为

```.css
#main .example {
  color: red;
}
```

> **注意**：不可以在混合指令（mixin）或控制指令（control directives）中嵌套 `@import`。

#### 2.4.2 `@media`

1. Sass 中 `@media` 指令与 CSS 中用法一样，只是增加了一点额外的功能：**允许其在 CSS 规则中嵌套**。

   如果 `@media` 嵌套在 CSS 规则内，编译时，`@media` 将被编译到文件的最外层，包含嵌套的父选择器。这个功能让 `@media` 用起来更方便，不需要重复使用选择器，也不会打乱 CSS 的书写流程。

   ```scss
   .sidebar {
     width: 300px;
     @media screen and (orientation: landscape) {
       width: 500px;
     }
   }
   ```

   编译为:

   ```.css
   .sidebar {
     width: 300px; }
     @media screen and (orientation: landscape) {
       .sidebar {
         width: 500px; } }
   ```

2. `@media` 的 queries 允许互相嵌套使用，编译时，Sass 自动添加 `and`：

   ```scss
   @media screen {
     .sidebar {
       @media (orientation: landscape) {
         width: 500px;
       }
     }
   }
   ```

   编译为

   ```.css
   @media screen and (orientation: landscape) {
     .sidebar {
       width: 500px; } }
   ```

3. `@media` 甚至可以使用 SassScript（比如变量，函数，以及运算符）代替条件的名称或者值：

   ```scss
   $media: screen;
   $feature: -webkit-min-device-pixel-ratio;
   $value: 1.5;

   @media #{$media} and ($feature: $value) {
     .sidebar {
       width: 500px;
     }
   }
   ```

   编译为

   ```.css
   @media screen and (-webkit-min-device-pixel-ratio: 1.5) {
     .sidebar {
       width: 500px; } }
   ```

#### 2.4.3 `@extend`

在设计网页的时候常常遇到这种情况：一个元素使用的样式与另一个元素完全相同，但又添加了额外的样式。通常会在 HTML 中给元素定义两个 class，一个通用样式，一个特殊样式。假设现在要设计一个普通错误样式与一个严重错误样式，一般会这样写：

```html
<div class="error seriousError">Oh no! You've been hacked!</div>
```

样式如下

```css
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  border-width: 3px;
}
```

麻烦的是，这样做必须时刻记住使用 `.seriousError` 时需要参考 `.error` 的样式，带来了很多不变：智能比如加重维护负担，导致 bug，或者给 HTML 添加无语意的样式。

使用 `@extend` 可以避免上述情况，告诉 Sass 将一个选择器下的所有样式继承给另一个选择器：

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

上面代码的意思是将 `.error` 下的所有样式继承给 `.seriousError`，`border-width: 3px;` 是单独给 `.seriousError` 设定特殊样式，这样，使用 `.seriousError` 的地方可以不再使用 `.error`。

其他使用到 `.error` 的样式也会同样继承给 `.seriousError`，例如，另一个样式 `.error.intrusion` 使用了 `hacked.png` 做背景，`<div class="seriousError intrusion">` 也同样会使用 `hacked.png` 背景。

```css
.error.intrusion {
  background-image: url('/image/hacked.png');
}
```

##### 2.4.3.1 工作原理

`@extend` 的作用是将重复使用的样式（`.error`）延伸（extend）给需要包含这个样式的特殊样式（`.seriousError`），刚刚的例子：

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.error.intrusion {
  background-image: url('/image/hacked.png');
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

编译为

```.css
.error, .seriousError {
  border: 1px #f00;
  background-color: #fdd; }

.error.intrusion, .seriousError.intrusion {
  background-image: url("/image/hacked.png"); }

.seriousError {
  border-width: 3px; }
```

当合并选择器时，`@extend` 会避免无谓的重复，`.seriousError.seriousError` 将编译为 `.seriousError`，不能匹配任何元素的选择器（比如 `#main#footer`）也会删除。

##### 2.4.3.2 延伸复杂的选择器（Extending Complex Selectors）

Class 选择器并不是唯一可以被延伸（extend）的，Sass 允许延伸任何定义给单个元素的选择器，比如 `.special.cool`，`a:hover` 或者 `a.user[href^="http://"]` 等，例如：

```scss
.hoverlink {
  @extend a:hover;
}
a:hover {
  text-decoration: underline;
}
```

同 class 元素一样，`a:hover` 的样式将继承给 `.hoverlink`，编译为：

```.css
a:hover, .hoverlink {
  text-decoration: underline; }
```

与上面 `.error.intrusion` 的例子一样，所有 `a:hover` 的样式将继承给 `.hoverlink`，包括其他使用到 `a:hover` 的样式，例如：

```scss
.hoverlink {
  @extend a:hover;
}
.comment a.user:hover {
  font-weight: bold;
}
```

编译为：

```.css
.comment a.user:hover, .comment .user.hoverlink {
  font-weight: bold; }
```

##### 2.4.3.3 多重延伸（Multiple Extends）

同一个选择器可以延伸给多个选择器，它所包含的属性将继承给所有被延伸的选择器：

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.attention {
  font-size: 3em;
  background-color: #ff0;
}
.seriousError {
  @extend .error;
  @extend .attention;
  border-width: 3px;
}
```

编译为

```.css
.error, .seriousError {
  border: 1px #f00;
  background-color: #fdd; }

.attention, .seriousError {
  font-size: 3em;
  background-color: #ff0; }

.seriousError {
  border-width: 3px; }
```

每个 `.seriousError` 将包含 `.error` 与 `.attention` 下的所有样式，这时，后定义的样式享有优先权：`.seriousError` 的背景颜色是 `#ff0` 而不是 `#fdd`，因为 `.attention` 在 `.error` 之后定义。

多重延伸可以使用逗号分隔选择器名，比如 `@extend .error, .attention;` 与 `@extend .error; @extend.attention;` 有相同的效果。

##### 2.4.3.4 继续延伸（Chaining Extends）

当一个选择器延伸给第二个后，可以继续将第二个选择器延伸给第三个，例如：

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
.criticalError {
  @extend .seriousError;
  position: fixed;
  top: 10%;
  bottom: 10%;
  left: 10%;
  right: 10%;
}
```

现在，每个 `.seriousError` 选择器将包含 `.error` 的样式，而 `.criticalError` 不仅包含 `.seriousError` 的样式也会同时包含 `.error` 的所有样式，上面的代码编译为：

```.css
.error, .seriousError, .criticalError {
  border: 1px #f00;
  background-color: #fdd; }

.seriousError, .criticalError {
  border-width: 3px; }

.criticalError {
  position: fixed;
  top: 10%;
  bottom: 10%;
  left: 10%;
  right: 10%; }
```

##### 2.4.3.5 选择器列（Selector Sequences）

暂时不可以将选择器列 (Selector Sequences)，比如 `.foo .bar` 或 `.foo + .bar`，延伸给其他元素，但是，却可以将其他元素延伸给选择器列：

```scss
#fake-links .link {
  @extend a;
}

a {
  color: blue;
  &:hover {
    text-decoration: underline;
  }
}
```

编译为

```.css
a, #fake-links .link {
  color: blue; }
  a:hover, #fake-links .link:hover {
    text-decoration: underline; }
```

###### 2.4.3.5.1 合并选择器列（Merging Selector Sequences）

有时会遇到复杂的情况，比如选择器列中的某个元素需要延伸给另一个选择器列，这种情况下，两个选择器列需要合并，比如：

```scss
#admin .tabbar a {
  font-weight: bold;
}
#demo .overview .fakelink {
  @extend a;
}
```

技术上讲能够生成所有匹配条件的结果，但是这样生成的样式表太复杂了，上面这个简单的例子就可能有 10 种结果。所以，Sass 只会编译输出有用的选择器。

当两个列（sequence）合并时，如果没有包含相同的选择器，将生成两个新选择器：第一列出现在第二列之前，或者第二列出现在第一列之前：

```scss
#admin .tabbar a {
  font-weight: bold;
}
#demo .overview .fakelink {
  @extend a;
}
```

编译为

```.css
#admin .tabbar a,
#admin .tabbar #demo .overview .fakelink,
#demo .overview #admin .tabbar .fakelink {
  font-weight: bold; }
```

如果两个列 (sequence) 包含了相同的选择器，相同部分将会合并在一起，其他部分交替输出。在下面的例子里，两个列都包含 #admin，输出结果中它们合并在了一起：

```scss
#admin .tabbar a {
  font-weight: bold;
}
#admin .overview .fakelink {
  @extend a;
}
```

编译为

```.css
#admin .tabbar a,
#admin .tabbar .overview .fakelink,
#admin .overview .tabbar .fakelink {
  font-weight: bold; }
```

##### 2.4.3.6 `@extend-Only` 选择器

有时，需要定义一套样式并不是给某个元素用，而是只通过 `@extend` 指令使用，尤其是在制作 Sass 样式库的时候，希望 Sass 能够忽略用不到的样式。

如果使用普通的 CSS 规则，最后会编译出很多用不到的样式，也容易与其他样式名冲突，所以，Sass 引入了“占位符选择器” （placeholder selectors），看起来很像普通的 `id` 或 `class` 选择器，只是 `#` 或 `.` 被替换成了 `%`。可以像 `class` 或者 `id` 选择器那样使用，当它们单独使用时，不会被编译到 CSS 文件中。

```scss
// 此规则集不会单独呈现。
#context a%extreme {
  color: blue;
  font-weight: bold;
  font-size: 2em;
}
```

占位符选择器需要通过 `@extend` 使用，用法与 `class` 或者 `id` 选择器一样，被延伸后，占位符选择器本身不会被编译。

```scss
.notice {
  @extend %extreme;
}
```

编译为

```.css
#context a.notice {
  color: blue;
  font-weight: bold;
  font-size: 2em; }
```

##### 2.4.3.7 `!optional` 声明

如果 `@extend` 失败会收到错误提示，比如，这样写 `a.important {@extend .notice}`，当没有 `.notice` 选择器时，将会报错，只有 `h1.notice` 包含 `.notice` 时也会报错，因为 `h1` 与 `a` 冲突，会生成新的选择器。

如果要求 `@extend` 不生成新选择器，可以通过 `!optional` 声明达到这个目的，例如：

```scss
a.important {
  @extend .notice !optional;
}
```

##### 2.4.3.8 在指令中使用 `@extend` 的限制

在指令中使用 `@extend` 时（比如在 `@media` 中）有一些限制：

- Sass 不可以将 `@media` 层外的 CSS 规则延伸给指令层内的 CSS，这样会生成大量的无用代码。也就是说，如果在 `@media`（或者其他 CSS 指令）中使用 `@extend`，必须延伸给相同指令层中的选择器。

下面的例子是可行的：

```scss
@media print {
  .error {
    border: 1px #f00;
    background-color: #fdd;
  }
  .seriousError {
    @extend .error;
    border-width: 3px;
  }
}
```

但不可以这样：

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}

@media print {
  .seriousError {
    // INVALID EXTEND: .error is used outside of the "@media print" directive
    // 无效的扩展名：.error 在 "@media print" 指令之外使用
    @extend .error;
    border-width: 3px;
  }
}
```

#### 2.4.4 `@at-root`

`@at-root` 指令会将一个或多个规则在文档的根目录下编译，而不是嵌套在其父选择器下。它可以与单个内联选择器一起使用：

```scss
.parent {
  ...
  @at-root .child { ... }
}
```

编译为:

```.css
.parent { ... }
.child { ... }
```

或可以与包含多个选择器的块一起使用:

```scss
.parent {
  ...
  @at-root {
    .child1 { ... }
    .child2 { ... }
  }
  .step-child { ... }
}
```

编译为:

```.css
.parent { ... }
.child1 { ... }
.child2 { ... }
.parent .step-child { ... }
```

##### 2.4.4.1 `@at-root (without: ...)` and `@at-root (with: ...)`

默认, `@at-root` 只排除选择器。但是，也可以使用 `@at-root` 来移动到嵌套指令（如 `@media`）之外。例如:

```scss
@media print {
  .page {
    width: 8in;
    @at-root (without: media) {
      color: red;
    }
  }
}
```

编译为：

```.css
@media print {
  .page {
    width: 8in;
  }
}
.page {
  color: red;
}
```

可以使用 `@at-root (without:...)` 在任何指令之外移动。还可以使用多个由空格分隔的指令来执行：`@at-root (without: media supports)` 移动到 `@media`和 `@supports` 查询之外。

有两个特殊值可以传递给 `@at-root`：

- `@at-root (without: rule)` 与 `@at-root` 相同，没有查询。"rule"是指普通的 CSS 规则
- `@at-root (without: all)` 意味着样式应该移到所有指令和 CSS 规则之外

如果要指定要包含哪些指令或规则，而不是列出应排除哪些指令或规则，则可以使用 `with` 而不是 `without`。例如，`@at-root (with:rule)` 将移动到所有指令之外，但将保留任何 CSS 规则。

#### 2.4.5 `@debug`

`@debug` 指令将 SassScript 表达式的值打印到标准错误输出流。它对于调试正在运行复杂 SassScript 的 Sass 文件非常有用。例如：

```scss
@debug 10em + 12em;
```

编译为

```sh
Line 1 DEBUG: 22em
```

#### 2.4.5 `@warn`

`@warn` 指令将 SassScript 表达式的值打印到标准错误输出流。对于那些需要警告用户不推荐使用或需要从 mixin 使用错误中恢复的库来说，它很有用。`@warn` 和 `@debug` 之间主要有两个区别：

- 可以使用 `--quiet` 命令行选项或：quiet Sass 选项关闭警告。
- 样式表跟踪将与消息一起打印出来，这样被警告的用户可以看到样式导致警告的地方。

```scss
@mixin adjust-location($x, $y) {
  @if unitless($x) {
    @warn "Assuming #{$x} to be in pixels";
    $x: 1px * $x;
  }
  @if unitless($y) {
    @warn "Assuming #{$y} to be in pixels";
    $y: 1px * $y;
  }
  position: relative;
  left: $x;
  top: $y;
}
```

#### 2.4.6 `@error`

`@error` 指令将 SassScript 表达式的值表达为致命错误，包括良好的堆栈跟踪。这对于验证 mixin 和函数的参数很有用。例如：

```scss
@mixin adjust-location($x, $y) {
  @if unitless($x) {
    @error "$x may not be unitless, was #{$x}.";
  }
  @if unitless($y) {
    @error "$y may not be unitless, was #{$y}.";
  }
  position: relative;
  left: $x;
  top: $y;
}
```

> 目前无法捕获错误。

### 2.5 控制指令

SassScript 提供了一些基础的控制指令，比如在满足一定条件时引用样式，或者设定范围重复输出格式。控制指令是一种高级功能，日常编写过程中并不常用到，主要与混合指令（mixin）配合使用，尤其是用在 [Compass](http://compass-style.org/) 等样式库中。

#### 2.5.1 `if()`

内置的 `if()` 函数允许根据条件进行分支，并且只返回两个可能结果之一。它可以在任何脚本上下文中使用。if 函数只计算与它将返回的参数相对应的参数–这允许引用可能未定义的变量，或者进行可能导致错误的计算（例如，除以零）。

```scss
h2 {
  color: if(1 + 1 == 2, green, red);
}
```

#### 2.5.2 `@if`

当 `@if` 的表达式返回值不是 `false` 或者 `null` 时，条件成立，输出 `{}` 内的代码：

```scss
p {
  @if 1 + 1 == 2 {
    border: 1px solid;
  }
  @if 5 < 3 {
    border: 2px dotted;
  }
  @if null {
    border: 3px double;
  }
}
```

编译为：

```.css
p {
  border: 1px solid; }
```

`@if` 声明后面可以跟多个 `@else if` 声明，或者一个 `@else` 声明。例如：

```scss
$type: monster;
p {
  @if $type == ocean {
    color: blue;
  } @else if $type == matador {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}
```

编译为：

```.css
p {
  color: green; }
```

#### 2.5.3 `@for`

`@for` 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动。这个指令包含两种格式：

- `@for $var from <start> through <end>`
- `@for $var from <start> to <end>`

区别在于 `through` 与 `to` 的含义：

- 当使用 `through` 时，条件范围包含 `<start>` 与 `<end>` 的值
- 而使用 `to` 时条件范围只包含 `<start>` 的值不包含 `<end>` 的值

另外，`$var` 可以是任何变量，比如 `$i`；`<start>` 和 `<end>` 必须是整数值：

```scss
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 2em * $i;
  }
}
```

编译为

```.css
.item-1 {
  width: 2em; }
.item-2 {
  width: 4em; }
.item-3 {
  width: 6em; }
```

#### 2.5.4 `@each`

`@each` 指令的格式是 `$var in <list>`, `$var` 可以是任何变量名，而 `<list>` 是一连串的值，也就是值列表。

`@each` 将变量 `$var` 作用于值列表中的每一个项目，然后输出结果，例如：

```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

编译为：

```.css
.puma-icon {
  background-image: url('/images/puma.png'); }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); }
.egret-icon {
  background-image: url('/images/egret.png'); }
.salamander-icon {
  background-image: url('/images/salamander.png'); }
```

##### 2.5.4.1 多重赋值

`@each` 指令还可以使用多个变量，如 `@each $var1，$var2...` 。如果是列表列表，则子列表的每个元素都分配给相应的变量。例如：

```scss
@each $animal, $color, $cursor in (puma, black, default), (sea-slug, blue, pointer), (egret, white, move) {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
    border: 2px solid $color;
    cursor: $cursor;
  }
}
```

编译为：

```.css
puma-icon {
  background-image: url('/images/puma.png');
  border: 2px solid black;
  cursor: default; }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png');
  border: 2px solid blue;
  cursor: pointer; }
.egret-icon {
  background-image: url('/images/egret.png');
  border: 2px solid white;
  cursor: move; }
```

由于映射被视为成对的列表，因此多重赋值也适用于它们。例如:

```scss
@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
  #{$header} {
    font-size: $size;
  }
}
```

编译为:

```.css
h1 {
  font-size: 2em; }
h2 {
  font-size: 1.5em; }
h3 {
  font-size: 1.2em; }
```

#### 2.5.5 `@while`

`@while` 指令重复输出格式直到表达式返回结果为 `false`。这样可以实现比 `@for` 更复杂的循环，只是很少会用到。例如：

```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} {
    width: 2em * $i;
  }
  $i: $i - 2;
}
```

编译为：

```.css
.item-6 {
  width: 12em; }

.item-4 {
  width: 8em; }

.item-2 {
  width: 4em; }
```

### 2.6 混合指令（Mixin Directives）

混合指令（Mixin）用于定义可重复使用的样式，避免了使用无语意的 class，比如 `.float-left`。混合指令可以包含所有的 CSS 规则，绝大部分 Sass 规则，甚至通过参数功能引入变量，输出多样化的样式。

#### 2.6.1 定义混合指令 `@mixin`

混合指令的用法是在 `@mixin` 后添加名称与样式，比如名为 `large-text` 的混合通过下面的代码定义：

```scss
@mixin large-text {
  font: {
    family: Arial;
    size: 20px;
    weight: bold;
  }
  color: #ff0000;
}
```

混合也需要包含选择器和属性，甚至可以用 `&` 引用父选择器：

```scss
@mixin clearfix {
  display: inline-block;
  &:after {
    content: '.';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  * html & {
    height: 1px;
  }
}
```

#### 2.6.2 引用混合样式 `@include`

使用 `@include` 指令引用混合样式，格式是在其后添加混合名称，以及需要的参数（可选）：

```scss
.page-title {
  @include large-text;
  padding: 4px;
  margin-top: 10px;
}
```

编译为:

```.css
.page-title {
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  color: #ff0000;
  padding: 4px;
  margin-top: 10px; }
```

也可以在最外层引用混合样式，不会直接定义属性，也不可以使用父选择器：

```scss
@mixin silly-links {
  a {
    color: blue;
    background-color: red;
  }
}
@include silly-links;
```

编译为:

```.css
a {
  color: blue;
  background-color: red; }
```

混合样式中也可以包含其他混合样式，比如

```scss
@mixin compound {
  @include highlighted-background;
  @include header-text;
}
@mixin highlighted-background {
  background-color: #fc0;
}
@mixin header-text {
  font-size: 20px;
}
```

> 混合样式中应该只定义后代选择器，这样可以安全的导入到文件的任何位置。

#### 2.6.3 参数（Arguments）

1. 参数用于给混合指令中的样式设定变量，并且赋值使用。在定义混合指令的时候，按照变量的格式，通过逗号分隔，将参数写进圆括号里。引用指令时，按照参数的顺序，再将所赋的值对应写进括号：

   ```scss
   @mixin sexy-border($color, $width) {
     border: {
       color: $color;
       width: $width;
       style: dashed;
     }
   }
   p {
     @include sexy-border(blue, 1in);
   }
   ```

   编译为:

   ```.css
   p {
     border-color: blue;
     border-width: 1in;
     border-style: dashed; }
   ```

2. 混合指令也可以**使用给变量赋值的方法给参数设定默认值**，然后，当这个指令被引用的时候，如果没有给参数赋值，则自动使用默认值：

   ```scss
   @mixin sexy-border($color, $width: 1in) {
     border: {
       color: $color;
       width: $width;
       style: dashed;
     }
   }
   p {
     @include sexy-border(blue);
   }
   h1 {
     @include sexy-border(blue, 2in);
   }
   ```

   编译为：

   ```.css
   p {
     border-color: blue;
     border-width: 1in;
     border-style: dashed; }

   h1 {
     border-color: blue;
     border-width: 2in;
     border-style: dashed; }
   ```

3. 混合指令也可以使用关键词参数，上面的例子也可以写成：

   ```scss
   p {
     @include sexy-border($color: blue);
   }
   h1 {
     @include sexy-border($color: blue, $width: 2in);
   }
   ```

   > 虽然不够简明，但是阅读起来会更方便。关键词参数给函数提供了更灵活的接口，以及容易调用的参数。关键词参数可以打乱顺序使用，如果使用默认值也可以省缺，另外，参数名被视为变量名，下划线、短横线可以互换使用。

##### 2.6.3.1 参数变量（Variable Arguments）

1. 有时，不能确定混合指令需要使用多少个参数，比如一个关于 `box-shadow` 的混合指令不能确定有多少个 'shadow' 会被用到。这时，可以使用参数变量 `...` 声明（写在参数的最后方）告诉 Sass 将这些参数视为值列表处理：

   ```scss
   @mixin box-shadow($shadows...) {
     -moz-box-shadow: $shadows;
     -webkit-box-shadow: $shadows;
     box-shadow: $shadows;
   }
   .shadows {
     @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
   }
   ```

   编译为:

   ```.css
   .shadowed {
     -moz-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
     -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
     box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
   }
   ```

2. 参数变量也可以用在引用混合指令的时候（`@include`），与平时用法一样，将一串值列表中的值逐条作为参数引用：

   ```scss
   @mixin colors($text, $background, $border) {
     color: $text;
     background-color: $background;
     border-color: $border;
   }
   $values: #ff0000, #00ff00, #0000ff;
   .primary {
     @include colors($values...);
   }
   ```

   编译为

   ```.css
   .primary {
     color: #ff0000;
     background-color: #00ff00;
     border-color: #0000ff;}
   ```

3. 可以使用变量参数包装 mixin 并添加其他样式，而不必更改 mixin 的参数签名。如果这样做，甚至关键字参数也会传递给包装的 mixin。例如：

   ```scss
   @mixin wrapped-stylish-mixin($args...) {
     font-weight: bold;
     @include stylish-mixin($args...);
   }
   .stylish {
     // $width 参数将作为关键字传递给 "stylish-mixin"
     @include wrapped-stylish-mixin(#00ff00, $width: 100px);
   }
   ```

#### 2.6.4 向混合样式中导入内容

在引用混合样式的时候，可以先将一段代码导入到混合指令中，然后再输出混合样式，额外导入的部分将出现在 `@content` 标志的地方：

```scss
@mixin apply-to-ie6-only {
  * html {
    @content;
  }
}
@include apply-to-ie6-only {
  #logo {
    background-image: url(/logo.gif);
  }
}
```

编译为：

```.css
* html #logo {
  background-image: url(/logo.gif);}
```

为便于书写，`@mixin` 可以用 `=` 表示，而 `@include` 可以用 `+` 表示，所以上面的例子可以写成：

```sass
=apply-to-ie6-only
  * html
    @content

+apply-to-ie6-only
  #logo
    background-image: url(/logo.gif)
```

> **注意**：当 `@content` 在指令中出现过多次或者出现在循环中时，额外的代码将被导入到每一个地方。

##### 2.6.4.1 可变范围和内容块

传递给 mixin 的内容块在定义块的范围内进行评估，而不是在 mixin 的范围内。这意味着 mixin 的局部变量不能在传递的样式块中使用，变量将解析为全局值：

```scss
$color: white;
@mixin colors($color: blue) {
  background-color: $color;
  @content;
  border-color: $color;
}
.colors {
  @include colors {
    color: $color;
  }
}
```

编译为：

```.css
.colors {
  background-color: blue;
  color: white;
  border-color: blue;}
```

另外，这很清楚地表明，在所传递的块中使用的变量和 mixin 与该块定义位置周围的其他样式相关。例如：

```scss
#sidebar {
  $sidebar-width: 300px;
  width: $sidebar-width;
  @include smartphone {
    width: $sidebar-width / 3;
  }
}
```

### 2.7 函数指令

Sass 支持自定义函数，并能在任何属性值或 SassScript 中使用：

```scss
$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar {
  width: grid-width(5);
}
```

编译为：

```.css
#sidebar {
  width: 240px; }
```

与 mixin 相同，也可以传递若干个全局变量给函数作为参数。一个函数可以含有多条语句，需要调用 `@return` 输出结果。

自定义的函数也可以使用关键词参数，上面的例子还可以这样写：

```scss
#sidebar {
  width: grid-width($n: 5);
}
```

> **建议**：在自定义函数前添加前缀避免命名冲突，其他人阅读代码时也会知道这不是 Sass 或者 CSS 的自带功能。

自定义函数与 mixin 相同，都支持 variable arguments。

### 2.8 输出格式（Output Style）

Sass 默认的 CSS 输出格式很美观也能清晰反映文档结构，为满足其他需求 Sass 也提供了多种输出格式。

Sass 提供了四种输出格式，可以通过 `:style option` 选项设定，或者在命令行中使用 `--style` 选项。

#### 2.8.1 `:nested`

Nested（嵌套）样式是 Sass 默认的输出格式，能够清晰反映 CSS 与 HTML 的结构关系。选择器与属性等单独占用一行，缩进量与 Sass 文件中一致，每行的缩进量反映了其在嵌套规则内的层数。当阅读大型 CSS 文件时，这种样式可以很容易地分析文件的主要结构。

```.css
#main {
  color: #fff;
  background-color: #000; }
  #main p {
    width: 10em; }

.huge {
  font-size: 10em;
  font-weight: bold;
  text-decoration: underline; }
```

#### 2.8.2 `:expanded`

Expanded 输出更像是手写的样式，选择器、属性等各占用一行，属性根据选择器缩进，而选择器不做任何缩进。

```css
#main {
  color: #fff;
  background-color: #000;
}
#main p {
  width: 10em;
}

.huge {
  font-size: 10em;
  font-weight: bold;
  text-decoration: underline;
}
```

#### 2.8.3 `:compact`

Compact 输出方式比起上面两种占用的空间更少，每条 CSS 规则只占一行，包含其下的所有属性。嵌套过的选择器在输出时没有空行，不嵌套的选择器会输出空白行作为分隔符。

```.css
#main { color: #fff; background-color: #000; }
#main p { width: 10em; }

.huge { font-size: 10em; font-weight: bold; text-decoration: underline; }
```

#### 2.8.4 `:compressed`

Compressed 输出方式删除所有无意义的空格、空白行、以及注释，力求将文件体积压缩到最小，同时也会做出其他调整，比如会自动替换占用空间最小的颜色表达方式。

```.css
#main{color:#fff;background-color:#000}#main p{width:10em}.huge{font-size:10em;font-weight:bold;text-decoration:underline}
```
