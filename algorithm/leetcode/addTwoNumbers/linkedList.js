//将数字的每一位变成一个ListNode的实例
// 既不是字符串，也不是数值，而是线性表数据结构
function ListNode(val) {
  this.val = val;
  // 指针
  this.next = null;
}

let n1 = new ListNode(1);
let n2 = new ListNode(2)
n1.next = n2;
let n3 = new ListNode(3)
n2.next = n3;
let n4 = new ListNode(4)
n3.next = n4;
let n5 = new ListNode(5)
n4.next = n5;
let n6 = new ListNode(6)
n5.next = n6;

// 遍历链表，travel一下
let node = n1;
while(node) {
  console.log(node.val)
  node = node.next;
}