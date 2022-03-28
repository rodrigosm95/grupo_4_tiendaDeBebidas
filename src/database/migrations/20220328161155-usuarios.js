'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('usuarios', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        direccion: {
            type: Sequelize.TEXT,
            allowNull: false,
        }, 
        provincia: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        ciudad: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        email: {
            type: Sequelize.TEXT,
            allowNull: false,
            unique: true
        }, 
        contrasenia: {
            type: Sequelize.TEXT,
            allowNull: false,
        }, 
        categoria: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },  
        esLegal: {
            type: Sequelize.STRING,
            allowNull: false,
        },  
        notificaciones: {
            type: Sequelize.STRING,
            allowNull: false,
        },  
        image: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }, 
    });


    /*
    await queryInterface.addConstraint('usuarios', ['categoria'], {
      type: 'foreign key',
      name: 'fk_UserCategorias',
      references: {
          table: 'usercategorias',
          field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('usuarios', ['image'], {
      type: 'foreign key',
      name: 'fk_UsuariosImages',
      references: {
          table: 'images',
          field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
*/

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
