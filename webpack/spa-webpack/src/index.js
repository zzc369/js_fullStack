import { sync } from './components/sync/index'
document.getElementById('btn').addEventListener('click', function() {
  // 执行 async 
  import(/* webpackChunkName:'async' */'./components/async/index')
  .then(_ => {
    _.default.init();
  })
})
sync();