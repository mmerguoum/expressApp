// const res = require('express/lib/response')
const departementController = require('../controllers/departementController.js')

const router = require('express').Router()

router.post('/addDepartement',departementController.addDepartement)

router.get('/allDepartements',departementController.getAllDepartements)


router.get('/:id',departementController.getOneDepartement)

router.put('/:id',departementController.updateDepartement)

router.delete('/:id',departementController.deleteDepartement)

router.get('/', (req,res) => {
    res.render('departement')
})




module.exports = router


