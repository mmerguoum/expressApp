const db = require('../models')

// Create main Model
const Departement = db.departements
const User = db.users

//main Work

//1.create user

const addUser = async (req, res) => {
    let info = {
        id    : res.body.id,
        name        : res.body.name,
        email       : res.body.email,
        password    : res.body.password,
        
    }
    const user = await User.create(info)
    res.status(200).send(user) 
}

//2. get all users

const getAllUsers = async (req, res) => {
    let users = await User.findAll({})
    res.status(200).send(users)
}

//3. get single users

const getOneUser = async (req, res) => {
    let id = req.params.id
    let user = await User.findOne({where : {id: id}})
    res.status(200).send(user)
}

//4. update user

const updateUser = async (req, res) => {
    let id = req.params.id
    
    const user = await User.update(req.body, {where : {id: id}})
    res.status(200).send(user)
}


//5.delete user by id

const deleteUser = async (req, res) => {
    let id = req.params.id
    await User.destroy({where : {id: id}})
    res.status(200).send('user is deleted  !')
}


module.exports = {
    addUser,
    getOneUser,
    getAllUsers,
    updateUser,
    deleteUser
}