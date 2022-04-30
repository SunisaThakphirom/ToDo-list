const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    category: String,
    header: String,
    detail: String,
    timestart: String,
    timeend: String
});

module.exports = mongoose.model('tb_todo', todoSchema);