// 小球类
export class Ball {
  constructor(x = 0, y = 0, radius = 12, color = '#6699FF') {
    // 小球中心的横坐标
    this.x = x;
    // 小球中心的纵坐标
    this.y = y;
    // 小球半径
    this.radius = radius;
    // 小球颜色
    this.color = color;
    this.scaleX = 1; // 小球水平方向缩放比例
    this.scaleY = 1; // 小球垂直方向缩放比例
    this.rotation = 0; // 小球旋转角度
  }

  /**
   * 绘制描边小球
   * @param {CanvasRenderingContext2D} cxt
   */
  stroke(cxt) {
    cxt.scale(this.scaleX, this.scaleY);
    cxt.save();
    cxt.strokeStyle = this.color;
    cxt.beginPath();
    cxt.arc(this.x, this.y, this.radius, 0, (360 * Math.PI) / 180, false);
    cxt.closePath();
    cxt.stroke();
    cxt.restore();
  }

  /**
   * 绘制填充小球
   * @param {CanvasRenderingContext2D} cxt
   */
  fill(cxt) {
    cxt.save();
    cxt.translate(this.x, this.y);
    cxt.rotate(this.rotation);
    cxt.scale(this.scaleX, this.scaleY);
    cxt.fillStyle = this.color;
    cxt.beginPath();
    cxt.arc(0, 0, this.radius, 0, (360 * Math.PI) / 180, false);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
  }
}
