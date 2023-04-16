export class Box {
  constructor(x = 0, y = 0, width = 80, height = 40, color = 'red') {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    // x 和 y 方向速度
    this.vx = 0;
    this.vy = 0;
  }
  /**
   * 绘制描边矩形
   * @param {CanvasRenderingContext2D} cxt
   */
  stroke(cxt) {
    cxt.save();
    cxt.strokeStyle = this.color;
    cxt.beginPath();
    cxt.rect(this.x, this.y, this.width, this.height);
    cxt.closePath();
    cxt.stroke();
    cxt.restore();
  }

  /**
   * 绘制填充矩形
   * @param {CanvasRenderingContext2D} cxt
   */
  fill(cxt) {
    cxt.save();
    cxt.fillStyle = this.color;
    cxt.beginPath();
    cxt.rect(this.x, this.y, this.width, this.height);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
  }
}
