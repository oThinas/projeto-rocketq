const Database = require("../db/config")
module.exports = {
    async criar(req, res) {
        const db = await Database()
        const senha = req.body.senha
        let salaId = ""
        let isSalaExistente = true

        while (isSalaExistente) {
            for (var i = 1; i <= 6; i++){
                salaId += Math.floor(Math.random() * 10).toString()
            }
            
            const salaExistenteIds = await db.all(`SELECT id_sala FROM salas`)
            // Faz um varredura em todos os "id_sala". O primeiro que retornar "True", p código para a varredura
            isSalaExistente = salaExistenteIds.some(salaExistenteId => salaExistenteId === salaId)
            if (!isSalaExistente) {
                await db.run(`INSERT INTO salas (
                    id_sala,
                    senha
                ) VALUES (
                    ${parseInt(salaId)},
                    "${senha}"
                )`)
            }
        }

        await db.close()

        res.redirect(`/sala/${salaId}`)
    },

    async open(req, res) {
        const db = await Database()

        // "params" pega a "sala" em "/sala/:sala"
        const salaId = req.params.sala
        const perguntas = await db.all(`SELECT * FROM perguntas WHERE id_sala = ${salaId} and lida = 0`)
        const perguntasLidas = await db.all(`SELECT * FROM perguntas WHERE id_sala = ${salaId} and lida = 1`)
        let isPerguntas = false

        if (perguntas.length != 0 || perguntasLidas.length != 0) {
            isPerguntas = true
        }

        res.render("sala", {salaId: salaId, perguntas: perguntas, perguntasLidas: perguntasLidas, isPerguntas: isPerguntas})
    },

    entrar(req, res) {
        const salaId = req.body.salaId
        res.redirect(`/sala/${salaId}`)
    }
}