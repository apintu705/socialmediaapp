const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();


// routes
const authroute=require('./routes/authroutes');
const userroute=require('./routes/userroutes')
const postroute=require('./routes/postroutes')


const app = express();

// middlewares
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));



mongoose.connect(process.env.MONGODB,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).
then(()=>app.listen(process.env.PORT,()=>{
  console.log(`listening on port ${process.env.PORT}`)
})).catch((err)=>{console.log(err)});

// uses of routers
app.use("/auth",authroute);
app.use("/user",userroute);
app.use("/post",postroute);