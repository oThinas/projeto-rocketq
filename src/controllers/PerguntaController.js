module.exports = {
    index(req, res) {
        const salaId = req.params.sala
        const perguntaId = req.params.pergunta
        const acao = req.params.acao
        const senha = req.body.senha
        console.log(`salaId = ${salaId}, perguntaId = ${perguntaId}, ação = ${acao}, senha = ${senha}`)
    }
}