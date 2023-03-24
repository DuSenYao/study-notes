# Canvas

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Canvas](#canvas)
  - [一. Canvas 概述](#一-canvas-概述)
    - [1.1 Canvas 与 SVG](#11-canvas-与-svg)
    - [1.2 Canvas 元素](#12-canvas-元素)
  - [二. Canvas 基础](#二-canvas-基础)
    - [2.1 直线图形](#21-直线图形)
      - [2.1.1 直线](#211-直线)
      - [2.1.2 矩形](#212-矩形)
        - [2.1.2.1 描边矩形](#2121-描边矩形)
        - [2.1.2.2 填充矩形](#2122-填充矩形)
        - [2.1.2.3 rect() 方法](#2123-rect-方法)
        - [2.1.2.4 清空矩形](#2124-清空矩形)
      - [2.1.3 多边形](#213-多边形)
    - [2.2 曲线图形](#22-曲线图形)
      - [2.2.1 圆形](#221-圆形)
      - [2.2.2 弧线](#222-弧线)
      - [2.2.3 二次贝塞尔曲线](#223-二次贝塞尔曲线)
      - [2.2.4 三次贝塞尔曲线](#224-三次贝塞尔曲线)
    - [2.3 线条操作](#23-线条操作)
      - [2.3.1 lineWidth](#231-linewidth)
      - [2.3.2 lineCap](#232-linecap)
      - [2.3.3 lineJoin](#233-linejoin)
      - [2.3.4 setLineDash(segments)](#234-setlinedashsegments)
    - [2.4 文本操作](#24-文本操作)
      - [2.4.1 strokeText()](#241-stroketext)
      - [2.4.2 fillText()](#242-filltext)
      - [2.4.3 measureText()](#243-measuretext)
      - [2.4.4 font](#244-font)
      - [2.4.5 textAlign](#245-textalign)
      - [2.4.6 textBaseline](#246-textbaseline)
      - [2.4.7 direction](#247-direction)
    - [2.5 图片操作](#25-图片操作)
      - [2.5.1 drawImage()](#251-drawimage)

<!-- /code_chunk_output -->

## 一. Canvas 概述

在 HTML5 之前，为了让页面获得绚丽多彩的效果，在很多情况下都是借助 “图片” 来实现的。然而图片体积大、加载速度慢，使用图片的代价就是降低了页面的性能。为了应对日渐复杂的 Web 应用开发，W3C 在 HTML5 标准中引入了 Canvas 技术。

Canvas，又称 “画布”，是 HTML5 的核心技术之一。HTML5 中新增了一个 Canvas 元素，Canvas 技术，指的就是使用 Canvas 元素结合 JS 来绘制各种图形的技术。它可以用绘制图形、绘制图表、动画效果、游戏开发等。

### 1.1 Canvas 与 SVG

HTML5 有两个主要的 2D 图形技术：Canvas 和 SVG。这是两门完全不同的技术，两者具有以下区别：

- Canvas 是使用 JS 动态生成的，SVG 是使用 XML 静态描述的。

- Canvas 是基于 “位图” 的，适用于像素处理和动态渲染，放大图形会使图形失真。SVG 是基于 “矢量” 的，不适用于像素处理和适合静态描述，放大图形也不会使图形失真。

- 若发生修改，使用 Canvas 需要重绘，而使用 SVG 不需要重绘。

Canvas 与 SVG 的关系，简单来说，就像 “美术与几何” 的关系一样。

### 1.2 Canvas 元素

HTML5 Canvas，简单来说，就是一门使用 JS 来操作 Canvas 元素的技术。使用 Canvas 元素来绘制图形，需要以下 3 步：

1. 获取 canvas 对象。
2. 获取上下文环境对象 context。
3. 开始绘制图形。

```js
// 1. 获取canvas对象
let cnv = document.getElementById('canvas');
// 2. 获取上下文环境对象 context
let cxt = cnv.getContext('2d');
// 3. 开始绘制图形
cxt.moveTo(50, 100);
cxt.lineTo(150, 50);
cxt.stroke();
```

Canvas 是一个行内块元素，一般需要指定其 3 个属性：id、width 和 height。width 和 height 分别用于定义 Canvas 元素的宽度和高度。默认情况下，Canvas 元素的宽度为 300px，高度为 150px。

> **注意**：在实际开发中 Canvas 的宽度和高度，一定要在 HTML 属性中定义。

## 二. Canvas 基础

### 2.1 直线图形

在 Canvas 中，基本图形有两种：

- 直线图形：常见的直线图形有以下 3 种。

  - 直线
  - 矩形
  - 多边形

- 曲线图形

**Canvas 使用的坐标系是 W3C 坐标系**，它与经常见到的数学坐标系唯一的区别在于 y 轴正方向的不同：数学坐标系 y 轴正方向向上。W3C 坐标系，y 轴正方向向下。

#### 2.1.1 直线

可以将 `moveTo()` 和 `lineTo()` 这两个方法配合使用来画直线。利用这两个方法，可以画一条直线，也可以同时画多条直线。

```js
// 一条直线
// cxt 表示上下文环境对象 context。
// (x1, y1) 表示直线 “起点” 的坐标。moveTo(x1, y1) 的含义是 “将画笔移到点 (x1, y1) 位置，然后开始绘图”。
cxt.moveTo(x1, y1);
// (x2, y2) 表示直线 “终点” 的坐标。lineTo(x2, y2) 的含义是 “使用画笔从起点 (x1,y1) 开始画直线，一直画到终点（×2,y2）”。
cxt.lineTo(x2, y2);
// 上面两句代码仅仅是确定直线的 “起点坐标” 和 “终点坐标”，但是实际上画笔还没 “动”。因此，还需要调用上下文环境对象的 stroke() 方法才有效。
cxt.stroke();
```

```js
// 多条直线
cxt.moveTo(x1, y1);
cxt.lineTo(x2, y2);
cxt.lineTo(x3, y3);
// ......
cxt.stroke();
```

lineTo() 方法是可以重复使用的：第 1 次使用 lineTo() 后，画笔将自动移到终点；第 2 次使用 lineTo() 后，Canvas 会以 “上一个终点的坐标” 作为第 2 次调用的起点，然后再开始画直线，依此类推。

#### 2.1.2 矩形

对于绘制矩形，Canvas 另外为提供了独立的方法来实现。在 Canvas 中，矩形分为两种：

- 描边矩形
- 填充矩形

##### 2.1.2.1 描边矩形

使用 `strokeStyle` 属性和 `strokeRect()` 方法，可以画一个描边矩形。

```js
cxt.strokeStyle = '属性值';
cxt.strokeRect(x, y, width, height);
```

**strokeStyle 属性**
strokeStyle 属性取值有 3 种：颜色值、渐变色和图像。先来看一下 strokeStyle 属性取值为颜色值的几种情况：

```js
cxt.strokeStyle = '#FF0000'; // 十六进制颜色值
cxt.strokeStyle = 'red'; // 颜色关键字
cxt.strokeStyle = 'rgb(255, 0, 0)'; // rgb 颜色值
cxt.strokeStyle = 'rgba(255, 0, 0, 0.8)'; // rgba 颜色值
```

**strokeRect() 方法**
strokeRect() 方法用于确定矩形的坐标，其中 (x, y) 为矩形左上角点的坐标，width 表示矩形的宽度，height 表示矩形的高度，默认情况下 width 和 height 都是以 px 为单位。

> **注意**：strokeStyle 属性必须在使用 strokeRect() 方法之前定义，否则 strokeStyle 属性无效。

##### 2.1.2.2 填充矩形

使用 `fillStyle` 属性和 `fillRect()` 方法可以画一个填充矩形。

```js
cxt.fillStyle = '属性值';
cxt.fillRect(x, y, width, height);
```

fillStyle 属性跟 strokeStyle 属性一样，取值也有 3 种：颜色值、渐变色和图像。

fillRect() 方法跟 strokeRect() 方法一样，用于确定矩形的坐标，其中 (x, y) 为矩形左上角点的坐标，width 表示矩形的宽度，height 表示矩形的高度。

> **注意**：跟描边矩形一样，填充矩形的 fillStyle 属性也必须在使用 fillRect() 方法之前定义，否则 fillStyle 属性无效。

##### 2.1.2.3 rect() 方法

在 Canvas 中，如果想要绘制一个矩形，除了使用 strokeRect() 和 fillRect() 这两个方法之外，还可以使用 `rect()` 方法。

```js
// x 和 y 为矩形左上角点的坐标，width 表示矩形的宽度，height 表示矩形的高度。
rect(x, y, width, height);
```

使用 strokeRect()、fillRect() 和 rect() 这 3 种方法都可以画矩形。这 3 种方法的参数设置是相同的，不同之处在于实现效果。其中，strokeRect()和 fillRect()这两个方法在被调用之后，会立即把矩形绘制出来。而 rect() 方法在被调用之后，并不会立即把矩形绘制出来。只有在使用 rect() 方法之后再调用 `stroke()` 或 `fill()` 方法，才会把矩形绘制出来。

##### 2.1.2.4 清空矩形

使用 `clearRect()` 方法来清空 “指定矩形区域”。

```js
// x、y 分别表示被清空矩形区域左上角点的横、纵坐标，width 表示矩形的宽度，height 表示矩形的高度。
cxt.clearRect(x, y, width, height);

// 用于清空整个 Canvas
cxt.clearRect(0, 0, cnv.width, cnv.height);
```

> **注意**：请确保在调用 clearRect() 之后绘制新内容前调用 beginPath()。

#### 2.1.3 多边形

多边形也是使用 moveTo() 和 lineTo() 这两个方法画出来的。

- **箭头**
  对于绘制箭头，都是事先确定箭头的 7 个顶点坐标，然后使用 moveTo() 和 lineTo() 方法来绘制。

  ```js
  let cnv = document.getElementById('canvas');
  let cxt = cnv.getContext('2d');
  cxt.moveTo(40, 60);
  cxt.lineTo(100, 60);
  cxt.lineTo(100, 30);
  cxt.lineTo(150, 75);
  cxt.lineTo(100, 120);
  cxt.lineTo(100, 90);
  cxt.lineTo(40, 90);
  cxt.lineTo(40, 60);
  cxt.stroke();
  ```

- **正多边形**

  ![正三角形](./image/正三角形.png)

  根据正三角形的特点，可以封装一个绘制正多边形的函数：createPolygon()。

  ```js
  /**
   * @param {Number} n n 边形
   * @param {Number} dx n 边形中心坐标 x 轴
   * @param {Number} dy n 边形中心坐标 y 轴
   * @param {Number} size n 边形的大小
   */
  function createPolygon(cxt, n, dx, dy, size) {
    cxt.beginPath();
    let degree = (2 * Math.PI) / n;
    for (let i = 0; i < n; i++) {
      let x = Math.cos(i * degree);
      let y = Math.sin(i * degree);
      cxt.lineTo(x * size + dx, y * size + dy);
      cxt.closePath();
    }
  }
  ```

  beginPath() 和 closePath() 一般都是配合使用的。其中，beginPath() 表示 “开始新路径”，closePath() 表示 “关闭路径”。

- **五角星**

  ![五角星顶点分析](./image/%E4%BA%94%E8%A7%92%E6%98%9F%E9%A1%B6%E7%82%B9%E5%88%86%E6%9E%90.png)

  同样，也是先获取各个顶点的坐标，然后使用 moveTo() 和 lineTo() 把五角星绘制出来的。根据上面的分析图，可以知道 ∠BOA=36°、∠AOX=18°、∠BOX=54°，然后结合三角函数，很容易得出五角星各个顶点的坐标。

  ```js
  let cnv = document.getElementById('canvas');
  let cxt = cnv.getContext('2d');
  cxt.beginPath();
  for (let i = 0; i < 5; i++) {
    cxt.lineTo(
      Math.cos(((18 + i * 72) * Math.PI) / 180) * 50 + 100,
      -Math.sin(((18 + i * 72) * Math.PI) / 180) * 50 + 100
    );
    cxt.lineTo(
      Math.cos(((54 + i * 72) * Math.PI) / 180) * 25 + 100,
      -Math.sin(((54 + i * 72) * Math.PI) / 180) * 25 + 100
    );
  }
  cxt.closePath();
  cxt.stroke();
  ```

### 2.2 曲线图形

曲线图形，一般涉及两种情况：

- 曲线
- 弧线

曲线和弧线是两个不同的概念。简单来说，弧线是圆的一部分，曲线则不一定。弧线上的每个点都具有相同的曲率，曲线则不一定。也可以这样说，曲线包含弧线。

有关 Canvas 曲线图形，有以下 4 个：

- 圆形
- 弧线
- 二次贝塞尔曲线
- 三次贝塞尔曲线

#### 2.2.1 圆形

使用 `arc()` 方法来画一个圆。

```js
cxt.beginPath();
cxt.arc(x, y, 半径, 开始角度, 结束角度, anticlockwise);
cxt.closePath();
```

> beginPath() 和 closePath() 用于封闭圆形。

对于 arc() 方法，其中参数说明如下：

![arc()方法参数说明](<./image/arc()%E6%96%B9%E6%B3%95%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E.png>)

- **x 和 y**：x 表示圆心横坐标，y 表示圆心纵坐标。(x, y) 表示圆心坐标。

- **开始角度、结束角度**：开始角度和结束角度都是以弧度为单位。例如 180 就应该写成 Math.PI，而 360 就应该写成 Math.Pl\*2，依此类推。

  对于开始角度和结束角度，在实际开发中推荐这种写法：`度数 * Math.PI/180`。这种写法可以一眼就能看出角度是多少，如下。

  ```js
  (120 * Math.PI) / 180; // 120°
  (150 * Math.PI) / 180; // 150°
  ```

- **anticlockwise**：anticlockwise 是一个布尔值，当其值为 true 时，表示按逆时针方向绘制，为 false 时，表示按顺时针方向绘制。默认值为 false。

上面这个语法仅仅是对圆形的一个 “状态描述”，还需要对圆形进行 “描边” 和 “填充”，这样才会有实际效果。这一点跟矩形是一样的。

- **描边圆**

  可以使用 `stroke()` 方法来绘制一个 “描边的圆”：

  ```js
  // 状态描述
  cxt.beginPath();
  cxt.arc(x, y, 半径, 开始角度, 结束角度, anticlockwise);
  cxt.closePath();
  // 描边
  cxt.strokeStyle = '颜色值';
  cxt.stroke();
  ```

  strokeStyle 属性用于定义边框颜色，stroke() 方法用于执行描边动作。

- **填充圆**

  可以使用 `fill()` 方法来绘制一个“填充的圆”。

  ```js
  // 状态描述
  cxt.arc(x, 半径, 开始角度, 结束角度, anticlockwise);
  // 描边
  cxt.fillStyle = '颜色值';
  cxt.fill();
  ```

  fillStyle 属性用于定义填充的颜色，fill() 方法用于定义填充动作。

```js
/**
 * 绘制扇形
 * @param {CanvasRenderingContext2D} cxt
 * @param {Number} x 圆心x坐标
 * @param {Number} y 圆心y坐标
 * @param {Number} radius 半径
 * @param {Number} startAngle 起始角度
 * @param {Number} endAngle 结束角度
 * @param {String} fillStyle 填充颜色
 */
function createSector(cxt, x, y, radius, startAngle, endAngle, fillStyle) {
  cxt.beginPath();
  cxt.moveTo(x, y);
  cxt.arc(x, y, radius, (startAngle * Math.PI) / 180, (endAngle * Math.PI) / 180);
  cxt.closePath();
  cxt.fillStyle = fillStyle;
  cxt.fill();
}

window.onload = () => {
  let cnv = document.getElementById('canvas');
  let cxt = cnv.getContext('2d');
  createSector(cxt, 100, 100, 50, 0, 40, 'red');
  createSector(cxt, 100, 100, 50, 40, 180, '#369');
  createSector(cxt, 100, 100, 50, 180, 210, 'green');
  createSector(cxt, 100, 100, 50, 210, 360, 'yellow');
};
```

#### 2.2.2 弧线

在 Canvas 中，如果想要画弧线，常用以下两种方法：

- `arc()`

  arc() 方法不仅可以用于画圆形，还可以用于绘制弧线。

  ```js
  // 状态描述
  cxt.beginPath();
  cxt.arc(x, y, 半径, 开始角度, 结束角度, anticlockwise);
  // 描边
  cxt.strokeStyle = '颜色值';
  cxt.stroke();
  ```

  ![使用arc()方法画弧线分析](<./image/%E4%BD%BF%E7%94%A8arc()%E6%96%B9%E6%B3%95%E7%94%BB%E5%BC%A7%E7%BA%BF%E5%88%86%E6%9E%90.png>)

  > **注意**：使用 arc() 方法画弧线与画描边圆最大的不同在于：在使用 arc() 方法画弧线时不使用 closePath() 方法来关闭路径。因为弧线不是一个闭合图形。

- `arcTo()`

  ```js
  cxt.arcTo(cx, cy, x2, y2, radius);
  ```

  (cx, cy) 表示控制点的坐标，(x2, y2) 表示结束点的坐标，radius 表示圆弧的半径。

  ![arcTo()方法画弧线分析](<./image/arcTo()方法画弧线分析.png>)

  想要画一条弧线，需要提供 3 个点坐标：开始点、控制点和结束点。其中，开始点一般由 moveTo() 或 lineTo() 提供，arcTo() 则提供了控制点和结束点。

  arcTo() 方法就是利用开始点、控制点和结束点所形成的夹角绘制一段与夹角的两边相切并且半径为 radius 的圆弧。其中，弧线的起点是 “开始点所在边与圆的切点”，而弧线的终点是 “结束点所在边与圆的切点”。

  使用 arcTo() 方法绘制的弧线是两个切点之间长度最短的那个圆弧。此外，如果开始点不是弧线起点，arcTo() 方法还将添加一条当前端点到弧线起点的直线线段。也就是说，开始点坐标并不一定是弧线的起点坐标。

  假设圆角矩形的圆角半径为 r，宽 width，高 height，圆角矩形相对于坐标原点的位置为：(offsetX, offsetY)，则从上边开始，起点位置为：(offsetX + r, offsetY)。

  4 条边连线的终点位置分别为：(offsetX + width - r, offsetY)、(offsetX + width, offsetY + height - r)、(offsetX + r, offsetY + height)和 (offsetX, offsetY + y)。

  4 段圆弧的终点分别为：(offsetX + width, offsetY + r)、(offsetX + width - r, offsetY + height)、(offsetX, offsetY + height - r) 和 (offsetX + r, offsetY)。

  ```js
  /**
   * 绘制圆角矩形
   * @param cxt canvas 的上下文
   * @param {Number} width 矩形的宽度
   * @param {Number} height 矩形的高度
   * @param {Number} r 圆角的半径
   * @param {Number} offsetX 矩形左上角顶点的横坐标
   * @param {Number} offsetY 矩形左上角顶点的纵坐标
   */
  function createRoundedRect(cxt, width, height, r, offsetX, offsetY) {
    cxt.beginPath();
    cxt.moveTo(offsetX + r, offsetY);
    cxt.lineTo(offsetX + width - r, offsetY);
    cxt.arcTo(offsetX + width, offsetY, offsetY + width, offsetY + r, r);
    cxt.lineTo(offsetX + width, offsetY + height - r);
    cxt.arcTo(offsetX + width, offsetY + height, offsetX + width - r, offsetY + height, r);
    cxt.lineTo(offsetX + r, offsetY + height);
    cxt.arcTo(offsetX, offsetY + height, offsetX, offsetY + height - r, r);
    cxt.lineTo(offsetX, offsetY + r);
    cxt.arcTo(offsetX, offsetY, offsetX + r, offsetY, r);
    cxt.closePath();
  }
  window.onload = () => {
    let cnv = document.getElementById('canvas');
    let cxt = cnv.getContext('2d');
    createRoundedRect(cxt, 100, 100, 20, 20, 20);
    cxt.fillStyle = 'HotPink';
    cxt.fill();
  };
  ```

#### 2.2.3 二次贝塞尔曲线

Canvas 中画曲线，一般都是使用贝塞尔曲线（应用于二维图形应用程序的数学曲线）来实现。

在 Canvas 中，常见的贝塞尔曲线有两种：

- 二次贝塞尔曲线
- 三次贝塞尔曲线

可以使用 `quadraticCurveTo()` 方法来画二次贝塞尔曲线。

```js
cxt.quadraticCurveTo(cx, cy, x2, y2);
```

(cx, cy) 表示控制点的坐标，(x2, y2) 表示结束点的坐标。绘制一条二次贝塞尔曲线，同样也需要 3 个点的坐标：开始点、控制点和结束点。其中，开始点一般由 moveTo() 或 lineTo() 提供，而控制点和结束点由 quadraticCurveTo() 提供。

![quadraticCurveTo()方法分析](<./image/quadraticCurveTo()%E6%96%B9%E6%B3%95%E5%88%86%E6%9E%90.png>)

![二次贝塞尔曲线](./image/%E4%BA%8C%E6%AC%A1%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF.gif)

```js
// 使用二次贝塞尔曲线画气泡
let cnv = document.getElementById('canvas');
let cxt = cnv.getContext('2d');
cxt.moveTo(75, 25);
cxt.quadraticCurveTo(25, 25, 25, 62);
cxt.quadraticCurveTo(25, 100, 50, 100);
cxt.quadraticCurveTo(50, 120, 30, 125);
cxt.quadraticCurveTo(60, 120, 65, 100);
cxt.quadraticCurveTo(125, 100, 125, 62);
cxt.quadraticCurveTo(125, 25, 75, 25);
cxt.stroke();
```

#### 2.2.4 三次贝塞尔曲线

可以使用 bezierCurveTo() 方法来绘制三次贝塞尔曲线。

```js
cxt.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
```

(cx1, cy1) 表示控制点 1 的坐标，(cx2, cy2) 表示控制点 2 的坐标，(x, y)表示结束点的坐标。

绘制一条三次贝塞尔曲线，需要 4 个点：开始点、控制点 1、控制点 2 和结束点。其中，开始点一般由 moveTo() 或 lineTo() 提供，bezierCurveTo() 提供控制点 1、控制点 2 和结束点。

![bezierCurveTo()方法分析](<./image/bezierCurveTo()%E6%96%B9%E6%B3%95%E5%88%86%E6%9E%90.png>)

三次贝塞尔曲线与二次贝塞尔曲线的唯一区别在于：**三次贝塞尔曲线有两个控制点，而二次贝塞尔曲线只有一个控制点**。

```js
// 三次贝塞尔曲线画心形
let cnv = document.getElementById('canvas');
let cxt = cnv.getContext('2d');
cxt.moveTo(75, 40);
cxt.bezierCurveTo(75, 37, 70, 25, 50, 25);
cxt.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
cxt.bezierCurveTo(20, 80, 40, 102, 75, 120);
cxt.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
cxt.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
cxt.bezierCurveTo(85, 25, 75, 37, 75, 40);
cxt.stroke();
```

```js
/**
 * 使用三次贝塞尔曲线画绘制 N 叶草
 * @param cxt canvas 的上下文
 * @param {Number} n n片
 * @param {Number} dx 花朵中心位置的 x 坐标
 * @param {Number} dy 花朵中心位置的 y 坐标
 * @param {Number} size 花朵的大小
 * @param {Number} length 控制花瓣的长度
 */
function createLeaf(cxt, n, dx, dy, size, length) {
  cxt.beginPath();
  cxt.moveTo(dx, dy + size);
  let degree = (2 * Math.PI) / n;
  // 在一条路径中连续定义首尾相连的多段贝塞尔曲线，其中每段三次贝塞尔曲线的起点和终点都落在圆心为（dx, dy)、半径为 size 的圆弧上
  // 而每段圆弧的两个控制点都落在圆心为 (dx, dy)、半径为 length 的圆弧上，于是形成了 N 叶草的图形。起点、终点和控制点坐标是使用正弦和余弦函数计算出来的。
  for (let i = 1; i < n + 1; i++) {
    // 计算控制点的坐标
    let cx1 = Math.sin((i - 1) * degree) * length + dx;
    let cy1 = Math.cos((i - 1) * degree) * length + dy;
    let cx2 = Math.sin(i * degree) * length + dx;
    let cy2 = Math.cos(i * degree) * length + dy;
    // 计算结束点的坐标
    let x = Math.sin(i * degree) * size + dx;
    let y = Math.cos(i * degree) * size + dy;
    cxt.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
  }
  cxt.closePath();
}

window.onload = () => {
  let cnv = document.getElementById('canvas');
  let cxt = cnv.getContext('2d');
  createLeaf(cxt, 4, cnv.width / 2, cnv.height / 2, 20, 80);
  // 定义填充颜色为浅绿色
  cxt.fillStyle = '#00FF99';
  cxt.fill();
};
```

### 2.3 线条操作

Canvas 中，常见的线条操作属性和方法：

| 属性                  | 说明                   |
| --------------------- | ---------------------- |
| lineWidth             | 定义线条宽度           |
| lineCap               | 定义线条末端的样式     |
| lineJoin              | 定义两个线条交接处样式 |
| 方法                  | 说明                   |
| setLineDash(segments) | 定义线条的虚实样式     |

#### 2.3.1 lineWidth

在 Canvas 中，使用 lineWidth 属性来定义线条的宽度。

```js
context.lineWidth = 整数;
```

lineWidth 属性取值为整数，默认值为 1，默认单位为 px。

#### 2.3.2 lineCap

lineCap 属性定义线条开始处和结尾处的线帽样式。

```js
context.lineCap = '属性值';
```

lineCap 属性取值只有 3 个：

| 属性值 | 说明           | 线条处理                                                                         |
| ------ | -------------- | -------------------------------------------------------------------------------- |
| Butt   | 默认值，无线帽 | 每条线的开始处和结尾处都是长方形，也就是不做任何的处理                           |
| Round  | 圆形线帽       | 每条线的开始处和结尾处都增加一个半圆，半圆的直径为线宽                           |
| Square | 正方形线帽     | 每条线的开始处和结尾处都增加一个长方形，长方形的长度为线宽的一半，高度保持为线宽 |

> **注意**：round 值和 square 值会使线条稍微变长一点，这是因为它们给线条增加了线帽部分。

#### 2.3.3 lineJoin

lineJoin 是 Canvas 2D API 用来设置 2 个长度不为 0 的相连部分（线段、圆弧、曲线）如何连接在一起的属性（长度为 0 的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

```js
cxt.lineJoin = '属性值';
```

lineJoin 属性取值：

| 属性值 | 说明         | 特点                                               |
| ------ | ------------ | -------------------------------------------------- |
| miter  | 默认值，尖角 | 线条在交接处延伸直至交于一点                       |
| round  | 圆角         | 交接处是一个圆角，圆角所在圆的直径等于线宽         |
| bevel  | 斜角         | 交接处是一个斜角，斜角所在正方形的对角线长等于线宽 |

![lineJoin属性分析](./image/lineJoin%E5%B1%9E%E6%80%A7%E5%88%86%E6%9E%90.png)

> **注意**：当 lineJoin 属性取值为 miter（默认值）时，会受到 [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit) 属性的影响。miterLimit 属性在 Canvas 开发中几乎用不到。

#### 2.3.4 setLineDash(segments)

setLineDash() 方法在填充线时使用虚线模式。它使用一组值来指定描述模式的线和间隙的交替长度。

```js
cxt.setLineDash(segments);
```

**segments**
: 一个 Array 数组。一组描述交替绘制线段和间距（坐标空间单位）长度的数字。如果数组元素的数量是奇数，数组的元素会被复制并重复。例如，`[5, 15, 25]` 会变成 `[5, 15, 25, 5, 15, 25]`。

![setLineDash()常见的数组组合](<./image/setLineDash()%E5%B8%B8%E8%A7%81%E7%9A%84%E6%95%B0%E7%BB%84%E7%BB%84%E5%90%88.png>)

### 2.4 文本操作

| 方法          | 属性         | 说明                             |
| ------------- | ------------ | -------------------------------- |
| fillText()    | fillStyle    | 绘制填充文本，对应属性是定义颜色 |
| strokeText()  | strokeStyle  | 绘制描边文本，对应属性是定义颜色 |
| measureText() | -            | 用于获取文本的长度               |
| -             | font         | 定义文本字体样式（大小、粗细等） |
| -             | textAlign    | 定义文本水平对齐方式             |
| -             | textBaseline | 定义文本垂直对齐方式             |

#### 2.4.1 strokeText()

对文本进行描边。

```js
strokeText(text, x, y, maxWidth);
```

- **text**：使用当前 [font](#244-font)，[textAlign](#245-textalign)，[textBaseline](#246-textbaseline) 和 [direction](#247-direction) 的值对文本进行渲染。
- **x**：文本起始点的 x 轴坐标。
- **y**：文本起始点的 y 轴坐标。
- **maxWidth**：可选参数，需要绘制的最大宽度（单位为 px）。如果指定了值，并且经过计算字符串的宽度比最大宽度还要宽，字体为了适应会使用一个水平缩小的字体（如果通过水平缩放当前的字体，可以进行有效的或者合理可读的处理）或者小号的字体。

#### 2.4.2 fillText()

对文本进行填充。

```js
fillText(text, x, y, maxWidth);
```

- **text**：使用当前 [font](#244-font)，[textAlign](#245-textalign)，[textBaseline](#246-textbaseline) 和 [direction](#247-direction) 的值对文本进行渲染。
- **x**：文本起始点的 x 轴坐标。
- **y**：文本起始点的 y 轴坐标。
- **maxWidth**：可选参数，需要绘制的最大宽度（单位为 px）。如果指定了值，并且经过计算字符串的宽度比最大宽度还要宽，字体为了适应会使用一个水平缩小的字体（如果通过水平缩放当前的字体，可以进行有效的或者合理可读的处理）或者小号的字体。

#### 2.4.3 measureText()

使用 measureText() 方法来返回一个关于被测量文本 [TextMetrics](https://developer.mozilla.org/zh-CN/docs/Web/API/TextMetrics) 对象包含的信息。

```js
let length = cxt.measureText(text).width;
```

- **text**：需要测量的 String

TextMetrics 对象中的 width 属性可以用于获取某个文本的长度，这个属性对于实现水平居中的文本效果是非常有用的。

```js
// 文本水平居中
let cnv = document.getElementById('canvas');
let cxt = cnv.getContext('2d');
let text = 'hello world';
cxt.font = '20px bold';
let textWidth = cxt.measureText(text).width;
let canvasWidth = cnv.width;
let xPosition = canvasWidth / 2 - textWidth / 2;
cxt.fillStyle = 'purple';
cxt.fillText(text, xPosition, 50);
```

#### 2.4.4 font

定义文本的字体样式。context.font 的用法与 CSS 中的 [font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 属性的用法是一样的。

```js
context.font = 'font-style font-weight font-size/line-height font-family';
```

- **font**：默认值为 10px sans-serif。

#### 2.4.5 textAlign

定义文本水平方向的对齐方式。

```js
cxt.textAlign = '属性值';
```

| 属性值 | 说明                                                                         |
| ------ | ---------------------------------------------------------------------------- |
| start  | 默认值，文本对齐界线开始的地方（左对齐指本地从左向右，右对齐指本地从右向左） |
| end    | 文本对齐界线结束的地方（左对齐指本地从左向右，右对齐指本地从右向左）         |
| left   | 文本左对齐                                                                   |
| right  | 文本右对齐                                                                   |
| center | 文本居中对齐                                                                 |

#### 2.4.6 textBaseline

在 Canvas 中，可以使用 textBaseline 属性来定义文本垂直方向的对齐方式。

```js
cxt.textBaseline = '属性值';
```

| 属性值      | 说明                                                                                                |
| ----------- | --------------------------------------------------------------------------------------------------- |
| alphabetic  | 默认值，文本基线是普通英文字母的基线                                                                |
| top         | 文本基线是 em 方框的顶端                                                                            |
| middle      | 文本基线是 em 方框的中心                                                                            |
| bottom      | 文本基线是 em 方框的底端                                                                            |
| hanging     | 文本基线是悬挂基线                                                                                  |
| ideographic | 文字基线是表意字基线；如果字符本身超出了 alphabetic 基线，那么 ideographic 基线位置在字符本身的底部 |

![textBaseline属性分析](./image/textBaseline%E5%B1%9E%E6%80%A7%E5%88%86%E6%9E%90.png)

#### 2.4.7 direction

是 Canvas 2D API 用来在绘制文本时，描述当前文本方向的属性。

```js
ctx.direction = 'ltr' || 'rtl' || 'inherit';
```

| 属性    | 说明                                          |
| ------- | --------------------------------------------- |
| inherit | 默认值，根据情况继承 canvas 元素或者 Document |
| ltr     | 文本方向从左向右                              |
| rtl     | 文本方向从右向左                              |

### 2.5 图片操作

在 Canvas 中，不仅可以绘制各种形状的图形，还可以将图片导入 Canvas 进行各种操作，如平铺、切割、像素处理等。

无论开发的是应用程序还是游戏软件，都离不开图片。在开发 Canvas 游戏的时候，游戏中的地图、背景、人物、物品等都不是用 Canvas 绘制的，而是用导入的图片来实现的。因此图片的操作在 Canvas 开发中是非常重要的。

Canvas 提供了 drawImage() 方法来绘制图片。

#### 2.5.1 drawImage()

drawImage() 方法提供了多种在画布（Canvas）上绘制图像的方式。

```js
// 仅用于绘制一张图片
drawImage(image, dx, dy);
// 可以用于绘制大小不一样的图片（常用于Canvas游戏开发）
drawImage(image, dx, dy, dWidth, dHeight);
// 可以将部分图像复制到 Canvas 中，类似于 CSS Sprite 技术，从而使得图片只需要加载一次即可，这样可极大地提高页面的加载速度（常用于Canvas游戏开发）
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```

**image**
: 绘制到上下文的元素。允许任何的画布图像源，例如：HTMLImageElement、SVGImageElement、HTMLVideoElement、HTMLCanvasElement、ImageBitmap、OffscreenCanvas 或 VideoFrame (en-US)。

**dx**
: image 的左上角在目标画布上 X 轴坐标。

**dy**
: image 的左上角在目标画布上 Y 轴坐标。

**dWidth**
: image 在目标画布上绘制的宽度。允许对绘制的 image 进行缩放。如果不说明，在绘制时 image 宽度不会缩放。注意，这个参数不包含在 3 参数语法中。

**dHeight**
: image 在目标画布上绘制的高度。允许对绘制的 image 进行缩放。如果不说明，在绘制时 image 高度不会缩放。注意，这个参数不包含在 3 参数语法中。

**sx**（可选）
: 需要绘制到目标上下文中的，image 的矩形（裁剪）选择框的左上角 X 轴坐标。可以使用 3 参数或 5 参数语法来省略这个参数。

**sy**（可选）
: 需要绘制到目标上下文中的，image 的矩形（裁剪）选择框的左上角 Y 轴坐标。可以使用 3 参数或 5 参数语法来省略这个参数。

**sWidth**（可选）
: 需要绘制到目标上下文中的，image 的矩形（裁剪）选择框的宽度。如果不说明，整个矩形（裁剪）从坐标的 sx 和 sy 开始，到 image 的右下角结束。可以使用 3 参数或 5 参数语法来省略这个参数。使用负值将翻转这个图像。

**sHeight**（可选）
: 需要绘制到目标上下文中的，image 的矩形（裁剪）选择框的高度。使用负值将翻转这个图像。

![drawImage(image,dx,dy)分析](<./image/drawImage(image%2Cdx%2Cdy)%E5%88%86%E6%9E%90.png>)

![drawImage(image,dx,dy,dWidth,dHeight)分析](<./image/drawImage(image%2Cdx%2Cdy%2CdWidth%2CdHeight)%E5%88%86%E6%9E%90.png>)

![drawImage(image,sx,sy,sWidth,sHeight,dx,dy,dWidth,dHeight)分析](<./image/drawImage(image%2Csx%2Csy%2CsWidth%2CsHeight%2Cdx%2Cdy%2CdWidth%2CdHeight)%E5%88%86%E6%9E%90.png>)

#### 2.5.2 平铺图片

可以使用 createPattern() 方法来定义图片的平铺方式。

```js
let pattern = cxt.createPattern(image, type);
cxt.fillStyle = pattern;
cxt.fillRect();
```

想要定义图片的平铺方式，需要 createPattern() 和 fillRect() 这两个方法配合使用。

**image**：作为重复图像源的 [CanvasImageSource](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D) 对象。可以是下列之一：

- HTMLImageElement（img）
- HTMLVideoElement（video）
- HTMLCanvasElement（canvas）
- CanvasRenderingContext2D
- ImageBitmap
- ImageData
- Blob

**type**：表示图像平铺的方式。

| 参数值    | 说明                                 |
| --------- | ------------------------------------ |
| repeat    | 默认值，在水平方向和垂直方向同时平铺 |
| repeat-x  | 只在水平方向平铺                     |
| repeat-y  | 只在重直方向平铺                     |
| no-repeat | 只显示一次（不平铺）                 |

```js
// 平铺 canvas 元素
let ctx = document.getElementById('canvas');
let canvas = document.createElement('canvas');
canvas.height = 40;
canvas.width = 40;
let _ctx = canvas.getContext('2d');
_ctx.fillStyle = '#bdbdbd';
_ctx.arc(20, 20, 1, 0, (360 * Math.PI) / 180, true);
_ctx.fill();
_ctx.fillRect(39, 39, 2, 2);
let pattern = ctx.createPattern(canvas, 'repeat');
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, 500, 800);
```

#### 2.5.3 切割图片

可以使用 clip() 方法来切割 Canvas 中绘制的图片。

```js
cxt.clip();
```

想要使用 clip() 方法切割一张图片，需要以下 3 步：

1. 绘制基本图形
2. 使用 clip() 方法
3. 绘制图片

```js
let cnv = document.getElementById('canvas');
let cxt = cnv.getContext('2d');
// 第1步，绘制基本图形，用于切割
cxt.beginPath();
cxt.arc(70, 70, 50, 0, (360 * Math.Pl) / 180, true);
cxt.closePath();
cxt.stroke();
// 第2步，使用clip()方法，使得切割区域为上面绘制的基本图形;
cxt.clip();
// 第3步，绘制图片
let image = new Image();
image.src = 'images/princess.png';
image.onload = () => {
  cxt.drawImage(image, 10, 20);
};
```

### 2.6 变形操作

在 Canvas 中，有时候需要实现文字或图片的各种变形效果，如位移、缩放、旋转、倾斜等，这个时候就涉及 Canvas 中的变形操作。

Canvas 提供了以下几种变形操作的方法：

| 方法                        | 说明     |
| --------------------------- | -------- |
| translate()                 | 平移     |
| scale()                     | 缩放     |
| rotate()                    | 旋转     |
| transform()、setTransform() | 变换矩阵 |

Canvas 中的变形操作，不仅可以用于图形，还可以用于图像和文字。

#### 2.6.1 图形平移

可以使用 translate() 方法来平移图形（可多次叠加）。

```js
cxt.translate(x, y);
```

- **x**：水平方向的移动距离。
- **y**：垂直方向的移动距离。

```js
let cnv = document.getElementById('canvas');
let cxt = cnv.getContext('2d');
// 平移图形
cxt.translate(110, 30);
cxt.fillStyle = 'red';
cxt.fillRect(0, 0, 80, 80);
// 重置变换矩阵
cxt.setTransform(1, 0, 0, 1, 0, 0);
// 未平移图形
cxt.fillStyle = 'gray';
cxt.fillRect(0, 0, 80, 80);
```

translate() 方法必须在 fillRect() 方法之前调用才有效。对于 Canvas 来说，**“状态” 都必须在 “动作” 之前定义**。

#### 2.6.2 图形缩放

可以使用 scale() 方法来对图形进行缩放操作。

```js
cxt.scale(x, y);
```

- **x**：水平方向的缩放因子。负值在垂直轴上翻转像素。值为 1 时不会产生水平缩放。
- **y**：垂直方向的缩放因子。负值在水平轴上翻转像素。值为 1 时不会产生垂直缩放。

```js
// 使用 scale 水平或竖直翻转
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.scale(-1, 1); // 水平翻转
// ctx.scale(1, -1); // 竖直翻转
ctx.font = '48px serif';
ctx.fillText('Hello world!', -280, 90);
ctx.setTransform(1, 0, 0, 1, 0, 0); // 重置变换矩阵
```

**scale() 的负作用**
它除了会改变图形的大小之外，还会改变其他属性，如线条宽度（即 lineWidth）、左上角坐标。在实际开发中要注意。

#### 2.6.3 图形旋转

可以使用 rotate() 方法来旋转图形。

```js
cxt.rotate(angle);
```

**angle**
: 顺时针旋转的弧度。如果想通过角度值计算，可以使用公式：`degree * Math.PI / 180`。当 angle < 0 时，图形逆时针旋转；当 angle > 0 时，图形顺时针旋转。

旋转中心点一直是 canvas 的起始点。如果想改变中心点，可以通过 translate() 方法移动 canvas。

```js
// 改变旋转中心点
let cnv = document.getElementById('canvas');
let cxt = cnv.getContext('2d');

let rectWidth = 100;
let rectHeight = 50;
cxt.save(); // 将当前状态放入栈中，保存 canvas 全部状态
cxt.translate(cnv.width / 2, cnv.height / 2); // 将旋转中心移动到图形中心
cxt.rotate((240 * Math.PI) / 180); // 累进旋转
cxt.fillStyle = 'HotPink';
cxt.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight); // 填充矩形
cxt.restore(); // 在绘图状态栈中弹出顶端的状态，将 canvas 恢复到最近的保存状态的方法。如果没有保存状态，此方法不做任何改变。
```

#### 2.6.4 变换矩阵

平移 translate()、缩放 scale()、旋转 rotate() 这 3 种方法，从本质上来说都是通过变换矩阵 transform() 这个方法来实现的。变换矩阵涉及线性代数的知识。

transform() 是 Canvas 2D API 使用矩阵多次叠加当前变换的方法，矩阵由方法的参数进行描述。可以缩放、旋转、移动和倾斜上下文。

> setTransform() 则是使用单位矩阵重新设置当前的变换并调用 transform() 的方法。

```js
ctx.transform(a, b, c, d, e, f);
```

- **a（m11）**：水平缩放
- **b（m12）**：垂直倾斜
- **c（m21）**：水平倾斜
- **d（m22）**：垂直缩放
- **e（dx）**：水平移动
- **f（dy）**：垂直移动

![变换矩阵的描述](./image/%E5%8F%98%E6%8D%A2%E7%9F%A9%E9%98%B5%E7%9A%84%E6%8F%8F%E8%BF%B0.png)

- **平移**

  假设图形开始坐标为 (x, y)，平移后的坐标为 (x1, y1)，在 x 轴和 y 轴的平移量分别为 e 和 f，那么就有以下公式。

  `x1 = x + e;`
  `y1 = y + f;`

  因此，可以得到以下矩阵公式：

  ![平移矩形公式](./image/%E5%B9%B3%E7%A7%BB%E7%9F%A9%E5%BD%A2%E5%85%AC%E5%BC%8F.png)

  通过上面这个矩阵公式可以知道：**`translate(e, f)` 等价于 `transform(1, 0, 0, 1, e, f)`**。

- **缩放**

  假设图形开始坐标为 (x, y)，缩放后的坐标为 (x1, y1)，在 x 轴和 y 轴上缩放的倍数分别为 a 和 d，那么就有以下公式：

  `x1 = a * x;`
  `y1 = d * y;`

  因此，可以得到以下矩阵公式：

  ![缩放矩形公式](./image/%E7%BC%A9%E6%94%BE%E7%9F%A9%E5%BD%A2%E5%85%AC%E5%BC%8F.jpg)

  可以知道：**`scale(a, d)` 等价于 `transform(a, 0, 0, d, 0, 0)`**。

- **旋转**

  假设图形开始坐标为 (x, y)，旋转后的坐标为 (x1, y1)，图形旋转的角度为，那么就有以下公式：

  `x1 = x*cos0 - y*sin0;`
  `y1 = x*sin0 + y*cos0;`

  因此，可以得到以下矩阵公式：

  ![旋转矩形公式](./image/%E6%97%8B%E8%BD%AC%E7%9F%A9%E5%BD%A2%E5%85%AC%E5%BC%8F.jpg)

  从上面这个矩阵公式我们可以知道：**`rotate(0)` 等价于 `transform(cos0, sin0, -sin0, cos0, 0, 0)`**。

### 2.7 像素操作

在 Canvas 中，可以配合使用 getImageData() 和 putImageData() 方法来对图片像素进行操作。事实上，像素操作一直是 HTML5 Canvas 最令人称赞的一个方面。

#### 2.7.1 getImageData() 和 putImageData()

- **getImageData()**

  返回一个 [ImageData](https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData) 对象，用来描述 canvas 区域隐含的像素数据，这个区域通过矩形表示，起始点为 (sx, sy)、宽为 sw、高为 sh。

  ```js
  let imgData = cxt.getImageData(x, y, width, height);
  ```

  - **sx**：将要被提取的图像数据矩形区域的左上角 x 坐标。

  - **sy**：将要被提取的图像数据矩形区域的左上角 y 坐标。

  - **sw**：将要被提取的图像数据矩形区域的宽度。

  - **sh**：将要被提取的图像数据矩形区域的高度。

  ImageData 对象有一个 data 属性，这个 data 属性是一个 Uint8ClampedArray 一维数组，包含以 RGBA 顺序的数据，数据使用 0 至 255（包含）的整数表示。

- **putImageData()**

  将数据从已有的 ImageData 对象绘制到位图的方法。如果提供了一个绘制过的矩形，则只绘制该矩形的像素。此方法不受画布转换矩阵的影响。

  ```js
  ctx.putImageData(imagedata, dx, dy);
  ctx.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
  ```

  - **imageData**：包含像素值的数组对象。

  - **dx**：源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）。

  - **dy**：源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）。

  - **dirtyX**（可选）：在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（x 坐标）。

  - **dirtyY**（可选）：在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（y 坐标）。

  - **dirtyWidth**（可选）：在源图像数据中，矩形区域的宽度。默认是图像数据的宽度。

  - **dirtyHeight**（可选）：在源图像数据中，矩形区域的高度。默认是图像数据的高度。

getImageData() 和 putImageData() 都是配合使用的。一般都是先用 getImageData() 方法获取像素数据，然后利用一定的算法进行像素操作，最后使用 putImageData() 输出像素数据（即在 Canvas 中显示一张图片）。

#### 2.7.2 反转效果
