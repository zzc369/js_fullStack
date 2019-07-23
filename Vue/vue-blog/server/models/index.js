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
  const Article = mongoose.model('Article');
  const article = new Article({
    title: '欢迎使用blog',
    content: '当你看到这篇文章时，我的分类法江东父老'
  });
  article.save();
})