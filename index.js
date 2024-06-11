//CONFIGURAÇÕES INICIAIS
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({'extended': false}))
//CONFIGURAÇÕES DO BANCO...


app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(3000)