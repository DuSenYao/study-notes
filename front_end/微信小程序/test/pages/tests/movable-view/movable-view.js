// pages/tests/movable-view/movable-view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    scale: 2,
    // 当前x的值
    currentX: 0
  },
  onMovableViewChange(e) {
    console.log("change", e.detail)
  },
  tap(e) {
    let kind = parseInt(e.currentTarget.dataset.kind);
    if (!kind) {
      this.setData({
        x: 30,
        y: 30
      })
    } else {
      this.setData({
        x: 0,
        y: 0
      })
    }
  }
})