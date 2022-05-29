module.exports = (sequelize,DataTypes) => {
    const alias = 'users';
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
        adress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pass: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    };
    const config = {
        tableName: 'Users',
        timestamps: false
    }
    const users = sequelize.define(alias,structure,config);

    users.associate = function (models) {
        users.belongsTo(models.images,{
            as: 'images',
            foreignKey: 'image'
        })
    }
    return users
}