'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('metodosdepago', [
      {
        metodo: ''
      },
      {
        metodo: ''
      }
    ], {});
  },


  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('metodosdepago', null, {});

  }
};
