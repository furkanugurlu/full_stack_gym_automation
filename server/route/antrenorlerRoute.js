const route = require('express').Router()
const { antrenorlerController } = require('../controller')

route.get('/read', antrenorlerController.coachRead)
route.post('/create', antrenorlerController.coachCreate)
route.put('/update', antrenorlerController.coachUpdate)
route.delete('/remove', antrenorlerController.coachRemove)

module.exports = route
