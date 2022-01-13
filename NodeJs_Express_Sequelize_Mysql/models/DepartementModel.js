module.exports = (sequelize, DataTypes) => {

    const Departement = sequelize.define('departement', {
        name : {
            type : DataTypes.STRING,
        },
       description : {
           type : DataTypes.TEXT,
       }
    })
    Departement.associate = (models)=> {
        Departement.hasMany(models.User,{
            onDelete: 'cascade',
            onUpdate: 'restrict',
            as:"User",
            foreignKey:"idDepartement"
        });
    };
    
    return Departement
}

