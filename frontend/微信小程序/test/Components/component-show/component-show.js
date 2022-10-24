// pages/component-show/component-show.js
Component({
  behaviors: [],

  options: {
    multipleSlots: true, // 是否启用多slot支持
    styleIsolation: 'isolated', // 组件样式隔离
    pureDataPattern: /^timestamp$/
  },

  /**
   * 组件的属性列表
   */
  properties: {
    propA: {
      // 属性名
      type: String,
      value: ''
    },
    propB: String, // 简化的定义方式
    propC: Number,
    timestamp: Number
  },

  /**
   * 私有数据，可用于模板渲染
   */
  data: {},

  observers: {
    timestamp: function () {
      var timeString = new Date(this.data.timestamp).toLocaleString();
      this.setData({
        timeString: timeString
      });
    }
  },

  /**
   * 组件生命周期声明对象
   */
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    created: function () {
      console.log('created');
    },
    ready: function () {
      console.log('ready');
    },
    attached: function () {
      console.log('attached');
    },
    moved: function () {
      console.log('moved');
    },
    detached: function () {
      console.log('detached');
    },
    error: function () {
      console.log('error');
    }
  },

  /**
   * 组件所在页面的生命周期声明对象
   */
  pageLifetimes: {
    show: function () {
      console.log('show');
    },
    hide: function () {
      console.log('hide');
    },
    resize: function () {
      console.log('resize');
    }
  },

  methods: {
    onMyButtonTap: function () {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      });
    },
    // 内部方法建议以 "_" 下划线开头
    _myPrivateMethod: function () {
      this.setData({
        propC: 13
      });
    }
  }
});
