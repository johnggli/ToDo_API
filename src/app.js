const express = require('express')
const mongoose = require('mongoose')

class App {
    constructor() {
        this.app = express()

        this.app.use(require('body-parser').json())

        this.database()
        this.routes()

        this.app.listen(process.env.PORT || 3000, function() {
            console.log("Servidor rodando na porta " + process.env.PORT || 3000)
        })
    }

    database() {
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        mongoose.connection.on('error', function() {
            console.log('Erro ao conectar-se ao BD')
        })
    }

    routes() {
        this.app.use(require('./routes'))
    }
}

new App()