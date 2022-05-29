module.exports = (sequelize,DataTypes) => {
    const alias = 'images';
    const structure = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    };
    const config = {
        tableName: 'Images',
        timestamps: false
    }
    const images = sequelize.define(alias,structure,config);

    images.associate = function (models) {
        images.hasOne(models.products,{
            as: 'product',
            foreignKey: 'image'
        });
        images.hasOne(models.users,{
            as: 'user',
            foreignKey: 'image'
        })
    }
    return images
}