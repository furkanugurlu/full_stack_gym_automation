const route = require('express').Router()
const { branslarController } = require('../controller')

route.get('/read', branslarController.branchRead)
route.post('/create', branslarController.branchCreate)
route.put('/update', branslarController.branchUpdate)
route.delete('/remove/:id', branslarController.branchRemove)
route.get('/read/:id', branslarController.branchReadOnly)

module.exports = route
