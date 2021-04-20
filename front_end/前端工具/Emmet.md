---
title: Emmet
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Emmet](#emmet)
  - [一. 缩写](#一-缩写)
    - [1.1 语法](#11-语法)
      - [1.1.1 Elements 元素](#111-elements-元素)
      - [1.1.2 Nesting operators 嵌套操作符](#112-nesting-operators-嵌套操作符)
        - [1.1.2.1 `>` 子元素](#1121-子元素)
        - [1.1.2.2 `+` 兄弟元素](#1122-兄弟元素)
        - [1.1.2.3 `^` 返回上一层](#1123-返回上一层)
        - [1.1.2.4 `>` 操作符，加深结构层次](#1124-操作符加深结构层次)
        - [1.1.2.5 `*` 乘法](#1125-乘法)
        - [1.1.2.6 `()` 分组](#1126-分组)
      - [1.1.3 Attribute operators 属性操作符](#113-attribute-operators-属性操作符)
        - [1.1.3.1 ID and CLASS](#1131-id-and-class)
        - [1.1.3.2 自定义属性](#1132-自定义属性)
        - [1.1.3.3 `$` 编号](#1133-编号)
        - [1.1.3.4 `{}` 文本](#1134-文本)
      - [1.1.4 格式化缩写注意事项](#114-格式化缩写注意事项)
    - [1.2 元素类型](#12-元素类型)
      - [1.2.1 代码片断](#121-代码片断)
      - [1.2.2 缩写](#122-缩写)
      - [1.2.3 别名](#123-别名)
    - [1.3 隐式标签名](#13-隐式标签名)
      - [1.3.1 工作原理](#131-工作原理)
    - [1.4 “Lorem Ipsum” 生成器](#14-lorem-ipsum-生成器)
      - [1.4.1 重复假文](#141-重复假文)
  - [二. CSS 缩写](#二-css-缩写)
    - [2.1 工作原理](#21-工作原理)
      - [2.1.1 添加单位](#211-添加单位)
        - [2.1.1.1 单位别名](#2111-单位别名)
      - [2.1.2 颜色值](#212-颜色值)
      - [2.1.3 无单位属性](#213-无单位属性)
      - [2.1.4 !important](#214-important)
    - [2.2 厂商前缀](#22-厂商前缀)
      - [2.2.1 工作原理](#221-工作原理)
      - [2.2.2 默认添加厂商前缀](#222-默认添加厂商前缀)
      - [2.2.3 显式添加厂商前缀](#223-显式添加厂商前缀)
    - [2.4 渐变](#24-渐变)

<!-- /code_chunk_output -->

# Emmet

## 一. 缩写

缩写是 Emmet 的核心：这些特殊的表达式被实时的解析转化为代码块。缩写最适合于生成 HTML/XML，但是不限于此。

### 1.1 语法

Emmet 使用类似于 CSS 选择器的语法来描述元素的结构与属性。

#### 1.1.1 Elements 元素

使用元素的名字，比如 div、 p 来生成 HTML 标签。 Emmet 没有预定义标签集合，所以可以用任意单词来生成对应的标签： `div → <div></div>, foo → <foo></foo>`

#### 1.1.2 Nesting operators 嵌套操作符

嵌套运算符用于在生成的树中定位缩写元素：是否应将其放置在上下文元素内部或附近。

##### 1.1.2.1 `>` 子元素

可以使用 `>` 操作符将元素嵌套在彼此内部

```html
div>ul>li
```

展开为：

```html
<div>
  <ul>
    <li></li>
  </ul>
</div>
```

##### 1.1.2.2 `+` 兄弟元素

使用 `+` 运算符将元素彼此靠近放置在同一层级上：

```html
div+p+bq
```

展开为：

```html
<div></div>
<p></p>
<blockquote></blockquote>
```

##### 1.1.2.3 `^` 返回上一层

使用 `^` 操作符返回上一层：

```html
div+div>p>span+em^bq
```

展开为

```html
<div></div>
<div>
  <p><span></span><em></em></p>
  <blockquote></blockquote>
</div>
```

多个 `^` 连写将向上一层层返回：

```html
div+div>p>span+em^^^bq
```

展开为：

```html
<div></div>
<div>
  <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```

##### 1.1.2.4 `>` 操作符，加深结构层次

使用 `>` 操作符，将从生成的 DOM 树中加深结构层次，所有同级元素的位置将根据最深的元素进行解析：

```html
div+div>p>span+em
```

展开为：

```html
<div></div>
<div>
  <p><span></span><em></em></p>
</div>
```

##### 1.1.2.5 `*` 乘法

使用 `*` 运算符可以定义元素应输出的次数：

```html
ul>li*3
```

展开为

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

##### 1.1.2.6 `()` 分组

使用 `()` 来对复杂缩写中的子树进行分组。

可以将分组当作 Document Fragments，后续元素将与分组第一个元素同级。

```html
div>(header>ul>li*2>a)+footer>p
```

展开为

```html
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>
```

可以分组嵌套，并且使用 `*` 操作法：

```html
(div>dl>(dt+dd)*3)+footer>p
```

展开为

```html
<div>
  <dl>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
  </dl>
</div>
<footer>
  <p></p>
</footer>
```

> 注意：使用分组后，可以用一个缩写来生成整个页面，但不要这么做。

#### 1.1.3 Attribute operators 属性操作符

属性运算符用于修改输出元素的属性。例如，在 HTML 和 XML 中，可以快速地向生成的元素添加 `class` 属性。

##### 1.1.3.1 ID and CLASS

Emmet 使用类似于 CSS 选择器的语法给元素添加属性：

```html
div#header+div.page+div#footer.class1.class2.class3
```

展开为

```html
<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>
```

##### 1.1.3.2 自定义属性

可以使用 `[attr]` 表示法，向元素添加自定义属性：

```html
td[title="Hello world!" colspan=3]
```

展开为

```html
<td title="Hello world!" colspan="3"></td>
```

- 方括号内属性数量不限。
- 没有指定值的属性将生成插入占位（需要编辑器支持）。
- 属性值使用单引号或双引号。
- 属性值如果不包含空格可以省略引号。

##### 1.1.3.3 `$` 编号

`*` 操作符可以生成重复元素，而 `$` 可以对元素编号。将 `$` 放在元素名、属性名或属性值中：

```html
ul>li.item$*3
```

展开为

```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
</ul>
```

多个连写的 `$` 可以生成带有前导零的编号：

```html
ul>li.item$$$*3
```

展开为

```html
<ul>
  <li class="item001"></li>
  <li class="item002"></li>
  <li class="item003"></li>
</ul>
```

**改变基数和方向**
使用 `@` 修饰符，可以改变编号的方向（升序或降序）及起点。

- 改变方向，将 `@-` 放在 `$` 后：

  ```html
  ul>li.item$@-*3
  ```

  展开为

  ```html
  <ul>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
  </ul>
  ```

- 改变起点，将 `@N` 放在 `$` 后：

  ```html
  ul>li.item$@3*3
  ```

  展开为

  ```html
  <ul>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
  </ul>
  ```

- 混合使用这几种修饰符：

  ```html
  ul>li.item$@-3*3
  ```

  展开为

  ```html
  <ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
  </ul>
  ```

##### 1.1.3.4 `{}` 文本

使用大括号为元素添加文本

```html
span{Click me}
```

展开为

```html
<span href="">Click me</span>
```

> 注意 : {text} 类似于独立元素（比如 div, p），不过当它紧跟在元素后面时有特别的意义。比如 a{click} 与 a>{click} 结果一样，而 a{click}+b{here} 与 a>{click}+b{here} 结果不一样：

```html
<!-- a{click}+b{here} -->
<a href="">click</a><b>here</b>

<!-- a>{click}+b{here} -->
<a href="">click<b>here</b></a>
```

第二个例子里 `<b>` 位于 `<a>` 内。这便是不同点： 当 `{text}` 紧跟在元素后面时，它没有改变父元素的上下文。下面用一个复杂例子来说明：

```html
p>{Click }+a{here}+{ to continue}
```

展开为

```html
<p>Click <a href="">here</a> to continue</p>
```

在这个例子中，为了让 `<p>` 包含 Click here to continue，`p` 后面使用了 `>` 以进入子级结构，而 `a` 只需要包含文本 here，不用改变父元素上下文，所以不需要这样做。

下面不用 `>` 做下对比：

```html
p{Click }+a{here}+{ to continue}
```

展开为

```html
<p>Click</p>
<a href="">here</a> to continue
```

#### 1.1.4 格式化缩写注意事项

1. 不能在元素与操作符之间插入空格：
2. 缩写不是模板语言，不需要可读性，即写即用。
3. 没必要书写复杂的缩写。

### 1.2 元素类型

当编辑 HTML/XML 文档时，缩写展开为 HTML/XML 标签。不过一些元素，比如 a 或 img， 缩写展开后带有属性：`<a href=""></a>` 或 `<img src="" alt="" />`。Emmet 怎么知道何时添加这些属性？

Emmet 所有元素的定义放在 `snippets.json` 文件里，格式如下：

```json
{
  "html": {
    "abbreviations": {
      "a": "<a href=\"\">",
      "link": "<link rel=\"stylesheet\" href=\"\" />"
      // ...
    },
    "snippets": {
      "cc:ie6": "<!--[if lte IE 6]>\n\t${child}|\n<![endif]-->"
      // ...
    }
  },

  "css": {
    // ...
  }
}
```

第一级是元素所属语法名，其中元素定义分成两部分： 代码片断与缩写。

#### 1.2.1 代码片断

代码片断，同其它程序编辑器一样，是文本代码块，所见即所得，没有转化操作。

#### 1.2.2 缩写

缩写是带有数据提示的代码块。Emmet 主要用于编辑 HTML/XML，于是缩写的定义使用 XML 格式来描述元素。

Emmet 解析缩写的定义并获取下面数据：

- element name 元素名字;
- default attributes 默认属性;
- attributes’ order 属性顺序;
- attributes’ default values 属性默认值;
- should element contain closing tag 元素是否包含关闭标签.

拿上面的例子来说明。link 元素定义为 `<link rel="stylesheet" href="" />` （JSON 中需要转义双引号，或者用单引号）。这个定义的意思是，缩写 link 展开后元素带有两个属性：

- `rel` 默认值 `stylesheet`
- `href` 空值

它们的顺序依照定义，元素不包含关闭标签。展开结果

```html
<link rel="stylesheet" href="" />
```

**可以覆盖默认值或添加一个新属性**：

```html
link[rel=prefetch title="Hello world"]
```

展开为

```html
<link rel="prefetch" href="" title="Hello world" />
```

**也可以添加子元素，这将强制 Emmet 输出关闭标签**：

```html
link>xsl:apply-templates
```

展开为

```html
<link rel="stylesheet" href="">
    <xsl:apply-templates></xsl:apply-templates>
</link>
```

#### 1.2.3 别名

在 `snippets.json` 文件的缩写部分，可以定义别名，作用是：

- 给长标签名起一个短名字
- 引用常用的缩写

在 snippets.json 文件里可以看到：

```html
"html": { "abbreviations": { "bq": "blockquote"} }
```

### 1.3 隐式标签名

尽管可以利用强大的缩写引擎从简短的缩写展开大段的 HTML，但是书写标签仍然可能让人烦。

在许多情况下可以省略标签名，Emmet 会妥善处理。比如不写 `div.content` 而写 `.content`，可以展开为 `<div class="content"></div>`。

#### 1.3.1 工作原理

当展开缩写时，Emmet 尝试获取缩写所处位置的父元素上下文，比如 HTML 元素。如果获取成功，Emmet 使用它的名字来解析隐式标签名：

当展开隐式标签名时 Emmet 查找父元素标签名。下面是 Emmet 解析机制：

- li 在 ul 和 ol 后面
- tr 在 table, tbody, thead and tfoot 的后面
- td 在 tr 的后面
- option 在 select and optgroup 的后面

下面缩写隐式与显式标签名输出一致：

| 隐式缩写                    | 显示标签名                      |
| --------------------------- | ------------------------------- |
| `.wrap>.content`            | `div.wrap>div.content`          |
| `em>.info`                  | `em>span.info`                  |
| `ul>.item*3`                | `ul>li.item*3`                  |
| `table>#row$*4>[colspan=2]` | `table>tr#row$*4>td[colspan=2]` |

### 1.4 “Lorem Ipsum” 生成器

“Lorem ipsum” 假文，许多开发者用它来测试 HTML 模板填充数据后的样子。开发者常常用第三方服务来生成假文，不过现在在编辑器里就能做到，只用展开 lorem 或 lipsum ：

lorem 不是普通的代码片断——它是一个 **生成器**。每次展开将生成 30 字数的假文，分为几个句子。

可以指定字数。比如 lorem10 将生成 100 字数的假文。也可以使用 `*`。

#### 1.4.1 重复假文

在重复元素内使用 lorem 填充随机文本。比如 p\*4>lorem：

lorem 也能 解析隐式标签名。当只重复 lorem 时可以简化缩写：

```html
ul.generic-list>lorem10.item*4
```

展开为

```html
<ul class="generic-list">
  <li class="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.</li>
  <li class="item">Laboriosam quaerat sapiente minima nam minus similique illum architecto et!</li>
  <li class="item">Incidunt vitae quae facere ducimus nostrum aliquid dolorum veritatis dicta!</li>
  <li class="item">Tenetur laborum quod cum excepturi recusandae porro sint quas soluta!</li>
</ul>
```

## 二. CSS 缩写

对于 CSS, Emmet 有大量预定义的属性代码片断。

例如，展开缩写 m 得到 `margin: ;`。如果不只想得到 margin，可以这个属性**指定一个值**，比如说 10px。这里 Emmet 能大大优化工作流程：将值直接注入缩写。

```css
m10
/* 展开为 */
margin: 10px;
```

想要**多个值**，可以使用连字符分隔值：

```css
m10-20
/* 展开为 */
margin: 10px 20px;
```

**负值**，第一个值前放一个连字符，其它的值前放两个连字符。

```css
m-10--20
/* 展开为 */
margin: -10px -20px
```

### 2.1 工作原理

Emmet 使用特别的 CSS 解析器将缩写展开为完整的 CSS 属性。

下面是展开缩写 m10 的过程。

1. 首先在 `snippets.json` 里查找定义 m10 。如果找到了则将它作为普通的代码片断输出。否则从缩写里提取值。

   > 为了提供最好的用户体验，解析器没有引入专门的值分隔符：输入 `m5` 比 `m:5` 快得多。这样需要查找值界定：最先出现的数字或连字符作为值界定。对于 m10 来说，m 是属性，10 是值。

2. 当找到属性部分后，解析器在 `snippets.json` 里查找代码片断定义。对于 m , 找到定义 `"m": "margin:|;"`（`|` 是缩写展开后的插入符位置）。

   > 代码片断定义看着像 CSS 属性（这很重要！），这样 Emmet 能够将缩写分成属性与值两部分，并将转换后的值放到插入符的位置（由 `|` 指定）

#### 2.1.1 添加单位

- 当**展开整数值**时，Emmet 默认添加单位 `px`，例如 m10 → margin: 10px;。

- 如果是**展开浮点数值**，添加单位 `em`，例如 m1.5 → margin: 1.5em;。

不过可以显式地在值后面指定单位：m1.5ex → margin: 1.5ex;, m10foo → margin: 10foo;。

如果显式地指定单位，不再需要用连字号分隔值：

```css
m10ex20em
<!-- 展开为 -->
margin: 10ex 20em;

m10ex-5
<!-- 展开为 -->
margin: 10ex -5px;
```

##### 2.1.1.1 单位别名

常用单位别名：

- p → %
- e → em
- x → ex

#### 2.1.2 颜色值

Emmet 支持 16 进制颜色值，例如：c#3 → color: #333;。`#` 是值分隔符，所以不需要连字符。

例如，bd5#0s 展开为 border: 5px #000 solid，`#` 将颜色值与 5 隔开，既然 s ( solid 的别名) 不是 16 进制字符，就不需要用连字符。

可以写 1 个， 2 个，3 个或 6 个字符作为颜色值:

- #1 → #111111
- #e0 → #e0e0e0
- #fc0 → #ffcc00

#### 2.1.3 无单位属性

有些 CSS 属性无单位。例如： lh2 → line-height: 2;, fw400 → font-weight: 400;

#### 2.1.4 !important

在任意 CSS 缩写后面添加 `!`，将得到 `!important` 值：

```css
p!+m10e!
```

展开为

```css
padding: !important;
margin: 10em !important;
```

### 2.2 厂商前缀

新的 CSS3 特性是开发者的福音：几行代码可以做到几年前几乎做不到的事。但是同时也给我们带来一个问题：一个属性需要为不同的浏览器重复写几遍。

Emmet 的 CSS 解析器提供一个不错的功能，可以大大提高 CSS3 开发体验。**在属性前或缩写前放一个连字符**，Emmet 会自动给这个属性添加厂商前缀。例如：

```css
-bdrs
/* 展开为 */
-webkit-border-radius: ;
-moz-border-radius: ;
border-radius: ;
```

而且对于支持插入占位的编辑器（Eclipse, Sublime Text 2, Espresso 等），Emmet 将创建关联的属性值占位，输入一次将自动插入到所有生成的属性中。

#### 2.2.1 工作原理

缩写前放一个连字符，展开时，Emmet 移除连字符，然后在 snippets.json 里查找缩写的定义。例如 -bdrs 将查找 bdrs：

```json
"bdrs": "border-radius:|;"
```

`bdrs` 将展开为 `border-radius` 属性。如果没有找到定义，缩写将用作一个属性名。

当 CSS 解析器知道要输出属性名后，便在“厂商分类”中查找此属性名。这些分类在配置里由 `css.{vendor}Properties` 定义。`{vendor}` 是浏览器厂商前缀，比如 webkit, moz 等。

如果在厂商分类中找到了，这些厂商前缀将用于生成带前缀的属性。如果没找到则使用所有的前缀。

例如，属性 border-radius 在 css.webkitProperties 和 css.mozProperties 中有定义，这个属性输出时将带上前缀 webkit 和 moz。属性 foo 在所有分类中均没有定义，则展开缩写 -foo 时将带上所有前缀: webkit, moz, ms and o。这个功能在使用刚实现的 CSS 属性时特别有用。

#### 2.2.2 默认添加厂商前缀

一个 CSS3 属性如果没有厂商前缀可能就没用，这样书写带连字符的缩写不方便。

这便是 Emmet 为什么默认启用选项 `css.autoInsertVendorPrefixes`。当启用这个选项后，所有在厂商分类里定义的 CSS 属性将自动添加相应的厂商前缀。

这意味着不需要对已定义的 CSS 属性使用连字符去添加厂商前缀。例如展开 bdrs 或 trf，将得到一列带有厂商前缀的属性。

#### 2.2.3 显式添加厂商前缀

有时只想输出指定厂商前缀的 CSS 属性。

比如说输出属性 transform，只带有前缀 webkit 与 moz。在这种情况下展开下面缩写：

```css
-wm-trf
```

添加单字符的前缀列表可以修改缩写。这个例子中是 w (webkit) 和 m (moz)。Emmet 支持下面单字符前缀：

- w: webkit
- m: moz
- s: ms
- o: o

> 注意：目前的趋势是浏览器在实现新属性时不再使用厂商前缀，而是通过特性开关来启用。这样可以避免厂商前缀带来混乱。

### 2.4 渐变

另一个难写的 CSS3 特性是渐变，需要重复写几遍带有不同厂商前缀的属性。而且如果想覆盖所有支持渐变的浏览器，得使用三种写法：旧版 Webkit、当前支持的 (linear-gradient(top, ...)) 及 W3C 标准 (linear-gradient(to bottom, ...))。

Emmet 有一个 CSS3 渐变生成器可以做这些重活：

可以输入函数 `lg(...)` (或 `linear-gradient(...)`) 函数，并且像缩写一样展开。如果用做属性值，Emmet 将使用属性名来生成新的属性。
