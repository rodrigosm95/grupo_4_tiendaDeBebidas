module.exports = (sequelize,DataTypes) => {
    const alias = 'categories';
    const structure = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    };
    const config = {
        tableName: 'Categories',
        timestamps: false
    }
    const categories = sequelize.define(alias,structure,config);

    categories.associate = function (models) {
        categories.hasMany(models.products, {
            as: 'productos',
            foreignKey: 'category'
        });
    }
    return categories
}