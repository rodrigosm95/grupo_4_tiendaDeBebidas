module.exports = (sequelize, DataTypes) => {
    const alias = "imagen";
    const structure = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        filename: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }

    const config = {
        tableName: 'images',
        timestamps: false
    }

    const image = sequelize.define(alias, structure, config);
    

    return image;
};