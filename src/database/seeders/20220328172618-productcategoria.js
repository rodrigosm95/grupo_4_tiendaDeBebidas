'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('productcategoria', [
      {
        categoria: ''
      },
      {
        categoria: ''
      }
    ], {});
  },


  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('productcategoria', null, {});

  }
};
