// pages/tests/test.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    classList: ["1-1", "1-2","1-3"],
    age: 18,
    componentTextA: "模板",
    componentTextB: "数据绑定",
    now: Date.now(),
    percentValue: 2
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

  // 进度条动画完成事件
  onProgressActiveEnd(e){
    console.log(e)
  },
  // 点击一次进度条增加5
  onTapProgressBar(e){
    console.log(e)
    let progress = this.data.percentValue
    if (progress < 100){
      progress += 5
      this.setData({percentValue:Math.min(100, progress)})
    }
  },
  // 已经加载完的进度条progress，怎么点击某个按钮让它重新加载呢？
  onTapReloadBtn(e){
    /* this.setData({percentValue: 0})
    if(wx.canIUse('nextTick')) {
      // 延迟一部分操作到下一个时间片再执行
      wx.nextTick(()=> {
        this.setData({percentValue: 100})
      })
    } else{
      // 17ms大约是1/60 s，与下一帧刷新有关，类似rAf。
      setTimeout(() => {
        this.setData({percentValue: 100})
      }, 17);
    } */
    
    // 每次setData在底层都需要调用 evaluateJavascript 这个底层函数，这个函数用于逻辑层和视图层之间的通讯，执行本来就需要时间
    // 因此直接调用两次 setData ，也可以达到上面的效果
    this.setData({percentValue:0})
    this.setData({percentValue:90})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var prevExitState = this.exitState; // 尝试获得上一次退出前 onSaveExitState 保存的数据
    console.log(this.exitState);
    if(prevExitState !== undefined) {
      console.log(prevExitState); // 如果是根据 restartStrategy 配置进行的冷启动，就可以获取到
      // 将通过 exitState 获得退出时保存的数据，放到页面上
      this.setData({
        age : prevExitState.age
      })
    }
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
    // 初始化 Worker
    const worker = wx.createWorker('/workers/request/index.js')
    // 接收 Worker 数据
    worker.onMessage((msg) => {
      console.log(msg)
      // 结束当前 Worker
      worker.terminate()
    })

    // 向 worker 发送数据
    worker.postMessage({
      mag: 'test message'
    })
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
   * 小程序可能被销毁之前，页面回调函数
   */
  onSaveExitState: function () {
    var exitState = { 
      myDataField : "myData",
      age : this.data.age
    }; // 需要保存的数据
    // 退出小程序前，使用退出状态来保持一些数据
    return {
      data: exitState,
      expireTimeStamp: Date.now() + 24 * 60 * 60 * 1000 // 超时时刻
    }
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