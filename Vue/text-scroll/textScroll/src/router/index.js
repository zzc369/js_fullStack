import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Father from '@/components/view/demo1/father'
import Father2 from '@/components/view/demo2/father2'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/f1',
      name: 'F1',
      component: Father
    },
    {
      path: '/f2',
      name: 'F2',
      component: Father2
    }
  ]
})
