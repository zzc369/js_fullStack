- 组件间的状态，兄弟， 父子间，多余代码
大型项目 多组件 多个跨路由的组件 共享状态
共享状态 
- 状态的管理协同 
 dispatch(action{type:'', payload:''}) -> reducer(无差别的状态计算 switch 协同) -> state

1. head body 两个函数组件 共享了单一的全局状态树
2. 状态全局， 可以被随意修改
3. dispatch 使状态的改变可控，任何改变， 都可以在dispatch中找到源头
4. 通知发生了状态改变， subscribe