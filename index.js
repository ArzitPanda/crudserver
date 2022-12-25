const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute= require('./router/userRouter.js');


const app = express();
const db =mongoose.connect("mongodb+srv://arijit:Panda2001@cluster0.4hcwv.mongodb.net/?retryWrites=true&w=majority").then((res)=>{console.log("connected to db")}).catch(err=>{console.log(err)});




// autoIncrement.initialize(db);


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',userRoute);




app.listen(5000,()=>{
    console.log("connected");
})