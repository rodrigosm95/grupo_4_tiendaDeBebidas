module.exports = (sequelize, DataTypes) => {
    const alias = "users";
    const structure = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        direccion: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        provincia: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        }, 
        contrasenia: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        categoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },  
        esLegal: {
            type: DataTypes.STRING,
            allowNull: false,
        },  
        notificaciones: {
            type: DataTypes.STRING,
            allowNull: false,
        },  
        image: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
    }

    const config = {
        tableName: 'usuarios',
        timestamps: false
    }

    const users = sequelize.define(alias, structure, config);
    
    return users;
};