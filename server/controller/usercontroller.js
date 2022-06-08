const User=require('../modles/usermodel');
const bcrypt=require('bcrypt')


// get a user
exports.getuser=async(req, res, next) => {

    try{
        const id=req.params.id;
        const user=await User.findById(id);
        
        if(user){
            const {password,...otherdetails}=user._doc;
            res.status(200).json(otherdetails);
        }
        else{
            res.status(404).json("user not found");
        }
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}


// update user

exports.updateuser=async(req, res, next) =>{

    
        const id=req.params.id;
        const {currentuserid,currentuseradminstatus,password}=req.body;

        if(id===currentuserid ||currentuseradminstatus){

            try{
                if(password){
                    const salt=await bcrypt.genSalt(10);

                    req.body.password = await bcrypt.hash(password,salt);
                }

                const user=await User.findByIdAndUpdate(id,req.body,{new:true});

                res.status(200).json(user);
            }
            catch(err){
                res.status(500).json({message: err.message});
            }
        }else{
            res.status(403).json("Access denied! you can only update your own profile")
        }


    
}

// delete user

exports.deleteuser=async(req, res, next) => {
    
        const id=req.params.id;
        const {currentuserid,currentuseradminstatus}=req.body;
        if(id===currentuserid ||currentuseradminstatus){
            try{
                await User.findByIdAndDelete(id)
                res.status(200).json("user deleted successfully")
            }
            catch(err){
                res.status(500).json({message: err.message});
            }
        }
        else{
            res.status(403).json("Access denied! you can only delete your own profile")
        }
          
}


// follow a user

exports.followuser=async(req, res, next) => {
    const id=req.params.id;
    const {currentuserid}=req.body;

    if(id===currentuserid){
        res.status(403).json("Access forbodden!")
    }
    else{
        try{
            const followuser=await User.findById(id)
            const followinguser=await User.findById(currentuserid);

            if(!followuser.followers.includes(currentuserid)){
                await followuser.updateOne({$push:{followers:currentuserid}},);
                await followinguser.updateOne({$push:{following:id}});

                res.status(200).json("user followed")
            }else{
                res.status(403).json("user is already followed by you")
            }


        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    }

}

// unfollow user

exports.unfollowuser=async(req, res, next) => {
    const id=req.params.id;
    const {currentuserid}=req.body;

    if(id===currentuserid){
        res.status(403).json("Access forbodden!")
    }
    else{
        try{
            const followuser=await User.findById(id)
            const followinguser=await User.findById(currentuserid);

            if(followuser.followers.includes(currentuserid)){
                await followuser.updateOne({$pull:{followers:currentuserid}},);
                await followinguser.updateOne({$pull:{following:id}});

                res.status(200).json("user unfollowed")
            }else{
                res.status(403).json("user is already unfollowed by you")
            }


        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    }

}
