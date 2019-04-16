// 位移运算符（右移），位操作符
// 二进制位 0000 1011 -> 右移一位 0000 0101
// console.log(11 >> 1);
// 左移 0001 0110
// 利用位移运算 实现 /2 *2 的效果
// console.log(11 << 1);

// 猛哥给蜗牛买香蕉
// N piles of bananas 每挂香蕉上的数量是不一样的
// [3,6,7,11],  H 小时内吃完 一小时应该吃几根香蕉？  
// 一小时内吃mid根香蕉，一次只能吃一把，一小时最少吃几根，可以在H小时内吃完

/**
 * 
 * @desc 做少吃香蕉的速度，在规定时间内吃完
 * @param {number[]} piles
 * @param {number} H
 * @param {number}
 */
function minEatingSpeed(piles,H) {
  let lo = 1, hi = Math.max(...piles);
  // 二分查找
  while(lo <= hi) {
    // lo++;
    let mid = lo+((hi-lo) >> 1);
    if(canEatAllBanans(piles, H, mid)) {
      hi = mid - 1;

    }else {
      // 没有吃完 吃完？
      lo = mid + 1 ;
    }
  }

  return lo;
}
/**
 * @desc 判断能否吃完香蕉
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid 
 * @return {boolean}
 */
function canEatAllBanans(piles, H ,mid) {

  let h = 0;
  for(let pile of piles) {
    h += Math.ceil(pile / mid);

  }
  return h <= H;
}

let piles = [3,6,7,11];
console.log(minEatingSpeed(piles,8));


// - 吃完香蕉
//   H小时内吃完
// - 最小的一个数