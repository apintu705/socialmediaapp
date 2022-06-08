const express = require('express');
const { createpost, getpost, updatepost, deletepost, likepost, getTimeline } = require('../controller/postcontroller');
const router=express.Router();

router.post("/",createpost)
router.get("/:id",getpost)
router.put("/:id",updatepost)
router.delete("/:id",deletepost)
router.put("/:id/like",likepost)
router.get("/:id/timeline",getTimeline)

module.exports =router;