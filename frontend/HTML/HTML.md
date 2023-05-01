# HTML 超文本标记语言

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [HTML 超文本标记语言](#-html-超文本标记语言)
  - [一. 标签](#-一-标签)
    - [1.1 语义类标签](#-11-语义类标签)
      - [1.1.1 使用场景](#-111-使用场景)
      - [1.1.2 语义标签种类](#-112-语义标签种类)
    - [1.2 元信息类标签](#-12-元信息类标签)
      - [1.2.1 head 标签](#-121-head-标签)
      - [1.2.2 title 标签](#-122-title-标签)
      - [1.2.3 base 标签](#-123-base-标签)
      - [1.2.4 meta 标签](#-124-meta-标签)
    - [1.3 链接](#-13-链接)
      - [1.3.1 link 标签](#-131-link-标签)
        - [1.3.1.1 超链接类 link 标签](#-1311-超链接类-link-标签)
        - [1.3.1.2 外部资源类 link 标签](#-1312-外部资源类-link-标签)

<!-- /code_chunk_output -->

---

HTML 这样的语言，被称为 "文本标记语言"，它是纯文本的一种升级，"标记" 一词的概念来自：编辑审稿时使用不同颜色笔所做的标记。

HTML 是用 SGML 标记语言来设计的，严格来说，HTML 是 SGML 中规定的一种格式，但是，实际上没有任何一个浏览器是用 SGML 引擎来解析 HTML 的。SGML 留给 HTML 的重要遗产有两个：**基本语法**和 **DTD**。

## 一. 标签

### 1.1 语义类标签

语义就是说话表达的意思，多数的语义实际上是由文字来承载的。语义类标签则是纯文字的补充，比如：标题、自然段、章节、列表，这些内容都是纯文字无法表达的，需要语义类标签代为表达。

> 语义类标签的特点是视觉表现上互相都差不多，主要的区别在于它们表达了不同的语义，比如：section、nav、p 等。

**优点**：

- 语义类标签对开发者更为友好，使用语义类标签增强了可读性，即便是在没有 CSS 的时候，也能清晰的看出网页的结构，也更便于团队的开发和维护。
- 语义类标签十分适合机器阅读。它的文字表现力丰富，更适合搜索引擎检索（SEO），也可以使搜索引擎爬虫更好地获取更多有效信息，有效提升网页的搜索量，并且语义类还可以支持读屏软件，根据文章可以自动生成目录等。

> **注意**：错误地使用语义标签，会给机器阅读造成混淆、增加嵌套，给 CSS 编写加重负担等问题。

#### 1.1.1 使用场景

1. **自然语言和纯文本的补充，用来表达一定的结构或消除歧义**

   1. 表达一定的结构
      在日语中，有一个语法现象叫做：ルビ，它的读音是 ruby（著名的 ruby 语言就是据此命名的），它的中文意思类似于注音或意思的注解。在 HTML5 中，就引入了 ruby 标签，它由 ruby、rt、rp 三个标签来实现。

      [语义类标签 行 13](./examples/语义类标签.html)

   2. 消除歧义

      一句话放到不同的上下文，可能表达不同的意思。当没有上下文时，如何消除歧义？需要用到 `em` 标签。em 表示重音。

2. **文章标题摘要**

   文章的结构，小说中有 "部-章" 的概念。HTML 语义标签中，有不少是用于支持这样的结构的标签。语义化的 HTML 能够支持自动生成目录结构，HTML 标准中专门规定了生成目录结构的算法。

   一篇文章会有一个树形的目录结构，它由各个级别的标题组成。这个树形结构可能不会跟 HTML 元素的嵌套关系一致。

   h1-h6 是最基本的标题，它们表示了文章中不同层级的标题。有些时候，会有副标题，为了避免副标题产生额外的一个层级，可以使用 `hgroup` 标签（仅仅是语义上的差别）。

   在 HTML5 中，有 `section` 标签，这个标签不仅仅是一个 "有语义的 div"，它会改变 h1-h6 的语义。`section` 的嵌套会使其中的 h1-h6 下降一级，因此，在 HTML5 以后，只需要 `section` 和 `h1` 就足以形成文档的树形结构。

   [语义类标签 行 20](./examples/语义类标签.html)

3. **作为整体结构**

   越来越多的浏览器推出 "阅读模式"，以及各种非浏览器终端的出现，语义化的 HTML 适合机器阅读的特性变得越来越重要。

   应用了语义化结构的页面，可以明确的提示出页面信息的主次关系，它能让浏览器很好的支持 "阅读视图功能"，还可以让搜索引擎的命中率提升，同时，它也对视障用户的读屏软件更友好。正确使用整体结构类的语义标签，可以让页面对机器更友好。

#### 1.1.2 语义标签种类

- **nav**：定义导航链接的部分，可以在不同设备上（手机或 PC）可以制定导航链接是否显示，以适应不同屏幕的需求。

- **ol**：定义了一个有序列表，列表排序以数字来显示，使用 `<li>` 标签来定义列表选项。

- **ul**：定义了一个无序列表，也用 `<li>` 标签来创建无序列表。

  > **注意**：ol 和 ul 的区分是内容是否有顺序关系，每一项的前面不论是数字还是点，都不会影响语义的判断。所以，不要因为视觉表现效果，而改变语义的使用。

- **section**：定义文档中的节。比如：章节、页眉、页脚或文档中的其他部分，元素的嵌套会使其中的 h1-h6 下降一级，因此，在 HTML5 以后，只需要 section 和 h1-h6 就足以形成文档的树形结构。

- **header**：通常出现在前部，表示导航或者介绍性的内容。

- **footer**：通常出现在尾部，包含一些作者信息、相关链接、版权信息等。

  > **注意**：header 和 footer 一般放在 `<article>` 或者 `<body>` 的直接子元素，但是标准中并没有明确规定，footer 也可以和 aside、nav、section 相关联（header 不存在关联问题）

- **aside**: 表示跟文章主体不相关的部分，它可能包含导航、广告等工具性质的内容。

  > **注意**：aside 和 header 中都可能出现导航（`<nav>`标签），两者的区别是，`<header>`中的导航多数是到文章自己的目录，而 `<aside>` 中的导航多数是到关联页面或者整站地图。

- **article**：表示具有一定独立性质的文章。所以，article 和 body 具有相似的结构，同时，一个 HTML 页面中，可以有多个 article 存在，适合多篇新闻展示在同一个新闻专题页面、用户评论。

- **address**：定义文档或文章的作者/拥有者的联系信息，文本通常呈现斜体。如果元素位于 body 内，则它表示文档联系信息。元素位于 `<article>` 元素内，则表示文章的联系信息。大多数浏览器会在前后添加折行。

  > 元素不应该用于描述通信地址，除非它是联系信息的一部分。通常连同其他信息被包含在 footer 元素中。
  > **address 明确地只关联到 `article` 和 `body`**

- **abbr**：表示简称或缩写，比如："WWW"，通过对缩写进行标记，能够为浏览器、拼写检查和搜索引擎提供有用的信息。
- **em**：把其中的文本表示为强调的内容，用斜体来显示。
- **strong**：这个标签跟 em 标签一样，用于强调文本，但它的强调程度更强一些，用粗体来显示。

- **hr**：表示故事走向的转变或话题的转变，在文档中创建一条水平线。

- **p**：定义段落，元素会自动在其前后创建一些空白。
- **dfn**：一个短语标签，用来包裹被定义的名词。
- **pre**：定义预格式化的文本。被包围在元素中的文本通常会保留空格和换行符，文本呈现为等宽字体。常用于表示计算机的源代码。
  > 注意：可以导致段落断开的标签（例如：标题、`<p>` 和 `<address>` 标签）绝不能包含在 `<pre>` 所定义的块里。
- **samp**：定义计算机程序的样本文本。
- **code**：是一个短语标签，用来定义计算机代码文本。
- **cite**：通常表示它所包含的文本对某个参考文献的引用，比如：书籍的标题。引用的文本用斜体来显示。
- **blockquote**：表示块级引用。
- **q**：表示短的引用，通常会在引用的内容周围添加引号。
- **time**：定义公历的时间（24 小时制）或日期，时间和时区偏移是可选的。

- **figure**：规定具有 一定自包含性的内容（如：图片、代码、表格等），其内容应该与主内容相关，同时元素的位置相对于主内容是独立的，如果删除，则不应对文档流产生影响。
- **figcaption**：为 figure 元素 定义标题，应被置于 figure 元素的第一个或最后一个元素的位置。

![部分语义类标签](./image/部分语义类标签.jpg)

### 1.2 元信息类标签

所谓元信息，是指描述自身的信息，元信息类标签，就是 HTML 用于描述文档自身的一类标签，它们通常出现在 head 标签中，一般不会在页面被显示出来。

元信息多数情况下是给浏览器、搜索引擎等机器阅读的，有时候这些信息会在页面之外显示给用户。

#### 1.2.1 head 标签

head 标签本身不携带任何信息，它主要是作为盛放其它语义类标签的容器使用。

head 标签规定了自身必须是 html 标签中的第一个标签，它的内容必须包含一个 title，并且最多只能包含一个 base。如果文档作为 iframe，或者有其他方式指定了文档标题时，可以允许不包含 title 标签。

#### 1.2.2 title 标签

title 标签表示文档的标题。title 应该是完整地概括整个网页的内容的。

```html
<title>This is title</title>
```

#### 1.2.3 base 标签

base 标签实际上是个历史遗留标签。它的作用是给页面上所有的 URL 相对地址提供一个基础。base 标签最多只有一个，它改变全局的链接地址。

> 注意：它是一个非常危险的标签，容易造成跟 JS 的配合问题，所以在实际开发中，建议使用 JS 来代替 base 标签。

#### 1.2.4 meta 标签

meta 标签是一组键值对，它是一种通用的元信息表示标签。

在 head 中可以出现任意多个 meta 标签。一般的 meta 标签由 `name` 和 `content` 两个属性来定义。name 表示元信息的名称，content 表示元信息的值。

```html
<meta
  name="application-name"
  content="value"
/>
```

这里的 name 是一种比较自由的约定，HTTP 标准规定了一些 name 作为公用的，也鼓励使用自己创造的 name。
除了基本用法，meta 标签还有一些变体，主要用于简化书写方式或者声明自动化行为，主要如下：

**具有 charset 属性的 meta**
从 HTML5 开始，为了简化写写法，meta 标签新增了 `charset` 属性。添加了 `charset` 属性的 meta 标签无需再有 name 和 content。

```html
<meta charset="UTF-8" />
```

> **charset 型 meta 标签非常关键，它描述了 HTML 文档自身的编码形式。建议放到 head 的第一个。**
> 浏览器在读到这个标签前，处理的所有字符都是 ASCII 字符，ASCII 字符是 UTF-8 和绝大多数字符集编码的子集，所以，在读到 meta 之前，浏览器理解文档大多数都不会出错，这样可以最大程度的保证不出乱码。
> 一般情况下，HTTP 服务端会通过 http 头来指定正确的编码方式，但是有些特殊情况需要使用 file 协议打开一个 HTML 文件，则没有 http 头，这种时候，charset meta 就非常重要。

**具有 http-equiv 属性的 meta**
具有 `http-equiv` 属性的 meta 标签，表示执行一个命令。这样的 meta 标签可以不需要 name 属性。

```html
<!-- 相当于添加了 content-type 这个http头，并且指定了 http 编码方式。 -->
<meta
  http-equiv="content-type"
  content="text/html; charset=UTF-8;"
/>
```

除了 content-type，还有以下几种命令：

- default-style: 指定默认样式表

  ```html
  <meta
    http-equiv="default-style"
    content="the document's preferred stylesheet"
  />
  ```

  > 注意：上面 content 属性的值必须匹配同一文档中的一个 link 元素上的 title 属性的值，或者必须匹配同一文档中的一个 style 元素上的 title 属性的值。

- refresh: 如果 content 只包含一个正整数，则为重新载入页面的时间间隔(秒)；如果 content 包含一个正整数，并且后面跟着字符串";href="和一个合法的 URL，则是重定向到指定链接的时间间隔(秒)。

  ```html
  <!-- 3秒后重定向到百度 -->
  <meta
    http-equiv="refresh"
    content="3;href=https://www.baidu.com"
  />
  ```

- set-cookie: 模拟 http 头 set-cookie，设置 cookie

  ```html
  <meta
    http-equiv="set-Cookie"
    content="cookieValue=xxx;expires=Wednesday, 20-Jun-2007 22:33:00 GMT； path=/"
  />
  ```

  > 注意：过期时间必须使用 GMT 的时间格式

- x-ua-compatible: 模拟 http 头 x-ua-compatible，声明 ua 兼容性

  ```html
  <!-- ie浏览器将执行当前支持的最高版本，大小写不敏感 -->
  <meta
    http-equiv="X-UA-Compatible"
    content="IE=edge"
  />
  ```

  还有特殊写法：

  ```html
  <!-- 安装了 Google Chrome Frame （谷歌浏览器內嵌框架）则使用谷歌浏览器内核模式，否则使用最新的IE模式 -->
  <meta
    http-equiv="X-UA-Compatible"
    content="IE=edge,chrome=1"
  />
  ```

- content-security-policy: 模拟 http 头 content-security-policy，声明内容安全策略。
  内容策略主要指定允许的服务器源和脚本端点，这有助于防止跨站点攻击脚本攻击。

  ```html
  <!-- 禁用不安全的内联，仅允许通过https加载资源 -->
  <meta
    http-equiv="Content-Security-Policy"
    content="default-src https:"
  />
  ```

**name 为 viewport 的 meta**
meta 可以被自由定义，只要写入和读取的双方约定好 name 和 content 的格式就行。
name 为 `viewport` 的 `meta`，它没有在 HTML 标准中定义，却是移动端开发的事实标准。它的 content 是一个用逗号分隔的键值对。

```html
<!-- 页面宽度为500，初始缩放比例为1 -->
<meta
  name="viewport"
  content="width:500, initial-scale=1"
/>
```

它能表示的全部属性如下：

- width: 页面宽度，可以取值具体的数字，也可以是 device-width，表示跟设备宽度相等。
- height: 页面高度，可以取值具体的数字，也可以是 device-height，表示跟设置高度相等。
- initial-scale: 初始缩放比例
- minimum-scale: 最小缩放比例
- maximum-scale: 最大缩放比例
- user-scale: 是否允许用户缩放

一个标准的 viewport meta，如下：

```html
<meta
  name="viewport"
  content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scale=no"
/>
```

**其他预定义的 meta**:

- application-name: 如果页面是 Web application，用这个标签表示应用名称
- author: 页面作者

  ```html
  <meta
    name="author"
    content="DSY"
  />
  ```

- description: 页面描述，这个属性可以被用于搜索引擎
- generator: 生成页面所使用的工具，主要用于可视化编辑器。如果是手写 HTML 的网页，不需要加这个 meta

  ```html
  <meta
    name="generator"
    content="VSCode1.50.1"
  />
  ```

- keywords: 规定一个逗号分隔的关键词列表，对于 SEO 非常重要

  ```html
  <meta
    name="keywords"
    content="HTML, meta tag, tag reference"
  />
  ```

- referrer: 主要用于控制网页发送给服务器的 referrer 信息，可以告诉服务器端用户是从哪个页面来到当前网页的

  ```html
  <meta
    name="referrer"
    content="no-referrer"
  />
  ```

  referrer 的 content 常用属性值：

  - no-referrer: 任何情况下都不发送 Referrer 信息
  - no-referrer-when-downgrade: 仅当协议降级（如从 HTTPS 页面跳转到 HTTP 页面）时不发送 Referrer 信息。是大部分浏览器默认策略
  - origin: 发送只包含 host 部分的 referrer 信息，也就是只包含了协议和域名的 url，不包含域名后面部分，比如，来源网页 url 是 `https://www.liudaima.com/1.html`，但 referrer 值只包含 `https://www.liudaima.com`
  - origin-when-cross-origin: 仅在发生跨域访问时，发送只包含 host 的 Referrer 信息，但在同域下还是完整的，而只有协议、域名和端口都一致时，浏览器才认为是同域。
  - unsafe-url: 全部都发送 Referrer 信息，是最宽松，也是最不安全的策略

- theme-color: 页面风格颜色，实际并不会影响页面，但是浏览器可能据此调整页面之外的 UI（如窗口边框或者 tab 的颜色）

  ```html
  <meta
    name="theme-color"
    content="#2932e1"
  />
  ```

### 1.3 链接

链接是 HTML 中的一种机制，它是 HTML 文档和其他文档或者资源的连接关系，在 HTML 中，链接有两种类型，一种是**超链接型标签**，另一种是**外部资源链接**。

![HTML链接标签类型](./image/HTML链接标签类型.png)

#### 1.3.1 link 标签

link 标签会生成一个链接，有以下两种情况：

- 超链接: 这些超链接不会像 a 标签那样显示在网页中，这意味着多数浏览器中，这些 link 标签不会起任何作用。但是，这些 link 标签能够被搜索引擎和一些浏览器插件识别，从而产生关键作用。

> 例：到页面 RSS 的 link 标签，能够被浏览器的 RSS 订阅插件识别，提示用户当前页面是可以 RSS 订阅的。

- 外部资源链接: 会把外部资源链接到文档中，会实际下载这些资源，并且作出一些处理，如：link 标签引入样式表。

link 标签的链接类型主要通过 `rel` 属性来区分，有以下几种：

##### 1.3.1.1 超链接类 link 标签

超链接 link 标签是一种被动型链接，在用户不操作的情况下，它们不会被主动下载。

- canonical 型 link: 这个标签提示页面它的主 URL，在网站中常常有多个 URL 指向同一页面的情况，搜索引擎访问这类页面时会去掉重复的页面，这个 link 会提示搜索引擎保留哪一个 URL。

  ```html
  <link
    rel="canonical"
    href="..."
  />
  ```

- alternate 型 link: 这个标签提示页面它的变形形式，这个所谓的变形可能是当前页面的不同格式、不同语言或不同设备设计的版本，这种 link 通常也是提供给搜索引擎使用。
  [alternate 型 link 标签](./examples/alternate型link标签.html)

- prev 型 link 和 next 型 link: 在互联网应用中，很多网页都属于一个序列，比如分页浏览的场景，或者图片展示的场景，每个网页是序列中的一个项。这种时候，就适合使用 prev 和 next 型的 link 标签，来告诉搜索引擎或者浏览器它的前一项和后一项，这有助于页面的批量展示。因为 next 型 link 告诉浏览器"这是很可能访问的下一个页面"，HTML 标准还建议对 next 型 link 做预处理。

  ```html
  <link
    rel="prev"
    href="http://www.example.com/page-2.html"
  />
  <link
    rel="next"
    href="http://www.example.com/page-4.html"
  />
  ```

- 其他超链接类的 link
  都表示一个跟当前文档相关联的信息，可以把这样的 link 标签视为一种带链接功能的 meta 标签。
  - rel="author": 链接到本页面的作者，一般是 mailto 协议
  - rel="help": 链接到本页面的帮助页
  - rel="license": 链接到本页面的版权信息页
  - rel="search": 链接到本页面的搜索页面（一般是站内提供搜索时使用）

##### 1.3.1.2 外部资源类 link 标签

外部资源型 link 标签会被主动下载，并且根据 `rel` 类型作不同处理。

- **icon 型 link**

  这类链接表示页面的 icon。多数浏览器会读取 icon 型 link，并且把页面的 icon 展示出来。
  icon 型 link 是唯一一个外部资源类的元信息 link，其他元信息 link 都是超链接，这意味着，icon 型 link 中的图标地址默认会被浏览器下载和使用。
  如果没有指定这样的 link，多数浏览器会使用域名根目录下的 `favicon.ico`，即使它不存在，所以从性能的角度考虑，建议一定要保证页面中有 icon 型的 link。
  只有 icon 型 link 有有效的 sizes 属性，HTML 标准允许一个页面出现多个 icon 型 link，并用 sizes 指定它适合的 icon 尺寸。

- **预处理类 link**

  导航到一个网站需要经过 DNS 查询、建立连接、传输数据、加载入内存、渲染等一系列的步骤。预处理类 link 标签就是允许控制浏览器，提前针对一些资源去做这些操作，以提高性能。

  - dns-prefetch 型 link: 提前对一个域名做 dns 查询，这样的 link 里面的 href 实际只有域名有意义。
  - preconnect 型 link: 提前对一个服务器建立 TCP 连接。
  - prefetch 型 link: 提前取 href 指定的 url 的内容。
  - preload 型 link: 提前加载 href 指定的内容。
  - prerender 型 link: 提前渲染 href 指定的 url

- **modulepreload 型 link**

  作用是预先加载一个 JS 的模块。这可以保证 JS 模块不必等到执行时才加载。这里的加载，是指完成下载并放入内存，并不会执行对应的 JS。

  ```html
  <!-- 假设 app.js 中有 import “irc” 和 import “fog-machine”, 而 irc.js 中有 import “helpers”。 -->
  <!-- 这段代码使用 modulepreload 型 link 来预加载了四个 js 模块。 -->
  <!-- 尽管，单独使用 script 标签引用 app.js 也可以正常工作，但是通过加入对四个 JS 文件的 link 标签，使得四个 JS 文件有机会被并行地下载，这样提高了性能 -->
  <link rel="modulepreload" href="app.js">
  <link rel="modulepreload" href="helpers.js">
  <link rel="modulepreload" href="irc.js">
  <link rel="modulepreload" href="fog-machine.js">
  <script type="module" src="app.js">
  ```

- stylesheet 型 link
  基本用法是从一个 CSS 文件创建一个样式表。这里可以没有 type 属性，如果有，必须是"text/css"才有效。

- pingback 型 link
  表示本网页被引用时，应该使用的 pingback 地址，这个机制是一份独立的标准，遵守 pingback 协议的网页在引用本页面时，会向 pingback url 发送一个消息。常用于博客等。

  ```html
  <link
    rel="pingback"
    href="www.f.com/xmlrpc.php"
  />
  ```

#### 1.3.2 a 标签

具有 href 的 a 标签会产生超链接，就是不会被主动下载的被动型链接。

a 标签也有 rel 属性，其中一些跟 link 中的相同，有以下几种：

- alternate
- author
- help
- license
- next
- prev
- search

这些跟 link 语义完全一致，不同的是，a 标签产生的链接是会显示在实际网页中，而 link 标签仅仅是元信息。

a 标签独有的 rel 属性：

- tag: 表示本网页所属的标签（关键字）。
- bookmark: 到上级文章的链接。

a 标签辅助类型的 rel，用于提示浏览器或搜索引擎做一些处理：

- nofollow: 此链接不会被搜索引擎索引。
- noopener: 此链接打开的网页无法使用 opener 来获得当前页面的窗口。
- noreferrer: 此链接打开的网页无法使用 referrer 来获取当前页面的 url。
- opener: 打开的网页可以使用 window.opener 来访问当前页面的 window 对象，这是 a 标签的默认行为。

#### 1.3.3 area 标签

area 标签与 a 标签非常相似，不同的是，area 标签是区域型链接。area 标签支持的 rel 跟 a 标签完全一致。

area 是整个 HTML 规则中唯一支持非矩形热区的标签，但 area 不支持各种曲线的路径，它的 `shape` 属性支持 4 种类型：

- circle/circ: 圆形，coords 支持 3 个值，分别表示中心点的 x，y 坐标和圆形半径 r。
- rect/rectangle: 矩形，coords 支持 4 个值，分别表示两个对角顶点 x1，y1 和 x2，y2。
- poly/polygon: 多边形，coords 至少包括 6 个值，表示多边形的各个顶点。
- default: 指的是 整个图像区域。

> 注意：
>
> 1. area 必须跟 img 和 map 标签配合使用。area 标签永远在 map 内部。
> 2. map：定义一个客户端图像映射。图像映射（image-map）指带有可点击区域的一幅图像。必须有 name 和 id 属性，且 id 和 name 属性的值必须相同（浏览器兼容）。
> 3. img：使用 usemap 是将图像定义为客户器端图像映射（以"#"开头），与 map 元素的 name 或 id 属性相关联。
> 4. area 没有 href 不起作用。
>    例：[area 和 map 标签](./examples/area和map标签.html)

### 1.4 替换型元素

替换型元素是区别于链接的，另一种引入文件的方式。替换型元素是把文件的内容引入，替换掉自身位置的一类标签。

替换型元素，都是使用 `src` 来引用文件

#### 1.4.1 script

script 标签是为数不多的即可以作为替换型标签，也可以不作为替换型标签的元素。

两种用法：

```html
<script>
  console.log('Hello');
</script>
<script src="my.js"></script>
```

#### 1.4.2 img

img 标签的作用是引入一张图片。

如果一定不想要引入独立文件，可以使用 data uri。

```html
<img
  src='data:image/svg+xml;charset=utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/></svg>'
/>
```

可以使用 width 和 height 指定宽度和高度，也可以只指定其中之一。

img 当只被指定宽度、高度其中之一时，图片会被 等比例缩放。这个特性非常重要，适用于既要限制图片尺寸，又要保持图片比例的场景。
如果从性能的角度考虑，同时指定高度和宽度是更好的选择，因为替换型元素加载完文件后，如果尺寸发生变化，会触发 重排版。

**重点属性**:

- alt: 这个属性一般不会被普通用户感知。但对于视障用户非常重要，可以说，给 img 加上 alt 属性，已经做完了可访问性的一半。

- srcset: 以逗号分隔的一个或多个字符串列表，表明一系列用户代理可能使用的图像。每一个字符串由以下组成：

  - 指向图像的 URL
  - 可选，再加上一个空格之后，附加以下的其一：
    - 一个宽度描述符: 一个正整数，后面紧跟"w"符号，该整数宽度除以 sizes 属性给出的资源（source）大小来计算得到有效的像素密度，即换算成和 x 描述符 等价的值。
    - 一个像素密度描述符: 一个正浮点数，后面紧跟 "x"符号
      如果没有指定描述资源符，默认 1x
      例：[替换型元素-img.html](./examples/替换型元素-img.html)
      > srcset 提供了根据屏幕条件选取图片的能力，但是其实更好的做法，是使用 [picture](#143-picture) 元素。

- sizes: 表示资源大小的，以逗号隔开的一个或多个字符串。每一个字符串包含：
  - 一个媒体查询条件，最后一项一定不能有媒体查询条件，作为 fallback。
  - 资源尺寸的值。
    资源尺寸的值被用来指定图像的预期尺寸。当 srcset 中的资源使用了宽度描述符 w 时。用户代理会使用当前图像大小来选择 srcset 中合适的一个图像 URL。如果没有设置 srcset 属性或者 srcset 里用的是 x 描述符，那么 sizes 属性也不起作用。
    例：[替换型元素-img.html](./examples/替换型元素-img.html)

> 注意：
> sizes 的资源尺寸不能使用 `%` 来描述图片大小，如果要用百分比来表示，要用类似 vw（相对于视口的宽度，视口被均分为 100 单位的 vw）的单位来描述。
> 例：[替换型元素-img.html](./examples/替换型元素-img.html)
> sizes 里给出的不同媒体查询选择图片大小的建议只对 w 描述符 起作用，也就是说 srcset 里用的是 x 描述符 或根本没有设置 srcset ，这个 sizes 是没有意义的。
> 同一个 srcset 中不能同时出现 x 描述符 和 w 描述符。
> 不能对同一个图片同时使用 x 描述符 和 w 描述符。
> 注释：x（像素比描述） w（图片像素宽度描述）

#### 1.4.3 picture

picture 元素可以根据屏幕的条件为其中的 img 元素 提供不同的源，是比 img 的 srcset 更好的选择。

picture 的元素设计跟 audio 和 video 保持了一致。它跟 img 搭配 sizes 和 srcset 不同，它使用 `source` 元素来指定图片源，并且支持多个。

source 元素的 media 属性是 media query，跟 CSS 的 [@media](../CSS/chapters/%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F.md#211-at-rule) 规则一致。

```html
<picture>
  <source
    srcset="image-wide.png"
    media="(min-width: 600px)"
  />
  <img src="image-narrow.png" />
</picture>
```

#### 1.4.4 video

在早期的 HTML5 中，video 标签跟 img 标签类似，也是使用 src 属性来引入源文件的。但是，现在考虑到各个浏览器支持的视频格式不同，video 标签跟 picture 元素一样，也是提倡使用 source。

```html
<video controls>
  <source
    src="myVideo.mp4"
    type="video/mp4"
  />
  <source
    src="myVideo.webm"
    type="video/webm"
  />
  <p>Your browser doesn't support HTML5 video. Here is a <a href="myVideo.mp4">link to the video</a> instead.</p>
</video>
```

source 标签除了支持 media 之外，还可以使用 `type` 来区分源文件的使用场景。video 标签如果要支持更古老的浏览器，还可以在其中加入 object 或 embed 标签。

video 中还支持一种标签：`track`，track 是一种播放时序相关的标签，它最常见的用途是字幕。track 标签中，必须使用 `srclang` 来指定字幕。
此外 track 具有 kind 属性，共有五种：

- **subtitles**：字幕，也可能是补充性说明。
- **captions**：报幕内容，可能包含演职员表等元信息。适合听障人士或没有打开声音的人了解音频内容。
- **descriptions**：视屏描述信息，适合视障人士或没有视屏播放功能的终端打开视屏时了解视频内容。
- **chapters**：章节标题用于用户浏览媒体资源时。
- **metadata**：给代码提供的元信息，对普通用户不可见。

一个完整的 video 标签可能会包含多种 track 和多个 source，这些共同构成了一个视频播放所需的全部信息。

#### 1.4.5 audio

用于嵌入音频内容。跟 picture 和 video 两种标签一样，audio 也可以使用 source 元素来指定源内容。

```html
<audio
  controls
  src="myVideo.mp3"
>
  <source
    src="foo.mp3"
    type="audio/mpeg"
  />
  <source
    src="foo.ogg"
    type="audio/ogg; codecs=vorbis"
  />
  <source
    src="foo.opus"
    type="audio/ogg; codecs=opus"
  />
  <p>
    Your browser doesn't support HTML5 audio. Here is a
    <a href="myAudio.mp4">link to the <code>audio</code></a> instead.
  </p>
</audio>
```

#### 1.4.6 iframe

这个标签能够嵌入一个完整的网页。不过，在移动端，iframe 受到了相当多的限制，它无法指定大小，里面的内容会被完全平铺到父级页面上。同时，很多网页也会通过 http 协议头禁止自己被放入 iframe 中。

> iframe 也是各种安全问题的重灾区。opener、window.name、甚至 css 的 opacity 都是黑客可以利用的漏洞。因此，任何情况下都不应该使用以前的 iframe。

在新标准中，为 iframe 加入了 sandbox 模式 和 srcdoc 属性，这样，给 iframe 带来了一定新场景。

```html
<iframe
  sandbox
  srcdoc="<p>Yeah, you can see it <a href='/gallery?mode=cover&amp;amp;page=1'>in my gallery</a>."
  src="http://www.baidu.com"
></iframe>
```

- **sandbox**：该属性对呈现在 iframe 框架中的内容启用一些额外的限制条件。属性值可以为空字符串（这种情况下会启用所有限制），也可以是用空格分隔的一系列指定的字符串。
- **srcdoc**：该属性是一段 HTML 代码，这些代码会被渲染到 iframe 中，使用 srcdoc 不会涉及到跨域问题。如果浏览器不支持 srcdoc 属性，则会渲染 src 属性表示的内容。

## 二. 基本语法

HTML 作为 SGML 的子集，它遵循 SGML 的基本语法：包括标签、转义等。SGML 还规定了一些特殊的节点类型，它们都有对应的 HTML 语法：
![HTML基本语法](./image/HTML基本语法.jpg)

### 2.1 标签语法

标签语法产生元素，从语法的角度讲，就用 "标签" 这个术语，从运行时的角度讲，就用 "元素" 这个术语。

HTML 中，用于描述一个元素的标签分为开始标签，结束标签、自闭合标签。开始标签和自闭合标签中又可以有属性

- 开始标签：`<tagName>`

  - 带属性的开始标签：`<tagName attributeName="attributeValue">`

- 结束标签：`</tagName>`

- 自闭合标签：`<tagName />`

HTML 中开始标签只能用英文字母。

HTML 标签中的属性可以使用单引号、双引号或不使用引号，这三种情况下，需要转义的部分都不太一样：

- 无引号属性: `<tab>` `<LF>` `<FF>` `<SPACE>` `&` 等五种字符
- 单引号属性: `'` `&` 两种字符
- 双引号属性: `"` `&` 两种字符

一般，灵活运用属性的形式，是不太会用到文本实体转义的。

### 2.2 文本语法

在 HTML 中，规定了两种文本语法，一种是普通的文本节点，另一种是 CDATA 文本节点。

文本节点看似是普通的文本，但是，其中有两种字符是必须做转义的：`<` 和 `&`。

CDATA 也是一种文本，它存在的意义是语法上的意义：在 CDATA 节点内，不需要考虑多数的转义情况。CDATA 内，只有字符组合 `]]>` 需要处理，这里不能使用转义，只能拆成两个 CDATA 节点。

### 2.3 注释语法

HTML 注释语法以 `<!--` 开头，以 `-->` 结尾，注释的内容除了 `-->` 外都没有问题。如果注释的内容一定要出现 `-->`，可以拆分成多个注释节点。

### 2.4 DTD 语法（文档类型定义）

DTD 的全称是 Document Type Defination，也就是文档类型定义。SGML 用 DTD 来定义每一种文档类型，HTML 属于 SGML，在 HTML5 出现之前，HTML 都是使用符合 SGML 的 DTD。

SGML 的 DTD 比较复杂并且没有什么实际作用（浏览器根本不会用 SGML 引擎去解析它们），因此，在 HTML5，放弃了 SGML 子集这项坚持，规定了一个比较简单的 DTD：

```html
<!DOCTYPE html>
```

SGML 的 DTD 语法 十分复杂，但是对于 HTML 来说，DTD 的选项其实是有限的，浏览器在解析 DTD 时，把它当做几种字符串之一。

### 2.5 ProcessingInstruction 语法（处理指令）

ProcessingInstruction 多数情况下，是给机器看的。HTML 中规定了可以有 ProcessingInstruction，但是并没有规定它的具体内容，所以可以把它视为一种保留的扩展机制。对浏览器而言，ProcessingInstruction 的作用类似于注释。

ProcessingInstruction 包含两个部分，紧挨着第一个问号后，空格前的部分被称为"目标"，这个目标一般表示处理 ProcessingInstruction 的程序名。剩余部分是它的文本信息，没有任何格式上的约定，完全由文档编写者和处理程序的编写者约定。

### 2.6 文本实体

实体文本就是类似以下的代码：

```html
&lt; &nbsp; &gt; &amp;
```

每一个文本实体以 `&` 开头，由 `;` 结尾，这是属于基本语法的规定，文本实体对大小写敏感。文本实体也可以用 `#` 后跟一个十进制数字，表示字符 Unicode 值，如下：

```html
&#160;(&nbsp;) &#60;(&lt;) &#62;(&gt;)
```

## 三. ARIA

ARIA 全称 Accessible Rich Internet Application，它表现为一组属性，是用于可访问性的一份标准。

可访问性其实是一个相当大的课题，它的定义包含了各种设备访问、各种环境、各种人群访问的友好性。不单单是残障人士需要用到可访问性，健康人也可能在特定时间处于需要可访问性的环境。

ARIA，是以交互形式来标注各种元素的一类属性，所以，在 ARIA 属性中，可以看到很多熟悉的面孔，交互形式往往跟直觉中的“控件”非常相似。

### 3.1 综述

整体来看，ARIA 给 HTML 元素添加的一个核心属性是 `role`：

```html
<!--
  给span添加了 role="checkbox"，这样，表示这个span被用于checkbox
  意味着，可能已经用JS代码绑定了这个span的click事件，并且以 checkbox 的交互方式来处理用户操作。
 -->
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"
></span>
<label id="chk1-label">Remember my preferences</label>
```

ARIA 系统还提供了一系列 ARIA 属性给 checkbox 这个 role，这意味着，**可以通过 HTML 属性变化来理解这个 JS 组件的状态**，读屏软件等第三方客户端，就可以理解 UI 变化，这正是 ARIA 标准的意义。

role 的定义是一个树形的继承关系：

![role定义](./image/role定义.jpg)

其中，`widget` 表示一些可交互的组件，`structure`表示文档中的结构，`window`表示窗口。

### 3.2 ARIA 角色

#### 3.2.1 Widget 角色

Widget 角色跟桌面开发中的组件类似，它表示一个可交互的组件，它们有：

![ARIA-Widget角色](<./image/ARIA-Widget角色(可交互组件).jpg>)

按照继承关系有一份列表和简要说明：

![ARIA-Widget角色的继承关系列表和简要说明](./image/ARIA-Widget角色的继承关系列表和简要说明.jpeg)

ARIA role 允许多继承。

> **注意**：这些 role 可以出现在任何一个 HTML 元素上，但这些 ARIA 属性，不会改变任何一个元素的行为。

Widget 角色同时还会带来对应的 ARIA 属性，例如：

- Checkbox 角色

  - aria-checked: 表示复选框是否被选中
  - aria-labelledby: 值为某个元素的 ID，表示 ID 对应元素的值

- Button 角色
  - aria-pressed: 按钮是否已经被按下
  - aria-expanded：按钮控制的目标是否已经被展开

除了它们本身的属性外，可交互组件还有继承来的属性，比如：switch 角色继承了 checkbox，因此，它也可以使用 aria-checked 属性。这些 ARIA 属性都是需要在 JS 中维护的。

除了简单的 widget，还有一些比较复杂的角色，需要多个角色一起配合，例如：

- Combobox: 一个带选项的输入框，常见的搜索引擎，一般提供的就是这样的输入框，当输入时，它会提供若干提示选项。
- Grid: 一个表格，它会分成行、列，行列又有行头和列头，表示行、列的意义。
- TabList: 一个可切换的结构，一般被称为选项卡，它包含了 tab 头和 tabPanel，在 tab 容器中，可能包含各种组件。
- ListBox: 一个选中的列表，它内部具有角色为 Option 的选项。
- Menu: 指菜单，菜单中可加入嵌套的菜单项(Menuitem 角色)，除了普通菜单项，还有 MenuitemCheckbox 带复选框的菜单项和 MenuitemRadio 带单选框的菜单栏。
- RadioGroup: 是一组互斥的单选框的容器，它内部可以有若干个角色为 radio 的单选框。
- Tree: 是树形控件，它的内部有 TreeItem 树形控件项，它还有一种升级形式是 TreeGrid。

#### 3.2.2 structure 角色

结构角色其实跟 HTML5 中不少新标签作用重合了，建议优先使用 HTML5 新标签。
结构角色的作用类似于语义化标签，但是内容稍微有所不同。

![ARIA-structure(结构角色)](<./image/ARIA-structure(结构角色).jpg>)

> 注意：separator 在允许焦点时是组件，在不允许焦点时属于文档结构。
> 这里需要特别提出 LandMark 角色 这个概念，它是 ARIA 标准中总结的 Web 网页中最常见的 8 个结构，LandMark 实际上是 section 的子项，这些角色在生成页面摘要时很有可能需要被保留，它们是：

![LandMark角色](./image/LandMark角色.jpg)

#### 3.2.3 Window 角色

网页中，有些元素表示"新窗口"，这是会用到 window 角色，window 角色非常少，只有是三个角色：

- window
  - dialog
    - alertDialog

> **注意**：dialog 可能会产生 "焦点陷阱"，也就是说，当这样的角色被激活时，焦点无法离开这个区域。
