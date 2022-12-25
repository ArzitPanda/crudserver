const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {allUsers, createUser, updateUser, deleteUser, getUserById} = require('../controller/userController.js');
const { sendMailTo } = require('../controller/mailController.js');

 const userRoute = express.Router();



userRoute.get('/',allUsers
);
userRoute.post('/',createUser);
userRoute.post('/update/:id',updateUser);
userRoute.delete('/:id',deleteUser);
userRoute.get('/:id',getUserById);
userRoute.post("/sendmail",sendMailTo)

module.exports = userRoute;
