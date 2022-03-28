'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('carritos', [
      {
        usuario: '',
        listaDeItems: '',
        itemsTotales: '',
        precioTotal: '',
        horaDeLaCompra: '',
        fechaDeLaCompra: '',
        metodoDePago: ''
      },
      {
        usuario: '',
        listaDeItems: '',
        itemsTotales: '',
        precioTotal: '',
        horaDeLaCompra: '',
        fechaDeLaCompra: '',
        metodoDePago: ''
      }
    ], {});
  },


  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('carritos', null, {});

  }
};
