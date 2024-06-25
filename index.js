//CONFIGURAÇÕES INICIAIS
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({'extended': false}))
//CONFIGURAÇÕES DO BANCO...





//IMPORTANDO CONTROLLERS 
const login = require('./controllers/loginController')
app.use('/', login)

const geindController = require('./controllers/gerencias/geindController')
app.use('/', geindController)




//HOME
app.get('/', (req, res)=>{
    res.render('home')
})




app.get('/publicacoes', (req, res)=>{
    res.render('navbarViews/publicacoes')
})

app.listen(3000)