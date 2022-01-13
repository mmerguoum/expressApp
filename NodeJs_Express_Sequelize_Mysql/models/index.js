const dbConfig = require('../config/dbConfig')

const {Sequelize, DataTypes} = require('sequelize')
const UserModel = require('./UserModel.js')
const departementModel = require('./DepartementModel.js')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host : dbConfig.HOST,
        dialect : dbConfig.dialect,
        operatorsAliases : false
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.departements = require('./DepartementModel.js')(sequelize, DataTypes)
db.users = require('./UserModel.js')(sequelize, DataTypes)


db.sequelize.sync({force : false})
.then(() => {
    console.log('yes re-sync done !')
})
module.exports = db
 