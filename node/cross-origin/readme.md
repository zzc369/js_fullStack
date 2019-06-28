## 跨域
  浏览器的安全策略，
  协议 域名 端口 有一个不一致的时候 就存在跨域

## cors
  cross origin resource share
  1. 一个标准  规定了一些http的首部字段，让服务器允许哪些网站可以访问
  2. 规定，如果式非简单请求 浏览器会发出一个预检请求，从服务端知道是允许跨域，
  如果允许， 才会发出正式的请求
  3. 非简单请求 简单请求 

##  jsonp原理
1. <script></script> 可以跨域
2. 加载进来的内容会被当做js执行
3. 后端 先获取到 前端发出的 callback 在callback里面插入自己想要返回的内容
4. 前端 拿到返回的内容 当作js 执行
5. 预先定义好一个函数 
6. 缺点： 只能get请求 
7. 写一个 promise风格的jsonp函数
param ={type: 'man',age: 18}
jsonp(url, param = {})
  .then(res => {
    console.log(res)
  })

思路: 
1. 一个全全局的方法
2. 插入一个 script标签 ， 根据方法名 param 拼接 url
3. 根据js 的加载情况判断请求成功与否，返回数据
4. script标签上面有事件