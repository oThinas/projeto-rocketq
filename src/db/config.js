const sqlite3 = require("sqlite3")
// Importando apenas o módulo "open" de "sqlite"
const { open } = require("sqlite")

module.exports = () => open({
    filename: './src/db/rocketq.sqlite',
    driver: sqlite3.Database,
})
