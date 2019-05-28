// [1,2,3,4] 求出平均值
// function func (num) {
//   let sum = 0;
//   for(let i = 0; i < num.length;i++) {
//     sum += num[i];
//   }
//   return sum/num.length;
// }
// console.log(func([1,2,3,4]))

const average =(...nums) => nums.reduce((acc,val) => acc+val,0)/nums.length
console.log(average(...[1,2,3,4]))  //spread