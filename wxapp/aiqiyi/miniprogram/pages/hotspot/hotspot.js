// miniprogram/pages/hotspot/hotspot.js
import Notify from '../../dist/notify/notify'
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
    name: 'hotspot',
    currentVideo: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  handleVideoPlay(e) {
    if (this.data.currentVideo) {
      this.data.currentVideo.pause();
    }
    const Vid = e.target.id;
    if (Vid) {
      const currentVideo = wx.createVideoContext(`${Vid}`);
      this.setData({
        currentVideo
      })
      currentVideo.play();
    }
  },
  updateStar(name, entities) {
    // 把小红心点亮，并且往wxLike集合中添加数据
    wx.cloud.callFunction({
      name: 'updateStar',
      data: {
        entities: entities,
        name: name
      },
      success: function (res) {
        console.log('updateStar:', res)

      },
      fail: function (error) {
        console.log('updateStar:', error)
      }
    });
  },
  getData(name) {
    const self = this;
    wx.cloud.callFunction({
      name: 'getData',
      data: {
        name: name
      },
      success: function (res) {
        // console.log('getData:' ,res)
        self.setData({
          entities: res.result.data[0].hotspot.videoes
        })
      },
      fail: function (error) {
        console.log('getData:', error)
      }
    })
  },
  cloudWXLike(index,entity,isAdd) {
    wx.cloud.callFunction({
      name: "wxLike",
      data: {
        index: index,
        entity: entity,
        isAdd: isAdd,
      },
      success: function(res) {
        console.log('res',res)
      },
      fail: function(err) {
        console.log('err',err)
      }
    })
  },
  wxLike(e) {
    let self = this;
    let name = self.data.name
    let entities = this.data.entities;
    let isLike = entities[e.currentTarget.dataset.index].isLike;
    let index = e.currentTarget.dataset.index;
    if (!isLike) {
      entities[index].isLike = !isLike;
      entities[index].star = entities[index].star - 0 + 1;
      self.setData({
        entities
      })
      const update = new Promise((resolve, reject) => {
        self.updateStar(name, entities,index)
        resolve('ok')
      })
      update.then(res => {
        console.log(res)
      })
      self.cloudWXLike(index,entities[index],true)
    } else {
      entities[index].isLike = !isLike;
      entities[index].star = entities[index].star - 0 - 1;
      self.setData({
        entities
      })
      const update = new Promise((resolve, reject) => {
        self.updateStar(name, entities)
        resolve('ok')
      })
      update.then(res => {
        console.log('res:', res)
      })
      self.cloudWXLike(index,entities[index],false)
    }
  },
  wxShare() {

  },
  onLoad: function (options) {
    // let entities = [];
    // let self = this;
    // wx.request({
    //   url: 'https://www.easy-mock.com/mock/5ca466a713e4cf68f04a42f7/js_fullStack/iqiyi',
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function(res) {
    //     // console.log(res);
    //     entities = res.data.data.hotspot.videoes;
    //     self.setData({
    //       entities
    //     })
    //   }
    // })
    this.getData('hotspot');
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
    wx.showNavigationBarLoading()//在标题栏中显示加载
    //模拟加载
    setTimeout(function () {
      wx.hideNavigationBarLoading()//完成停止加载
      wx.stopPullDownRefresh()//停止下拉刷新
      Notify({
        color: '#00FF4F',
        text: '已经为您更新5条内容',
        duration: 1500,
        selector: '#van-notify',
        backgroundColor: '#ffffff'
      });
    }, 1500)

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