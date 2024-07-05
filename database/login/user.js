const Sequelize = require('sequelize')
const connection = new Sequelize('disa-rural', 'postgres', 'portalrural@Xyz.321', {
    host:'localhost',
    dialect:'postgres'
})





//TABELA PROFISSIONAIS
const Prof = connection.define('rurals',{
    nome_prof:{type: Sequelize.STRING, allowNull:false},
    cpf_prof:{type: Sequelize.STRING, allowNull: false},
    cargo:{type: Sequelize.STRING, allowNull: false},
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    created_at:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    }
})

Prof.sync({force:true})



//TABELA USUÁRIOS

const User = connection.define('usuarios',{
    usuario:{type: Sequelize.STRING,allowNull:false},
    senha:{type: Sequelize.STRING,allowNull:false},
    email:{type: Sequelize.STRING, allowNull:false},
    cpf:{type: Sequelize.STRING, allowNull:false}
})
User.sync({force:false})

const {DataTypes} = require('sequelize')

module.exports = {connection, Prof, User}