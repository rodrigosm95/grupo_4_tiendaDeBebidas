module.exports = (sequelize, DataTypes) => {
    const alias = "productos";
    const structure = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        categoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        marca: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        sabor: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        tamanio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }

    const config = {
        tableName: 'productos',
        timestamps: false
    }

    const prod = sequelize.define(alias, structure, config);
    
    return prod;
};