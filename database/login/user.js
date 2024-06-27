const Sequelize = require('sequelize')
const connection = new Sequelize('disa-rural', 'postgres', 'portalrural@Xyz.321', {
    host:'localhost',
    dialect:'postgres'
})

//TABELA USUÁRIOS
/*
const User = connection.define('usuarios',{
    usuario:{type: Sequelize.STRING,allowNull:false},
    senha:{type: Sequelize.STRING,allowNull:false},
    email:{type: Sequelize.STRING, allowNull:false},
    cpf:{type: Sequelize.STRING, allowNull:false}
})
User.sync({force:false})
*/
const {DataTypes} = require('sequelize')

module.exports = connection