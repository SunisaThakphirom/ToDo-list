const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model('tb_members', memberSchema);