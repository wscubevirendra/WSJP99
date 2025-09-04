const colorRouter = require('express').Router();
const { create, read, deleteByID, status, update } = require('../controller/color.controller');
const authMiddleware = require('../middleware/authMiddleware');

colorRouter.post('/create', authMiddleware, create)
colorRouter.get('/:id?', read)
colorRouter.delete('/delete/:id', deleteByID)
colorRouter.patch('/status/:id', status)
module.exports = colorRouter