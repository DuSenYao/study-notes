// pages/tests/rich-text/rich-text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height:20px;padding:20px;'
      },
      children: [{
        type: 'text',
        text: '小程序实践'
      }, {
        name: 'img',
        attrs: {
          src: 'http://t.cn/A622uHwp',
          style: 'width:100%'
        }
      }, {
        name: 'img',
        attrs: {
          src: "http://t.cn/A622upBw",
          style: "width:100%",
          class: 'img'
        }
      }, {
        name: 'img',
        attrs: {
          src: "http://t.cn/A622upBw",
          style: "width:100%;"
        }
      }]
    }],
    urls: []
  },

  tap(e) {
    console.log(e)
    let urls = this.data.urls;
    wx.previewImage({
      urls: urls,
      current: urls[0]
    })
  },

  onReady() {
    function findUrl(nodes) {
      let urls = []
      nodes.forEach(item => {
        if (item.name == 'img' && item.attrs) {
          for (const key in item.attrs) {
            if (key == 'src') {
              urls.push(item.attrs[key])
            }
          }
        }
        if (item.children) {
          urls = urls.concat(findUrl(item.children))
        }
      })
      return urls;
    }

    this.data.urls = findUrl(this.data.nodes);
  }
})