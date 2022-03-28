
module.exports = (sequelize, DataTypes) => {
    const alias = "userCat";
    const structure = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        categoria: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }

    const config = {
        tableName: 'usercategorias',
        timestamps: false
    }

    const userCategorias = sequelize.define(alias, structure, config);
    

    return userCategorias;
};