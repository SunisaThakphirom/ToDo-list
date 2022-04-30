const memberService = require('../services/member')

exports.getMember = async function sayHello(req,res) {
    const data = await memberService.findmember();
    res.status(200).json(data);
}
exports.register = async function sayHello2(req,res) {
    const body = req.body;
    const data = await memberService.register(body.username, body.eamil, body.password);
    if(!data){
        res.status(200).json(data);
        return 
    }
    res.status(200).json(data);
}
exports.login = async function sayHello3(req,res) {
    const body = req.body;
    const data = await memberService.login(body.username, body.password);
    if(!data){
        res.status(200).json(data);
        return 
    }
    res.status(200).json(data);
}
exports.createMember = async (req,res) =>{
    try{
        const body = req.body;
        await memberService.createMember(body.email, body.username , body.password);
        res.status(201).json({
            status: true,
            message: 'Member created successfully'
        });
    }
    catch{
        res.status(500).json({
            status: false,
            message: "Error"
        });
    }
}
exports.deleteMember = async (req,res) =>{
    const id = req.params.id;
    
    try{
        await memberService.deleteMember(id);
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
    