const Hapi = require('hapi');

const server = new Hapi.Server();
const routesHelloHapi = require('./routes/hello-hapi');
const routesShop = require('./routes/shops');
const routesOrders = require('./routes/orders');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const Config = require('./config/index')
// 配置服务器启动 host 与端口
server.connection({
  port: Config.port,
  host: Config.host,
});

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ])
  server.route([
    // 创建一个简单的 hello hapi 接口
    ...routesHelloHapi,
    ...routesShop,
    ...routesOrders
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
