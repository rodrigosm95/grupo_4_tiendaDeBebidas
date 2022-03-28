module.exports = (sequelize, DataTypes) => {
    const alias = "carrito";
    const structure = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        listaDeItems: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        itemsTotales: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        precioTotal: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        horaDeLaCompra: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        fechaDeLaCompra: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        metodoDePago: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }

    const config = {
        tableName: 'carritos',
        timestamps: false
    }

    const cart = sequelize.define(alias, structure, config);
    

    return cart;
};