npm init -y
npm install sha1  会出现node_modules文件夹

传统的MVC后端开发

MVVM 小程序
Model Page({data:{}})
View Template wxml
VM {{}} wx:for

MVC  Modle 数据库
V View 静态页面
C Controller

Web HTTP服务器

端口？3000 
mysql 3306
WebServer 80

用户 Request   通过 IP + 端口 
Web Server     Response

http
  .createServer(function(request,response){
    request 用户 N
    response 
  })
  .listen(8080)