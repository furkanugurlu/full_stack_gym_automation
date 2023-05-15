const route = require('express').Router()
const { kategorilerController } = require('../controller')

route.get('/read', kategorilerController.categoryRead)
route.post('/create', kategorilerController.categoryCreate)
route.put('/update', kategorilerController.categoryUpdate)
route.delete('/remove/:id', kategorilerController.categoryRemove)
route.get('/read/:id', kategorilerController.categoryReadOnly)

module.exports = route
