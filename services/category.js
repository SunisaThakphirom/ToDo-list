const categoryModel = require('../models/category')

exports.findCategory = async () => {
    return await categoryModel.find();
}
exports.searchCategory = async (name) => {
    return await categoryModel.find({header:`/${name}/`});
}
exports.createCategory = async (name, color)  => {
    const category = new categoryModel({
        name: name,
        color: color
    });
    return await category.save();
}

exports.editCategory = async (name, color, id)  => {
    return await categoryModel.updateOne({'_id': id}, { $set: { 'name': name, color: color} });
}
exports.deleteCategory = async (id)  => {
    return await categoryModel.deleteOne({'_id' : id});
}