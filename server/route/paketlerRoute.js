const route = require('express').Router()
const { paketlerController } = require('../controller')

route.get('/read', paketlerController.packageRead)
route.post('/create', paketlerController.packageCreate)
route.put('/update', paketlerController.packageUpdate)
route.delete('/remove', paketlerController.packageRemove)

module.exports = route
