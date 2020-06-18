const express = require('express')

class Todo {
    constructor() {
        this.app = express()

        this.app.get('/', this.items)
    }

    items() {

    }
}

module.exports = new Todo().app