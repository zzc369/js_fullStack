- 快速开发
  选择合适的starter
  将文件目录中 .git 目录删掉

- 全家桶项目 
  vue (负责 MVVM) + vue-router + vuex + axios(负责跟后端通信)

- 先配vue-router 路由接管一切
  ./router/index.js  index.js 会补齐
  
- pages/
  所有路由级别的组件，都叫页面组件
  alias

- less less-loader
  scoped
- 如何让登录页更酷
  transition 的 
  v-enter(短) -> v-enter-active
  (transition时间) 
  v-leave(短) -> v-leave-active
  (opacity: 0 ,transition时间)