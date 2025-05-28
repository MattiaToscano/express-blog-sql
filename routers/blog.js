const express = require('express')
const router = express.Router

//Imposto le rotte crud
application.get('/blog', (req, res) => {
    console.log('Elenco Blog')
    res.send('Elenco blog')
})

app.get('/blog/:id', (req, res) => {
    const id = req.params.id
    console.log('Elenco blog con id' + id)
    res.send('Elenco blog con id' + id)
})

module.exports = routers;
