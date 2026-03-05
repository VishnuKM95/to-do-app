const mongoose = require('mongoose');
const { type } = require('os');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    }
});

module.exports= mongoose.model('user',userSchema);