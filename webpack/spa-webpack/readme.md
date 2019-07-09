## rollup
tree shaking
没用到的代码， 不会被打包

## parcel
零配置

## webpack 4.0
production 会自动开启 tree shaking  
作用域里面 的代码 无法分析 

## css-module
命名冲突
利用 hash值 解决重复命名

## webpack 3.0
import(/* webpackChunkName:'async' */
magic comment 魔法注释
异步加载模块