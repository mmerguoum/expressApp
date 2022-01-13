module.exports = (sequelize, DataTypes) => {

    const Departement = sequelize.define('departement', {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
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

