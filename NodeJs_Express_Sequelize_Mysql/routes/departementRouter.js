// const res = require('express/lib/response')
const departementController = require('../controllers/departementController.js')

const router = require('express').Router()

router.get('/departement/addDepartement', departementController.getAddDepartementForm);

router.post('/departement/addDepartement',departementController.addDepartement)

router.get('/departement/allDepartements',departementController.getAllDepartements)



router.get('/updateDepartement/:id',departementController.getUpdateDepartementForm)

router.post('/updateDepartement',departementController.postUpdateDepartementForm);


router.post('/deleteDepartement',departementController.deleteDepartement);

router.get('/', (req,res) => {
    res.render('departement')
})




module.exports = router


