const express = require('express')
const geindController = express.Router()

geindController.get('/geind', (req, res)=>{
    res.render('./gerencias/geind')
})


module.exports = geindController