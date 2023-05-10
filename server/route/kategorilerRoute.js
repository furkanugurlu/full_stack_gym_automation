const route = require('express').Router()
const { kategorilerController } = require('../controller')

route.get('/read', kategorilerController.categoryRead)
route.post('/create', kategorilerController.categoryCreate)
route.put('/update', kategorilerController.categoryUpdate)
route.delete('/remove', kategorilerController.categoryRemove)

module.exports = route
