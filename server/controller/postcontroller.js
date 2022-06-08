const Post=require("../modles/postmodel");
const mongoose = require('mongoose');
const User = require('../modles/usermodel');

// create new post model

exports.createpost=async(req, res, next) => {
    const newpost=new Post (req.body);
    try{
        await newpost.save();
        res.status(200).json("post created!")
    }
    catch(err){
        res.status(500).json({message: err.message})
    }

}

// get a post model

exports.getpost=async(req, res, next)=>{
    const id=req.params.id;

    try{
        const post =await Post.findById(id);
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

// update a post model

exports.updatepost=async(req, res, next)=>{
    const id=req.params.id;
    const {userid}=req.body;

    try{
        const post =await Post.findById(id);

        if(post.userid===userid){
            await Post.updateOne({$set:req.body});
            res.status(200).json("Post updated")
        }else{
            res.status(403).json("Action forbidden!")
        }
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

// delete post
exports.deletepost=async(req, res, next) => {
    const id=req.params.id;
    const {userid}=req.body;

    try{
        const post =await Post.findById(id);
        if(post.userid===userid){
            await Post.deleteOne();
            res.status(200).json("Post deleted successfully")
        }
        else{
            res.status(403).json("Action forbidden!")
        }
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

// likes and dislikes

exports.likepost = async(req, res, next) => {
    const id=req.params.id;
    const {userid}=req.body;
    try{

        const post =await Post.findById(id);
        
        if(!post.likes.includes(userid)){
            await post.updateOne({$push:{likes:userid}});
            res.status(200).json("Post liked")
        }
        else{
            await post.updateOne({$pull:{likes:userid}});
            res.status(200).json("Post disliked")
        }
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

// get timeline postmodel
exports.getTimeline=async(req, res, next) => {
    const id=req.params.id;
    try{
        const currentuserpost=await Post.find({userid:id});
        const followingpost =await User.aggregate([
            {$match:{
                _id:new mongoose.Types.ObjectId(id)
            }},
            {$lookup:{
                from:"posts",
                localField:"following",
                foreignField:"id",
                as:"followingpost"
            }},
            {
                $project:{
                    followingpost:1,
                    _id:0,
                }
            }
        ])
        res.status(200).json(currentuserpost.concat(...followingpost[0].followingpost)
        .sort((a,b)=>{return b.createdAt-a.createdAt;}))
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}