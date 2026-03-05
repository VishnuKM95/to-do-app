
const User = require('../models/User.js');
exports.getHome = async(req,res)=>{
    try{
        const users= await User.find();
        res.render('home',{users});
    }catch(err){
        console.error(err.message);
        res.status(500).json({message:'server error'});
    }
}

exports.addUser = async(req,res)=>{
    try{
        const {name,email} = req.body;
        
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({message:'email already exists'});

        await User.create({name,email});
        res.redirect('/');

    }catch(err){
        console.error('server error',err.message)
        res.status(500).json({message:'server errror'});
    }
}


exports.deleteUser = async(req,res)=>{
    try{
        const {id}  = req.params;
        const deleteUser = await User.findByIdAndDelete(id);
        if(!deleteUser) return res.status(404).json({message:'user not found'});
        res.redirect('/');
    }catch(err){
        console.error(err.message,'delete error');
        res.status(500).json({message:'server error'});
    }
};


exports.updateUser = async(req,res)=>{
    try{
        const {id} = req.params;
        const {name,email} = req.body;

        await User.findByIdAndUpdate(id,{name,email});
        res.redirect('/');
    }catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
};
