function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

let a1 = new TreeNode(1);
let a2 = new TreeNode(2);
let a3 = new TreeNode(3);
a1.right = a2;
a2.left = a3;
// [1,3,2]

var inorderTraversal = (root) => {
  var stack = [], //堆栈
    result = [],
    cur;//当前的
  cur = root;
  // 当还有未处理的节点
  while(stack.length > 0 || cur !== null) {
    // 节点不为空
    if(cur !== null) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop(); // 第一次是最左边的叶子
      result.push(cur.val);
      cur = cur.right
    }
  }


  return result;
}
console.log(inorderTraversal(a1))