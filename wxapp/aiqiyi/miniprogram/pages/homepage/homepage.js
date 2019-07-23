// miniprogram/pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    indicatorColor: "rgba(0,0,0,0.5)",
    indicatorActiveColor: "rgba(0,255,0,0.5)",
    circular: true,
    iqiyi: '../../images/aiqiyi2.png',
    value: null,
    placeholder: '亲爱的，热爱的',
    background: 'rgba(201,201,201,0)'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    wx.cloud.callFunction({
      name: 'getData',
      data: {
        name: 'first'
      },
      success: function(res) {
        console.log(res)
        self.setData({
          imgUrl: res.result.data[0].first.Header
        })
        console.log(self.data.imgUrl)
      },
      fail: function(err) {
        console.log(err)
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