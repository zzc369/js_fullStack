// function Person(name) {
//   this.name = name
// }
// let p = new Person('ssd')
// p.__proto__ = Person.prototype
// Person.__proto__ = Function.prototype


// var foo = {},
//  F = function() {};
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)  // valA
// console.log(foo.b)  // undefined
// console.log(F.a) // valA
// console.log(F.b) // valB


// function Person(name) {
//   this.name = name
//   return {}
//   // return 666
// }
// let p = new Person('ssd')
// console.log(p)  // {}


// function Person(name) {
//   this.name = name
//    return 666
// }
// let p = new Person('ssd')
// console.log(p)  // Person { name: 'ssd' }


function Person(name) {
  this.name = name
  
}
function Student() {

}
Student.prototype = Person.prototype;
Student.prototype.constructor = Student
let p = new Student('ssd')
console.log(p) // Student {}
console.log(p instanceof Person)  // true


// for(var i = 0; i< 10; i++) {
//   setTimeout(() => {
//     console.log(i) // 10个10
//   }, 0);
// }

// for in 迭代 和 for of 有什么区别
Array.prototype.method = function () {
  console.log(1111)
}
var myArray = [1,2,3,4,5,6,7]
myArray.name = 'zzc'
for (let index of myArray) {
  console.log(index)
}
for (const key in myArray) {
  console.log(myArray[key])
}

let aArr = [1,[2,3],4,5,[6,7,[3,2,8]]]
// function outputArr(arr) {
//   var res = [];
//   for(var i = 0; i<arr.length; i++) {
//     if(Array.isArray(arr[i])) {
//       res = res.concat(outputArr(arr[i]))
//     } else {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

function outputArr(arr) {
  return arr.reduce(function(pre,item) {
    return pre.concat(Array.isArray(item)?outputArr(item):item)
  },[])
}