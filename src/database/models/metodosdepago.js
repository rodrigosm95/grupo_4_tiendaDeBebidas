module.exports = (sequelize, DataTypes) => {
    const alias = "metodosPago";
    const structure = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        metodo: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }

    const config = {
        tableName: 'metodosdepago',
        timestamps: false
    }

    const metodosPago = sequelize.define(alias, structure, config);
    
    return metodosPago;
};