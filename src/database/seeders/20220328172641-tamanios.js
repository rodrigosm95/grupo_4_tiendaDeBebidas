'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('tamanios', [
      {
        tamanio: ''
      },
      {
        tamanio: ''
      }
    ], {});
  },


  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('tamanios', null, {});

  }
};
