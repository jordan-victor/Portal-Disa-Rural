const express = require("express")
const login = express.Router()

const { where } = require("sequelize")
const { raw } = require("body-parser")

const users = require('../database/login/user.js')
const Prof = users.Prof


login.get('/ShowCreateUser', (req,res)=>{
    Prof.findAll({raw:true}).then(profs=>{
        res.render('cadastro',{
            profs:profs
        })
    })
    //res.render('cadastro')
})

//CADASTRO
login.post('/buscarCpf', (req, res)=>{
    let cpf_prof = req.body.cpfBusca
    /*
    Prof.findOne({raw:true, where:{cpf_prof:cpf_prof}}).then(prof=>{
        res.render('cadastro',{
            prof:prof
        })
    })
    */
})

login.post('/createUser', (req, res)=>{

})





//LOGIN
login.get('/login', (req, res)=>{
    res.render('login')
})


module.exports = login