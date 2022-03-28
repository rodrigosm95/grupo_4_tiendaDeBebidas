module.exports = (sequelize, DataTypes) => {
    const alias = "tamanio";
    const structure = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        tamanio: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }

    const config = {
        tableName: 'tamanios',
        timestamps: false
    }

    const size = sequelize.define(alias, structure, config);
    
    return size;
};