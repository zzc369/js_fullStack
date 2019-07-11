// miniprogram/pages/hotspot/hotspot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    entities: [],
    star: '../../images/xin.png',
    likeStar: '../../images/xin2.png',
    weixin: '../../images/weixin.png',
    isLike: false,
    currentIndex: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  wxLike(e) {
    console.log(e)
    this.setData({
      currentIndex : e.currentTarget.dataset.index
    })
  },
  wxShare() {

  },
  onLoad: function (options) {
    let entities = [];
    let self = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca466a713e4cf68f04a42f7/js_fullStack/iqiyi',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        // console.log(res);
        entities = res.data.data.hotspot.videoes;
        self.setData({
          entities
        })
      }
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