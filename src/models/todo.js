const mongoose = require('mongoose')
const Schema = mongoose.Schema

let todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    is_done:  {
        type: Boolean,
        required: false,
        default: false
    }
})

module.exports = mongoose.model('ToDo', todoSchema)