'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('listasdeitems', [
      {
        carrito: '',
        producto: ''
      },
      {
        carrito: '',
        producto: ''
      }
    ], {});
  },


  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('listasdeitems', null, {});

  }
};
