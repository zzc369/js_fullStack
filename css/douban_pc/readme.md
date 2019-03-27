PC mobile
mobile first 
flex 在一些老的浏览器里会失效，要IE10+以上
布局：float 撑起来PC布局

float 会离开文档流
BFC 
float 离开文档流 跟 position:absolute 不一样
float 是魔鬼 会影响兄弟元素

两列式布局 除了float 还有谁？定位不用来做布局
inline-block  grid 网格式布局

文字超出则截断，打三个点
  white-space: nowrap;  文字不换行
  overflow: hidden;
  text-overflow: ellipsis;

  <!-- pc 为什么不用bgi放置图片？
                moblie端 盒子大小是响应rem + cover 
                pc端 可以算死像素 可以用img-->