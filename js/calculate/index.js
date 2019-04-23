// 策略模式
let stratigies = {
  'S': function (salary) {
    return salary * 5;
  },
  'A': function (salary) {
    return salary * 3;
  },
  'B': function (salary) {
    return salary * 2;
  },
  'C': function (salary) {
    return salary * 1;
  },
  'D': function (salary) {
    return salary;
  },
};
function calculate(level, salary) {
  return stratigies[level](salary);
}
var d = calculate('S', 1000);
console.log(d);