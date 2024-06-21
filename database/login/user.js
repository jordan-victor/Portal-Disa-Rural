const Sequelize = require('sequelize')
const connection = new Sequelize('user', 'senha', 'root',{
    host:'localhost',
    dialect:'postgre'
})