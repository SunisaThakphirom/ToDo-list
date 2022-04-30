const express = require('express');
const { getMember , createMember ,deleteMember  } = require('../controllers/member')
const route = express.Router();
const useModel = require('../models/member');
route.get('/',getMember);
route.get('/',(req,res)=>{
    try{
        res.status(200).json({msg: 'Welcome to route API'})
    }catch (err){res.status(500).json({msg: err.message})}
});
route.post('/', createMember);
route.post('/register',(req,res)=>{
    try{
        
        const data = req.body;
        if(data.username === '' || data.password === '' || data.email === ''){
            throw new Error('Values invalid');
        }
        const user = new useModel({
            username: data.username, 
            password: data.password,
            email: data.email
        });
        user.save();
        res.status(200).json({ value: user, msg: 'Register success' });

    }catch (err){res.status(500).json({msg: err.message})}
});

route.post('/login',async (req,res) => {
    try{
        const data = req.body;
        if(data.username === '' || data.password === '' ){
            throw new Error('Some value is empty');
        }
        const user = await useModel.findOne({username: data.username, password: data.password});
        if(user){
            user.password = undefined;
            delete user.password;
            // req.session.dataUser = user;
            res.status(200).json({ val: user ,msg: 'Login success' });
        }else{
            res.status(400).json({ val: user ,msg: 'Login failed' });

        }        
        

        
    }catch(err){res.status(500).json({msg: err.message})}
});
route.get('/checkUserLogin',(req,res)=>{
    try{
        if(req.session.dataUser){
            res.status(200).json({val:req.session.dataUser, msg:'User Login'});

        }else{
            res.status(400).json({msg: 'User not Login'});

        }
    }catch (err){res.status(500).json({msg: err.message})}
})
route.delete('/:id',deleteMember);

module.exports = route;