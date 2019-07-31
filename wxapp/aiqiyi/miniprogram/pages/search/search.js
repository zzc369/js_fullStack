// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholder: '亲爱的，热爱的',
    historytitle: '搜索历史',
    deleteHistory: '清空历史',
    historyName: [],
    value: null,
    allName: [],
    result: [],
    entities: []
  },
  deleteHistory() {
    this.setData({
      historyName:null
    })
  },
  onCancel() {
    wx.navigateBack({
      delta: 1
    })
  },
  navigate (e) {
    const name = e.currentTarget.dataset.name.join('');
    const historyName = this.data.historyName;
    let entityInfo = null
    historyName.push(name);
    this.setData({
      historyName
    })
    for (const entity of this.data.entities) {
      if(name == entity.title) {
        entityInfo = entity;
      }
    }
    const item = JSON.stringify(entityInfo);
    wx.navigateTo({
      url: '../show/show?item=' + item
    })
  },
  getData() {
    let name = [];
    const entities = [];
    self = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca466a713e4cf68f04a42f7/js_fullStack/iqiyi',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        for (const ranking of res.data.data.ranking) {
          for (const rank of ranking.TVInfo) {
            name.push(rank.title)
            entities.push(rank)
          }
        }
        self.setData({
          allName: name,
          entities
        })
      }
    })
  },
  onChange(event) {
    const list = this.data.allName;//这里是所有的名字
    const value = event.detail; //实时获取输入框中的文字
    const result = [] 
    if (event.detail !== '') {//当输入框中有文字的话，就筛选出含有value的名字
      let filter_list = [...new Set(//用Set是因为我的数据中有重复的字段
        list.filter(item => {
          return item.includes(value)
        })
      )]
      filter_list.forEach(item => {//遍历
      // 将名字切割成三段放入数组中，和value一样的字段的就换个颜色
        let index1 = item.indexOf(value)
        let index2 = value.length
        let string1 = item.slice(0, index1)
        let string2 = item.slice(index1, index1 + index2)
        let string3 = item.slice(index1 + index2)
        console.log([string1, string2, string3])
        result.push([string1,string2,string3])
      })
      this.setData({
        value,
        result
      })
    } else {
      this.setData({
        result: null
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
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
    this.setData({
      value:null,
      result: null
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