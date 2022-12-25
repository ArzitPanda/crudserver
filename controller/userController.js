const mongoose = require('mongoose');
const User = require('../model/user.js');

const allUsers = (req,res)=>{
   
    User.find().then((users)=>{
        res.send(users);
    }
    ).catch((err)=>{
        console.log(err);
    }
    )



       
}

const createUser = (req,res)=>{
    const user = new User(req.body);
    user.save().then((user)=>{
        res.send(user);
    }
    ).catch((err)=>{
       if(err?.code === 11000){
              res.status(400).send({msg:"user already exist",code:err.code});
         }
            else{
                res.status(400).send({msg:"something went wrong",code:500});
            }
    }

    )
}

const updateUser = (req,res)=>{
    const id = req.params.id;
    const _id=mongoose.Types.ObjectId(id);
    const update = req.body;
    User.findByIdAndUpdate(_id,update).then((user)=>{
        res.send(user);
    }
    ).catch((err)=>{
       res.send(err);
    }

    )
}

const deleteUser = (req,res)=>{
    const id = req.params.id;
    User.findByIdAndDelete(id).then((user)=>{
        res.send(user);
    }
    ).catch((err)=>{

    }
    )
}

const getUserById = (req,res)=>{
    const id = req.params.id;
    User.findById(id).then((user)=>{
        res.send(user);
    }
    ).catch((err)=>{
        console.log(err);
    }

    )
}


module.exports = {allUsers,createUser,updateUser,deleteUser,getUserById};