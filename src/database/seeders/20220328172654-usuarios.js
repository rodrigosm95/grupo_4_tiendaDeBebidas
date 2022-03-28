'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('usuarios', [
      {
        nombre: '',
        direccion: '',
        provincia: '',
        ciudad: '',
        email: '',
        contrasenia: '',
        categoria: '',
        esLegal: '',
        notificaciones: '',
        image: ''
      },
      {
        nombre: '',
        direccion: '',
        provincia: '',
        ciudad: '',
        email: '',
        contrasenia: '',
        categoria: '',
        esLegal: '',
        notificaciones: '',
        image: ''
      }
    ], {});
  },


  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
