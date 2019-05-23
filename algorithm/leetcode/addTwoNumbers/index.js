//会溢出
// 之前用的是字符串，现在用链表
/**
 * 
 * @param {linkedList} l1 
 * @param {linkedList} l2 
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function(l1, l2) {
  let a = [];
  let b = [];
  let newL1 = l1,  // 引用赋值
      newL2 = l2;
  // 倒着来，链表是单向的
  // array reverse()
  while (newL1) {
    a.push(newL1.val)
    newL1 = newL1.next;
  }
  while(newL2) {
    b.push(newL2.val)
    newL2 = newL2.next;
  }
  // console.log(a,b);
  // a.reverse();
  // b.reverse();

  // console.log(a,b);

  let ans = []; //两位相加的结果
  let carry = 0; // 是否进位

  while(a.length || b.length) {
    let c = a.length?a.shift() : 0;
    let d = b.length?b.shift() : 0;
    let sum = c + d + carry;
    ans.push(sum % 10);
    if(sum >= 10) {
      carry = 1;
    }else {
      carry = 0;
    }
  }
  carry && (ans.push(carry));
  // ans.reverse();
  // return ans.join('');
  // 返回的应该也是一个结点，只要头结点
  let ret = [];
  for(let i = 0,len = ans.length; i < len;i++) {
    ret[i] = new ListNode(ans[i])
  }
  for(let i = 0,len = ans.length; i < len -1;i++) {
    ret[i].next = ret[i+1]
  }
  return ret[0]
}

// 链表的初始化
// let a1 = new ListNode(2);
// let a2 = new ListNode(4),a3 = new ListNode(3);
// a1.next = a2;
// a2.next = a3;

let a1 =new ListNode(1),a2 = new ListNode(8);
a1.next = a2;
let b1 =new ListNode(0)
// let b1 = new ListNode(5);
// let b2 = new ListNode(6),b3 = new ListNode(4);
// b1.next = b2;
// b2.next = b3;

let ret =  addTwoNumbers(a1,b1) ;
console.log(ret)
while(ret) {
  console.log(ret.val)
  ret = ret.next;
}
// let node = a1;
// while(node) {
//   console.log(node.val)
//   node = node.next;
// }