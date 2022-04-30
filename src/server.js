// Importa o express (módulo que foi instalado), a rota e o caminho
const express = require('express')
const route = require('./route')
const path = require('path')

// Cria o server na porta "3000" e loga no terminal "Server rodando."
const server = express()

// Define o "ejs" como a "view engine" e a localização do arquivo a ser aberto no navegador
// A localização é composta por ".../projeto-rocketq/src/views". "__dirname = src" porque o arquvio "server.js" está dentro da pasta "src"
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

// Define a pasta "public" como static. Nessa pasta ficará tudo o que o público poderá ver caso acesse o site por meio de host
server.use(express.static("public"))

// Pega a informação do formulário (view) e passa para o controller
server.use(express.urlencoded({extended: true}))

// Define o uso da "route", e cria o server na porta "3000" e loga no terminal "Server rodando."
server.use(route)
server.listen(3000, () => console.log("Server rodando."))