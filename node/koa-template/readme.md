## KOA  中间件 middleWare
app.use(middleWare);
next 下一个中间件。
每一次use 都会注册一个中间件
[middleWare1, middleWare2]
1. async 函数
2. 洋葱模型: 一层一层往最里面执行，直到最后一个中间件执行，执行完毕之后，一层一层往外冒泡执行剩余的代码
3. 解耦：每一个中间件负责一件事

以 X 开头的(如：X-response-time):自定义响应头

## koa 第三方中间件特点
  koa ctx 就是req+res 组成的对象
  ctx: {
    req: {},
    res: {}
  }
  koa-views
  接着扩展 ctx，接着往ctx上面塞东西
  ctx: {
    req: {},
    res: {},
    render: () => {}
  }
##
package.json 项目描述
依赖： npm install 下来的文件，并且记录在package.json 的dependencies中
-S 就是往这里面放
"dependencies": {
    "ejs": "^2.6.1",
    "koa": "^2.7.0",
    "koa-views": "^6.2.0"
  }

npm i node_modules 目录。


## ejs
  <%= %> 原样输出
  <%- %> 解析html
  <% %> 解析JS