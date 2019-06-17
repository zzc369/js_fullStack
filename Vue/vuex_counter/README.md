 vue 开发，两部分
 组件开发(协作)     vuex数据管理(应用程序的数据流)
 store 存储的商店
 new Vuex.Store({
   state,
 })
  中央管理 每个组件就相当于地方
  读 this.$store.state.count
 写 actions mutations getters
 vuex 不是什么时候都要，小项目不需要，但是大项目离不开


 - Vue 实现核心MVVM
  其他的通过Vue.use() 插入进去
  this.$store   Vue内部实现(带$的)
  this.$router    插件

- mutations 唯一可以修改state的地方
- data() 将会被state取代
  data只是自身状态的数据
  methods改变状态的方法，会是actions