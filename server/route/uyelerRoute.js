const route = require('express').Router()
const { uyelerController } = require('../controller')

route.get('/read', uyelerController.memberRead)
route.post('/create', uyelerController.memberCreate)
route.put('/update', uyelerController.memberUpdate)
route.delete('/remove', uyelerController.memberRemove)

module.exports = route
