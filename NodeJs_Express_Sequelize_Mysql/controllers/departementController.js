const db = require('../models')

// Create main Model
const Departement = db.departements
const User = db.users


//main Work

const getAddDepartementForm = async (req, res) => {

    Departement.findAll().then(results => {
        res.render('departement', {
            results
        })
    }).catch(err => console.log(err));

}

//1.create departement

const addDepartement = async (req, res) => {
    let info = {
        name        : req.body.name,
        description : req.body.description
        
    }
    const departement = await Departement.create(info)
    res.status(200).send(departement) 
}

//2. get all departements

const getAllDepartements = async (req, res) => {
    let departements = await Departement.findAll({})
    res.render('allDepartements', {
        dep: departements
    })
}





//4. get update Form with values

const getUpdateDepartementForm = async (req, res) => {
    let id = req.params.id
    Departement.findByPk(id)
    .then(departement => {
        res.render('updateDepartement', {
            dep: departement
        })  
    })
}

// post Form
const postUpdateDepartementForm = async (req, res) => {
    const departementId = req.body.id
    const name = req.body.name
    const description = req.body.description

    Departement.findByPk(departementId)
    .then(departement => {
        departement.name = name
        departement.description = description

        return departement.save()
    })
    .then(success => {
        console.log('succefully .. !')
        res.redirect('/departement/allDepartements')
    })
}



//5.delete departement by id

const deleteDepartement = async (req, res) => {
    const id = req.body.id;
    Departement.findByPk(id)
    .then(departement => {
        console.log(departement)
        return departement.destroy()  
    }).then(success => {
        console.log('Deleted Successfully !!');
        res.redirect('/departement/allDepartements');
    }) 
}

module.exports = {
    getAddDepartementForm,
    addDepartement,
    getAllDepartements,
    getUpdateDepartementForm,
    postUpdateDepartementForm,
    deleteDepartement
}