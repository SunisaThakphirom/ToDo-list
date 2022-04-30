const todoModel = require('../models/todo')

exports.findTodo = async () => {
    return await todoModel.find();
}
exports.searchTodo = async (name) => {
    return await todoModel.find({header:`/${name}/`});
}
exports.createTodo = async (header, detail ,timestart,timeend,category)  => {
    const todo = new todoModel({
        category: category,
        header: header,
        detail: detail,
        timestart: timestart,
        timeend: timeend
    });
    return await todo.save();
}
exports.editTodo = async (header, detail ,timestart,timeend,category, id)  => {
    return await todoModel.updateOne({_id: id},{$set: {
        category: category,
        header: header,
        detail: detail,
        timestart: timestart,
        timeend: timeend,
    }});
}
exports.deleteTodo = async (id)  => {
    return await todoModel.deleteOne({'_id' : id});
}