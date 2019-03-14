// 数组是最廉价的数据结构
let enc_qq = [6,3,1,7,5,8,9,2,4],qq = []; //真正的qq
head = 0;//队首指针，要移除的元素位置
tail = 9;//队尾指针，要加入的元素位置
// 第一个数移除
while(head < tail){
    qq.push(enc_qq[head]);
    head++;
    enc_qq[tail] = enc_qq[head];
    tail++;
    head++;
}
//enc_qq.shift();
console.log( typeof qq);
// shift() 移除数组中的第一个数
// enc_qq.shift();
// 在数组的第一位插入一个数字
// enc_qq.unshift(0);

// 弹出数组最后一位
// enc_qq.pop();
// 在数组的最后一位添加一位数
// enc_qq.push(0);

// 字符串是字符集合
// console.log(enc_qq.length,enc_qq[0]);





