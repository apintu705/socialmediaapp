const express = require('express');
const {getuser,updateuser,deleteuser, followuser, unfollowuser} = require('../controller/usercontroller')
const router=express.Router();

router.get("/:id",getuser);
router.put("/:id",updateuser);
router.delete("/:id",deleteuser);
router.put("/:id/follow",followuser)
router.put("/:id/unfollow",unfollowuser)

module.exports=router;