const Database = require('../db/config')
module.exports = {
    async modalAcao(req, res) {
        const db = await Database()
        const salaId = req.params.sala
        const perguntaId = req.params.pergunta
        const acao = req.params.acao
        const senha = req.body.senha
        
        // Diferente do "db.all" o "db.get" pega apenas um campo
        const senhaCorreta = await db.get(`SELECT senha FROM salas WHERE id_sala = ${salaId}`)
        if (senhaCorreta.senha == senha) {
            if (acao == "apagar") {
                await db.run(`DELETE FROM perguntas WHERE id_pergunta = ${perguntaId}`)
            } else {
                await db.run(`UPDATE perguntas SET lida = 1 WHERE id_pergunta = ${perguntaId}`)
            }
            res.redirect(`/sala/${salaId}`)
        } else {
            res.render('senha-incorreta', {salaId: salaId})
        }

    },
    
    async criar(req, res) {
        const db = await Database()
        const conteudo = req.body.conteudo
        const salaId = req.params.sala

        await db.run(`INSERT INTO perguntas (
            conteudo,
            id_sala,
            lida
        ) VALUES (
            "${conteudo}",
            ${salaId},
            0
        )`)

        res.redirect(`/sala/${salaId}`)
    },
}