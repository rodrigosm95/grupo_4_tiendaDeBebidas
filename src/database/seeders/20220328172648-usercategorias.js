'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('usercategorias', [
      {
        categoria: ''
      },
      {
        categoria: ''
      }
    ], {});
  },


  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usercategorias', null, {});

  }
};
