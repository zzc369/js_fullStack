- text-rendering: optimizeLegibility
文本抗锯齿

- -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

- 图片在有的浏览器里会默认加边框
border-style: none;

在手机端禁止左右的滚动条
overflow-x: hidden;
overflow-y: scroll;


-webkit-overflow-scrolling: touch; 

 /* 从PC端到移动端，屏宽在变
  适配时考虑的是宽度
  max-width 在PC时生效，960px 左右留白 ， PC上ok
  移动设备时 < 600 max-width 失效，平铺整个宽度
  高度scroll */
  max-width: 960px;

  max-width + margin:0 auto 轻松构建跨设备自适应
  搭盒子 
  语义化 main 主体 
  header 外面放一个div 盒子的责任划分
  语义化 + 盒子 (margin-bottom)

  