const path = require('path')
const reuireAll = require('require-all')
const mongoose = require('mongoose') //数据库驱动

reuireAll({
  dirname: path.join(__dirname,'./'),
  filter: /(.+)\.model\.js$/,
  recursive: true
})
const mongoUrl = `mongodb://127.0.0.1:27017/blog`
const User = mongoose.model('User');
mongoose.connection.openUri(mongoUrl,{
  useNewUrlParser: true,
  useCreateIndex: true,
  user: '',
  pass: ''
})
.once('open', async () => {
  console.log('连接成功');
  let user = new User({
    role: 'superAdmin',
    username: 'root',
    password: '123456',
    email: 'xxx@163.com',
  });
  user.save();
})