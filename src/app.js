const express = require('express')
const mongoose = require('mongoose')

class App {
    constructor() {
        this.app = express()

        this.database()
        this.routes()

        this.app.listen(3000, function() {
            console.log("Servidor rodando na porta 3000")
        })
    }

    database() {
        mongoose.connect('URI', { useNewUrlParser: true, useUnifiedTopology: true })
        mongoose.connection.on('error', function() {
            console.log('Erro ao conectar-se ao BD')
        })
    }

    routes() {
        this.app.use(require('./routes'))
    }
}

new App()