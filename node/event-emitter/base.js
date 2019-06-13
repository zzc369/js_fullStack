const EventEmitter = require('events');
class Ev extends EventEmitter {};

const ev = new Ev();

ev.on('open', ()=>{
  console.log('open event');
})
ev.on('open', ()=>{
  console.log('open event2');
})
const callback = () => {
  console.log('open1')
}
ev.on('open1',callback);
ev.emit('open1');
// 只会触发一次，，因为在第一次触发之后就移除了，
ev.removeListener('open1',callback);
ev.emit('open1');



ev.once('open2',() => {
  console.log('open222')
})
ev.emit('open2');
ev.emit('open2');
// setTimeout(() => {
//   ev.emit('open')
// },2000)