const db = require('../models')

// Create main Model
const Departement = db.departements
const User = db.users

//main Work

//1.create user

const addUser = async (req, res) => {
    let info = {
        name        : req.body.name,
        email       : req.body.email,
        password    : req.body.password,
        
    }
    const user = await User.create(info)
    res.status(200).send(user) 

}



//2. get all users

const getAllUsers = async (req, res) => {
    let users = await User.findAll({})
    res.render('allUsers', {
        dep: users
    })
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
    getAllUsers,
    updateUser,
    deleteUser
}