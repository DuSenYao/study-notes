Component({
  runTimerid: 0,
  behaviors: [],
  properties: {
    percent: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal) {
        this.draw(newVal);
      }
    }
  },
  // 私有数据，可用于模板渲染
  data: {
    percentage: -1, // 百分比
    animTime: 0 // 动画执行时间
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  lifetimes: {
    attached: function () {
      console.log('attached');
    },
    ready: function () {
      if (this.data.percentage) this.draw(this.data.percentage);
    },
    moved: function () {
      console.log('moved');
    },
    detached: function () {
      console.log('detached');
    }
  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      console.log('show');
    }
  },

  methods: {
    // 绘制圆形进度条方法
    run(c, w, h) {
      let radian = ((2 * Math.PI) / 100) * c - 0.5 * Math.PI;
      this.ctx2.arc(w, h, w - 8, -0.5 * Math.PI, radian);
      this.ctx2.setStrokeStyle('#09bb07'); // 绿色
      this.ctx2.setLineWidth('16');
      this.ctx2.setLineCap('butt');
      this.ctx2.stroke();

      this.ctx2.beginPath();
      this.ctx2.setFontSize(40); // 注意不要加引号
      this.ctx2.setFillStyle('#b2b2b2'); // 浅灰色字体
      this.ctx2.setTextAlign('center');
      this.ctx2.setTextBaseline('middle');
      this.ctx2.fillText(c + '%', w, h);
      this.ctx2.draw();
    },
    // 动画效果实现
    canvasTap(start, end, time, w, h) {
      start++;
      if (start > end) {
        return false;
      }
      this.run(start, w, h);

      this.runTimerid = setTimeout(() => {
        this.canvasTap(start, end, time, w, h);
      }, time);
    },

    draw(percent) {
      const id = 'runCanvas';
      const animTime = 500;
      if (percent > 100) percent = 100;
      if (!this.ctx2) {
        // 在组件中使用，wx.createCanvasContext 创建画布的上下文绘制对象时，需要在第二个参数处传入 this 对象
        // 这样才是在组件中查找画布，不然只是在主页面中查找
        const ctx2 = wx.createCanvasContext(id, this);
        this.ctx2 = ctx2;
      }

      let oldPercentValue = this.data.percentage;
      this.setData({
        percentage: percent,
        animTime: animTime
      });
      let time = this.data.animTime / (this.data.percentage - oldPercentValue);
      // 如果在组件中查找id时，必须先调用 in(this) 将选择器的选取范围更改为自定义组件 component 内。
      const query = wx.createSelectorQuery().in(this);
      query
        .select('#' + id)
        .boundingClientRect(({ width, height }) => {
          let w = parseInt(width / 2);
          let h = parseInt(height / 2);
          if (this.runTimerid) clearTimeout(this.runTimerid);
          this.canvasTap(oldPercentValue, percent, time, w, h);
        })
        .exec();
    }
  }
});
