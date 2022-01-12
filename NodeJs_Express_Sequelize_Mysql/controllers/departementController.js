const db = require('../models')

// Create main Model
const Departement = db.departements
const User = db.users

//main Work

//1.create departement

const addDepartement = async (req, res) => {
    let info = {
        // id          : res.body.id,
        name        : res.body.name,
        description : res.body.description
        
    }
    const departement = await Departement.create(info)
    res.status(200).send(departement) 
}

//2. get all departements

const getAllDepartements = async (req, res) => {
    let departements = await Departement.findAll({})
    res.status(200).send(departements)
}

//3. get single departements

const getOneDepartement = async (req, res) => {
    let id = req.params.id
    let departement = await Departement.findOne({where : {id: id}})
    res.status(200).send(departement)
}

//4. update Departement

const updateDepartement = async (req, res) => {
    let id = req.params.id
    
    const departement = await Departement.update(req.body, {where : {id: id}})
    res.status(200).send(departement)
}


//5.delete departement by id

const deleteDepartement = async (req, res) => {
    let id = req.params.id
    await Departement.destroy({where : {id: id}})
    res.status(200).send('departement is deleted  !')
}


module.exports = {
    addDepartement,
    getOneDepartement,
    getAllDepartements,
    updateDepartement,
    deleteDepartement
}