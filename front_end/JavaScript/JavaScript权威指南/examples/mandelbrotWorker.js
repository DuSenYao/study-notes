// 示例15-14：用于计算曼德布洛特集合区域的工作线程代码
// 这是一个简单的工作线程，它从父线程接收消息执行消息所描述的计算，然后再把计算结果发送回父线程
onmessage = function (message) {
  // 首先，分拆接收到的消息
  // - tile是具有 width 和 height 属性的对象，表示需要计算其中包含的曼德布洛特集合成员的像素矩形的大小
  // - (x0, y0) 是复平面上的一个点，对应切片（tile）的左上角位置的像素
  // - perPixel 是实数轴和虚数轴上的像素大小
  // - maxIterations 指定在判定某个像素在集合中之前要执行的最大迭代次数
  const { tile, x0, y0, perPixel, maxIterations } = message.data;
  const { width, height } = tile;
  // 接下来，创建 ImageData 对象，用以表示像素的矩形数组，取得其内部 ArrayBuffer,并创建该缓冲的定型数组视图这样就可以将每个像素当作 1 个整数而非 4 个字节。
  // 会在这个 iterations 数组中保存每个像素的迭代次数（父线程再把迭代次数转换为像素颜色）
  const imageData = new ImageData(width, height);
  const iterations = new Uint32Array(imageData.data.buffer);
  // 现在开始计算。这里有 3 个嵌套的 for 循环
  // 外面两个循环像素的行和列，内部的循环迭代每个像素，检查这是否 “逃逸了”
  // 以下是几个循环变量：
  // - row 和 column 是整数，表示像素坐标
  // - x 和 y 表示每个像素的复数点: x + yi
  // - index 是数组 iterations 中当前像素的索引
  // - n 记录每个像素的迭代次数
  // - max 和 min 记录当前矩形中已经检查过的像素的最大和最小迭代次数
  let index = 0;
  let max = 0;
  let min = maxIterations;
  for (let row = 0, y = y0; row < height; row++, y += perPixel) {
    for (let column = 0, x = x0; column < width; column++, x += perPixel) {
      // 对每个像素，都从复数 c = x + yi 开始
      // 然后按照如下递归公式，重复计算复数 z(n+1):
      //   z(0) = c
      //   z(n+1) = z(n)^2 + c
      // 如果 |z(n)|（z(n)的大小）大于2，则像素不属于集合，在 ∩ 次迭代后停止
      let n; // 目前为止迭代的次数
      let r = x;
      let i = y; // 从把 z(0) 设置为 c 开始
      for (n = 0; n < maxIterations; n++) {
        let rr = r * r;
        let ii = i * i; // 计算 z(n) 两部分的平方
        if (rr + ii > 4) {
          // 如果 |z(n)|^2 大于4,
          break; // 就是逃逸了，停止迭代
        }
        i = 2 * r * i + y; // 计算 z(n+1) 的虚数部分
        r = rr - ii + x; // 及 z(n+1) 的实数部分
      }
      iterations[index++] = n; // 记录每个像素的迭代次数
      if (n > max) max = n; // 记录目前为目的最大值
      if (n < min) min = n; // 同时记录最小值
    }
  }
  // 计算完成后，把结果发送回父线程。此时会复制 imageData 对象，但它包含的巨大的 ArrayBuffer 只会转移出去，从而提升性能
  postMessage({ tile, imageData, min, max }, [imageData.data.buffer]);
};
