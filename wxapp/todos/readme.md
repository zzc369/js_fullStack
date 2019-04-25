- wxml 只是模版，不像html5，我们看到的是page，不是wxml,而是编译过后的wxml，
  js data 拿去模版生成的page view

- 登陆 登陆后不用再登陆了 页面不是静态的，html5里面页面也不是静态的，通过dom ajax变成动态的
  页面的动态在我们的小程序里面是通过mvvm来实现的 登陆前后是不同的状态

- wxml占位符{{}} 或者指令 到data里面加相应的数据项就好
  this.setData()在设置数据，并且带来数据相应部分UI的重新渲染。  意义：即改变数据又重新的把页面渲染起来
  数据驱动界面  响应式编程
  跟dom say goodbye
  mvvm 数据决定一切
  数据状态 === 界面状态  
  登陆状态 我们设置了一个hasUserInfo  界面在某一刻有且只有一个状态 
  这个登陆状态跟userInfo:()是两码事，userInfo负责数据驱动界面

- {{}} 不只是数据输出，里面是js运行  
  {{addShow ? '' : 'hide'}}
  