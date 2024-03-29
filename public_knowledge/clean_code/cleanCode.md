# 代码整洁之道

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [代码整洁之道](#-代码整洁之道-)
  - [一. 有意义的命名](#-一-有意义的命名-)
    - [1.1 名副其实](#-11-名副其实-)
    - [1.2 避免误导](#-12-避免误导-)
    - [1.3 做有意义的区分](#-13-做有意义的区分-)
    - [1.4 使用读得出来的名称](#-14-使用读得出来的名称-)
    - [1.5 使用可搜索的名称](#-15-使用可搜索的名称-)
    - [1.6 不必使用成员前缀或后缀](#-16-不必使用成员前缀或后缀-)
    - [1.7 类名](#-17-类名-)
    - [1.8 方法名](#-18-方法名-)
    - [1.9 每个概念对应一个词](#-19-每个概念对应一个词-)
    - [1.10 别用双关语](#-110-别用双关语-)
    - [1.11 使用解决方案领域名称](#-111-使用解决方案领域名称-)
    - [1.12 添加有意义的语境](#-112-添加有意义的语境-)
  - [二. 函数](#-二-函数-)
    - [2.1 短小](#-21-短小-)
    - [2.2 自顶向下读代码](#-22-自顶向下读代码-)
    - [2.3 无副作用](#-23-无副作用-)
    - [2.4 使用异常替代返回错误码](#-24-使用异常替代返回错误码-)
      - [2.4.1 抽离 try/catch 代码块](#-241-抽离-trycatch-代码块-)
      - [2.4.2 错误处理就是一件事](#-242-错误处理就是一件事-)
    - [2.5 别重复自己](#-25-别重复自己-)
  - [三. 注释](#-三-注释-)
    - [3.1 好注释](#-31-好注释-)
    - [3.2 坏注释](#-32-坏注释-)
  - [四. 格式](#-四-格式-)
    - [4.1 格式的目的](#-41-格式的目的-)
    - [4.2 垂直格式](#-42-垂直格式-)
      - [4.2.1 概念键垂直方向上的区隔](#-421-概念键垂直方向上的区隔-)
      - [4.2.2 垂直方向上的靠近](#-422-垂直方向上的靠近-)
      - [4.2.3 垂直顺序](#-423-垂直顺序-)
    - [4.3 横向格式](#-43-横向格式-)
      - [4.3.1 水平方向上的区隔与靠近](#-431-水平方向上的区隔与靠近-)
      - [4.3.2 缩进](#-432-缩进-)
      - [4.3.3 空范围](#-433-空范围-)
  - [五. 对象与数据格式](#-五-对象与数据格式-)
    - [5.1 数据抽象](#-51-数据抽象-)
    - [5.2 数据、对象的反对称性](#-52-数据-对象的反对称性-)
    - [5.3 得墨忒耳律](#-53-得墨忒耳律-)
      - [5.3.1 火车失事](#-531-火车失事-)
      - [5.3.2 混杂](#-532-混杂-)
      - [5.3.3 隐藏结构](#-533-隐藏结构-)
    - [5.4 数据传送结构](#-54-数据传送结构-)
  - [六. 错误处理](#-六-错误处理-)
    - [6.1 使用异常而非返回码](#-61-使用异常而非返回码-)
    - [6.2 先写 try-catch-finally 语句](#-62-先写-try-catch-finally-语句-)
    - [6.3 使用未检异常](#-63-使用未检异常-)
    - [6.4 给出异常发生的环境说明](#-64-给出异常发生的环境说明-)
    - [6.5 依调用者需要定义异常类](#-65-依调用者需要定义异常类-)
    - [6.6 定义常规流程](#-66-定义常规流程-)
    - [6.7 别返回 null](#-67-别返回-null-)
    - [6.8 别传递 null](#-68-别传递-null-)

<!-- /code_chunk_output -->

## 一. 有意义的命名

### 1.1 名副其实

变量、函数或类的名称应该已经回复了所有的大问题。它该告诉别人，它为什么会存在，做什么事，应该怎么用。

### 1.2 避免误导

必须避免留下掩藏代码本意的错误线索：

- 避免使用与本意相悖的词。
- 命名中避免出现类型名，如：Array、Object 等。
- 提放使用外形相似度较高的名称。

### 1.3 做有意义的区分

- 以数字系列命名是依义命名的对立面。这样的名称纯属误导，完全没有提供正确信息，没有提供导向作者意图的线索。

- 废话是另一种没意义的区分。假设有一个 Product 类，如果还有 ProductInfo 或 ProductData 的类。它们的名称虽然不同，意义却无区别，是意义含混的废话。

要区分名称，就要以读者能鉴别不同之处的方式来区分。

### 1.4 使用读得出来的名称

### 1.5 使用可搜索的名称

单字母名称仅用于短方法的本地变量。**名称长短应与其作用域大小相对应**。

### 1.6 不必使用成员前缀或后缀

### 1.7 类名

类名和对象名应该使用名词或名词短语。类名不应当是动词。

### 1.8 方法名

方法名应当是动词或动词短语。

### 1.9 每个概念对应一个词

给每个抽象概念选一个词，并且一以贯之。例如，使用 fetch、retrieve 来给多个类中的同种方法命名。

### 1.10 别用双关语

避免将同一单词用于不同目的。

### 1.11 使用解决方案领域名称

尽量用计算机科学术语、算法名、模式名。如果不能使用程序员熟悉的术语来命名，就采用所涉问题领域而来的名称。

优秀的程序员和设计师，其工作之一就是分离解决方案领域和问题领域的概念。与问题领域更为接近的代码，应当采用源自问题领域的名称。

### 1.12 添加有意义的语境

很少有名称是能自我说明的。所以，需要命名良好的类、函数等来给读者提供语境。但**不要添加没用的语境**。

## 二. 函数

### 2.1 短小

函数的第一条规则是要短小：

- 每个函数都只做一件事。
  要确保函数只做一件事，函数中的与激怒就要在同一抽象层级上。

- 通常来说，应短于 20 行。
- 函数的缩进层级不该多于两层。

### 2.2 自顶向下读代码

代码应该拥有自顶向下的阅读顺序，让每个函数后面都跟着位于下一抽象层级的函数。

### 2.3 无副作用

副作用是一种谎言、函数承诺只做一件事，但还是会做其他被藏起来的事。这在有的时候会导致令人迷惑的问题。

### 2.4 使用异常替代返回错误码

#### 2.4.1 抽离 try/catch 代码块

try/catch 代码块丑陋不堪，搞乱了代码结构，把错误处理与正常流程混为一谈。最好把 try 和 catch 代码块的主体部分抽离出来，另外形成函数。

#### 2.4.2 错误处理就是一件事

处理错误的函数不该做其他事。而且 catch/finally 代码块后面也不该有其他内容。

### 2.5 别重复自己

## 三. 注释

注释不能美化糟糕的代码。

### 3.1 好注释

- 法律信息

- 提供基本信息的注释

- 对意图的解释
  有时，代码不仅提供了有关实现的有用信息，而且还提供了某个决定后面的意图。

- 阐释
  吧某些晦涩难明的参数或返回值的意义翻译为某种可读形式。

- 警示

- todo 注释
  todo 是一种程序员认为应该做，但由于某些原因目前还没做的工作。

- 放大
  可以用来放大某种开来不合理之物的重要性。

- 公共 API 中的 Javadoc

### 3.2 坏注释

- 喃喃自语

- 多余的注释

- 误导性注释

- 循规式注释
  所谓每个函数都要有 doc 或每个变量都要有注释的规矩是愚蠢可笑的。这类注释会让代码变得散乱，令人迷惑不解。

- 日志式注释
  像是一种记录每次修改的日志。

- 废话注释

- 能用函数或变量时就别用注释

- 位置标记

- 括号后面的注释

  ```java
  public class wc{
    try {
      getUserName()
    } // try
    catch(Exception e) {
      System.err.println(e.getMessage())
    } // catch
  }
  ```

- 归属与署名
  源代码控制系统是这类信息最好的归属地。

- 注释掉的代码

- 非本地信息
  别在本地注释的上下文中给出系统级的信息。

- 信息过多
  别在注释中添加无关的细节描述。

- 不明显的联系
  注释与其描述的代码之间的联系应该是显而易见的。

- 函数头
  短函数不需要太多描述。为只做一件事的短函数选个好名字，通常比写函数头注释好。

- 范例

## 四. 格式

应该保存良好的代码格式，应该选用一套管理代码格式的简单规则，然后贯彻这些规则。如果在团队中工作，则团队应该一致同意采用一套简单的格式规则。

### 4.1 格式的目的

代码格式很重要。代码格式补课忽略，必须严肃对待。代码格式关乎沟通，而沟通是专业开发者的头等大事。

### 4.2 垂直格式

#### 4.2.1 概念键垂直方向上的区隔

几乎所有的代码都是从上往下读，从左往右读。每行展现一个表达式或一个子句，每组代码行展示一条完整的思路。这些思路用空白区行隔开。

在导入声明、每个函数之间，都要有空白行隔开。这条极其简单的规则极大地影响代码的视觉外观。每个空白行都是一条线索，标识出新的独立概念。

#### 4.2.2 垂直方向上的靠近

靠近的代码行暗示了它们之间的紧密关系。

#### 4.2.3 垂直顺序

一般，被调用的函数应该放在执行调用的函数下面，这样就建立的一种自顶向下贯穿源代码模块的良好信息流。

> JS、C 等语言中则完全不同，在这些语言中，函数应该在被调用之间定义，至少是声明。

### 4.3 横向格式

代码行宽度应该是 100 或 120 个字符。

#### 4.3.1 水平方向上的区隔与靠近

使用空格字符可以将彼此紧密相关的事物连接到一起，也可以用空格字符把相关性较弱的事物区隔开。

#### 4.3.2 缩进

程序员相当依赖缩进。

#### 4.3.3 空范围

有时，while 或 for 语句的语句体为空，这种并不好，如果无法避免，就确保范围体的缩进。

```java
while (dis.read(buf, 0, readBufferSize) != 1)
  ;
```

## 五. 对象与数据格式

### 5.1 数据抽象

隐藏实现并非只是在变量之间放上一个函数层 name 简单。隐藏实现关乎抽象！类并不简单地用取值器和赋值器将其变量推向外界，而是曝露抽象接口，以便于用户无须了解数据的实现就能操作数据本体（essence）。

不愿意曝露数据细节，而更愿意以抽象形态表述数据。这并不意味着只是用接口、赋值器、取值器就万事大吉。要以最好的方式呈现某个对象包含的数据，需要进行严肃的思考。随意乱加取值器和赋值器是最坏的选择。

### 5.2 数据、对象的反对称性

对象把数据隐藏于操作之后，曝露操作数据的函数；而数据结构曝露其数据，没有提供有意义的函数。它们是对立的。这种差异貌似微小，但却有深远的意义。

对象与数据结构之间的二分原理：**过程式代码（使用数据结构的代码）便于在不改动既有数据结构的前提下添加新函数；面向对象代码便于在不改动既有函数的前提下添加新类**。反过来讲：**过程式代码难以添加新数据结构，因为必须修改所有函数；面向对象代码难以添加新函数，因为必须修改所有类**。

### 5.3 得墨忒耳律

著名的德墨忒耳律认为，**模块不应了解它所操作对象的内部情形**。更准确地说，得墨忒耳律认为，类 C 的方法 f 只应该调用以下对象的方法：

- C
- 由 f 创建的对象
- 作为参数传递给 f 的参数
- 由 C 的实体变量持有的对象

方法不应调用由任何函数返回的对象的方法。

#### 5.3.1 火车失事

```java
// bad
Options opts = ctxt.getOptions();
File scratchDir = opts.getScratchDir();
final String outputDir = scratchDir.getAbsolutePath();

// good
final String putputDir = ctxt.options.scratchDir.absolutePath;
```

#### 5.3.2 混杂

这种混杂有时会导致混合结构，即一半是对象，另一半是数据结构。此类混杂增加了添加新函数的难度，也增加了添加新数据结构的难度。

#### 5.3.3 隐藏结构

### 5.4 数据传送结构

最为精炼的数据结构，是一个只有公共变量、没有函数的类。这种数据结构有事被称为数据传送对象（Data Transfer Objects，DTO）。DTO 是非常有用的结构，尤其是在与数据库通信或解析套接字传递的消息之类的场景中，在应用程序代码里一系列将原始数据转换为数据库的翻译过程中，它们往往是排头兵。

Active Record
: 这是一种特殊的 DTO 形式。它们是拥有公共（或可“bean”式访问的）变量的数据结构，但通常也会有类似 save 和 find 这样的可浏览方法。Active Record 一般是对数据库表或其他数据源的直接翻译。

## 六. 错误处理

### 6.1 使用异常而非返回码

### 6.2 先写 try-catch-finally 语句

异常的妙处之一是，它们在程序中定义了范围。执行 try-catch-finally 语句中 try 部分的代码时，是在表明可随时取消执行，并在 catch 语句中接续。

### 6.3 使用未检异常

### 6.4 给出异常发生的环境说明

抛出的每个异常，都应当提供足够的环境说明，以便判断错误的来源与位置。

### 6.5 依调用者需要定义异常类

对异常分类有很多方式。不过，在应用程序中定义异常类时，最重要的考虑应该是它们**如何被捕获**。

### 6.6 定义常规流程

### 6.7 别返回 null

### 6.8 别传递 null
