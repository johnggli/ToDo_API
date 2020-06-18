const express = require('express')
const ToDo = require('./models/todo')

class Todo {
    constructor() {
        this.app = express()

        this.app.get('/', this.items)
        this.app.post('/', this.newItem)
    }

    items(req, res) {
        ToDo.find().then(docs => {
            res.json({
                items: docs
            })
        }, err => {
            res.status(500).json({
                error: 'Erro ao carregar os itens'
            })
        })
    }

    newItem(req, res) {
        let todoItem = new ToDo({
            title: req.body.title
        })

        todoItem.save().then(doc => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: 'Erro ao criar item'
            })
        })
    }
}

module.exports = new Todo().app