类型 typeof 
在js中 复杂数据类型 就是object
Array 是可以遍历的对象
Function 是可以运行的对象
Json Object对象字面量是是可以枚举的对象，for(key in)
typeof 半吊子 typeof [] 会返回object 无法跟json区分开来

有一个方法可以区分Array 和 Json Object


立即执行函数

Object.prototype.toString.call()

1. 用对象字面量来做面向对象， 区别于原型式的
它没有被实例化的需要 Type ，将在程序中就做类型检测
var Type = {};  组织代码
2. for 来一次性的加完； 同步异步的问题 使用闭包来将type作用域封闭起来，
使用立即执行函数，同步执行，类型检测函数的定义，因为函数嵌套，形成了一个闭包，
当函数再被调用时(异步)，找到定义时刻的type
3. Object.prototype.toString.call(obj)
Object? 祖先，顶级对象。函数才有prototype属性， ？？？？
原型上才有这样的toString方法，解决typeof的尴尬，
"[object object]"
[object Array]  方法的执行方式可以被改变
Object.prototype.toString.call(obj)

js 有七个假值
undefined null +0 -0 NaN "" false
[] == ![] //true