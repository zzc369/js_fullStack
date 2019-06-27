/**
 * 防抖
    func wait
 *  */
export function debounce (func, wait) {
  var result,timeout;
  return function () {
    // this  and 参数
    // var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // result = func.apply(context, args)
      result = func(args)
    }, wait);
    return result
  }
}
/**
 * 可用于装饰的防抖
 * 装饰器都是函数 
 */
export function decDebounce (wait) {
  return function (target, key, descriptor) {
    var callBack = descriptor.value;
    var fn = debounce(callBack, wait);
    descriptor.value = fn;
  }
}

export function decArrowDebounce(wait) {
  return function (target, key, descriptor) {
    // 拿到原来的
    var callBack = descriptor.initializer && descriptor.initializer();
    var fn = debounce(callBack, wait);
    return {
      configurable: true,
      get: function () {
        return fn;
      }
    }
  }
}

// hoc 高阶组件 装饰整个组件 class
// 修饰类的
export function decDisplayName(displayname) {
  return function (target) {
    target.displayName = displayname;
  }
}
class Base {
  a() {
    console.log('a')
  }
  b = () => {
    console.log('b')
  }
}

const base =new Base();
console.log('base', base)