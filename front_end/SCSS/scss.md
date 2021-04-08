---
title: scss
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

# SCSS

## 一. 介绍

Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了**变量 (variables)**、**嵌套 (nested rules)**、**混合 (mixins)**、**导入 (inline imports)** 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。

1. **特色功能 (Features)**

   - 完全兼容 CSS3
   - 在 CSS 基础上增加变量、嵌套 (nesting)、混合 (mixins) 等功能
   - 通过函数进行颜色值与属性值的运算
   - 提供控制指令 (control directives)等高级功能
   - 自定义输出格式

2. 语法格式 (Syntax)

Sass 有两种语法格式。首先是 SCSS (Sassy CSS) —— 也是本文示例所使用的格式 —— 这种格式仅在 CSS3 语法的基础上进行拓展，所有 CSS3 语法在 SCSS 中都是通用的，同时加入 Sass 的特色功能。此外，SCSS 也支持大多数 CSS hacks 写法以及浏览器前缀写法 (vendor-specific syntax)，以及早期的 IE 滤镜写法。这种格式以 `.scss` 作为拓展名。

另一种也是最早的 Sass 语法格式，被称为缩进格式 (Indented Sass) 通常简称 "Sass"，是一种简化格式。它使用 “缩进” 代替 “花括号” 表示属性属于某个选择器，用 “换行” 代替 “分号” 分隔属性，很多人认为这样做比 SCSS 更容易阅读，书写也更快速。缩进格式也可以使用 Sass 的全部功能，只是与 SCSS 相比个别地方采取了不同的表达方式，具体请查看 [the indented syntax reference](https://sass-lang.com/documentation/syntax)。这种格式以 `.sass` 作为拓展名。

任何一种格式可以直接 [导入 (@import)]<!--TODO--> 到另一种格式中使用，或者通过 `sass-convert` 命令行工具转换成另一种格式：

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

##### 1.2.1.1 命令行编译配置选项\*\*

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

### 2.1 CSS 功能拓展 (CSS Extensions)

#### 2.1.1 嵌套规则 (Nested Rules)

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

```.scss
#main {
  width: 97%;

  p, div {
    font-size: 2em;
    a { font-weight: bold; }
  }

  pre { font-size: 3em; }
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

在嵌套 CSS 规则时，有时也需要直接使用嵌套外层的父选择器，例如，当给某个元素设定 `hover` 样式时，或者当 body 元素有某个 `classname` 时，可以用 `&` 代表嵌套规则外层的父选择器。

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

**`&` 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器**，例如

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

#### 2.1.3 属性嵌套 (Nested Properties)

有些 CSS 属性遵循相同的命名空间 (namespace)，比如 `font-family`, `font-size`, `font-weight` 都以 `font` 作为属性的命名空间。为了便于管理这样的属性，同时也为了避免了重复输入，Sass 允许将属性嵌套在命名空间中，例如：

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

Sass 额外提供了一种特殊类型的选择器：**占位符选择器** (placeholder selector)。与常用的 id 与 class 选择器写法相似，只是 `#` 或 `.` 替换成了 `%`。必须通过 `@extend` 指令调用，更多介绍请查阅 [@extend-Only Selectors]<!--TODO-->。

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

编译为:

```.css
/* This CSS is generated by My Snazzy Framework version 1.2.3. */
```

### 2.3 SassScript

在 CSS 属性的基础上 Sass 提供了一些名为 SassScript 的新功能。 **SassScript 可作用于任何属性，允许属性使用变量、算数运算等额外功能**。

通过 interpolation，SassScript 甚至可以生成选择器或属性名，这一点对编写 mixin 有很大帮助。

#### 2.3.1  Interactive Shell

Interactive Shell 可以在命令行中测试 SassScript 的功能。在命令行中输入 `sass -i`，然后输入想要测试的 SassScript 查看输出结果：

```sh
$ sass -i
>> "Hello, Sassy World!"
"Hello, Sassy World!"
>> 1px + 1px + 1px
3px
```
