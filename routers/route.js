const express = require('express');

const route = express.Router();



const member = require('./member');
route.use('/member',member);
const todo = require('./todo');
route.use('/todo',todo);
const category = require('./category');
route.use('/category',category);
module.exports = route;