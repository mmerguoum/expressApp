module.exports = (sequelize, DataTypes) => {
    
    const User = sequelize.define('user',{
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password : {
            type : DataTypes.STRING,
            
        },
    })
    return User
}