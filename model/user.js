const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

const db =mongoose.createConnection("mongodb+srv://arijit:Panda2001@cluster0.4hcwv.mongodb.net/?retryWrites=true&w=majority")


autoIncrement.initialize(db);

const userSchema =new  mongoose.Schema({
   name:{
         type:String, 
            required:true,
   },
   email:{
         type:String,
            required:true,
            unique:true,
   },  
    phone:{
            type:Number,
            required:true,
            unique:true,
    },
    hobbies:{
            type:Array,
            required:true,
    },
  

date:{

    type:Date,
    default:Date.now,
}


    
});

userSchema.plugin(autoIncrement.plugin, { model: 'USER', field: 'id', startAt: 1, incrementBy: 1 })
const User = mongoose.model('USER',userSchema);
module.exports = User;