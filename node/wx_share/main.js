// live-server 
// 引入http这个模块    require 进来   COMMONJS 模块化方案
const http = require('http');
const https = require('https');
let i = 0;
http
  .createServer(function (require,response) {
  i++;
  console.log(i)
  response.end(`Hello World ${i}`);
})
  .listen(3000);


// Web 服务，在软件上理解就是一个HTTP访问的服务