// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'zzc-g5qm0'
cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  if(event.isAdd) {
    return db.collection('wxlike').add({
      data: {
        id: event.index,
        Videoes:event.entity
      }
    })
      .then(res => {
        console.log(res)
      })
  } else {
    return db.collection('wxlike').where({
      id: event.index
    }).remove();
  }
  
}