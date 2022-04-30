const todoService = require('../services/todo')

exports.getTodo = async function sayHello(req,res) {
    const data = await todoService.findTodo();
    res.status(200).json(data);
}
exports.searchTodo = async function search(req,res) {
    const name = req.params.name;
    const data = await todoService.searchTodo(name);
    
    res.status(200).json(data);
}
exports.createTodo = async (req,res) =>{
    try{
        const body = req.body;
        await todoService.createTodo(body.header, body.detail , body.timestart , body.timeend, body.category);
        res.status(201).json({
            status: true,
            message: 'Todo created successfully'
        });
    }
    catch{
        res.status(500).json({
            status: false,
            message: "Error"
        });
    }
}
exports.editTodo = async (req,res) =>{
    const id = req.params.id;

    try{
        const body = req.body;
        await todoService.editTodo(body.header, body.detail , body.timestart , body.timeend, body.category, id);
        res.status(200).json({
            status: true,
            message: 'Todo edit successfully'
        });
    }
    catch{
        res.status(500).json({
            status: false,
            message: "Error"
        });
    }
}
exports.deleteTodo = async (req,res) =>{
    const id = req.params.id;
    
    try{
        await todoService.deleteTodo(id);
        res.json({
            status: true,
            message: "Remove success"
        });
    }
    catch{
        res.status(500).json({
            status: false,
            message: "Error"
        });
    }
}
    