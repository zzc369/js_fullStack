Page({
  http: function() {
    // 从本地到云端  手机本机端的
    // 当本地的储存空间不够了，，就需要上传到类似于百度云的地方
    wx.cloud.callFunction({
      name: 'http'
    })
    .then(res => {
      console.log(res);
    })
  }
})