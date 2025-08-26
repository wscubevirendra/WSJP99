const brandRouter = require('express').Router();
const { create, read, deleteByID } = require('../controller/brand.controller');
const fileupload = require('express-fileupload')

brandRouter.post('/create', fileupload({ createParentPath: true }), create)
brandRouter.get('/:id?', read)
brandRouter.delete('/delete/:id', deleteByID)
module.exports = brandRouter