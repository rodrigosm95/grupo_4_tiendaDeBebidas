'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('productimages', [
      {
        image: '',
        producto: ''
      },
      {
        image: '',
        producto: ''
      }
    ], {});
  },


  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('productimages', null, {});

  }
};
