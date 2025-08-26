const colorRouter = require('express').Router();
const { create, read, deleteByID, status, update } = require('../controller/color.controller');

colorRouter.post('/create', create)
colorRouter.get('/:id?', read)
colorRouter.delete('/delete/:id', deleteByID)
colorRouter.patch('/status/:id', status)
module.exports = colorRouter