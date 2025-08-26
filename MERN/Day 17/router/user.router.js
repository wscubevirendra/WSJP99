const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/user.controller')

userRouter.post("/create", userController.create)
userRouter.get("/get", userController.get)
userRouter.delete('/delete/:id', userController.userDelete)
userRouter.patch('/status/:id', userController.userStatus)


module.exports = userRouter