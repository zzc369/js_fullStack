// let ran_num = Math.random();
// 函数表达式
const hongbao = (total,num) =>{
    const arr = [];  // 待分配金额的数组
    // 定义计算量
    let restAmount = total,
    restNum = num;
    for(let i =0 ; i<num - 1;i++){
        //给前n-1个人随机
        // 20*Math.random()  这样是不公平的，
        // Math.random() * ((restAmount/restNum)*2)
        let amount = parseFloat(Math.random() * ((restAmount/restNum)*2-0)).toFixed(2);
        restAmount -= amount ;
        restNum--;
        arr.push(amount);
    }
    arr.push(restAmount.toFixed(2));

    return arr;
}
console.log(hongbao(20,47));

hongbao(20,47);