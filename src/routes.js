const express = require('express')
const ToDo = require('./models/todo')

class Todo {
    constructor() {
        this.app = express()

        this.app.get('/', this.items)
        this.app.post('/', this.newItem)
        this.app.put('/', this.changeItem)
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

    changeItem(req, res) {
        ToDo.updateOne({_id: req.body.id}, {title: req.body.new_title, is_done: req.body.new_status}).then( doc => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: 'Erro ao atualizar o item'
            })
        })
    }
}

module.exports = new Todo().app