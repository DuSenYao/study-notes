// 让多个页面有相同的数据字段和方法
export default Behavior({
  data: {
    sharedText: 'Orange cat'
  },
  methods: {
    sharedMethod: function () {
      this.data.sharedText = 'cat';
    }
  }
});
