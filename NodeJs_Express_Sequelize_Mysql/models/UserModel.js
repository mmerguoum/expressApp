module.exports = (sequelize, DataTypes) => {
    
    const User = sequelize.define('user',{
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password : {
            type : DataTypes.STRING,
            validate: {
                is: /^[0-9a-f]{64}$/i
              },
        },
    })
    return User
}