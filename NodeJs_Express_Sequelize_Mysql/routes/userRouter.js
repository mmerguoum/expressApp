const userController = require('../controllers/userController.js')

const routerUser = require('express').Router()


routerUser.get('/user/addUser',userController.getAddUserForm)
routerUser.post('/user/addUser',userController.addUser)

routerUser.get('/user/allUsers',userController.getAllUsers)

routerUser.get('/updateUser/:id',userController.getUpdateUserForm)
routerUser.post('/updateUser',userController.postUpdateUserForm)

routerUser.post('/deleteUser',userController.deleteUser)
routerUser.get('/', (req,res) => {
    res.render('user')
})
module.exports = routerUser