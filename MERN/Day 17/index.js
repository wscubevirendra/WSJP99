const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./router/user.router');
const server = express();
server.use(express.json());
server.use(cors({ origin: "http://localhost:3000" }))
server.use("/user", userRouter)
mongoose.connect("mongodb://localhost:27017/", { dbName: 'wsjp99' }).then(
    () => {
        console.log("DataBase Connect")
        server.listen(
            5000,
            () => {
                console.log("Server start")
            }
        )
    }
).catch(
    () => {
        console.log("Database not connect")
    }
)