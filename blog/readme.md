npm i hexo-cli -g

hexo -v
hexo init myBlog

hexo g   生成文件
hexo s   起一个本地服务

github 新仓库  lmzhangzc.github.io   规范命名

_config.yml
  deploy:
  type: git
  repo: https://github.com/MengZhaoFly/MengZhaoFly.github.io.git
  branch: master

cnpm i hexo-deployer-git -S

hexo d  发布

https://lmzhangzc.github.io/

hexo new "文章名字"

每次写完文章，都需要 
hexo g 
hexo d

项目地址 在项目中 npm run build   之后多出dist文件

在项目文件中的config/index.js  
  里面 build中 assetsPublicPath: '/' -> assetsPublicPath: './'