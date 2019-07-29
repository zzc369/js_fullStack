// miniprogram/pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userAvatar: "../../images/login.png",
    isLogin: true,
    nickname:'',
    videoes: []
  },
  bindgetuserinfo (e) {
    this.setData({
      userAvatar: e.detail.userInfo.avatarUrl,
      isLogin: !this.data.isLogin,
      nickname: e.detail.userInfo.nickName
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this;
    wx.cloud.callFunction({
      name: 'getVideo',
      data: {},
      success: function(res) {
        self.setData({
          videoes: res.result.data
        })
      },
      fail: function(err) {
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
    const self = this;
    wx.cloud.callFunction({
      name: 'getVideo',
      data: {},
      success: function(res) {
        self.setData({
          videoes: res.result.data
        })
      },
      fail: function(err) {
      }
    })
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