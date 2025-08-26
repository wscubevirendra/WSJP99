const categoryRouter = require('express').Router();
const { create, read, deleteByID, status, update } = require('../controller/category.controller');
const fileupload = require('express-fileupload')

categoryRouter.post('/create', fileupload({ createParentPath: true }), create)
categoryRouter.get('/:id?', read)
categoryRouter.delete('/delete/:id', deleteByID)
categoryRouter.patch('/status/:id', status)
categoryRouter.put('/update/:id', fileupload({ createParentPath: true }), update)
module.exports = categoryRouter