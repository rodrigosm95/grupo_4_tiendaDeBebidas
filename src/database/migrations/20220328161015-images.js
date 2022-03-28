'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('images', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      }, 
      filename: {
          type: Sequelize.TEXT,
          allowNull: false,
      }
  });
     
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('images');
     
  }
};
