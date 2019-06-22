module.exports =[
  {
    method: 'GET',
    path: '/shops',
    handler: (request, reply) => {
      reply();
    },
    config: {
      tags: ['tags','shops'],
      description: '获取店铺列表'
    }
  },
  {
    method: 'GET',
    path: '/shops/{shopId}/goods',
    handler: (request, reply) => {
      reply();
    },
    config: {
      tags: ['tags','shops'],
      description: '获取店铺列表'
    }
  }
]