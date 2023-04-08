// 箭头类
export class Arrow {
  constructor(x = 0, y = 0, color = '#FF0099', angle = 0) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.angle = angle; // 旋转角度
  }

  /**
   * @param {CanvasRenderingContext2D} cxt
   */
  stroke(cxt) {
    cxt.save();
    cxt.translate(this.x, this.y);
    cxt.rotate(this.angle);
    cxt.strokeStyle = this.color;
    cxt.beginPath();
    cxt.moveTo(-20, -10);
    cxt.lineTo(0, -10);
    cxt.lineTo(0, -20);
    cxt.lineTo(20, 0);
    cxt.lineTo(0, 20);
    cxt.lineTo(0, 10);
    cxt.lineTo(-20, 10);
    cxt.closePath();
    cxt.stroke();
    cxt.restore();
  }

  /**
   * @param {CanvasRenderingContext2D} cxt
   */
  fill(cxt) {
    cxt.save();
    cxt.translate(this.x, this.y);
    cxt.rotate(this.angle);
    cxt.fillStyle = this.color;
    cxt.beginPath();
    cxt.moveTo(-20, -10);
    cxt.lineTo(0, -10);
    cxt.lineTo(0, -20);
    cxt.lineTo(20, 0);
    cxt.lineTo(0, 20);
    cxt.lineTo(0, 10);
    cxt.lineTo(-20, 10);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
  }
}
