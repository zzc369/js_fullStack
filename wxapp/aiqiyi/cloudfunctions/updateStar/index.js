// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'zzc-g5qm0'
cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  let entities = await db.collection('iqiyi').where({
    name: event.name
  })
  .get();
  let id = entities._id;
  return await db.collection('iqiyi').doc(id).update({
    data: {
      hotspot: {
        videoes:event.entities
      }
    }
  }).then(res => {
  })
}