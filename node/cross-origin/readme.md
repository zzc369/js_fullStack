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

## iframe
可以引入一个跨域的html文件
1. 引入 和 后端接口同源的一个iframe
2. 该 iframe 不存在跨域 可以任意请求
3. 和 iframe 通信 postMessage message

## 
同一个页面的里面的 所有 iframe 共享 window.name
1. 和上一步一样 
2. iframe 请求 放在一个 共享的window.name 上面
3. fe-iframe 得到请求的结果
4. 请求完成之后 跳到第三方页面 执行定义在 fe-iframe里面的回调

## server 后端
  koa-static 映射过url 
## static 前端
static live-server
前后端 通信 fe-iframe 文件 收到后端的结果 middle 后端的static iframe

## 代理 
webpack-dev-server

反向代理 live-server --proxy=/api:http://localhost:1234/api/
对于客户端来说哦 最终请求的地方是未知的

正向代理
对于服务端来说 客户端是未知的