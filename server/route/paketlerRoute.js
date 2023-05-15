const route = require('express').Router()
const { paketlerController } = require('../controller')

route.get('/read', paketlerController.packageRead)
route.post('/create', paketlerController.packageCreate)
route.put('/update', paketlerController.packageUpdate)
route.delete('/remove/:id', paketlerController.packageRemove)

route.get('/read/:id', paketlerController.packageReadOnly)

module.exports = route
