// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'南昌',
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    autoplay:true,
    interval:1000,
    items:[]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this默认指向都是这个data,作用域在整个page上
    //最先执行的生命周期函数
    //一般把请求数据放在这里，但是不绝对
    let that = this
    wx.request({
      url:'https://www.easy-mock.com/mock/5cbf0089330edc5317b81628/get/wxapplearn',
      success:function(response){
        console.log(response);
        that.setData({
          items:response.data.data.movieList
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
    console.log(123456)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(523645)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})