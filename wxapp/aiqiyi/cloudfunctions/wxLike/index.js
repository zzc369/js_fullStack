// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'zzc-g5qm0'
cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {

  db.collection('wxLike').add({
    data: {

    }
  })
    .then(res => {
      
    })
}