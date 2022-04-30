const memberModel = require('../models/member')

exports.findmember = async () => {
    return await memberModel.find();
}
exports.register = async (username,email, password) => {
    return await memberModel.findOne({ username:username,email:email,password:password });
}
exports.login = async (username, password) => {
    return await memberModel.findOne({ "username":username, "password":password });
}

exports.createMember = async (email, username, password)  => {
    const member = new memberModel({
        username: username,
        email: email,
        password: password
    });
    return await member.save();
}
exports.deleteMember = async (id)  => {
    return await memberModel.deleteOne({'_id' : id});
}