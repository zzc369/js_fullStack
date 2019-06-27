//  descriptor 拿到了add 这个方法的 descriptor
// function log(target, name, descriptor) {
//   const method = descriptor.value;
//   descriptor.value = function (...args) {
//     console.log('log type add:', method);
//     return method(...args);
//   }
// }
function log(logType) {
  return function (target, name, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
      console.log('log type', logType);
      return method(...args);
    }
  }
}

// 修饰符是一个函数 
// @log log是一个函数
// @log('add') 也得是一个函数
class Base {
  @log('add')
  add(a, b) {
    // console.log('log type add:')
    return a + b;
  }
  @log('divide')
  divide(a, b) {
    return a / b;
  }
}
const base = new Base();
console.log('add:', base.add(1, 2))
console.log('add:', base.divide(1, 2))

// 加日志
// 有了更好 没有也行的 装饰器
// 修饰符就是一个函数

export default base;