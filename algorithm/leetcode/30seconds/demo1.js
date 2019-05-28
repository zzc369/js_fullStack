
// const words = str => {
//   console.log(str.split(" "))
// }
// console.log(words('I love javascript!!'));
const words = (str, pattern=/[^a-zA-Z-]+/) => str.split(pattern)

console.log(words('I love javascript!!'));