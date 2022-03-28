'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('listasdeitems', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      }, 
      carrito: {
          type: Sequelize.INTEGER,
          allowNull: false,
      }, 
      producto: {
          type: Sequelize.INTEGER,
          allowNull: false,
      }
  });

  /*
  await queryInterface.addConstraint('listasdeitems', ['carrito'], {
    type: 'foreign key',
    name: 'fk_carrito',
    references: {
        table: 'carritos',
        field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });

  await queryInterface.addConstraint('listasdeitems', ['producto'], {
    type: 'foreign key',
    name: 'fk_producto',
    references: {
        table: 'productos',
        field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });
*/

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('listasdeitems');

  }
};
