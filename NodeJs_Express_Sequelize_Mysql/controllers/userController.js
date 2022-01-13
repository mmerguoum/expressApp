const db = require('../models')

// Create main Model
const Departement = db.departements
const User = db.users

//main Work



const getAddUserForm = async (req, res) => {

    Departement.findAll().then(results => {
        res.render('user', {
            results : results
        })
    }).catch(err => console.log(err));

}

//1.create departement

const addUser = async (req, res) => {
    let info = {
        name        : req.body.name,
        email       : req.body.name,
        password    : req.body.password,
        departementId : req.body.departementId
        
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




//3. update user

const getUpdateUserForm = async (req, res) => {
    let id = req.params.id
    User.findByPk(id)
    .then(user => {
        res.render('userUpdate', {
            dep: user
        })  
    })
}

// post Form
const postUpdateUserForm = async (req, res) => {
    const userId = req.body.id
    const name = req.body.name
    const email = req.body.email

    User.findByPk(userId)
    .then(user => {
        user.name = name
        user.email = email
        

        return user.save()
    })
    .then(success => {
        console.log('succefully .. !')
        res.redirect('/user/allUsers')
    })
}


//4.delete user by id

const deleteUser = async (req, res) => {
    const id = req.body.id;
    User.findByPk(id)
    .then(user => {
        console.log(user)
        return user.destroy()  
    }).then(success => {
        console.log('Deleted Successfully !!');
        res.redirect('/user/allusers');
    }) 
}


module.exports = {
    addUser,
    getAllUsers,
    getAddUserForm,
    getUpdateUserForm,
    postUpdateUserForm,
    deleteUser
}