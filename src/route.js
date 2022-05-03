const express = require('express')
const PerguntaController = require('./controllers/PerguntaController')
const SalaController = require('./controllers/SalaController')
// Cria a rota "/" com a resposta "index", ea a requisição dependendo do usuário
const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'entrar-sala'}))
route.get('/criar-senha', (req,res) => res.render("index", {page: 'criar-senha'}))

route.post('/criar-sala', SalaController.criar)
route.get('/sala/:sala', SalaController.open)
route.post('/entrar-sala', SalaController.entrar)

route.post('/pergunta/criar/:sala', PerguntaController.criar)
// Modelo que a informação da modal será passada (a senha é passada de outra forma)
route.post('/pergunta/:sala/:pergunta/:acao', PerguntaController.modalAcao)
// Exporta a variável route
module.exports = route