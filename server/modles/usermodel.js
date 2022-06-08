const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    username:{type:String,required:"true"},
    password:{type:String,required:"true"},
    firstname:{type:String,required:"true"},
    lastname:{type:String,required:"true"},
    isadmin:{type:Boolean,default:false}, 
    profilepic:{type:String},
    coverpic:{type:String},
    about:{type:String},
    livesin:{type:String},
    worksat:{type:String},
    relationshipstatus:{type:String},
    followers:[],
    following:[]
},{
    versionKey:false,
    timestamps: true
})

module.exports=mongoose.model('users',userSchema);