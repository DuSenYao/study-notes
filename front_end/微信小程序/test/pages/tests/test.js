// pages/tests/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList: ["1-1", "1-2","1-3"],
    age: 18
  },

  tapTest: function (event) {
    console.log(JSON.stringify(event));
  },

  tapInput: function (event) {
    console.log(event);
  },

  selectorQuery: function () {
    const query = wx.createSelectorQuery();
    // boundingClientRect 添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 getBoundingClientRect。返回 NodesRef 对应的 SelectorQuery
    query.select("#the-button").boundingClientRect(function(res) {
      console.log(res);
    });
    // 添加节点的滚动位置查询请求。以像素为单位。节点必须是 scroll-view 或者 viewport，返回 NodesRef 对应的 SelectorQuery
    query.selectViewport().scrollOffset(function(res) {
      console.log(res)
    });
    // 执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回
    query.exec(function(e) {
      console.log(e);
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.createIntersectionObserver().relativeToViewport().observe(".scroll-class", (res) => {
      console.log(res);
      res.id // 目标节点 id
      res.dataset // 目标节点 dataset
      res.intersectionRatio // 相交区域占目标节点的布局区域的比例
      res.intersectionRect // 相交区域
      res.intersectionRect.left // 相交区域的左边界坐标
      res.intersectionRect.top // 相交区域的上边界坐标
      res.intersectionRect.width // 相交区域的宽度
      res.intersectionRect.height // 相交区域的高度
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})