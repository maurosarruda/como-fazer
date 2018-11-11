const express = require("express")
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

const port = process.env.PORT || 3000

app.get('/', async(request, response) => {
    response.render('index.ejs')
})

app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)

app.listen(port, (err) => {
    if(err) {
        console.log ('erro')
    }else{
        console.log ('servidor está rodando na porta:', port)
    }
})