const express = require('express');
const { getTodo , createTodo ,deleteTodo ,searchTodo, editTodo } = require('../controllers/todo')
const route = express.Router();

route.get('/',getTodo);
route.get('/:name',searchTodo);
route.post('/', createTodo);
route.patch('/:id',editTodo);
route.delete('/:id',deleteTodo);

module.exports = route;