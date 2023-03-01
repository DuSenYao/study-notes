# 浏览器的实现原理与 API

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [浏览器的实现原理与 API](#-浏览器的实现原理与-api-)
  - [一.浏览器实现原理](#-一浏览器实现原理-)
    - [1.1 基本工作流程](#-11-基本工作流程-)
    - [1.2 HTTP 协议](#-12-http-协议-)
      - [1.2.1 请求过程](#-121-请求过程-)
      - [1.2.2 HTTP 协议格式](#-122-http-协议格式-)
      - [1.2.3 HTTPS](#-123-https-)
      - [1.2.4 HTTP2](#-124-http2-)
    - [1.3 构建 DOM 树](#-13-构建-dom-树-)
      - [1.3.1 拆分 token](#-131-拆分-token-)
      - [1.3.2 状态机](#-132-状态机-)
      - [1.3.3 构建 DOM 树](#-133-构建-dom-树-)
    - [1.4 DOM 树的 CSS 属性](#-14-dom-树的-css-属性-)
    - [1.5 排版](#-15-排版-)
      - [1.5.1 基本概念](#-151-基本概念-)
      - [1.5.2 正常流文字排版](#-152-正常流文字排版-)
      - [1.5.3 正常流中的盒](#-153-正常流中的盒-)
      - [1.5.4 绝对定位元素](#-154-绝对定位元素-)
      - [1.5.5 浮动元素排版](#-155-浮动元素排版-)
      - [1.5.6 其他排版](#-156-其他排版-)
    - [1.6 渲染](#-16-渲染-)
    - [1.7 合成](#-17-合成-)
    - [1.8 绘制](#-18-绘制-)
  - [二. 浏览器 API](#-二-浏览器-api-)
    - [2.1 DOM API](#-21-dom-api-)
      - [2.1.1 节点](#-211-节点-)
      - [2.1.2 Node](#-212-node-)
      - [2.1.3 Element 中的 Attribute](#-213-element-中的-attribute-)
      - [2.1.4 查找元素](#-214-查找元素-)
      - [2.1.5 Range](#-215-range-)
      - [2.1.6 命名空间](#-216-命名空间-)
      - [2.1.7 CSSOM](#-217-cssom-)
        - [2.1.7.1 CSSOM](#-2171-cssom-)
        - [2.1.7.2 CSSOM View](#-2172-cssom-view-)
          - [2.1.7.2.1 窗口 API](#-21721-窗口-api-)
          - [2.1.7.2.2 滚动 API](#-21722-滚动-api-)
          - [2.1.7.2.3 布局 API](#-21723-布局-api-)
  - [三. 浏览器事件](#-三-浏览器事件-)
    - [3.1 事件概述](#-31-事件概述-)
    - [3.2 捕获与冒泡](#-32-捕获与冒泡-)
    - [3.3 焦点](#-33-焦点-)
    - [3.4 自定义事件](#-34-自定义事件-)

<!-- /code_chunk_output -->

![浏览器的实现原理与API](./image/浏览器的实现原理与API.png)

---

## 一.浏览器实现原理

### 1.1 基本工作流程

对浏览器的实现者来说，他们做的事，就是把一个 URL 变成屏幕上显示的网页，整个过程是这样的：

1. 浏览器首先使用 HTTP 协议或 HTTPS 协议，向服务端请求页面。
2. 把请求回来的 HTML 代码经过解析，构建成 DOM 树。
3. 计算 DOM 树上的 CSS 属性。
4. 确定每一个元素的位置，进行排版。
5. 最后根据 CSS 属性逐个进行进行渲染，得到内存中的位图。
6. 一个可选的步骤：对位图进行合成，这会极大的增加后续绘制的速度。
7. 合成后，再绘制到页面上。

![浏览器基本工作过程](./image/浏览器基本工作过程.jpg)

> 这里的步骤，从 HTTP 请求回来开始，不是一步做完再做下一步，而是一条流水线。
> 从 HTTP 请求回来，就产生了流式数据，后续的 DOM 树构建、CSS 计算、渲染、合成、绘制，都是尽可能流式处理前一步的产出：即不需要等上一步骤完全结束，就开始处理上一步的输出。

### 1.2 HTTP 协议

浏览器首先要做的事就是根据 URL 把数据取回来，取回数据使用的是 HTTP 协议，HTTP 标准是由 IETF 组织制定的，跟它相关的标准主要有两份：

- [HTTP1.1 https://tools.ietf.org/html/rfc2616](https://tools.ietf.org/html/rfc2616)
- [HTTP1.1 https://tools.ietf.org/html/rfc7234](https://tools.ietf.org/html/rfc7234)

HTTP 协议是基于 TCP 协议出现的，对 TCP 协议来说，TCP 是一条双向的通讯通道，HTTP 在 TCP 的基础上，规定了 Request-Response 模式。这个模式决定了通讯一定是由浏览器端先发起的。

大部分情况下，浏览器的实现者只需要一个 TCP 库，甚至一个现成的 HTTP 库就可以搞定浏览器的网络通讯部分。HTTP 是纯粹的文本协议，它是规定了使用 TCP 协议来传输文本格式的应用层协议。

#### 1.2.1 请求过程

TCP 通道中传输的完全是文本：

1. 首先运行 telnet，连接到极客时间主机，在命令行中输入以下内容：

   ```shell
   telnet time.geekbang.org 80
   ```

2. 这个时候，TCP 连接已经建立，输入以下字符作为请求：

   ```shell
   // 请求部分，第一行被称为 request line，它分为三个部分，HTTP Method，也就是请求的方法，请求的路径和请求的协议和版本。
   GET / HTTP/1.1
   Host: time.geekbang.org
   ```

3. 按下两次回车，收到了服务端的回复：

   ```shell
   // 响应部分，第一行被称为 response line，也分为三个部分，协议和版本、状态码和状态文本。
   HTTP/1.1 301 Moved Permanently
   // 紧跟在request line和response line之后，是请求头/响应头，由若干行组成，每行使用冒号分隔的名称和值。
   Date: Fri, 25 Jan 2019 13:28:12 GMT
   Content-Type: text/html
   Content-Length: 182
   Connection: keep-alive
   Location: https://time.geekbang.org/
   Strict-Transport-Security: max-age=15768000

   // 在头之后，以一个空行(两个换行符)为分隔，是请求体/响应体，请求体可能包含文件或表单数据，响应体则是HTML代码。
   <html>
   <head><title>301 Moved Permanently</title></head>
   <body bgcolor="white">
   <center><h1>301 Moved Permanently</h1></center>
   <hr><center>openresty</center>
   </body>
   </html>
   ```

> 注释：telnet 是是 windows 系统自带的服务组件，需要先开启服务，再通过 cmd 使用。

#### 1.2.2 HTTP 协议格式

HTTP 协议，大概可以分成以下部分：

![HTTP协议格式](./image/HTTP协议格式.jpg)

在这些部分中，path 是请求的路径完全由服务端来定义，而 version 几乎都是固定字符串，response body 是 HTML。

- HTTP Method(方法)
  这是 request line 里面的方法部分。这里的方法跟编程中的方法意义类似，表示此次 HTTP 请求希望执行的操作类型。方法有以下八种定义：

  - GET: 浏览器通过地址栏访问的都是 GET 方法
  - POST: 表单提交产生 POST 方法
  - HEAD: 跟 GET 类似，只返回响应头，多数由 JS 发起
  - PUT: 表示添加资源，这只是语义上的约定，并没有强约束力
  - DELETE: 表示删除资源，这只是语义上的约定，并没有强约束力
  - CONNECT: 多用于 HTTPS 和 WebSocket
  - OPTIONS: 表明请求想得到请求/响应链上关于此请求里的 URI（Request-URI）指定资源的通信选项信息，一般用于调试，多数线上服务不支持。
  - TRACE: 被用于激发一个远程的，应用层的请求消息回路（注：TRACE 方法让客户端测试到服务器的网络通路，回路的意思如发送一个请返回一个响应，这就是一个请求响应回路），一般用于调试，多数线上服务不支持。

- HTTP Status Code(状态码) 和 Status text(状态文本)
  常见的状态码有以下几种：

  - 1xx: 临时回应，表示客户端请继续。这个 1xx 状态，前端一般看不见，因为它会被浏览器 HTTP 库直接处理掉，不会让上层应用知晓。
  - 2xx: 请求成功
    - 200: 请求成功
  - 3xx: 表示请求的目标有变化，希望客户端进一步处理
    - 301: 当前资源永久性转移，这更接近于一种报错，提示客户端下次别来了
    - 302: 当前资源临时性转移
    - 304: 客户端本地已经有了缓存的版本，并且在 request 中告诉了服务端，当服务端通过 时间 或 tag，发现没有更新时，就会返回一个不含 body 的 304 状态
  - 4xx: 客户端请求错误
    - 403: 无权限
    - 404: 表示请求的页面不存在
  - 5xx: 服务端请求错误
    - 500: 服务端错误
    - 503: 服务端暂时性错误，可以一会再试

- HTTP Head(HTTP 头)
  HTTP 头可以看做一个键值对。原则上，HTTP 头也是一种数据，可以自由定义 HTTP 头和值。在 HTTP 标准中，有完整的请求/响应头规定，下面是几个重点的：
  Request Header：
  ![requestHeader规定](./image/requestHeader规定.png)
  Response Header：
  ![responseHeader规定](./image/responseHeader规定.png)

- HTTP Request Body
  HTTP 请求的 body 主要用于提交表单场景。实际上，HTTP 请求的 body 是比较自由的，只要浏览器端发送的 body 服务端认可就行。一些常见的 body 格式：
  - application-json
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/html
    > 使用 HTML 的 form 标签提交产生的 HTML 请求，默认产生 application/x-www-form-urlencoded 的格式数据，当有文件上传时，则会使用 multipart/form-data。

#### 1.2.3 HTTPS

在 HTTP 的基础上，HTTPS 和 HTTP2 规定了更复杂的内容，但是它基本保持了 HTTP 的设计思想，即：Request-Response 模式

HTTPS 有两个作用：

- 确定请求的目标服务端身份
- 确保传输的数据不会被网络中间节点窃听或篡改

HTTPS 标准也是由 RFS 规定的，详情链接：[rfc2818](https://tools.ietf.org/html/rfc2818)

HTTPS 是使用加密通道来传输 HTTP 的内容。HTTPS 首先与服务端建立一条 TLS 加密通道。TLS 建构在 TCP 协议上，它实际上是对传输的内容做一次加密，所以从传输内容上看，HTTPS 跟 HTTP 没有任何区别。

#### 1.2.4 HTTP2

HTTP2 是 HTTP1.1 的升级版本，详情链接：[rfc7540](https://tools.ietf.org/html/rfc7540)

HTTP2 最大的改进有两点：

- **支持服务端推送** : 服务端推送能够在客户端发送第一个请求到服务端时，提前把一部分内容推送给客户端放入缓存中，可以避免客户端请求顺序带来的并行度不高，从而导致的性能问题。
- **支持 TCP 连接复用** : 使用同一个 TCP 连接来传输多个 HTTP 请求，避免了 TCP 连接建立时的三次握手开销，和初建 TCP 连接窗口小的问题。

> 其实很多优化涉及更下层的协议。IP 层的分包情况，和物理层的建连时间都是需要被考虑的。

### 1.3 构建 DOM 树

![DOM树构建过程](./image/DOM树构建过程.png)

**解析代码**
HTTP 的 Response 的 body 是需要解析的，HTML 的结构不算复杂，日常开发需要的 90%的词(指编译原理中的 token，表示最小的有意义的单元)，种类大约只有标签开始、属性、标签结束、注释、CDATA 节点几种。

#### 1.3.1 拆分 token

```html
<p class="a">text</p>
```

如果从最小有意义单元的定义来拆分，第一个词，考虑到起始标签也是会包含属性的，最小的意义单元其实是 `<p` ，所以 `<p` 就是第一个词。
继续拆分，可以把这段代码依次拆成词:

- `<p` 标签的开始
- `class="a"` 属性
- `>` "标签开始"的结束
- `text` 文本
- `</p>` 标签结束

![解析代码-词拆分示例](./image/解析代码-词拆分示例.png)

#### 1.3.2 状态机

**为什么要使用状态机？**
设想，代码开始从 HTTP 协议收到字符流读取字符。
在接收第一个字符前，完全无法判断这是哪一个词，不过，随着接收的字符越来越多，拼出其他的内容可能性就越来越少。
比如，接受了一个字符"<"，就知道这不是一个文本节点。
之后再读取一个字符，比如"x"，那么就知道这不是注释和 CDATA 了，接下来一直读，直到遇到“>”或者空格，这样就得到了一个完整的词了。
实际上，每读入一个字符，其实都要做一次决定，而且这些决定是跟 "当前状态" 有关的。
在这样的条件下，浏览器工程师要想实现把字符流解析成词，最常见的方案就是使用状态机。

**状态机原理**
绝大多数的语言的词法部分都是用状态机来是实现的，下面是一个示意图：

![部分词的简易状态机示意图](./image/部分词的简易状态机示意图.png)

真正完整的 HTML 词法状态机，比这张图要复杂的多。更详细的内容，可以参考：[HTML 官方文档](https://html.spec.whatwg.org/multipage/parsing.html#tokenization)，HTML 官方文档规定了 80 个状态。

如果仅仅是为了理解原理，上面那个简单的状态机就足够了：

状态机的初始状态，仅仅区分 "<" 和 "非<":

- 如果获得的是一个 "非<" 字符，那么可以认为进入了一个文本节点
- 如果获得的是一个 "<"，那么进入一个标签状态

在标签状态时，会有以下几种可能：

- 下一个字符是"!"，那么可能是进入了注释节点或 CDATA 节点
- 如果下一个字符是"/"，那么可以确定进入了一个结束标签
- 如果下一个是字符，那么可以确定进入了一个开始标签
- 如果要完整处理各种 HTML 标准中规定的东西，那么还要考虑"?"、"%"等内容

可以看到，用状态机做词法分析，其实正是把每个词的"特征字符"逐个拆开成独立状态，然后把所有词的特征字符链合并起来，形成一个连通图结构。

③ 代码实现
在 C/C++ 和 JS 中，实现状态机的方式大同小异：把每个函数当做一个状态，参数是接受的字符，返回值是下一个状态函数。（注意：状态机是一种没有办法封装的东西，所以永远不要试图封装状态机。）

> 例：[简易状态机实现](./示例文件/简易状态机实现.js)

#### 1.3.3 构建 DOM 树

把简单的词变成 DOM 树，这个过程是使用栈来实现的，任何语言都有栈。

1. 在接收的同时，即开始构建 DOM 树，当接收完所有输入，栈顶就是最后的根节点，DOM 树的产出，就是这个栈的第一项。
2. 通过这个栈，可以构建 DOM 树：
   - 栈顶元素就是当前节点
   - 遇到属性，就添加到当前节点
   - 遇到文本节点，如果当前节点是文本节点，则跟文本节点合并，否则入栈成为当前节点的子节点
   - 遇到注释节点，作为当前节点的子节点
   - 遇到 tag start 就入栈一个节点，当前节点就是这个节点的父节点
   - 遇到 tag end 就出栈一个节点（还可以检查是否匹配）。

### 1.4 DOM 树的 CSS 属性

构建 DOM 的过程是：从父到子，从先到后，一个一个节点构造，并且挂载到 DOM 树上的。

在这个过程中，可以同步把 CSS 属性计算出来，依次拿到上一次构造好的元素，去检查它匹配到哪些规则，再根据规则的优先级，做覆盖和调整。

> 这里的选择器有个特点，那就是选择器的出现顺序，必定跟构建 DOM 树的顺序一致，这是一个 CSS 设计原则，即：保证选择器在 DOM 树构建到当前节点时，已经可以准确判断是否匹配，不需要后续节点信息。

CSS 有五种选择器和两种其他情况：

- 空格: 后代，选中它的子节点

  ```html
  <style>
    /* 可以把一个 CSS 选择器按照 compound-selector 来拆成数段，每当满足一段条件的时候，就前进一段。
    找到了匹配 a#b 的元素时，才会开始检查它所有的子代是否匹配 .cls。 */
    a#b .cls {
      width: 100px;
    }
  </style>

  <a id="b">
    <span>1</span>
    <span class="cls">2</span>
    <!--
    当遇到 </a> 时，必须使得规则 a#b .cls 回退一步，这样第三个 span 才不会被选中。
    后代选择器的作用范围是父节点的所有子节点，因此规则是在匹配到本标签的结束标签时回退。
    -->
  </a>
  <span class="cls">3</span>
  ```

- `>` : 子代，选中它的子节点

  ```html
  <style>
    div > .cls {
      border: solid 1px green;
    }
  </style>
  <!-- 当 DOM 树构造到 div 时，匹配了 CSS 规则的第一段，因为是子代选择器，激活后面的 .cls 选择条件，并且指定父元素必须是当前 div。于是后续的构建 DOM 树构建过程中，span 2 就被选中了。-->

  <div>
    <span>1</span>
    <span class="cls">2</span>
    <span>
      3
      <span>4</span>
    </span>
    <span>5</span>
  </div>
  ```

- +: 直接后继选择器，选中它的下一个相邻节点

- ~: 后继，选中它之后所有的相邻节点

  ```html
  <style>
    .cls ~ * {
      border: solid 1px green;
    }
  </style>
  <!-- .cls 选中了 span 2 然后 span 3 是它的后继，但是 span 3 的子节点 span 4 并不应该被选中，而 span 5 也是它的后继，因此应该被选中。 -->
  <div>
    <span>1</span>
    <span class="cls">2</span>
    <span>
      3
      <span>4</span>
    </span>
    <span>5</span>
  </div>
  ```

- ||: 选中表格中的一列，它是专门针对表格的选择器，跟表格的模型建立相关。

其他情况

- 逗号分隔: CSS 选择器还支持逗号分隔，表示"或"的关系。这里最简单的实现是把逗号视为两条规则的一种简易写法。

- **选择器重合**：选择器可能有重合，可以使用树形结构来进行一些合并，来提高效率，来提高效率。注意，这里的树，必须要带上连接符。

  ```css
  #a .cls {
  }

  #a span {
  }
  #a > span {
  }
  ```

  这里实际上可以把选择器构造成一棵树：

  ```txt
  - #a
    - .cls
    - span
    - > span
  ```

### 1.5 排版

排版是确定每一个元素的位置。基本原则仍然不变，就是尽可能流式地处理上一步骤的输出。

在构建 DOM 树和计算 CSS 属性这两个步骤，产出都是一个一个的元素，但是在排版这个步骤中，有些情况下，就没法做到这样了。尤其是表格相关排版、flex 排版和 Grid 排版，它们都有一个特点，那就是子元素之间具有关联性。

#### 1.5.1 基本概念

浏览器确定 文字、图片、图形、表格等等 位置的过程，叫排版。

浏览器最基本的排版方案是**正常流排版**，它包含了 顺次排布 和 折行 等规则，这是一个跟印刷排版类似的排版方案，也跟平时的书写方向文字的方式一致，所以把它叫做正常流。

浏览器的文字排版遵循公认的文字排版规范，文字排版是一个复杂的系统，它规定了行模型和文字在行模型中的排布。行模型规定了行顶、行底、文字区域、基线等对齐方式。

此外，浏览器还支持不同语言，因为不同语言的文字书写顺序不一致，所以浏览器的文字排版还支持双向文字系统。

浏览器还支持元素和文字的混排，元素被定义为占据长方形的区域，还允许边框、边距和留白，这个就是**盒模型**。

在正常流的基础上，浏览器还支持两类元素：

- 绝对定位元素: 绝对定位元素把自身从正常流抽出，直接由 `top` 和 `left` 等属性确定自身位置，不参加排版计算，也不影响其他元素。绝对定位元素由 `position` 属性控制。
- 浮动元素: 浮动元素则是使自身在正常流的位置向左或向右移动到边界，并且占据一块排版空间。浮动元素由 `float` 属性控制。

> 除了正常流，浏览器还支持其他排版方式，比如非常常用的 flex 排版，这些排版方式由外部元素的 `display` 属性控制（注意，display 同时还控制元素在正常流中属于 `inline` 等级还是 `block` 等级）。。

#### 1.5.2 正常流文字排版

正常流是唯一一个文字和盒混排的排版方式。书写文字时，是从左往右书写，每一个字跟上一个都不重叠，文字之间有一定间距，当写满一行，会换一下行写。

书写中文时，文字的上下中轴线都对齐，书写英文时，不同字母的高度不同，但是有一条基线对齐。

实际上浏览器环境也类似，但是因为浏览器支持改变排版方向，不一定是从左到右从上到下，所以，把文字依次书写的延伸方向称为主轴或主方向，换行延伸的方向跟主轴垂直交叉，称为交叉轴或交叉方向。

一般从某个字体文件中获取某个特定文字的相关信息，获取到的信息大概类似下面：

**横向版本**
![浏览器文字排版-字体信息-横向版本](./image/浏览器文字排版-字体信息-横向版本.png)

**纵向版本**
![浏览器文字排版-字体信息-纵向版本](./image/浏览器文字排版-字体信息-纵向版本.png)

> 这两张图片来自著名开源字体解析库 freeType，实际上，各个库对字体的理解大同小异。
> 注意 : advance 代表每一个文字排布后在主轴上的前进距离，它跟文字的宽 / 高不相等，是字体中最重要的属性。

除了字体提供的字形本身包含的信息，文字排版还受到一些 CSS 属性的影响，如：line-height、letter-spacing、word-spacing 等。

在正常流的文字排版中，多数元素被当做长方形盒来排版，而只有 display 为 inline 的元素中的文字排版时会被直接排版到文字流中，inline 元素主轴方向的 margin 和 border 属性也会被计算到排版前进距离中。

> 注意：当没有强制指定文字书写方向时，在左到右文字中插入右到左向文字，会形成一个双向文字盒，反之亦然。这样，即使没有元素包裹，混合书写方向的文字也可以形成一个盒结构，在排版时，遇到这样的双向文字盒，会先排完盒内再排盒外。

#### 1.5.3 正常流中的盒

在正常流中，display 不为 inline 的元素或伪元素，会以盒的形式跟文字一起排版。多数 display 属性都可以分为两部分：

- 内部的排版
- 是否 inline，带有 inline-前缀的盒，被称为行内级盒。

根据盒模型，一个盒具有 margin、border、padding、width/height 等属性，它在主轴方向上占据的空间是由对应方向的几个属性之和决定的，而 vertical-align 属性决定了盒在交叉轴方向的位置，同时也会影响实际行高。

所以，浏览器对行的排版，一般是先行内布局，再确定行的位置，根据行的位置计算出行内盒和文字的排版位置。

块级盒比较简单，它总是独占一整行，计算出交叉轴方向的高度即可。

#### 1.5.4 绝对定位元素

position 属性为 absolute 的元素，需要根据它的包含块来确定位置，这是完全跟正常流无关的一种独立排版模式，逐层找到其父级的 position 非 static 元素即可。

#### 1.5.5 浮动元素排版

float 元素非常特别，浏览器对 float 的处理时先排入正常流，再移动到排版宽度的最左/最右(实际上是主轴的最前/最后)。
移动后，float 元素占据了一定的排版空间，因此，在数行内，主轴的排版距离发生了变化，直到交叉轴方向的尺寸超过了浮动元素的交叉轴尺寸，主轴排版尺寸才会恢复。float 元素排版完成后，float 元素所在的行需要重新确定位置。

#### 1.5.6 其他排版

CSS 的每一种排版都有一个很复杂的规定，实际实现形式也各不相同。比如如 Flex 排版，支持了 flex 属性，flex 属性将每一行排版后的剩余空间平均分配给主轴方向的 width/height 属性。浏览器支持的每一种排版方式，都是按照对应的标准来实现的。

### 1.6 渲染

这里的渲染，指的是它在图形学的意义，也就是把模型变成位图的过程。

这里的位图就是在内存里建立一张二维表格，把一张图片的每个像素对应的颜色保存进去（位图信息也是 DOM 树中占据浏览器内存最多的信息，在做内存优化时，主要就是考虑这一部分）。
浏览器中渲染这个过程，就是把每一个元素对应的盒变成位图。这里的元素包括 HTML 元素和伪元素，一个元素可能对应多个盒(比如 inline 元素，可能会分成多行)。每一个盒对应一张位图。
渲染过程非常复杂，但是总体来说，分为两个大类，图形和文字：

- 图形：盒的背景、边框、SVG 元素、阴影等特性，都是需要绘制的图形类。这一部分，需要一个底层库来支持。
  一般的操作系统都会提供一个底层库，比如在 Android 中提供 Skia，而 Windows 平台择优 GDI，一般的浏览器会做一个兼容层来处理平台差异。

- 文字: 盒中的文字也需要底层库来支持，叫做字体库。字体库提供读取字体文件的基本能力，它能根据字符的码点抽取出字形。
  字形分为像素字形和矢量字形。通常的字体，会在 6px8px 等小尺寸提供像素字形，比较大的尺寸提供矢量字形。矢量字形本身就需要经过渲染才能继续渲染到元素的位图上。目前最常用的字体库是 FreeType，这是 C++编写的开源字体库。

在最理想的情况下，渲染过程产生的位图尺寸跟它上一步排版时占据的尺寸相同，但是，很多属性会影响渲染位图的大小，比如阴影，它可能非常巨大或者渲染到非常远的位置，所以为了优化，浏览器实际上会把阴影作为一个单独的盒来处理。

> **注意**：这里的渲染过程，是不会把子元素渲染到位图上的，这样当父元素的相对位置发生变化时，可以保证渲染的结果能够被最大的缓存，减少重新渲染。

### 1.7 合成

合成的过程，是为了一些元素创建一个"合成后的位图"（合成层），把一部分子元素渲染到合成的位图上面。

> 这个过程实际上是一个性能考量，它并非实现浏览器的必要一环。

合成的目标是提高性能，根据这个目标，建立的原则就是最大限度减少绘制次数原则。

好的合成策略是"猜测"可能变化的元素，把它排除到合成之外。目前，主流浏览器一般根据 position、transform 等属性来决定合成策略，来"猜测"这些元素未来可能发生变化。

但是，这样的猜测准确性有限，所以新的 CSS 标准中，规定了 `will-change` 属性，可以由业务代码来提示浏览器的合成策略，灵活运用这样的特性，可以大大提升合成策略的效果。

### 1.8 绘制

绘制是把"位图最终绘制到屏幕上，变成可见的图像"的过程，不过，一般来说，浏览器并不需要代码来处理这个过程，浏览器只需要把最终显示的位图交给操作系统即可。

一般最终位图位于显存中，也有一些情况下，浏览器只需要把内存中的一张位图提交给操作系统或驱动即可，这取决于浏览器运行的环境。

实际上"绘制"发生的频率相当高，鼠标划过浏览器显示区域，每次移动都会造成重新绘制，这时候，显示重新绘制的面积就非常重要了。

计算机图形学中，使用的方案是"脏矩形"算法，也就是把屏幕均匀的分为若干矩形区域。

当鼠标移动、元素移动或其它导致需要重绘的场景发生时，只需要重新绘制它影响到的几个矩形区域即可。比矩形区域小的影响只会涉及 4 个矩形区域，大型元素则覆盖多个矩形。重新绘制脏矩形区域时，把所有与矩形区域有交集的合成层的交集部分绘制即可。

设置合适的矩形区域大小，可以很好地控制绘制时的消耗。设置过大的矩形会造成绘制面积增大，而设置过小的矩形则会造成计算复杂。

## 二. 浏览器 API

### 2.1 DOM API

DOM API 是最早被设计出来的一批 API，也是用途最广泛的 API，这里的 DOM，指的是狭义的文档对象模型。

文档对象模型是用来描述文档，这里的文档，是特指 HTML 文档(或 XML 文档)。同时它又是一个"对象模型"，这意味它使用的是对象这样的概念来描述 HTML 文档。

HTML 文档是一个由标签嵌套而成的树形结构，因此，DOM 也是使用树形的对象模型来描述一个 HTML 文档。

DOM API 大致会包含四个部分：

- **节点** : DOM 树形结构中的节点相关 APi
- **事件** : 触发与监听事件相关的 API
- **Range** : 操作文字相关的 API
- **遍历** : 遍历 DOM 需要的 API

#### 2.1.1 节点

DOM 的树形结构所有节点有统一的接口 Node。

![DOM节点类型-继承关系](./image/DOM节点类型-继承关系.png)

在这些节点中，除了 Document 和 DocumentFragment，都有对应的 HTML 写法：

```html
Element: <tagName>...</tagName> Text: text Comment:
<!-- comments -->
DocumentType: <!DOCTYPE html> ProcessingInstruction:
<?a 1?>
```

编写 HTML 代码运行后，会在内存中得到一棵 DOM 树，HTML 的写法会被转换成对应的文档模型，可以通过 JS 等语言去访问这个文档模型。

这里每天需要用到，要重点掌握的是：**Document、Element、Text 节点**。

> DocumentFragment（文档片段）也非常有用，它常常被用来高性能的批量添加节点。Comment、DocumentType 和 ProcessingInstruction 很少需要运行时去修改和操作。

#### 2.1.2 Node

Node 是 DOM 树继承关系的根节点，它定义了 DOM 节点在 DOM 树上的操作，首先，Node 提供了一组属性，来表示它在 DOM 树中的关系：

- parentElement: 返回当前节点的父元素（只返回元素节点）
- children: 返回元素的子元素集合，是一个 HTMLCollection 对象（只返回元素节点）
- firstElementChild: 返回节点的第一个元素子节点（只返回元素节点）
- lastElementChild: 返回节点的最后一个元素子节点（只返回元素节点）
- nextElementSibling: 返回节点的下一个元素节点(同一树层级，不包括文本节点、注释节点)
- previousElementSibling: 返回节点的前一个元素节点(同一树层级，不包括文本节点、注释节点)

**如需兼容 IE9 以下，使用下面的**：

- parentNode: 返回当前节点的父元素，如果没有返回 null（父节点可能是元素(Element)节点、文档(Document)节点 或 碎片(DocumentFragment)节点）
- childNodes: 返回节点的子节点集合，一个 nodeList 对象（返回所有的节点，包括文本节点、注释节点）
- firstChild: 返回节点的第一个子节点
- lastChild: 返回节点的最后一个子节点
- nextSibling: 返回节点的下一个节点(同一树层级，包括文本节点、注释节点)
- previousSibling: 返回节点的上一个节点(同一树层级，包括文本节点、注释节点)

**操作 DOM 树的 API**，主要有以下几种：

- appendChild: 可向节点的子节点列表末尾添加新的子节点。
  如果要添加的子节点，是 DOM 树中已经存在了的，添加的子节点将从 DOM 树中删除，然后重新插入它的新位置。如果要添加的子节点是 DocumentFragment 节点，则不会直接插入它，而是把它的子节点按序插入当前节点的子节点列表末尾。

  例：[**操作 DOM 树的 API**.html 行 45](./示例文件/操作DOM树的API.html)

- insertBefore: 向指定的已有子节点之前插入新的子节点
  例：[操作 DOM 树的 API.html 行 47](./示例文件/操作DOM树的API.html)

- removeChild: 删除一个子节点，返回删除的节点
  例：[操作 DOM 树的 API.html 行 50](./示例文件/操作DOM树的API.html)

- replaceChild: 用指定节点替换当前节点的一个子节点，并返回被替换的节点
  例：[操作 DOM 树的 API.html 行 51](./示例文件/操作DOM树的API.html)

> 从设计的角度上，这几个修改型的 API，全都是在父元素上操作的，这样的设计是符合面向对象的基本原则的。"拥有哪些元素"是父元素的一种状态，所以修改状态是父元素的一种行为。

Node 还提供了一些高级 API，如下：

- compareDocumentPosition: 可以比较当前节点与任意文档中另一个节点的位置关系，返回值是一个位掩码。
  例：[Node 高级 API.html 行 25](./示例文件/Node高级API.html)

- contains: 检查传入节点是否为当前节点的后代节点，返回布尔值
  例：[Node 高级 API.html 行 26](./示例文件/Node高级API.html)

- isEqualNode: 检查两个节点是否完全相同
  例：[Node 高级 API.html 行 27](./示例文件/Node高级API.html)

- isSameNode: 检查两个节点是否是同一个节点，实际上在 JS 中可以用"==="
  例：[Node 高级 API.html 行 28](./示例文件/Node高级API.html)

- cloneNode: 复制一个节点，如果传入参数 true，则会连同子元素做深拷贝
  例：[Node 高级 API.html 行 29](./示例文件/Node高级API.html)

DOM 标准规定了节点必须从文档的 `create` 方法创建出来，不能使用 JS 的 new 运算，所以 document 有以下方法：

- createElement: 创建并返回一个由标签名称指定的 HTML 元素
  例：[DOM-create API.html 行 44](./示例文件/DOM-create-API.html)

- createTextNode: 创建并返回一个新的文本节点。这个方法可以用来转义 HTML 字符。
  例：[DOM-create API.html 行 45](./示例文件/DOM-create-API.html)

- createCDATASection: 创建并返回一个新的 CDATA 节点
  例：[DOM-create API.html 行 46](./示例文件/DOM-create-API.html)

- createComment: 创建并返回一个注释节点
  例：[DOM-create API.html 行 47](./示例文件/DOM-create-API.html)

- createProcessingInstruction: 创建并返回一个新的处理指令节点
  例：[DOM-create API.html 行 48](./示例文件/DOM-create-API.html)

- createDocumentFragment: 创建并返回一个新的空白文档片段。

  DocumentFragment 是 DOM 节点，但不是主 DOM 树的一部分。通常用于创建文档片段，将元素附加到文档片段，然后将文档片段附加到 DOM 树，在 DOM 树中，文档片段被其所有的子元素代替。

  因为文档片段存在于内存中，并不在 DOM 树中，所以将子元素插入到文档片段时不会引起页面回流（对元素位置和几何的计算），因此，使用文档片段通常会带来更好的性能。

  例：[DOM-create API.html 行 49](./示例文件/DOM-create-API.html)

- createDocumentType: 创建并返回一个 DocumentType 对象。
  例：[DOM-create API.html 行 50](./示例文件/DOM-create-API.html)

#### 2.1.3 Element 中的 Attribute

Node 提供了树形结构上节点的相关操作，而大部分时候，会比较关注元素，Element 表示元素，它是 Node 子类。元素对应了 HTML 中的标签，它既有子节点，又有属性。所以 Element 子类中，有一系列操作属性的方法。

> 注意：对 DOM 而言，Attribute 和 Property 是完全不同的含义，只有特殊场景下，两者才会互相关联。

可以把元素的 Attribute 当做字符串来看，这样就有以下的 API：

- getAttribute: 返回元素上一个指定属性名的属性值，如不存在返回 null 或 ""
  例：[Element 子类中的操作属性方法.html 行 21](./示例文件/Element子类中的操作属性方法.html)
- setAttribute: 设置指定元素上的某个属性的值
  例：[Element 子类中的操作属性方法.html 行 22](./示例文件/Element子类中的操作属性方法.html)
- removeAttribute: 从指定的元素中删除一个属性
  例：[Element 子类中的操作属性方法.html 行 23](./示例文件/Element子类中的操作属性方法.html)
- hasAttribute: 返回一个布尔值，指示该元素是否包含有指定的属性
  例：[Element 子类中的操作属性方法.html 行 24](./示例文件/Element子类中的操作属性方法.html)

**高性能**:

- getAttributeNode: 从当前元素中通过名称获取属性节点
  例：[Element 子类中的操作属性方法.html 行 25](./示例文件/Element子类中的操作属性方法.html)
- setAttributeNode: 为指定的元素添加属性节点，如果属性节点替代了已有的属性节点，则返回被替代的属性节点，否则返回 null
  例：[Element 子类中的操作属性方法.html 行 26](./示例文件/Element子类中的操作属性方法.html)

此外，还可以使用 `attributes` 对象，像 property 一样访问 attribute，比如：

> document.body.attributes.class = "a" 等效于 document.body.setAttribute("class", "a")

#### 2.1.4 查找元素

document 节点提供了查找元素的能力，有以下几种：

- querySelector: 返回匹配指定 CSS 选择器元素的第一个子元素
- querySelectorAll: 返回匹配指定 CSS 选择器元素的所有元素，是一个 NodeList 对象
- getElementById: 返回一个匹配特定 ID 的元素
- getElementsByName: 返回带有指定名称的对象的集合
- getElementsByTagName: 返回一个包含所有指定标签名的动态 HTML 集合 HTMLCollection
- getElementsByClassName: 返回一个包含所有指定 class 的动态 HTML 集合 HTMLCollection

> **注意**：getElement 系列的几个 API 性能高于 querySelector，而且 getElement 系列获取的集合并非数组，而是一个能够动态更新的集合。浏览器内部有高速的索引机制，来动态更新这样的集合，所以应该**尽量使用 getElement 系列的 API**。

#### 2.1.5 Range

Range API 是一个比较专业的领域，如果不做富文本编辑类的业务，不需要太深入。

Range API 表示一个 HTML 上的范围，这个范围是以文字为最小单位的，所以 Range 不一定包含完整的节点，它可能是 Text 节点中的一段，也可以是头尾两个 Text 的一部分加上中间的元素。

可以通过 Range API 更准确的操作 DOM 树，凡是 节点 API 能做到的，Range API 都可以做到，而且可以做到更高性能，但是 Range API 使用起来比较麻烦，所以在实际项目中，并不常用，只有做底层框架和富文本编辑对它有强需求。

创建 Range 一般是通过设置它的起止来实现：

```js
var range = new Range(),
  firstText = p.childNodes[1],
  secondText = em.firstChild;
range.setStart(firstText, 9); // 别忘了前导空格
range.setEnd(secondText, 4);
```

通过 Range 也可以从用户选中区域创建，这样的 Range 用于处理用户选中区域：

```js
var range = document.getSelection().getRangeAt(0);
```

更改 Range 选中区段内容的方式主要是取出和插入，分别由 `extractContents` 和 `insertNode` 来实现:

```js
var fragment = range.extractContents();
range.insertNode(document.createTextNode('aaaa'));
```

#### 2.1.6 命名空间

在 HTML 场景中，需要考虑命名空间的场景不多，最主要的场景是 SVG。创建元素和属性相关的 API 都有带有命名空间的版本：

- Document
  - creteElementNS
  - createAttributeNS
- Element
  - getAttributeNS
  - setAttributeNS
  - getAttributeNodeNS
  - setAttributeNodeNS
  - removeAttributeNS
  - hasAttributeNS
  - attributes.setNameItemNS
  - attributes.getNameItemNS
  - attributes.removeNameItemNS

若要创建 Document 或者 Doctype，也必须要考虑命名空间问题。DOM 要求从 `document.implementation` 来创建:

- document.implementation.createDocument
- document.implementation.createDocumentType

#### 2.1.7 CSSOM

HTML 和 CSS 分别承担了语义和表现的功能，DOM 和 CSSOM 也有语义和表现的分工。

DOM 中的所有属性都是用来表现语义的属性，CSSOM 的都是表现的属性，width、height 这类显示相关的属性，都属于 CSSOM。

CSSOM 是 CSS 的对象模型，在 W3C 标准中，它包含两个部分：**描述样式表和规则等 CSS 的模型部分(CSSOM)** 和 **跟元素视图相关的 View 部分(CSSOM View)**。

> 在实际使用中，CSSOM View 比 CSSOM 更常用，因为很少需要用代码去动态地管理样式表。

##### 2.1.7.1 CSSOM

HTML 样式表只能使用 `style` 标签 或 `link` 标签创建，CSSOM API 无法创建样式表，但它可以修改样式表中的内容。

CSSOM 基本用法，一般来说需要先获取文档中所有的样式表：

```js
document.styleSheets;
```

document 的 `styleSheets` 属性表示文档中的所有样式表，这是一个可读的列表，可以用方括号运算符下标访问样式表，也可以使用 `item` 方法来访问，它有 `length` 属性表示文档中的样式表数量。

**CSSOM 中的方法**：

- deleteRule: 从样式表中删除规则

  ```js
  document.styleSheets[0].deleteRule(0);
  ```

- insertRule: 在当前 CSS 样式表中插入新的 CSS 规则

  ```js
  document.styleSheets[0].insertRule('#blanc { color: white; }', 0); // 后面的index是可选的
  ```

- addRule: 方法已过时，不建议使用，随时可能被删除
- removeRule: 方法已过时，不建议使用，随时可能被删除

更进一步，可以获取样式表中的特定规则，并且对它进行一定的操作，具体来说，就是使用它的 cssRule 属性来实现：

```js
document.styleSheets[0].cssRule;
```

这里取到的规则列表，同样是支持 **item、length 和下标运算**。

但是，这里的 Rules 可能是 CSS 的 at-rule，也可能是普通的样式规则。不同的 rule 类型有不同的属性。多数 at-rule 都对应着一个 rule 类型：

- CSSStyleRule
- CSSCharsetRule
- CSSImportRule
- CSSMediaRule
- CSSFontFaceRule
- CSSPageRule
- CSSNamespaceRule
- CSSKeyframesRule
- CSSKeyframeRule
- CSSSupportsRule

其中最常用的 CSSStyleRule 有两个属性：

- selectorText: 一个字符串，表示这条规则的选择器部分
- style: 一个 CSSStyleDeclaration 对象，它是一个 CSS 声明块和 CSS 属性键值对的集合。跟元素的 style 属性是一样的类型，所以可以像修改内联样式一样，直接改变属性修改规则中的具体 CSS 属性定义，也可以使用想 cssText 这样的工具属性。

  - CSSStyleDeclaration.cssText: 当前声明块的文本内容，设置此属性会改变样式
  - CSSStyleDeclaration.parentRule: 当前声明块的 cssRule
  - CSSStyleDeclaration.getPropertyValue: 返回给定属性的值

    ```js
    document.styleSheets[0].cssRules[0].style.getPropertyValue('margin'); // "1px 2px"
    ```

  - CSSStyleDeclaration.removeProperty: 从 CSS 属性块中删除属性

    ```js
    document.styleSheets[0].rules[0].style.removeProperty('margin');
    ```

  - CSSStyleDeclaration.setProperty: 在 CSS 声明块中修改或设置属性

    ```js
    document.styleSheets[0].rules[0].style.setProperty('margin', '1px 2px');
    <!-- 等效于 -->
    document.styleSheets[0].rules[0].style.margin = "1px 2px";
    ```

CSSOM 还提供了一个非常重要的方法，来获取一个元素最终经过 CSS 计算得到的属性：

```js
window.getComputedStyle(document.getElementById('elemId'), null);
```

第一个参数是要获取属性的元素，第二个参数可选，用于选择伪元素(比如, ::after, ::before, ::marker, ::line-marker)。

> 注意：从返回的对象中，查询如 font 等简写名称不适用于大多数浏览器。

##### 2.1.7.2 CSSOM View

CSSOM View 这一部分的 API，可以视为 DOM API 的扩展，它在原本的 Element 接口上，添加了显示相关的功能，这些功能，又可以分成 3 个部分：

###### 2.1.7.2.1 窗口 API

窗口 API 用于操作浏览器窗口的位置、尺寸等：

- moveTo(x, y): 窗口移动到屏幕的特定坐标
- moveBy(x, y): 窗口移动特定距离
- resizeTo(x, y): 改变窗口大小到特定尺寸
- resizeBy(x, y): 改变窗口大小特定尺寸

此外，窗口 API 还规定了 `window.open()` 的第三个参数：

```js
window.open('about:blank', '_blank', 'width=100,height=100,left=100,right=100');
```

> 注意：一些浏览器出于安全考虑没有实现，也不适用于移动端浏览器，不建议使用。

###### 2.1.7.2.2 滚动 API

浏览器可视区域的滚动和内部元素的滚动，两者必须分别看待，两者的性能和行为都有区别。

1. **视口滚动 API**
   可视区域(视口)滚动行为由 window 对象上的一组 API 控制：

   - scrollX: 是视口的属性，表示 X 方向上的当前滚动距离，有别名 pageXOffset，为了跨浏览器兼容性，优先使用 `pageXOffset`。

     ```js
     <!-- 兼容性代码 -->
     let x = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
     ```

   - scrollY: 是视口的属性，表示 Y 方向上的当前滚动距离，有 别名 pageYOffset，为了跨浏览器兼容性，优先使用 pageXOffset。

     ```js
     <!-- 兼容性代码 -->
     let y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
     ```

   - scroll(x, y): 使页面滚动到特定的位置，有别名 scrollTo，也支持传入配置型参数{top, left, behavior}，behavior 指定滚动是平滑还是立即跳转

     ```js
     window.scroll(0, 100);
     ```

   - scrollBy(x, y): 使页面滚动指定的距离，也支持传入配置型参数{top, left, behavior}，behavior 指定滚动是平滑还是立即跳转

     ```js
     window.scrollBy(0, window.innerHeight); // 向下滚动一页
     ```

   通过这些属性和方法，可以读取视口的滚动位置和操纵视口滚动。不过，要想监听视口滚动事件，需要在 document 对象上绑定事件监听函数：
   例：[CSSOM-View.html 行 17](./示例文件/CSSOM-View.html)

   > 注意：视口滚动 API 是页面的顶层容器的滚动，大部分移动端浏览器都会采用一些性能优化，它和元素滚动不完全一样。

2. **元素滚动 API**
   Element 类，为了支持滚动，加入了以下元素滚动 API：
   - scrollTop: 元素的属性，表示 Y 方向上的当前滚动距离
   - scrollLeft: 元素的属性，表示 X 方向上的当前滚动距离
     例：[CSSOM-View.html 行 13](./示例文件/CSSOM-View.html)
   - scrollWidth: 元素的属性，表示元素内部的滚动内容的宽度
   - scrollHeight: 元素的属性，表示元素内部的滚动内容的高度
     例：[CSSOM-View.html 行 14](./示例文件/CSSOM-View.html)
   - scroll(x, y): 使元素滚动到特定的距离，有别名 scrollTo，也支持传入配置型参数 {top, left, behavior}，behavior 指定滚动是平滑还是立即跳转
   - scrollBy(x, y): 使元素滚动指定的距离，也支持传入配置型参数{top, left, behavior}，behavior 指定滚动是平滑还是立即跳转
   - scrollIntoView(arg): 让当前的元素滚动到浏览器窗口的可视区域内，实验性功能
     可滚动的元素也支持 scroll 事件，在元素上监听它的事件即可：
     例：[CSSOM-View.html 行 18](./示例文件/CSSOM-View.html)

###### 2.1.7.2.3 布局 API

1. 全局尺寸信息
   window 对象上提供了一些全局的尺寸信息，它是通过属性来提供的：
   ![CSSOM-布局API-全局尺寸信息](./image/CSSOM-布局API-全局尺寸信息.png)

   - window.innerHeight, window.innerWidth: 这两个属性表示视口的大小

   - window.outerHeight, window.outerWidth: 这两个属性表示浏览器窗口占据的大小
     例：[CSSOM-View.html 行 11](./示例文件/CSSOM-View.html)

   - window.devicePixelRatio: 这个属性非常重要，表示物理像素和 CSS 像素单位的倍率关系，Retina 屏这个值是 2，后来也出现了一些 3 倍的 Android 屏

   - window.screen(屏幕尺寸相关的信息)
     - window.screen.width, window.screen.height 设备的屏幕尺寸
     - window.screen.availWidth, window.screen.availHeight 设备屏幕的可渲染尺寸，一些 Android 机器会把屏幕的一部分预留做固定按钮，所有有这两个属性
     - window.screen.colorDepth, window.screen.pixelDepth 这两个属性是固定值 24，是为了以后预留

   > 主要使用的是 `innerHeight`、`innerWidth` 和 `devicePixelRatio` 三个属性，因为前端开发工作只需要跟视口打交道。

2. 元素的布局信息
   只有盒有宽和高，元素是没有的。所以获取宽高的对象应该是"盒"，于是 CSSOM View 为 Element 类添加了两个方法：

   - getClientRects: 返回一个指向客户端中每一个盒子的边界矩形的 ClientRect 对象集合，该对象是与该元素相关的 CSS 边框，每个 ClientRect 对象包含一组描述该边框的只读属性——left、top、right 和 bottom，单位为像素，这些属性值是相对于视口的 top-left 的。

   - getBoundingClientRect: 返回元素的大小及其相对于视口的位置，返回值是一个 DOMRect 对象，这个对象是由该元素的 getClientRects() 方法返回的一组矩形的集合，就是该元素的 CSS 边框大小。返回的结果是包含完整元素的最小矩形，并且拥有 left, top, right, bottom, x, y, width, 和 height 这几个以像素为单位的只读属性用于描述整个边框。除了 width 和 height 以外的属性是相对于视图窗口的左上角来计算的。

     > 注意：这个 API 获取的区域会包括当 overflow 为 visible 时的子元素区域。

   根据实际的精确度需要，可以选择何时使用这两个 API。这两个 API 获取的矩形区域都是相对于视口的坐标，这意味着，这些区域都是受滚动影响的。

   如果要获取相对坐标，或者包含滚动区域的坐标，需要一点小技巧：

   ```js
   var offsetX = document.documentElement.getBoundingClientRect().x - element.getBoundingClientRect().x;
   ```

   > 这两个 API 的兼容性非常好，定义又非常清晰，如果是用 JS 实现视觉效果时，尽量使用这两个 API。

## 三. 浏览器事件

### 3.1 事件概述

一般来说，事件来自输入设备，输入设备有 3 种：

- 键盘
- 鼠标
- 触摸屏

**这其中触摸屏和鼠标又有一定的共性，它们被称为 pointer 设备，pointer 设备，是指它的输入最终会被抽象成屏幕上的一个点。**但是触摸屏和鼠标又有一定区别，它们的精度、反应时间和支持的点的数量都不一样。

现代的 UI 系统，都源自 WIMP 系统。WIMP 即 Window Icon Menu Pointer 四个要素。WIMP 非常成功，以至于有一个观点"能够点击一个按钮"，实际上，只能够点击鼠标上的按钮或触摸屏，是操作系统和浏览器把这个信息对应到一个逻辑上的按钮，在使得它的视图对点击事件有反应。

### 3.2 捕获与冒泡

实际上点击事件来自触摸屏或鼠标，鼠标点击并没有位置信息，但是一般操作系统会根据位移的累计计算出来，跟触摸屏一样，提供一个坐标给浏览器。

那么 捕获过程 就是，把这个坐标转换为具体的元素上事件的过程。
而冒泡事件，则是符合人类逻辑思维的：当按到电视开关，也就按到了电视。
所以，可以认为，捕获是计算机处理事件的逻辑，是从外向内的，而冒泡是人类处理事件的逻辑，是从内向外的。一个事件发生时，总是先捕获过程再冒泡过程，跟是否监听无关。

**事件传播顺序**:

```html
<body>
  <input id="i" />
</body>
```

```js
// 事件触发顺序 1 2 4 3
// 一个事件发生时，总是先捕获过程再冒泡过程，跟是否监听无关
document.body.addEventListener(
  'mousedown',
  () => {
    console.log(1);
  },
  true
);

document.getElementById('i').addEventListener(
  'mousedown',
  () => {
    console.log(2);
  },
  true
);

document.body.addEventListener(
  'mousedown',
  () => {
    console.log(3);
  },
  false
);

document.getElementById('i').addEventListener(
  'mousedown',
  () => {
    console.log(4);
  },
  false
);
```

监听事件的 API 是 `addEventListener` 有三个参数：

- type: 表示监听事件类型的字符串

- listener: 当监听的事件类型触发时，会接收到一个事件通知对象(实现了 Event 接口的对象)。listener 可以是一个函数，也可以是一个具有 handleEvent 方法的对象。

  ```js
  // addEventListener()方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行。
  // addEventListener()的工作原理是将实现 EventListener 的函数或对象添加到调用它的 EventTarget 上的指定事件类型的事件侦听器列表中。
  document.body.addEventListener(
    'mousedown',
    {
      // 第二个参数可以是具有一个 handleEvent 方法的对象
      handleEvent: function (e) {
        console.log(e);
      }
    },
    true
  );
  ```

- useCaptrue: 捕获还是冒泡，默认 false 冒泡。第三个参数还可以是一个指定有关 listener 属性的可选参数对象。

  ```js
  // 第三个参数还可以是一个指定有关 listener 属性的可选参数对象，有以下三个可选值
  let options = {
    // 捕获还是冒泡，默认 false 冒泡
    useCapture: false,
    // true 表示 listener 在添加后最多调用一次，之后自动移除
    once: true,
    // 设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。preventDefault() 取消事件的默认行为
    passive: true
  };
  document.getElementById('t').addEventListener(
    'click',
    function (e) {
      console.log(5);
    },
    options
  );
  ```

> 建议不传第三个参数，默认使用冒泡模式。当开发组件时，遇到需要父元素控制子元素的行为，可以使用捕获机制。

### 3.3 焦点

键盘事件是由焦点系统控制的，一般来说，操作系统也会提供一套焦点系统，但是现代浏览器一般都选择在自己的系统内覆盖原本的焦点系统。

焦点系统也是视障用户访问的重要入口，所以设计合理的焦点系统是非常重要的产品需求，不少国家对可访问性有明确的法律要求。

焦点系统认为整个 UI 系统中，有且仅有一个"聚焦"的元素，所有键盘事件的目标元素都是这个聚焦元素。Tab 键被用来切换到下一个可聚焦的元素，焦点系统占用了 Tab 键，但是可以用 JS 来阻止这个行为。

浏览器 API 还提供了 API 来操作焦点：

- HTMLElement.focus(): 这个方法用于设置焦点。
- HTMLElement.blur(): 移除当前元素所获得的焦点。

> 其实原本键盘事件不需要捕获过程，但是为了跟 Pointer 设备保持一致，也规定了由外向内的捕获过程。

### 3.4 自定义事件

除了来自输入设备的事件，还可以自定义事件，实际上事件也是一种非常好的代码架构，但是 DOM API 中的事件并不能用于普通对象，所以只能在 DOM 元素上使用自定义事件。

```js
var evt = new Event('look', { bubbles: true, cancelable: false });
document.dispatchEvent(evt);
```

这里使用 `Event` 构造器来创造了一个新的事件，然后调用 `dispatchEvent` 来在特定元素上触发。还可以给这个 `Event` 添加自定义属性、方法。

> **注意**：这里旧的自定义事件方法（使用 document.createEvent 和 initEvent）已经被废弃。
