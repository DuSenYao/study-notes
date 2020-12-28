// pages/component-show/component-show.js
Component({
  behaviors: [],

  options: {
    multipleSlots: true, // 是否启用多slot支持
    styleIsolation: "isolated" // 组件样式隔离
  },
  
  /**
   * 组件的属性列表
   */
  properties: {
    propA: { // 属性名
      type: String,
      value: ''
    },
    propB: String, // 简化的定义方式
    propC: Number
  },

  /**
   * 私有数据，可用于模板渲染
   */
  data: {
    
  },
  
  /**
   * 组件生命周期声明对象
   */
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    created: function() {},
    ready: function() {},
    attached: function() {},
    moved: function() {},
    detached: function() {},
    error: function() {}
  },

  /**
   * 组件所在页面的生命周期声明对象
   */
  pageLifetimes: {
    show: function() {},
    hide: function() {},
    resize: function() {}
  },
  
  methods: {
    onMyButtonTap: function () {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      })
    },
    // 内部方法建议以 "_" 下划线开头
    _myPrivateMethod: function() {
      this.setData({
        propC: 13
      })
    }
  }
})