# 现代 Web 布局

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [现代 Web 布局](#现代-web-布局)
  - [一. 技术术语](#一-技术术语)
    - [1.1 Web 坐标轴](#11-web-坐标轴)
    - [1.2 容器和容器空间](#12-容器和容器空间)
    - [1.3 间距](#13-间距)
    - [1.4 书写模式](#14-书写模式)
    - [1.5 逻辑属性](#15-逻辑属性)
    - [1.6 对齐方式](#16-对齐方式)
  - [二. Flex 布局](#二-flex-布局)

<!-- /code_chunk_output -->

## 一. 技术术语

### 1.1 Web 坐标轴

在 Web 中，默认原点是给定上下文的左上角，也就是元素盒子的左上角，它分为 x 轴（也称为水平轴），向右为正值，向左为负值；y 轴（垂直轴），向上为负值，向下为正值：

![Web坐标轴](./image/Web%E5%9D%90%E6%A0%87%E8%BD%B4.webp)

事实上，除了平面画布中的 x 和 y 轴之外，还有控制第三维度的 z 轴。比如使用 CSS 的 transform 绘制 3D 图形或使用第三维度从前往后对对象进行分层：

![Web 坐标轴 z 轴](./image/Web%E5%9D%90%E6%A0%87%E8%BD%B4z%E8%BD%B4.webp)

也会在定位元素（显式使用 position 属性值为非 static 的元素）上使用 z-index 控制其层叠的顺序（z 轴上的层叠顺序），它表示的是用户与屏幕的这条看不见的垂直线。

这只是最初的坐标系的定义。随着 CSS 的逻辑属性出现，CSS 的坐标系也随之改变。增加了**内联轴**（Inline Axis）和**块轴**（Block Axis）。

在 CSS 中，每个元素都是一个盒子，默认情况之下，盒子会根据元素类型分为块盒子（比如块元素 div）和内联盒子（比如 span）。其中块盒会在垂直方向从上往下堆叠，内联盒子将会按照书写方式从左往右排列。当 `writing-mode`（书写方式）改变时，块盒子和内联盒子也会有相应的变化。

简而言之，**块元素遵循流方向，内联元素遵循写入方向**：

![流方向和写入方向](./image/%E6%B5%81%E6%96%B9%E5%90%91%E5%92%8C%E5%86%99%E5%85%A5%E6%96%B9%E5%90%91.webp)

如此一来，在 CSS 中就有**物理坐标系**和**逻辑坐标系**之分，它们的对应关系如下：

| 物理属性       | 逻辑属性（horizontal-tb） | 逻辑属性（vertical-lr） | 逻辑属性（vertical-rl） |
| -------------- | ------------------------- | ----------------------- | ----------------------- |
| x 轴（水平轴） | Inline 轴（内联轴）       | Block 轴（块轴）        | Block 轴（块轴）        |
| y 轴（垂直轴） | Block 轴（块轴）          | Inline 轴（内联轴）     | Inline 轴（内联轴）     |

### 1.2 容器和容器空间

HTML 的每一个元素在 CSS 中都是一个盒子，这个盒子又被称为**容器** 。只不过，这个容器会随着盒子的类型不同，容器的称呼也会有不同。它主要由 CSS 的 display 属性的值来决定，比如：

- **block**：块容器
- **inline**：内联容器
- **flex 或 inline-flex**：Flexbox 容器
- **grid 或 inline-grid**：Grid 容器（网格容器）

不管是什么类型的容器，它都有空间。只不过这个空间的大小是由 CSS 盒模型相关的属性来决定的：

![ CSS 盒模型相关的属性](./image/CSS%20%E7%9B%92%E6%A8%A1%E5%9E%8B%E7%9B%B8%E5%85%B3%E7%9A%84%E5%B1%9E%E6%80%A7.webp)

只不过，Web 开发者习惯性以 `width`、`height`、`min-_` 或 `max-_` 以及它们对应的逻辑属性来显式指定一个容器空间的大小：

![CSS盒模型物理属性对应的逻辑属性](./image/CSS%E7%9B%92%E6%A8%A1%E5%9E%8B%E7%89%A9%E7%90%86%E5%B1%9E%E6%80%A7%E5%AF%B9%E5%BA%94%E7%9A%84%E9%80%BB%E8%BE%91%E5%B1%9E%E6%80%A7.webp)

而且容器大小计算方式也会受 CSS 的 box-sizing 属性的值影响：

![box-sizing 影响容器大小计算方式](./image/box-sizing%20%E5%BD%B1%E5%93%8D%E5%AE%B9%E5%99%A8%E5%A4%A7%E5%B0%8F%E8%AE%A1%E7%AE%97%E6%96%B9%E5%BC%8F.webp)

每个容器中都有可能会放置内容（文本内容或其他元素），随着容器中放置的内容多少，可能会造成指定大小的容器无法容纳嵌套的内容，造成内容溢出（超出指定容器的大小）；也有可能放置的内容较少，无法填充满整个容器。

按此呈现模式，每个容器的大小（空间）又有**可用空间**（剩余空间）和**不可用空间**（不足空间）：

![容器的可用空间和不可用空间](./image/%E5%AE%B9%E5%99%A8%E7%9A%84%E5%8F%AF%E7%94%A8%E7%A9%BA%E9%97%B4%E5%92%8C%E4%B8%8D%E5%8F%AF%E7%94%A8%E7%A9%BA%E9%97%B4.webp)

### 1.3 间距

Web 是由很多个元素堆叠而成的，为了让 Web 页面给用户提供更好的体验，Web 设计师在设计时，会根据美学相关的理论来设计元素与元素之间，元素内容与元素盒子边缘之间的间距。

在 Web 布局中，常常使用 CSS 的 margin、padding 和 gap 三个属性来设置间距。不同的是：

- 元素与元素之间的间距一般采用 margin 或 gap 属性来设置，也常称为**外距**。
- 元素内容与元素框边缘之间的间距一般采用 padding 来设置，也常称为**内距**。

> **注意**：CSS 中的 margin 和 gap 表现形式是有较大差异的。因为 margin 有垂直合并（在当前文档流方向相垂直的方向上）。

### 1.4 书写模式

世界上有很多种语言，不同的语系，它们的书写模式（阅读模式）是有差异的：

- **拉丁语体系**：从左往右，比如英语、西班牙语、德语、法语等
- **阿拉伯语体系**：从右往左，比如阿拉伯语、希伯来语等
- **汉语体系**：有两种方式，有可能是从左往右，也有从上向往下，比如中文、日文、韩文等。

正因为语言的书写方式不同，在 Web 中呈现不同语系时，CSS 中的块（Block）和内联（Inline）表现的方式也会不同。

在 Web 布局中，尤其是针对多语言的 Web 布局，可以通过一下属性来控制：

- HTML 元素的 `dir` 属性
- CSS 的 `direction` 属性来控制书写模式

  - ltr（Left-To-Right，从左往右）
  - rtl（Right-To-Left，从右往左）

- CSS 的 `writing-mode` 属性

正因为语系不同书写模式不同，也将造成 CSS 中布局相关属性最终呈现给用户的效果有所差异，比如 Flexbox 中的 flex-direction 属性，CSS Box Alignment 模块中的属性以及 Grid 布局等。

### 1.5 逻辑属性

CSS 中有很多属性和值是遵循 TRBL（Top、Right、Bottom 和 Left）模式的，比如，元素位置会映射到 top、right、bottom 和 left，除此之外，像 border、margin、padding 和 border-radius 等属性的子属性也会映射到 TRBL 上，如 margin-top、margin-right、margin-bottom 和 margin-lef。它们带有明确的方向性。只不过，针对多语言布局时，它给布局带来很大的局限性，需要额外的处理：

```css
.thumb {
    margin-right: 1rem;
}
​
[dir="rtl"] .thumb {
    margin-left: 1rem;
}
```

为了解决类似的问题，2017 年 5 月 18 日，W3C 的 CSS 工作组（CSS Working Group） 发布了 [CSS 逻辑属性和值](https://www.w3.org/TR/css-logical-1/#intro)（CSS Logical Properties and Values Level 1） 的首份工作草案（First Public Working Draft）。

在这个模块中并没有方向性的概念，只有开始（**start**）、结束（**end**）、块（**block**）和内联（**inline**）的概念。这样一来，在从左到右的（ltr）中，start 对应的是 left ，但在从右到左（rtl）中，start 对应的是 right 。也就是说，逻辑属性更易于适应不同的书写模式。

逻辑属性出现之后，很多 CSS 属性和属性值也随之有了变化，在原有的物理属性的基础上映射了一份逻辑属性。尤其是 CSS 的盒模型相关的属性（比如 `width`、`height`、`min-_`、`max-_`、`border`、`margin`、`padding`）、定位位移相关的属性（比如 top、right、bottom 和 left）、排版方面的（比如 float 属性的值 left 和 right）以及圆角 border-radius 等：

![物理属性与逻辑属性的对应关系](./image/%E7%89%A9%E7%90%86%E5%B1%9E%E6%80%A7%E4%B8%8E%E9%80%BB%E8%BE%91%E5%B1%9E%E6%80%A7%E7%9A%84%E5%AF%B9%E5%BA%94%E5%85%B3%E7%B3%BB.webp)

而且映射关系与 CSS 的 `writing-mode` 属性值也有关系，对应关系如下图所示：

![物理属性与逻辑属性、书写方式的映射关系](./image/%E7%89%A9%E7%90%86%E5%B1%9E%E6%80%A7%E4%B8%8E%E9%80%BB%E8%BE%91%E5%B1%9E%E6%80%A7%E3%80%81%E4%B9%A6%E5%86%99%E6%96%B9%E5%BC%8F%E7%9A%84%E6%98%A0%E5%B0%84%E5%85%B3%E7%B3%BB.webp)

有了逻辑属性之后，构建多语言 Web 的布局就要方便得多：

```css
.thumb {
  margin-inline-end: 1rem;
}
```

### 1.6 对齐方式

这里所说的对齐方式指的是 [CSS Box Alignment 模块](https://www.w3.org/TR/css-align-3/)，该模块的出现可以说改善了 CSS 中非常有限的对齐能力。在以往，控制对齐方式主要是依赖于 CSS 的 text-align（水平方向文本对齐）和 vertical-align（垂直方向文本对齐）两个属性，对于块的对齐方式主要依赖于 float 属性。它们是无法满足 Web 布局中的对齐控制。

随着 CSS Flexbox 特性出现之后，CSS 新增了像 justify-content、align-content、align-items、justify-items 和 justify-self 以及 align-self 等属性，用来控制 Web 布局上的对齐方式。最初这些属性是在 Flexbox 相关规范中定义的，但随着 CSS Grid 布局出现之后，W3C 的 CSS 工作组将这些属性单独划分到一个模块中，即 CSS Box Alignment 模块。

> **注意**：CSS Box Alignment 模块中的属性同时可以运用于 CSS Flexbox 和 CSS Grid 布局中，在运用于 CSS Flexbox 和 CSS Grid 布局中时略有差异。

## 二. Flex 布局

Flexbox 布局是一种布局机制，用于在一个维度上为项目组设置布局。**可以明确地指明容器空间的分布方式、内容对齐和元素的视觉顺序**。可以轻易地实现横向或纵向布局，还可以沿着一个轴布局，或折断成多行。

另外，使用 Flexbox 布局还可以让 Web 内容的渲染不再受 HTML 文档源码顺序的限制。然而，这只是视觉上的调整，Flexbox 模块中的相关属性并不会改变屏幕阅读器对内容的读取顺序。

和以往的 Web 布局技术相比，Flexbox 布局所涉及的概念更多、更复杂，如下图所示：

![FlexibleBoxLayout](./image/FlexibleBoxLayout.webp)

### 2.1 FlexBox 中的术语与概念

![FlexBox术语](./image/FlexBox%E6%9C%AF%E8%AF%AD.webp)

#### 2.1.1 Flex 容器与项目

- **Flex 容器**

  简单地说，HTML 上的大多数元素都可以是 Flex 容器，比如 div、ul、main 块元素，span、em 这样的内联元素。只需要在 HTML 元素上显式设置 display 的值为 flex 或 inline-flex 即可。

  > **注意**：HTML 中的可替代元素是无法成为 Flex 容器的，比如 img、input、select 等元素。

- **Flex 项目**

  当一个元素变成了 Flex 容器之后，它的子元素，包括其伪元素 ::before、::after 和文本节点都将成为 **Flex 项目**。

  **在 Flexbox 布局中，Flex 容器和 Flex 项目之间的关系永远是父子关系**。因此，Flex 项目也可以是它的子元素的 Flex 容器，即显式地在 Flex 项目设置 display 属性值为 flex 或 inline-flex ，该 Flex 项目就成为一个 Flex 容器，而它的子元素就成为 Flex 项目。但它将是一个单独的 Flex 容器，它不会继承祖辈的 Flex 容器上的属性（Flexbox 属性）。

#### 2.1.2 主轴和侧轴

在 Flexbox 中，Flex 容器内有两个轴，而且这两个轴只存在于 Flex 容器中：

- **主轴**（Main Axis）
- **侧轴**（Cross Axis）

Flexbox 中的主轴由 flex-direction 属性设置，默认情况下，主轴沿行方向（内联轴 Inline Axis）分布，如果该属性为 column，则主轴沿列方向（块轴 Block Axis）分布：

![Flexbox 中的主轴和侧轴](./image/Flexbox%20%E4%B8%AD%E7%9A%84%E4%B8%BB%E8%BD%B4%E5%92%8C%E4%BE%A7%E8%BD%B4.webp)

> **注意**：Flexbox 布局中的主轴、主方向、侧轴和侧方向不是固定不变的，它们会随着 writing-mode（书写模式）和 direction（阅读方向）而改变。

- **主轴和侧轴的起点终点**

  在 Flexbox 布局中，不管是主轴还是侧轴，都有方向性。既然有方向，就有起点和终点之分。Flex 容器中的每根轴又有**主轴起点**、**主轴终点**、**侧轴起点**和**侧轴终点**之分。而且每根轴的起点和终点是由 flex-direction 和 writing-mode（或 direction）来决定的。

  ![主轴和侧轴的起点终点](./image/%E4%B8%BB%E8%BD%B4%E5%92%8C%E4%BE%A7%E8%BD%B4%E7%9A%84%E8%B5%B7%E7%82%B9%E7%BB%88%E7%82%B9.webp)

- **主轴和侧轴尺寸**

  Flexbox 布局中的 Flex 容器和 Flex 项目是元素，它们有大小。对于 Flex 容器而言，它有：

  - **主轴尺寸**：指主轴起点到终点之间的距离
  - **侧轴尺寸**：指侧轴起点到终点之间的距离

  主轴尺寸和侧轴尺寸可以用来决定一个 Flex 容器的大小。但它们并不完全等同于 Flex 容器的宽高。这是因为 flex-direction 和 writing-mode 或 direction 属性值不同时，用于描述 Flex 容器的物理属性 width 和 height 有可能会互换的。比如：

  - `flex-direction` 为 row ，且书写模式和阅读模式是 LTR 时，主轴的尺寸对应的就是 Flex 容器的宽度，侧轴的尺寸对应的则是 Flex 容器的高度。
  - `flex-direction` 为 column ，且书写模式和阅读模式是 LTR 时，主轴的尺寸对应的就是 Flex 容器的高度，侧轴的尺寸对应的则是 Flex 容器的宽度。

  ![主轴尺寸和侧轴尺寸](./image/%E4%B8%BB%E8%BD%B4%E5%B0%BA%E5%AF%B8%E5%92%8C%E4%BE%A7%E8%BD%B4%E5%B0%BA%E5%AF%B8.webp)

  可以在 Flex 容器上显式使用 CSS 的物理属性 width 和 height，或使用 CSS 的逻辑属性 inline-size 和 block-size 设置 Flex 容器主轴和侧轴的尺寸，也可以使用 `min-_` 和 `max-_` 对 Flex 容器主轴和侧轴的尺寸加以限制。

  ![CSS盒模型物理属性对应的逻辑属性](./image/CSS%E7%9B%92%E6%A8%A1%E5%9E%8B%E7%89%A9%E7%90%86%E5%B1%9E%E6%80%A7%E5%AF%B9%E5%BA%94%E7%9A%84%E9%80%BB%E8%BE%91%E5%B1%9E%E6%80%A7.webp)

  如果没有显式给 Flex 容器设置尺寸，则会根据所有 Flex 项目的大小来决定，或根据 Flex 容器的父容器来决定。

  Flexbox 布局中有一个强大的特性，当 Flex 容器有剩余空间时：

  - 可以使用主轴的对齐方式 `justify-content` 来分配主轴的剩余空间
  - 可以使用侧轴的对齐方式 `align-content` 来分配侧轴的剩余空间

  也可以使用 flex 属性中的 `flex-grow` 按比例因子来扩展 Flex 项目的尺寸；当 Flex 容器是不足空间，可以使用 flex 属性中的 `flex-shrink` 按比例因子来对 Flex 项目进行收缩。这个计算在 Flexbox 布局中是复杂的，而且会涉及一定的数学计算。

### 2.2 Flexbox 布局模块相关特性

Flexbox 布局的属性分为两个部分：

- 用于 Flex 容器的属性

  ![用于Flex容器的属性](./image/%E7%94%A8%E4%BA%8EFlex%E5%AE%B9%E5%99%A8%E7%9A%84%E5%B1%9E%E6%80%A7.webp)

- 用于 Flex 项目的属性

  ![用于Flex项目的属性](./image/%E7%94%A8%E4%BA%8EFlex%E9%A1%B9%E7%9B%AE%E7%9A%84%E5%B1%9E%E6%80%A7.webp)

#### 2.2.1 Flex 项目排序

如果仅是单独对某个（或某几个）Flex 项目重新排序的话，可以使用 `order` 属性。此属性可用于对有序组中的项目进行排序。项目按照 flex-direction 指定的方向排列，最小值在最前面。如果多个项目具有相同的值，它将与具有该值的其他项目一起显示（按其在源码文档的顺序排列）。

order 初始值是 0，可以是正值，也可以是负值，属性值越大，越排在主轴的后面，反之越在主轴的前面。

> **注意**：order 在使用时对 Web 可访问性是不友好的。尽量不要使用，因为需要修复文档中的乱序问题。

### 2.3 Flex 布局中的对齐方式

Flexbox 布局中提供了多个用于对齐 Flex 项目以及 Flex 项目之间分配空间的属性。

这些属性可以分为两组：

- **空间分配属性**

  - **justify-content**：沿 Flex 容器的主轴分配 Flex 容器的剩余空间
  - **align-content**：沿 Flex 容器的侧轴分配 Flex 容器的剩余空间（只有当 flex-wrap 属性的值为非 nowrap 时才能生效）
  - **place-content**：justify-content 和 align-content 的简写属性

- **对齐属性**

  - **align-self**：沿 Flex 容器侧轴对齐单个 Flex 项目
  - **align-items**：将所有 Flex 项目作为一个组，沿 Flex 容器侧轴对齐。

`justify-` 开头的属性主要用于 Flex 容器的主轴方向；`align-` 开头的属性主要用于 Flex 容器侧轴方向；`-items` 结尾的属性主要用于对齐 Flex 项目，`-self` 结尾的属性主要用于 Flex 项目的自对齐，`-content` 结尾的属性主要用于容器空间分配。

| -                          | 主轴（`justify-*`） | 侧轴（`align-*`） |
| -------------------------- | ------------------- | ----------------- |
| 对齐 Flex 项目（`-items`） | ~~justify-items~~   | align-items       |
| Flex 项目自对齐（`-self`） | ~~justify-self~~    | align-self        |
| 空间分配（`*-content`）    | justify-content     | align-content     |

> **注意**：在 Flexbox 布局中是没有 justify-self 属性的，它是 Grid 布局中的。

在 Flex 布局对齐方式中有以下注意事项：

- Flex 项目彼此相邻。由于 Flexbox 是一个单维布局，因此 Flex 项目要么按行对齐，要么按列对齐（默认为行对齐）。并且 Flex 项目换行之后，也是在自己所在行的主轴方向上排列。

- 默认情况下，Flex 项目在侧轴上会被拉伸伸展，因为 Flex 容器 `align-items` 属性的默认值为 stretch。

- 当 align-self 碰上了 align-content 属性时，只有 align-content 属性值为 stretch 时，align-self 属性的值才有效。

- 在 Flex 项目上使用 margin: auto，会致使 Flex 项目上的 align-self 属性失效。

#### 2.3.1 Flex 中的溢出对齐

使用 CSS 来构建 Web 布局时，有一个最大的目标，即**保持 Web 页面的内容和元素对访问者（用户）是可见的**。容器会根据其内容自动扩展到右侧或底部。当内容溢出时，容器变为可滚动的，用户可以滚动来访问“不可见的内容”。除非在容器上使用 overflow:hidden。

但在 Flexbox 布局中，却无法保证这一点。当容器没有足够多的空间来容纳 Flex 项目的内容时，就会出现“数据丢失”的情况。在这种情况下，就需要使用到 [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/#overflow-values)（仍处于草案状态）定义**安全对齐**（在溢出情况下更改对齐模式，以避免数据丢失）。

给对齐属性新增了 `safe` 和 `unsafe` 两个关键词：

- `safe`：关键字会将因为对齐方式导致溢出时，将设置的对齐模式切换到 start 对齐模式下，目的是避免“数据丢失”，其中部分项目超出对齐容器的边界并且无法滚动到。
- `unsafe`：即使会导致此类数据丢失，也会遵守对齐方式。

### 2.4 flex 属性

Flexbox 的设计目的是在包含元素（Flex 容器）中沿着行或列分配元素（Flex 项目）和空间。而它的最大特性就是 Flex 项目可伸缩。而这一切都依赖于 `flex` 属性来完成。

一个 Flex 容器会按照各个 Flex 项目的扩展比率分配 Flex 容器剩余空间，也会按照收缩比率来收缩 Flex 项目，以免 Flex 项目溢出 Flex 容器。

#### 2.4.1 Flexbox 中的分配空间

首先浏览器必须**确定有多少空间可用**。一般情况，浏览器会按照下面的过程来分配空间：

- **计算 Flex 容器内的可用空间**

  ```txt
  Flex 容器的可用空间  = 主轴尺寸 - 内距 - 边框宽度 - 间距 - Flex 项目的外边距
  ```

- **计算每个 Flex 项目的伸缩基础大小和假设的主尺寸**

  即使用 `flex-basis`、`min-width`、`min-inline-size`、`width`、`inline-size` 或 Flex 项目内容大小（`min-content` 或 `max-content`）设定的大小。其中 `flex-basis` 是 Flex 项目所需的最小尺寸，假设的主尺寸是指应用伸缩因子之前 Flex 项目的尺寸。而且 Flex 项目的伸缩基础大小永远不会小于其内容的伸缩基础大小。

- **计算所有 Flex 项目的总假设主尺寸**

- **将所有 Flex 项目的假想主尺寸与 Flex 容器的可用空间进行比较**。当所有 Flex 项目的假想主尺寸总和大于 Flex 容器可用空间时，将会使用 `flex-shrink` 属性值作为 Flex 项目的收缩因子（收缩比率）来收缩 Flex 项目；当所有 Flex 项目的假想主尺寸总和小于 Flex 容器可用空间时，将会使用 `flex-grow` 属性值作为 Flex 项目的扩展因子（扩展比率）来扩展 Flex 项目。

也就是说，使用 Flexbox 布局时，浏览器会使用伸缩因子决定从每个 Flex 项目中增加或减去 Flex 容器的剩余空间，并且浏览器在循环中完成每个 Flex 项目的计算。

> 浏览器还会将确定的尺寸看作是 Flex 项目的已知尺寸。当一个 Flex 项目具有一定的尺寸时，它被认为是一个非弹性的 Flex 项目。没有明确尺寸的 Flex 项目则被认为是灵活的 Flex 项目。

#### 2.4.2 flex 基础使用

`flex` 是一个只能用于 Flex 项目的属性，它可以让 Flex 项目根据 Flex 容器的可用空间对自身做伸缩计算，包含三个子属性：

- `flex-grow`：初始值为 0，表示 Flex 项目不扩展
- `flex-shrink`：初始值为 1，表示 Flex 项目会收缩
- `flex-basis`：初始值为 auto，表示 Flex 项目的基本尺寸是 Flex 项目的最大内容尺寸（即 max-content）。

可以使用一个，两个或三个值来指定 flex 属性：

- **单值语法**：值必须为以下其中之一

  - 一个无单位的数值（number）：它会被当作 `flex-grow` 的值
  - 一个有效的宽度（width）值：它会被当作 `flex-basis` 的值
  - 关键字

    - initial（默认值）
    - `auto`：元素会根据自身的宽度与高度来确定尺寸，但是会伸长并吸收 flex 容器中额外的自由空间，也会缩短自身来适应 flex 容器。这相当于将属性设置为 "flex: 1 1 auto"。

    - `none`：元素会根据自身宽高来设置尺寸。它是完全非弹性的：既不会缩短，也不会伸长来适应 flex 容器。相当于将属性设置为"flex: 0 0 auto"。

- **双值语法**：第一个值必须为一个无单位数，并且它会被当作 `flex-grow` 的值。第二个值必须为以下之一：

  - 一个无单位数：它会被当作 `flex-shrink` 的值
  - 一个有效的宽度值：它会被当作 `flex-basis` 的值

- **三值语法**

  - 第一个值必须为一个无单位数，并且它会被当作 `flex-grow` 的值。
  - 第二个值必须为一个无单位数，并且它会被当作 `flex-shrink` 的值。
  - 第三个值必须为一个有效的宽度值，并且它会被当作 `flex-basis` 的值。

## 三. Grid 布局

Grid 布局指的是 CSS Grid Layout，**它是一个基于二维网格的布局系统**，与过去任何 Web 布局系统相比，它完全改变了设计用户界面的方式。它还具有以下这些特性：

- **固定的和弹性的轨道（行或列）尺寸**
  可以使用固定的轨道尺寸创建网格，比如 px，也可以使用百分比 % 或者网格系统中独有的弹性单位 fr 创建具有弹性尺寸的网格轨道，也可以两者相互结合来创建网格。

- **网格项目放置**
  可以使用网格线的数字索引号，或网格线名称，或者网格区域来精确放置网格项目。网格同时还使用一种算法来控制未给出明确网格位置的网格项目。

- **创建额外的网格轨道来放置网格项目**
  可以使用网格布局定义一个显式网格，但根据规范它会处理加在网格外的内容，当必要时它会自增网格轨道，来尽可能多地容纳所有网格项目。

- **对齐控制**
  网格布局系统中也涵盖了对齐（Box Alignment）模块的部分特性，便于控制网格项目或网格轨道在内联轴或块轴方向的对齐。

- **控制层叠内容**
  一个网格单元或网格区域中可以放置多个网格项目，并且它们可以部分相互重叠，而且可以通过 z-index 属性来控制它的层级权重。

- **网格的嵌套（或子网格）**
  网格布局和早期的表格布局非常的相似，在网格布局中还可以让网格与网格相互嵌套，甚至还可以使用子网格。

- **网格顺序**
  在网格布局中，除了通过网格线或网格区域来调整网格顺序之外，还可以像 Flexbox 布局中一样，使用 order 属性来调整网格项目的排列顺序。

### 3.1 网格布局术语

网格布局的出现，同时也给布局方面带来一堆新的技术术语。其中最为主要的原因是 Grid 布局才是真正意义上的 Web 布局。

#### 3.1.1 坐标轴

在 CSS 的网格布局中，主要以：

- **块轴**
  块方向的轴是采用块布局时块的排序方向。在 CSS 网格布局系统中，它被称为**列轴**（Column），因为这条轴的方向和列轨道的方向是一致的。

- **内联轴**
  行方向的轴与块方向的轴垂直，它的方向和普通文本的方向一致。在 CSS 网格布局中，很多时候也被称为**行轴**（Row），因为这条轴的方向和行轨道是一致的。

#### 3.1.2 网格容器和网格项目

在 CSS 的网格布局中，显式声明了 `display` 属性的值为 `grid` 或 `inline-grid` 的元素被称为**网格容器**（Grid 容器），该元素的直接子元素（包括其文本节点和伪元素）都被称为**网格项目**（Grid 项目）。

在网格项目上显式设置 display 的值为 grid 或 inline-grid ，它就既是一个网格容器也是一个网格项目。

> **注意**：默认情况下，设置 display 的值为 grid 或 inline-grid 时，就会自动创建一个 1 x N 的网格（一列 N 行的网格），其中 N 由网格容器的子元素、文本节点和伪元素决定。

#### 3.1.3 网格线

CSS 的网格是一组相交的**水平（行）**和**垂直（列）**的网格线组成，它将网格容器的空间划分为网格区域（最小的网格区域就是一个独立的网格单元格），可以将网格项目放入其中。可以说，网格线是网格布局中很重要的部分，它主要分为：

- **列网格线**：一组定义沿块轴（Block Axis）运行的列
- **行网格线**：一组定义沿内联轴（Inline Axis）运行的行

这两组网格线成正交的模式。这两组网格线也是构成网格结构的分界线，可以是水平的，也可以是垂直的。它们可以是位于行或列的任何一边。

![网格线](./image/%E7%BD%91%E6%A0%BC%E7%BA%BF.webp)

CSS 网格布局中的网格线可以用数字索引（如上图中的数字）或开发者指定的名称来表示。比如下面这个示例，左侧的示例使用网格线来定位一个网格项；右侧的示例使用显式命名的网格线来定位一个网格项：

![网格线示例](./image/%E7%BD%91%E6%A0%BC%E7%BA%BF%E7%A4%BA%E4%BE%8B.webp)

网格布局中未显式给网格线命名的情况下，默认是以数字索引号命名，并且从 1 开始叠加，同时它的反方向则从 -1 开发中命名。其默认索引号会受 CSS 的书写模式 writing-mode 影响，但不受 direction 属性的影响。

而且，网格线的数量是由网格轨道来决定的：

- 列网格线数量由 `grid-template-columns` 来决定
- 行网格线数量由 `grid-template-rows` 来决定

> **注意**：使用 `grid-template-columns`、`grid-template-rows` 以及 `grid-template-areas` 属性定义的网格线名称，都被称为显式网格线名称。也就是说，在 CSS 网格中还有隐式被命名的网格线名称。可以使用 `grid-row`、`grid-column` 或 `grid-area` 将网格项目放置在显式网格之外时创建的网格线，被称为隐式网格线名称，它们会在显式网格线上累加。

#### 3.1.4 网格单元格

网格中**相邻的两条行和列网格线所围绕着的区域，被称为网格单元格**，它是网格中的最基本单位（空间）。网格单元格可以被用来放置网格项目。如下图所示，行网格线 1 和 2 ，列网格线 1 和 2 相交构建的区域就是一个网格单元格（图中斜线区域）：

![网格单元格](./image/%E7%BD%91%E6%A0%BC%E5%8D%95%E5%85%83%E6%A0%BC.webp)

#### 3.1.5 网格轨道

网格轨道是 CSS Grid 布局中独有的一种术语，把**网格中的列和行统称为网格轨道**。它是两条相邻网格线之间的空间。每个网格轨道都有一个尺寸，它控制着网格的列宽或行高，从而控制着它的边界网格线（相邻两条网格线）之间的距离，这个网格距离也称为**网格轨道尺寸**。另外，相邻网格线可以用网格沟槽（即 gap 属性）来隔开，但在其他情况下，会被紧紧地贴在一起。

![网格轨道](./image/%E7%BD%91%E6%A0%BC%E8%BD%A8%E9%81%93.webp)

Grid 布局中的网格轨道尺寸是由 `grid-template-columns` 和 `grid-template-rows` 属性来指定的，其中：

- `grid-template-columns` 指定列网格轨道尺寸，即列宽
- `grid-template-rows` 指定行网格轨道尺寸，即行高

另外，还可以使用 `grid-auto-columns` 和 `grid-auto-rows` 属性来指定隐式网格轨道尺寸：

- `grid-auto-columns` 指定隐式列网格轨道尺寸
- `grid-auto-rows` 指定隐式行网格轨道尺寸

#### 3.1.6 网格区域
