# Markdown

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Markdown](#markdown)
  - [一.Markdown 基本要素](#一markdown-基本要素)
    - [1.1 什么是 Markdown](#11-什么是-markdown)
  - [二. 语法说明](#二-语法说明)
    - [标题](#标题)
    - [强调](#强调)
    - [列表](#列表)
      - [无序列表](#无序列表)
      - [有序列表](#有序列表)
    - [定义型列表](#定义型列表)
    - [插入图片](#插入图片)
    - [链接](#链接)
    - [引用](#引用)
    - [注释](#注释)
    - [分割线](#分割线)
    - [行内代码](#行内代码)
    - [代码块](#代码块)
      - [代码块 class（MPA 扩展特性）](#代码块-classmpa-扩展特性)
    - [表格](#表格)
    - [目录列表(TOC)](#目录列表toc)
    - [todo list](#todo-list)
    - [序列图](#序列图)
    - [流程图](#流程图)
  - [三. markdown-preview-enhanced 插件扩展语法](#三-markdown-preview-enhanced-插件扩展语法)
    - [表格合并](#表格合并)
    - [Emoji And Font-Awesome](#emoji-and-font-awesome)
    - [上标](#上标)
    - [下标](#下标)
    - [注脚](#注脚)
    - [标记](#标记)
    - [导入外部文件](#导入外部文件)

<!-- /code_chunk_output -->

## 一.Markdown 基本要素

### 1.1 什么是 Markdown

Markdown 是一种文本格式。可以用它来控制文档的显示。使用 markdown，可以创建粗体的文字，斜体的文字，添加图片，并创建列表等等。基本上，Markdown 就是普通的文字加上 # 或者 \* 等符号。

## 二. 语法说明

### 标题

```markdown
# 这是 <h1> 一级标题

## 这是 <h2> 二级标题

### 这是 <h3> 三级标题

#### 这是 <h4> 四级标题

##### 这是 <h5> 五级标题

###### 这是 <h6> 六级标题
```

**MPE 扩展特性**: 如果想要给标题添加 id 或者 class，请在标题最后添加 {#id .class1 .class2}。例如：

```markdown
# 这个标题拥有 1 个 id {#my_id}

# 这个标题有 2 个 classes {.class1 .class2}
```

### 强调

_这是斜体的文字_
_这是斜体的文字_

**这是粗体的文字**
**这是粗体的文字**

_也可以 **组合** 这些符号_

~~这个文字会被删除线删除~~

### 列表

#### 无序列表

- item1
- item2
  - item2 a
  - item2 b

#### 有序列表

1. item1
2. item2
   1. item2 a
   2. item2 b

### 定义型列表

定义型列表由名词和解释组成。一行写定义，紧跟一行写解释。解释的写法 : 后紧跟一个空格

Markdown
: 轻量级文本标记语言，可以转换成 html，pdf 等格式（左侧有一个可见的冒号和一个空格）

代码块 2
: 这是代码块的定义（左侧有一个可见的冒号和一个空格）

### 插入图片

![GitHub logo](/public_knowledge/VSCode/image/sourcemap%20%E6%98%A0%E5%B0%84.webp)

### 链接

[GitHub](https://github.com)

全拼: [text][label]
折叠: [label][]
快捷: [label]

全拼: ![text][image]
折叠: ![image][]
快捷: ![image]

[label]: https://example.com/label
[image]: https://example.com/image

### 引用

引用可以多层嵌套，引用的区块内也可以使用其他的 Markdown 语法，包括标题、列表、代码区块等

> The world is like hell.
>
> 1. There is no God in the world
>
> > Hell is where God is not.

### 注释

[//]: # '注释'

HTML 风格的注释: <!-- notes -->

### 分割线

三个及以上的

- 连字符 `-`

- 星号 `*`

- 下划线 `_`

### 行内代码

`[a, b] = [b, a]`

### 代码块

在代码的上方和下方添加 ```，可以给代码块添加任何一种语言的语法高亮，如下：

```js
let a = 1,
  b = 2;
[a, b] = [b, a];
```

#### 代码块 class（MPA 扩展特性）

可以给代码块设置 class，达到特定的显示效果：

```js {.class1 .class2}
function add(x, y) {
  return x + y;
}
```

- 代码行数
  想要代码块显示代码行数，只要添加 line-numbers class 就可以了。

  ```js {.line-numbers}
  function ride(x, y) {
    return x * y;
  }
  ```

- 高亮代码行数
  可以通过添加 highlight 属性的方式来高亮代码行数

  ```markdown {highlight=[1,3,5]}
  javascript

  javascript

  javascript
  ```

### 表格

| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |

### 目录列表(TOC)

Markdown Preview Enhanced 支持在 markdown 文件中创建 TOC。
可以通过 `ctrl + shift + p` 然后选择 Markdown Preview Enhanced: Create Toc 命令来创建 TOC。

可以创建多个 TOC。 如果想要在 TOC 中排除一个标题，可以在标题后面添加 {ignore=true} 。

> **注意**：TOC 只会在 预览打开 并且 markdown 文件保存时更新。

**设置项**：

- orderedList：是否使用有序列表。
- depthFrom, depthTo：`[1~6]` 包含的。
- ignoreLink：如果设置为 true，那么 TOC 将不会被超链接。

也可以在 markdown 文件中输入 `[TOC]` 来创建 TOC。例如：

```markdown
[TOC]

# 标题 1
```

但是，这种方式创建的 TOC 只会在预览中显示，而不会修改 markdown 文件。

可以通过编写 front-matter 来进行设置 `[TOC]`：

```markdown
---
toc:
  depth_from: 1
  depth_to: 6
  ordered: false
---
```

### todo list

<!-- 待办列表: -->

- [x] 整理 Markdown 手册
- [x] 改善项目
  - [x] 优化首页显示方式
  - [x] 修复闪退问题
  - [x] 修复视频卡顿
- [x] 项目修复
  - [x] 修复数值错误

### 序列图

这一特性基于 [flowchart.js](https://bramp.github.io/js-sequence-diagrams/)

```sequence
# 注释样例
title: 验证密码
participant 客户端 as A
participant 服务端 as B
participant 通行证中心 as C
Note over A:用户输入通行证账号、密码
A->C: 发送账号、密码
Note over C:验证账号、密码
C-->>A:返回token
A->B:发送token
B->>C:验证token
C-->B:验证成功
B-->>A:登陆成功
Note over A,C: 三方通信
Note left of A:左边注释
B->B:自交互
Note right of C:右边注释
```

### 流程图

[流程图语法](https://github.com/adrai/flowchart.js)

```flow
st=>start: 开始
io=>inputoutput: 验证
op=>operation: 选项
cond=>condition: 是 或 否？
sub=>subroutine: 子程序
e=>end: 结束

st->io->op->cond
cond(yes)->e
cond(no)->sub->io
```

## 三. markdown-preview-enhanced 插件扩展语法

### 表格合并

> 需要在插件设置中打开 `enableExtendedTableSyntax` 选项来使其工作。

colspan ">" or 空单元格

| a   | b   |
| --- | --- |
| >   | 1   |
| 2   |     |

rowspan "^"

| a   | b   |
| --- | --- |
| 1   | 2   |
| ^   | 4   |

### Emoji And Font-Awesome

> 只适用于 markdown-it parser 而不适用于 pandoc parser。缺省下是启用的。可以在插件设置里禁用此功能。

:smile:
:fa-car:

### 上标

30^th^

### 下标

H~2~O

### 注脚

Content[^1]

[^1]: hello。

### 标记

==marked==

### 导入外部文件

```markdown
@import "文件路径"

<!-- @import "文件路径" -->
```

- 设置图片

```markdown
@import "test.png" {width="300px" height="200px" title="图片的标题" alt="我的 alt"}
```

- 引用 PDF 文件
  如果要引用 PDF 文件，需要事先安装好 [pdf2svg](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/extra)。 Markdown Preview Enhanced 支持引用本地或者在线的 PDF 文件。 但是，引用大的 PDF 文件是不推荐的。

- 强制渲染为代码块

```markdown
@import "test.js" {code_block=true class="line-numbers"}
@import "test.py" {class="line-numbers"}
```

- 导入特定行数

```markdown
@import "test.md" {line_begin=2}
@import "test.md" {line_begin=2 line_end=10}
@import "test.md" {line_end=-4}
```

- 插件中特有的 Front-matter
  可以通过 front-matter 来设置图片的保存路径以及输出路径。

```markdown
---

markdown:
image_dir: /assets
path: output.md
ignore_from_front_matter: true
absolute_image_path: false
export_on_save:
markdown: false

---
```

image_dir `可选`
定义了哪里将保存图片。例如，`/assets` 意味着所有的图片将会被保存到项目目录下的 `assets` 文件夹内。如果 `image_dir`。如果 `image_dir` 没有被定义，那么插件设置中的 `Image save folder path` 将会被使用。默认为 /assets。

path `可选`
定义了哪里输出 markdown 文件。如果 path 没有被定义，`filename_.md` 将会被使用。

ignore_from_front_matter `可选`
如果设置为 `false`，那么 markdown 将会被包含于导出的文件中的 front-matter 中。

absolute_image_path `可选`
是否使用绝对（相对于项目文件夹）图片路径。

export_on_save `可选`
设置是否自动保存
