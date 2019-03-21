清除浮动的五种方法：
1. 在父元素底部加上一行代码 <div style="clear:left"></div>(clear后面的属性取决于浮动的方向)
2. 在父元素的css上加一个float:left(不建议使用，会使后面的元素布局混乱)
3. 在父元素的div添加一个(使用css中的伪类after)
  .content::after {
    content: '';
    clear: both;
    display: block；
  }
  但优秀的做法是定义一个clearFix的class类，再
  .clearFix::after {
    content: '';
    clear: both;
    display: block;
  }
  这样在页面中多处需要清除浮动就可以都使用这个样式
  4. 利用BFC(块级格式化上下文)的效果来弥补父容器的高度塌陷
  div.content {
    overflow:hidden |auto|scroll;
  }
  5. 尼古拉斯大师 方法，把父容器的display 设置为table，
  可以创建一个匿名表格单元，这个匿名表格单元可以直接触发BFC效果(不推荐使用，会造成很多问题)
  .content {
    display: table;
  }