'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('productos', [
      {
        categoria: '',
        marca: '',
        sabor: '',
        tamanio: '',
        stock: '',
      },
      {
        categoria: '',
        marca: '',
        sabor: '',
        tamanio: '',
        stock: '',
      }
    ], {});
  },


  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('productos', null, {});

  }
};
