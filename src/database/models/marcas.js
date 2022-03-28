module.exports = (sequelize, DataTypes) => {
    const alias = "marca";
    const structure = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        marca: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }

    const config = {
        tableName: 'marcas',
        timestamps: false
    }

    const marca = sequelize.define(alias, structure, config);
    
    return marca;
};