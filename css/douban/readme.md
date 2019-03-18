- css  命名词汇
  feeds *-item
- html 结构及布局
从上到下 从左到右 语义化和功能性
 1. 套路
 content > h3+p
 2. 盒子
 3. a 作为盒子，在移动端是很正常的，
 display:block;
 4. 盒子模型 
 文字line-height padding margin
 5. 文字截断
 tmall 商铺信息是由商家填的，它的高度不被限制，
 display:-webkit-box ;新的盒子模型，像flex来划分父元素的空间。
 overflow:hidden;   超出隐藏
 -webkit-line-clamp 行数
 -weblit-box-orient:vertical
 
 6. 浮动 float: left | right
 离开文档流
 在一个盒子里，将要浮动的元素放在最前面，
 左右布局，
 在flex 布局之前，我们一般借助于float来布局，
 图片的宽高 宽度用百分比，自适应需求，
 高度呢？ div padding-top:根据自身的宽度来做比例100% 正方形
 自适应设备里盒子的等比例设置 width 百分比  高度用 padding-top
