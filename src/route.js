const express = require('express')
// Cria a rota "/" com a resposta "index", sem requisição e assim por diante...
const route = express.Router()
route.get('/', (req, res) => res.render("index"))
route.get('/sala', (req,res) => res.render("sala"))
route.get('/criar-sala', (req,res) => res.render("criar-sala"))
// Exporta a variável route
module.exports = route