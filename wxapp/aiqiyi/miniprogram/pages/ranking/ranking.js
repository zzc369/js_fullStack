// miniprogram/pages/ranking/ranking.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerList: [],
    isShow: false,
    programs: [],
    currentIndex: 0
  },
  showAllSort () {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  selected(e) {
    console.log(e)
    let programs = [];
    this.setData({
      currentIndex: e.target.dataset.index,
      isShow: false
    });
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca466a713e4cf68f04a42f7/js_fullStack/iqiyi',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        programs =res.data.data.ranking[self.data.currentIndex].TVInfo;
        self.setData({
          programs : programs
        })
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 将this.setData 放在 request 外面真是个错误的决定
  onLoad: function (options) {
    let headerlist = [];
    let programs = [];
    self = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca466a713e4cf68f04a42f7/js_fullStack/iqiyi',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        // const headerlist = res.data.data.list.name
        for (const ranking of res.data.data.ranking) {
          headerlist.push(ranking.name);
        }
        programs =res.data.data.ranking[self.data.currentIndex].TVInfo;
        self.setData({
          headerList: headerlist,
          programs : programs
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