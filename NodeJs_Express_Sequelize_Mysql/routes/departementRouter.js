const departementController = require('../controllers/departementController.js')

const router = require('express').Router()

router.post('addDepartement',departementController.addDepartement)

router.get('allDepartements',departementController.getAllDepartements)


router.get('/:id',departementController.updateDepartement)

router.get('/:id',departementController.getOneDepartement)

router.get('/:id',departementController.deleteDepartement)


module.exports = router


