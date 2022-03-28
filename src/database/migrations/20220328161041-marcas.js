'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('marcas', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        marca: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('marcas');
    
  }
};
