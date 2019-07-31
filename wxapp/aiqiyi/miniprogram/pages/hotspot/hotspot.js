// miniprogram/pages/hotspot/hotspot.js
import Notify from '../../dist/notify/notify'
import Toast from '../../dist/toast/toast';
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
    if (this.data.currentVideo) {//currentVideo是当前播放的视频，初始值为null
      this.data.currentVideo.pause();//如果存在currentVideo则停掉
    }
    const Vid = e.target.id;//获取点击的视频的id
    if (Vid) {
      // 创建 video 上下文 VideoContext 对象。
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
      },
      fail: function (error) {
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
        self.setData({
          entities: res.result.data[0].hotspot.videoes
        })
      },
      fail: function (error) {
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
      },
      fail: function(err) {
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
      })
      self.cloudWXLike(index,entities[index],false)
    }
  },
  wxShare() {
    Toast.success('本功能暂未开放！');
  },
  onLoad: function (options) {
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