const categoryService = require('../services/category')

exports.getCategory = async function sayHello(req,res) {
    const data = await categoryService.findCategory();
    res.status(200).json(data);
}
exports.searchCategory = async function sayHello(req,res) {
    const name = req.params.name;
    const data = await categoryService.searchCategory(name);
    
    res.status(200).json(data);
}
exports.editCategory = async (req,res) =>{
    const id = req.params.id;
    try{
        const body = req.body;
        await categoryService.editCategory(body.name, body.color, id);
        res.status(200).json({
            status: true,
            message: 'Category update successfully'
        });
    }
    catch{
        res.status(500).json({
            status: false,
            message: "Error"
        });
    }
}
exports.createCategory = async (req,res) =>{
    try{
        const body = req.body;
        await categoryService.createCategory(body.name, body.color);
        res.status(201).json({
            status: true,
            message: 'Category created successfully'
        });
    }
    catch{
        res.status(500).json({
            status: false,
            message: "Error"
        });
    }
}
exports.deleteCategory = async (req,res) =>{
    const id = req.params.id;
    
    try{
        await categoryService.deleteCategory(id);
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
    