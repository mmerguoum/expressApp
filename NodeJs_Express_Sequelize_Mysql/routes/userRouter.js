const userController = require('../controllers/userController.js')

const router = require('express')

router.post('addUser',userController.addUser)

router.get('allUsers',userController.getAllUsers)


router.get('/:id',userController.updateUser)

router.get('/:id',userController.getOneUser)

router.get('/:id',userController.deleteUser)


module.exports = router