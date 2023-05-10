const route = require('express').Router()
const { esyaController } = require('../controller')

route.get('/read', esyaController.furnitureRead)
route.post('/create', esyaController.furnitureCreate)
route.put('/update', esyaController.furnitureUpdate)
route.delete('/remove', esyaController.furnitureRemove)

module.exports = route
