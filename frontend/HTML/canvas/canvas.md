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

在 Canvas 中，可以将 `moveTo()` 和 `lineTo()` 这两个方法配合使用来画直线。利用这两个方法，可以画一条直线，也可以同时画多条直线。

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

在 Canvas 中，可以配合使用 `strokeStyle` 属性和 `strokeRect()` 方法，来画一个描边矩形。

```js
cxt.strokeStyle = '属性值';
cxt.strokeRect(x, y, width, height);
```

**strokeStyle 属性**
strokeStyle 属性取值有 3 种：颜色值、渐变色和图案。先来看一下 strokeStyle 属性取值为颜色值的几种情况：

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

在 Canvas 中，可以配合使用 `fillStyle` 属性和 `fillRect()` 方法来画一个填充矩形。

```js
cxt.fillStyle = '属性值';
cxt.fillRect(x, y, width, height);
```

fillStyle 属性跟 strokeStyle 属性一样，取值也有 3 种：颜色值、渐变色和图案。

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

在 Canvas 中，可以使用 `clearRect()` 方法来清空 “指定矩形区域”。

```js
// x、y 分别表示被清空矩形区域左上角点的横、纵坐标，width 表示矩形的宽度，height 表示矩形的高度。
cxt.clearRect(x, y, width, height);

// 用于清空整个 Canvas
cxt.clearRect(0, 0, cnv.width, cnv.height);
```

#### 2.1.3 多边形

在 Canvas 中，多边形也是使用 moveTo() 和 lineTo() 这两个方法画出来的。

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

在 Canvas 中，可以使用 `arc()` 方法来画一个圆。

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

在 Canvas 中，可以使用 lineCap 属性来定义线条开始处和结尾处的线帽样式。

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

在 Canvas 中，可以使用 lineJoin 属性定义两个线条交接处的样式。

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

在 Canvas 中，可以使用 setLineDash() 方法来定义线条的虚实样式。

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
