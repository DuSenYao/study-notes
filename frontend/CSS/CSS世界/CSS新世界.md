# CSS 新世界

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [CSS 新世界](#css-新世界)
  - [一. 基础知识](#一-基础知识)
    - [1.1 互通互联的 CSS 数据类型](#11-互通互联的-css-数据类型)
      - [1.1.1 几个常见的数据类型](#111-几个常见的数据类型)
    - [1.2 CSS 属性值定义语法](#12-css-属性值定义语法)
      - [1.2.1 `/` 详解](#121--详解)
      - [1.2.2 其他符号介绍](#122-其他符号介绍)
    - [1.3 CSS 全局关键字属性值](#13-css-全局关键字属性值)
      - [1.3.1 inherit](#131-inherit)
      - [1.3.2 initial](#132-initial)
      - [1.3.3 unset](#133-unset)
      - [1.3.4 revert](#134-revert)
    - [1.4 指代所有 CSS 属性的 all 属性](#14-指代所有-css-属性的-all-属性)
  - [二. 增强已有的 CSS 属性](#二-增强已有的-css-属性)
    - [2.1 CSS 尺寸体系](#21-css-尺寸体系)
      - [2.1.1 fit-content](#211-fit-content)

<!-- /code_chunk_output -->

## 一. 基础知识

### 1.1 互通互联的 CSS 数据类型

CSS 数据类型定义的是 CSS 属性中具有代表性的值，在规范的语法格式中，使用关键字外加一对尖括号（"<"和">"）表示，例如数值类型是 `<number>`、色值类型是 `<color>` 等。

任何 CSS 属性值一定包含一个或多个数据类型。当 CSS 新属性出现的时候，无须记忆数量众多的属性值名称，只需要记住支持的数据类型即可。

如 background-image 是使用频率非常高的一个 CSS 属性，这个 CSS 属性的语法结构是下面这样的：

```txt
background-image: none | <image>
```

这个语法中出现的 `<image>` 就是一种数据类型，它包括下面这些类型和函数：

- `<url>`
- `<gradient>`
- `element()`
- `image()`
- `image-set()`
- `cross-fade()`
- `paint()`：它是 CSS Paint API 带来的新成员，相关规范在 2016 年开始制定。

也就是说，CSS 的 background-image() 属性不仅支持 url() 函数和渐变图像，还支持 element()、image()、image-set() 和 cross--fade() 等函数。

#### 1.1.1 几个常见的数据类型

CSS 数据类型非常多，至少有 50 个，这里介绍几个常见且值得一提的数据类型：

CSS Shapes 布局中有一个名为 shape-outside 的属性，只看这个 CSS 属性的语法：

```txt
shape-outside: none | <shape-box> | <basic-shape> | <image>
```

这里出现了 3 种不同的数据类型：

1. `<shape-box>` 支持的属性值如下：

   - `<box>`
   - `margin-box`

     在 CSS 世界中，需要用到 margin-box 的属性并不多，shape-outside 属性就是一个特例。虽然 `<shape-box>` 数据类型并不常用，但是 `<box>` 数据类型却很常见，`<box>` 数据类型包括下面这些属性值：

     - content-box
     - padding-box
     - border-box

     background-origin 和 background-clip 等 CSS 属性的属性值就是 `<box>` 数据类型。

2. `<basic-shape>` 支持的属性值如下：

   - `inset()`
   - `circle()`
   - `ellipse()`
   - `polygon()`
   - `path()`

   clip-path 和 offset-path 等 CSS 属性的属性值属于 `<basic-shape>` 数据类型。

3. `<image>` 支持的属性值如下：

   - `<url>`：用于表示使用 url() 函数调用的图像资源
   - `<gradient>`：用于表示渐变图像
   - `element()`
   - `image()`
   - `image-set()`
   - `cross-fade()`
   - `paint()`

   background-image 和 mask-image 等 CSS 属性的属性值属于 `<image>` 数据类型。

最后再介绍一下 `<color>` 数据类型，这个数据类型使用非常广泛，几乎所有带有 color 关键字的 CSS 属性都支持这个数据类型：

- `<rgb()>`
- `<rgba()>`
- `<hsl()>`
- `<hsla()>`
- `<hex-color>`
- `<named-color>`
- `currentColor`
- `<deprecated-system-color>`：废弃的系统颜色。

其他数据类型，要么比较简单，例如 `<number>`、`<percent>`等数据类型，指数值和百分比值；要么比较生僻且唯一，例如 `<quote>` 数据类型，指 content 属性中表示各类引号的关键字值，如 open-quote 和
close-quote 等。

更完整的 CSS 数据类型，可以参考[《CSS 值类型文档大全》](https://www.zhangxinxu.com/wordpress/2019/11/css-value-type/)

### 1.2 CSS 属性值定义语法

CSS 属性值有专门的定义语法，用来表示 CSS 属性值的合法组成。例如，线性渐变的语法为：

```txt
linear-gradient([<angle> | to <side-or-comer>,]?<color-stop-list>)
```

CSS 属性值定义语法是专门用来限定 CSS 属性合法取值的语法，这种语法包含以下 3 种基本组成元素：

- 关键字
- 数据类型
- 符号

线性渐变的语法就包含上面这 3 种基本组成元素：

- `to` 是关键字
- `<angle>`、`<side-or-corner>`和`<color-stop-list>`是数据类型
- `[]` `?` `,` 是符号

1. **关键字**

   关键字分为通用关键字和全局关键字：

   - auto、none、ease 等关键字是通用关键字，或者可以称为普通关键字，这些关键字均只被部分 CSS 属性支持；
   - inherit、initial、unset 和 revert 是[全局关键字](#13-css-全局关键字属性值)，属于被所有 CSS 属性支持的特殊关键字。

2. **数据类型**

   数据类型外面有一对尖括号（“<”和“>”）。有些数据类型是 CSS 规范中专门定义的，它们被称为基本类型，其他数据类型就被称其他类型。

3. **符号**

   符号是 CSS 语法中的重点和难点。

   CSS 语法中的符号分为字面符号、组合符号和数量符号这 3 类，

   1. **字面符号**指的是 CSS 属性值中原本就支持的合法符号，这些符号在 CSS 语法中会按照其原本的字面意义呈现。目前字面符号就两个，一个是逗号（`，`），另一个是斜杠（`/`）。

      | 符号 | 名称       | 描述                                                                                                    |
      | ---- | ---------- | ------------------------------------------------------------------------------------------------------- |
      | `.`  | 并列分隔符 | 用来分隔数个并列值，或者分隔函数的参数值                                                                |
      | `/`  | 缩写分隔符 | 用来分隔一个值的多个部分，在 CSS 缩写中用于分离类型相同但属于不同 CSS 属性的值，以及用在部分 CSS 函数中 |

   2. **组合符号**用来表示数个基本元素之间的组合关系。目前共有 5 个组合符号，其中大多数组合符号的含义一目了然，除了 `|` 这个组合符号。因为 `|` 表示互斥，这在编程语言中比较少见。
      （表中从上往下组合符号的优先级越来越高）。

      | 符号 | 名称       | 描述                                                                 |
      | ---- | ---------- | -------------------------------------------------------------------- | ---------------------- |
      |      | 并列       | 符号为普通空格字符，表示各部分必须出现，同时需要按顺序出现           |
      | `&&` | ”与”组合符 | 各部分必须出现，但可以不按顺序出现                                   |
      | `‖`  | “或”组合符 | 各部分至少出现一个，可以不按顺序出现                                 |
      | `|`          | “互斥”组合符                                                         | 各部分恰好出现其中一个 |
      | `[]` | 方括号     | 将各部分进行分组以绕过上面几个符号的优先规则，因此方括号的优先级最高 |

   3. **数量符号**用来描述一个元素可以出现多少次，数量符号不能叠加出现，并且优先级高于组合符号。目前共有 6 个数量符号，大多数的数量符号的含义和在正则表达式中的含义是一样的。

      | 符号    | 名称     | 描述                                                           |
      | ------- | -------- | -------------------------------------------------------------- |
      |         | 无数量符 | 恰好出现一次                                                   |
      | `*`     | 星号     | 可以出现任意次数                                               |
      | `+`     | 加号     | 可以出现一次或多次                                             |
      | `?`     | 问号     | 可以出现零次或者一次，也就是该元素可有可无                     |
      | `{A,B}` | 花括号   | 出现最少 A 次，最多 B 次                                       |
      | `#`     | 井号     | 可以出现一次或多次，但多次出现时必须以逗号分隔                 |
      | `!`     | 叹号     | 表示当前分组必须产生一个值，该符号多出现在组合符号方括号的后面 |

#### 1.2.1 `/` 详解

在 CSS 这门语言中，凡是出现斜杠(`/`)的地方，斜杠前后的数据类型一定是相同或者部分相同的，否则整个语句就是非法的。

例如，background 属性值中需要使用斜杠分隔的两个属性一定是 background-position 和 background-size，因为只有这两个属性的值的类型相似，且都可以使用百分比值表示。这样就会出现很有趣的现象，像下面这样的 CSS 语句是合法的：

```css
/* 合法 */
background: 0/0;
```

但是下面这个看上去合法的缩写却是非法的：

```css
/* 不合法 */
background: #eee url(/images/1.png) no-repeat / contain;
```

因为斜杠前面的值 no-repeat 属于 background-repeat 属性，斜杠后面的值 contain 属于 background-size 属性，而 background-repeat 的属性值的类型绝不可能和 background-size 的属性值的类型一致，这不符合斜杠前后数据类型至少部分相同的要求，所以这条语句是非法的。

background 缩写语法中斜杠前面只能是 background-position 的属性值，上面的 CSS 语句要想合法，可以把 background-position 属性的初始值 0 0 写上：

```css
/* 合法 */
background: #eee url(/images/1.png) no-repeat 0 0 / contain;
```

又如，font 属性的斜杠前后一定是 font-size 的属性值和 line-height 的属性值，因为两者都可以使用 px 长度单位值。例如：

```css
.example {
  font 16px /1.5 sans-serif,
}
```

斜杠这个符号除了出现在部分 CSS 的缩写语法中，还会出现在一些 CSS 函数中用来表示分隔，例如 rgba() 函数的语法：

```txt
<rgba()> = rgba(<percentage>{3}[/<alpha-value>]?)
          | rgba(<number>{3}[/<alpha-value>]?)
          | rgba(<percentage>#{3},<alpha-value>?)
          | rgba(<number>#{3},<alpha-value>?)
```

从上面的语法可以看出 rgba() 函数也是支持斜杠的，因此，下面的属性值都是合法的：

```css
/* 合法 */
rgba(100% 0% 0% / .5);
rgba(255 0 0 / .5);
```

#### 1.2.2 其他符号介绍

1. “或”组合符（`‖`）

   `‖` 在 CSS 语法中很常见，例如 border 属性的语法：

   ```txt
   border: <line-width> ‖ <line-style> ‖ <color>
   ```

   这一语法表示 border 属性的 3 个值的顺序是随机的，组合也是随机的。

2. 叹号（`!`）

   `!` 在 image() 函数中出现过：

   ```txt
   <image()> = image(<image-tags>?[<image-src>?,<color>?]!)
   ```

   这一语法表示 `<image-src>` 数据类型和 `<color>` 数据类型至少出现一个，当然，两者也可以同时出现。

3. 其他数量符号和“与”组合符（`&&`）。还有井号（`#`）、星号（`*`）、花括号（{A,B}）等数量符号和"与”组合符（&&）没有介绍，这里用 box-shadow 属性的语法加以说明，如下：

   ```txt
   box-shadow: none | <shadow>#
   ```

   等同于：

   ```txt
   box-shadow: none | [<shadow>,]*
   ```

   或可写成：

   ```txt
   box-shadow: none | [inset?&&<length>{2,4}&&<color>?]#
   ```

   其中出现的 `&&`，表明 inset 关键字、`<length>` 数据类型和 `<color>` 数据类型的顺序是可以随意排列的，所以下面这几种写法都是合法的：

   ```css
   .example {
     box-shadow: 2px 2px inset #000;
     box-shadow: inset #000 2px 2px;
     box-shadow: #000 2px 2px inset;
   }
   ```

### 1.3 CSS 全局关键字属性值

inherit、initial、unset 和 revert 都是 CSS 全局关键字属性值，也就是说所有 CSS 属性都可以使用这几个关键字作为属性值。

#### 1.3.1 inherit

`inherit` 这个关键字是**继承**的意思。inherit 是一个实用性和兼容性俱佳的 CSS 属性值，例如用 inherit 关键字重置输入框的内置字体：

```css
input,
textarea {
  font-family: inherit;
}
```

又如，子元素设置 `height:inherit` 实现高度继承，或者子元素设置 `background-image:inherit` 实现背景图像继承等，这些都是非常实用的场景。

#### 1.3.2 initial

**`initial` 是初始值关键字，可以把当前的 CSS 属性的计算值还原成 CSS 语法中规定的初始值**。

initial 关键字适合用在需要重置某些 CSS 样式，但又不记得初始值的场景。initial 关键字还可以帮助了解 CSS 属性的初始值。例如，display 属性的初始值是什么 MDN 文档就没有明说，那就可
以设置 display:initial 看一下效果：

```css
p {
  display: initial;
}
```

结果 p 元素垂直方向的 margin 和 text-indent 属性都失效了，这些失效现象是典型的内联元素特性，因此，display 属性的初始值是 inline。

**可能的误区**
很多人有这样一个误区：把 initial 关键字理解为浏览器设置的元素的初始值。实际上两者是不一样的。

举个例子，实际开发的时候，`<u>` 元素或 `<ol>` 元素默认的 list-style-type 样式会被 CSS 重置。但是可能会遇到这样的场景，即某些区域需要增加一些描述信息，因此需要重新使用 list-style-type 样式（小圆点或者数字），此时有些开发者就会使用 initial 关键字对该样式进行还原：

```css
ol {
  padding: initial;
  list-style-type: initial;
}
```

但是没有用！因为上面的 CSS 设置等同于下面的设置：

```css
ol {
  padding: 0;
  list-style-type: disc;
}
```

而不是预想的：

```css
ol {
  padding: 0 0 0 40px;
  list-style-type: decimal;
}
```

此时需要的全局关键字属性值其实是 revert，而不是 initial。

#### 1.3.3 unset

`unset` 是不固定值关键字，其特性如下：

- 如果当前使用的 CSS 属性是具有继承特性的，如 color 属性，则等同于使用 `inherit` 关键字。
- 如果当前使用的 CSS 属性是没有继承特性的，如 packground-color，则等同于使用 `initial` 关键字。

unset 这个关键字只有配合 `all` 属性使用才有意义，因为对于某个具体的 CSS 属性，想要继承某个属性，那就使用 inherit 关键字；想要使用初始值，那就使用 initial 关键字，没有任何理由使用 unset:关键字。

举个例子，Chrome 浏览器支持 HTML5.1 规范中的 `<dialog>` 元素，自然会想到借助这个 `<dialog>` 元素实现语义更好的弹框组件。然而有一个问题，这个 `<dialog>` 元素内置了很多不需要的样式，但是又不想一个属性接一个属性地进行重置，这时就可以先使用 `all: unset` 进行批量重置，再设置需要的 CSS 属性：

```css
dialog {
  all: unset;
  /* ... */
}
```

#### 1.3.4 revert

revert 关键字可以让当前元素的样式还原成浏览器内置的样式。例如：

```css
ol {
  padding: revert;
  list-style-type: revert;
}
```

那么 `<ol>` 中的每一个 `<li>` 项都会有数字效果呈现，当然，前提是没有对子元素 `<li>` 的 list-style-type 属性做过样式重置。

### 1.4 指代所有 CSS 属性的 all 属性

all 属性可以重置除 unicode-bidi、directionL 以及 CSS 自定义属性以外的所有 CSS 属性。

all 属性的语法如下：

```txt
all: initial | inherit | unset | revert
```

从 all 的语法中可看出，只能使用 inherit、initial、unset 和 revert 中的一个值作为属性值。

`all: inherit` 没有任何实用价值，`all: initial` 也没有任何实用价值。有实用价值的是 `all: unset` 和 `all:revert`。`all: unset` 可以让任意一个元素样式表现和 `<span>` 元素一样。 `all:revert` 可以让元素恢复成浏览器默认的样式，也是很有用的。

例如，`<progress>` 进度条效果在 iOS 端很好看，很有质感，那么无须对其自定义样式，就可以使用 all:revert 将进度条一键还原成系统默认的样式：

```css
/* 仅iOS Safari有效*/
@supports (-webkit-overflow-scrolling: touch) {
  progress {
    all: revert;
  }
}
```

## 二. 增强已有的 CSS 属性

### 2.1 CSS 尺寸体系

在 CSS2.1 中，CSS 中的尺寸概念都隐藏在具体的 CSS 用法中。例如，display:inline-block、float:left 和 position:absolute 等 CSS 声明带来的 "shrink-to-fit" 收缩；white-space:nowrap; 带来的 "最大内容宽度”；连续英文字符的宽度溢出其实是因为 “最小内容宽度”。

不过从 CSS3 开始，以前很多模糊的概念有了明确的定义，并且这些明确的定义有与之相匹配的 CSS 属性或 CSS 属性值。这种变化的优点很明显，那就是不需要再去理解 CSS 属性背后隐藏的含义和特性，知识变得更表层、更浅显了。

如果用一个金字塔来表示尺寸体系，那么在最上层的概念就是：

- **Intrinsic Sizing**：被称为 “内在尺寸”，表示元素最终的尺寸表现是由内容决定的。
- **Extrinsic Sizing**：被称为 “外在尺寸”，表示元素最终的尺寸表现是由上下文决定的。

CSS 属性新增了 4 个与尺寸概念相匹配的关键字：

- `fit-content`
- `fill-available`
- `min-content`
- `max-content`

#### 2.1.1 fit-content

`fit-content` 关键字是新的尺寸体系关键字中使用频率最高的关键字。可以把 fit-content 关键字的尺寸表现想象成 “紧身裤”，大腿肉对应的就是元素里面的内容，如果是宽松的裤子，那肉眼所见的尺寸就比较大，但是如果是紧身裤，则呈现的尺寸就是大腿实际的尺寸。同样，元素应用 fit-content 关键字就像给元素里面的内容穿上了超薄紧身裤，此时元素的尺寸就是里面内容的尺寸。

实际上，fit-content 关键字的样式表现就是 CSS2.1 规范中的 "shrink-to-fit”，称其为"包裹性”。这种尺寸表现和元素应用 display:inline-block、position:absolute 等 CSS 声明类似，尺寸收缩但不会超出包含块级元素的尺寸限制。

举个例子：[一段文字，字数少的时候居中显示，字数多的时候左对齐显示](https://demo.cssworld.cn/new/3/1-1.php)：

```css
/* 传统实现 display: table */
.cw-content {
  display: table;
  margin: auto;
}

/* fit-content 实现 */
.cw-content {
  width: fit-content;
  margin: auto;
}
```

使用 fit-content 关键字有两大优点：

1. 保护了元素原始的 display 计算值，例如 `<li>` 元素要是设置成了 display: table，前面的项目符号就不会出现，::marker 伪元素也会失效。

2. 让元素的尺寸有了确定的值，这是 fit-content 关键字最重要也最可贵的优点。

   CSS 中有不少布局需要有明确的元素的尺寸才能实现，非常典型的例子就是绝对定位元素使用 margin:auto 实现居中效果时需要设置具体的 width 或 height 的属性值，CSS 代码如下：

```css
.cw-dialog {
  width: 300px;
  height: 200px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: solid;
}
```

但是，很多时候绝对定位元素的尺寸是不固定的，最终的尺寸会根据内容自动变化，此时上面的 CSS 代码就不适合，很多人会想到使用 transform 属性进行偏移：

```css
.cw-dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  border: solid;
  transform: translate(-50%, -50%);
}
```

这是一种不错的方法，但并不完美，而且这个方法占用了 transform 属性，这会导致绝对定位元素无法使用包含 transform() 属性的动画效果。例如，现在项目中有一个整站通用的体验增强的位移小动画：

```css
@keyframes tinyUp {
  from {
    transform: translateY(5px);
  }
  to {
    transform: translateY(0);
  }
}
```

.cw-dialog 元素就没办法使用这个名为 tinyUp 的位移小动画，因为 CSS 动画关键航中的 CSS 语句的优先级最高，会干扰原本设置的 transform 偏移值。

```css
.cw-dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  border: solid;
  /* transform 会被 animation 动画干扰 */
  transform: translate(-50%, -50%);
  animation: tinyUp 0.2s;
}
```

还有更好的方式，就是[使用 fit-content 关键字](https://demo.cssworld.cn/new/3/1-2.php)：，例如：

```css
.cw-dialog {
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: solid;
  animation: tinyUp 0.2s;
}
```

此时元素尺寸自适应，同时完全居中，不用担心包括 transform() 属性的动画带来的冲突。
