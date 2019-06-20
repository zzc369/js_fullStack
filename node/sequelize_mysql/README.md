npm init -y
yarn add mysql2 sequelize sequelize-cli   数据库驱动

./node_modules/.bin/sequelize  init 
./node_modules/.bin/sequelize db:create
./node_modules/.bin/sequelize migration:create --name create-shops-table  建表或者修改表
./node_modules/.bin/sequelize db:migrate
 

- sequelize 数据库脚手架
  mysql2数据库驱动
  sequelize orm 工具 table -> object
  对底层的sql API化  model
  sequelize-cli 命令行工具化