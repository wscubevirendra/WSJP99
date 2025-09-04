require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
var cookieParser = require('cookie-parser')
const categoryRouter = require('./router/category.router');
const colorRouter = require('./router/color.router');
const brandRouter = require('./router/brand.router');
const productRouter = require('./router/product.router');
const adminRouter = require('./router/admin.router');
const server = express();
server.use(cors({ origin: "http://localhost:3000", credentials: true }))
server.use(cookieParser())
server.use(express.json())
server.use('/category', categoryRouter);
server.use('/color', colorRouter);
server.use('/brand', brandRouter);
server.use('/product', productRouter);
server.use('/admin', adminRouter)
server.use(express.static('./public'))




server.listen(
    5000,
    () => {
        console.log('Server Running PORT 5000')
        mongoose.connect(process.env.DATABASE_URL, { dbName: "ishop" }).then(
            () => {
                console.log('Database connected')
            }
        ).catch(() => {
            console.log('unable to connect database')

        })
    }
)

