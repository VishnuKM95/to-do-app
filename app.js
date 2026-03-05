require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require('./config/db.js');
const { urlencoded } = require('body-parser');
connectDB();

app.use(express.static('public'));



app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

const router = require('./routes/route.js');
app.use('/',router);

// app.listen(7000,()=>console.log('running'));
app.listen(process.env.PORT,()=>console.log('server running on port'+process.env.PORT));

