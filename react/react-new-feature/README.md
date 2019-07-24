## Concurrent mode
  async mode
  让react的整体渲染有一个优先级的排比
  js是单线程的
  浏览器是多线程的
  1. ui 线程
  2. js 线程
  3. 事件
  4. http
  js线程 和 ui线程 互斥： js可以操作dom