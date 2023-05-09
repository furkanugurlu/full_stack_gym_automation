const route = require('express').Router()
const antrenorlerController = require('../controller/antrenorlerController')

route.get('/read', antrenorlerController.coachRead)
route.post('/create', antrenorlerController.coachCreate)
route.post('/update', antrenorlerController.coachUpdate)
route.post('/remove', antrenorlerController.coachRemove)

module.exports = route
