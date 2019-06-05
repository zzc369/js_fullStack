## why 会有cookie和session
  无状态，

## cookie
  本地存储
  怎么来：
  1. js document.cookie 可读可写
  2. 服务端  通过set-cookie 响应头设置 cookie

  内容： 
  name
  value
  path: cookie在哪个路径下生效
    /         /所有路径都生效
    /user     /user user以及user下面的
    /user/abc /user/abc  user/abc 以及下面的
  domain:
  httpOnly: true/false   如果设置为true 就不能通过js获取cookie的值
  maxAge: 在几秒之后 cookie被删除
  secure: 安全，只会在https协议下传输
  koa: ms js:s

  作用范围：
  domain + path
  在什么域名什么路径下面生效
  浏览器检查存储的cookie，会发送给服务端，而且http 传输报文的大小
  放在Cookie 请求头里面发送

  用途：
  状态管理，
  用户个性化设置


## session
会话
靠后台自己实现的
很多个用户 产生很多个 session

userId
sessionId 用户有会话时，通过自己的sessionId 查询自己的状态
cookie: sessionID = id