const mongoose = require('mongoose');
const connectDB = async(req,res)=>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log('Mongodb connected')
    }catch(err){
        console.error('Connection failed',err.message);
    }
}

module.exports = connectDB;