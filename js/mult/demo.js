
// 全局变量太多,cache只为mult服务，空间的污染
// 函数里面的变量会运行后消失掉
var mult = (function(){
  let cache = {};
  return function(...args) {
    let args = Array.prototype.join.call(args,',')
    if (key in cache) {
      return cache[key]
    }
    let a = 1;
    for(let i = 0,l = args.length;i<l;i++){
      a = a * args[i]
    }

    cache[key] = a;
    return a;
  }
})()