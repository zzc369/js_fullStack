Page({
  data: {
    start: false
  },
  _setStartDataEvent(e) {
    console.log(e);
    if(e.detail.start === false) {
      this.setData({
        start: false
      })
    }
  },
  _getCountdownEvent(e) {
    this.setData({
      start: true
    })
  },
  onLoad() {
    // setTimeout(() => {
    //   this.setData({
    //     start: true
    //   })
    // },2000)
  }
})