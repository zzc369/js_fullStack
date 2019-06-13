// 专门负责请求的模块

const request = require('request');

module.exports = (url) => {
  return new Promise((req, res) => {
    request({
      url,
      json:true
    },(err,res,body) => {
      console.log('error:',err)
      req(body);
    })
  })}