const express = require("express")
const login = express.Router()


login.post('/createUser', (req, res)=>{

})

login.get('/ShowCreateUser', (req,res)=>{
    res.render('cadastro')
})

login.get('/login', (req, res)=>{
    res.render('login')
})


module.exports = login