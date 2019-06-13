const EventEmitter = require('events');
class Ev extends EventEmitter {};
const ev = new Ev();

//绑定事件
['search','choose'].forEach(key => {
  // 把所有剩余函数参数整理为数组    args=[],处理参数不固定
  ev.on(key, async function(...args) {
    
    const fn = require(`./lib/${key}`);
    // ...args 的作用，将上面的args数组打散，传入fn -> fn(arg1,arg2,arg3)
    const res = await fn(...args)
    console.log('执行后的结果:',res);
    ev.emit('handle',key,res,...args)
  })
})
ev.on('afterSearch',function(data,keyword){
  if (!data || !data.result || !data.result.songs) {
    console.log(`没搜索到 ${q} 的相关结果`)
    return;
  }
  const songs = data.result.songs
  ev.emit('choose', songs)

})

ev.on('handle',function(key,res,...args){
  switch(key) {
    case 'search':
      return ev.emit('afterSearch',res,args[0])
  }
})
function main(arg) {
  let keyword = arg[2];
  ev.emit('search',keyword)
}
main(process.argv);