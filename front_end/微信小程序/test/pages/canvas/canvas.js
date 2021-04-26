// pages/canvas/canvas.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    hidden: true
  },

  start: function (e) {
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    });
  },

  move: function (e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    });
  },

  end: function (e) {
    this.setData({
      hidden: true
    });
  }
});
