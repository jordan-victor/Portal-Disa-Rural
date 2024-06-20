const express = require("express")
const login = express.Router()

login.get('/login', (req, res)=>{
    res.render('login')
})


module.exports = login