const route = require('express').Router()
const { branslarController } = require('../controller')

route.get('/read', branslarController.branchRead)
route.post('/create', branslarController.branchCreate)
route.put('/update', branslarController.branchUpdate)
route.delete('/remove', branslarController.branchRemove)

module.exports = route
