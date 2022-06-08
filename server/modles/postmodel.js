const mongoose = require('mongoose');

const postSchema=new mongoose.Schema({
    userid:{type: String,required: true},
    description:{type: String,required: true},
    likes:[],
    image:String,
},{
    versionKey:false,
    timestamps:true
})

module.exports =mongoose.model("posts",postSchema)