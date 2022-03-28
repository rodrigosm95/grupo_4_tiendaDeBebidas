'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('metodosdepago', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        metodo: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('metodosdepago');
  }
};
