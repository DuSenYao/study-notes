// 小球类
export class Ball {
  constructor(x = 0, y = 0, radius = 12, color = '#6699FF') {
    this.x = x;
    this.y = y;
    this.radius = radius; // 小球半径
    this.color = color; // 小球颜色
    this.scaleX = 1; // 小球水平方向缩放比例
    this.scaleY = 1; // 小球垂直方向缩放比例
    this.rotation = 0; // 小球旋转角度
    this.vx = 0; // 小球在 x 轴方向上的速度
    this.vy = 0; // 小球在 y 轴方向上的速度
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

  /**
   * 获取小球的包围盒
   * @returns {{x: number, y: number, width: number, height: number}}
   */
  getRect() {
    return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2
    };
  }

  /**
   * 接收一个参数 mouse，然后计算出鼠标指针与圆心的距离，从而判断鼠标指针是否落在小球上
   * @param {{x: number,y: number}} mouse
   */
  checkMouse(mouse) {
    return Math.sqrt((mouse.x - this.x) ** 2 + (mouse.y - this.y) ** 2) < this.radius;
  }
}
