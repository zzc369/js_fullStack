// 引入资源文件
var express = require('express')
var createError = require('http-errors')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
// 引入index.js 路由配置文件
var indexRouter = require('./routes/index')
// 引入user.js 路由配置文件
var userRouter = reuqire('./routes/user')
var app = express(); //用express创建一个app应用

