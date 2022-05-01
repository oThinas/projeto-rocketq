const Database = require("../db/config")
module.exports = {
    async criar(req, res) {
        const db = await Database()
        const senha = req.body.senha
        let salaId = ""
        for (var i = 1; i <= 6; i++){
            salaId += Math.floor(Math.random() * 10).toString()
        }
        await db.run(`INSERT INTO salas (
            id_sala,
            senha
        ) VALUES (
            ${parseInt(salaId)},
            ${senha}
        )`)
        await db.close()
        res.redirect(`sala/${salaId}`)
    }
}