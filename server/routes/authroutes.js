
const express=require('express');
const { registeruser,loginuser } = require('../controller/authcontroller');
const router=express.Router();

router.post("/register",registeruser)
router.get("/login",loginuser)

module.exports=router;