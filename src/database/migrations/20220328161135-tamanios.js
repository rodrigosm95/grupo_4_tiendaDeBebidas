'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('tamanios', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        tamanio: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('tamanios');

  }
};
