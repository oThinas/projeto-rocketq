const express = require('express')
const PerguntaController = require('./controllers/PerguntaController')
const SalaController = require('./controllers/SalaController')
// Cria a rota "/" com a resposta "index", ea a requisição dependendo do usuário
const route = express.Router()
route.get('/', (req, res) => res.render("index", {page: 'entrar-sala'}))
route.get('/criar-senha', (req,res) => res.render("index", {page: 'criar-senha'}))
route.get('/sala/:sala', (req,res) => res.render("sala"))
// Modelo que a informação da modal será passada (a senha é passada de outra forma)
route.post('/pergunta/:sala/:pergunta/:acao', PerguntaController.index)
route.post('/criar-sala', SalaController.criar)
// Exporta a variável route
module.exports = route