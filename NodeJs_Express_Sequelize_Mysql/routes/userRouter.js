const userController = require('../controllers/userController.js')

const routerUser = require('express').Router()

routerUser.post('/addUser',userController.addUser)

routerUser.get('/allUsers',userController.getAllUsers)


routerUser.get('/:id',userController.updateUser)


routerUser.get('/:id',userController.deleteUser)

routerUser.get('/', (req,res) => {
    res.render('user')
})
module.exports = routerUser