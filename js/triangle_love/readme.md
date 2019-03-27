构造函数 Constructor
prototype 原型
实例 instance
JS没有类，只有对象，都是通过原型来拿到的

通过构造函数Person 生成了person这个实例
同时我们在Person的原型 Person.prototype定义了getName方法

构造函数 运行的，new Person()   this -> 新的实例，空对象Person {}.name
实例怎么拿到原型对象的方法或属性？ 
1. 任何对象都有__proto__私有对象，这个对象的出处是哪？实例和类之间没有血缘关系，__proto__
2. 构造函数有prototype属性
3. 原型对象上有constructor 属性指向构造函数，


js 面型对象是原型的

原型链