const express = require('express');
const { getCategory , createCategory ,deleteCategory ,searchCategory, editCategory } = require('../controllers/category')
const route = express.Router();

route.get('/',getCategory);
route.get('/:name',searchCategory);
route.post('/', createCategory);
route.patch('/:id',editCategory);
route.delete('/:id',deleteCategory);

module.exports = route;