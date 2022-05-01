const Database = require("./config")
const initDb = {
    async init(){
        // JavaScript é mais rápido do que o banco de dados, então o "await" força o código a esperar um retorno para continuar o código. Sempre que o "await" existir, ele deverá estar dentro de uma função "async"
        const db = await Database()

        // Aqui entram os códigos SQL
        await db.exec(`CREATE TABLE salas (
            id_sala INTEGER PRIMARY KEY,
            senha TEXT
        )`)
        await db.exec(`CREATE TABLE perguntas (
            id_pergunta INTEGER PRIMARY KEY AUTOINCREMENT,
            conteudo TEXT,
            lida INT
        )`)
        await db.close()
    }
}

initDb.init()

