const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name:String,
    color:String
});

module.exports = mongoose.model('tb_category', categorySchema);