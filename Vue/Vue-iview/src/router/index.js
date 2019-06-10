import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Index from '@/components/detail/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/table',
      name: 'Home',
      component: Home,
      children: [
        { 
          //将 二级路由 设置为默认路由 设置 path: '/'
          path: '/' ,
          name: 'Index' ,
          component: Index
        }
      ]
    }
  ]
})
