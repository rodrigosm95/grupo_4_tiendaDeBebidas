module.exports = (sequelize,DataTypes) => {
    const alias = 'products';
    const structure = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    };
    const config = {
        tableName: 'Products',
        timestamps: false
    }
    const products = sequelize.define(alias,structure,config);

    products.associate = function name(models) {
        products.belongsTo(models.categories,{
            as: 'categoria',
            foreignKey: 'category'
        });
        products.belongsTo(models.images,{
            as: 'imagen',
            foreignKey: 'image'
        })
    }
    return products
}