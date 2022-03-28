module.exports = (sequelize, DataTypes) => {
    const alias = "prodCategoria";
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
        tableName: 'productcategoria',
        timestamps: false
    }

    const prodCat = sequelize.define(alias, structure, config);
    
    return prodCat;
};