const route = require('express').Router()
const { uyelerController } = require('../controller')

route.get('/read', uyelerController.memberRead)
route.post('/create', uyelerController.memberCreate)
route.put('/update', uyelerController.memberUpdate)
route.delete('/remove/:id', uyelerController.memberRemove)

route.post('/add-package', uyelerController.memberAddPackage)
route.post('/add-coach', uyelerController.memberAddAnt)

route.put('/update-coach', uyelerController.memberUpdateAnt)
route.put('/update-package', uyelerController.memberUpdatePackage)

route.get('/read/:id', uyelerController.memberReadOnly)

module.exports = route
