'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('productcategoria', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        categoria: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('productcategoria');
  }
};
