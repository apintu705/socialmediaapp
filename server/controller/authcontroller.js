const express = require('express');
const User= require("../modles/usermodel");
const bcrypt = require('bcrypt');

// register user
exports.registeruser=async(req, res, next) => {
    const {username,password,firstname,lastname} = req.body;
    const salt=await bcrypt.genSalt(10);
    const hashedpassword=await bcrypt.hash(password,salt);
    

        const newuser=new User({username,password:hashedpassword,firstname,lastname})
    try{
        await newuser.save();
        res.status(200).json(newuser)
        
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}


// loginuser

exports.loginuser=async(req, res, next) =>{
    const {username,password}=req.body;

    try{
        const user=await User.findOne({username:username});

        if(user){
            const validity=await bcrypt.compare(password,user.password);

            validity?res.status(200).json(user):
            res.status(400).json("wrong password")
        }
        else{
            res.status(404).json("user not found")
        }
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}