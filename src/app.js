const express = require('express')

class App {
    constructor() {
        this.app = express()

        this.routes()

        this.app.listen(3000, function() {
            console.log("Servidor rodando na porta 3000")
        })
    }

    routes() {
        this.app.use(require('./routes'))
    }
}

new App()