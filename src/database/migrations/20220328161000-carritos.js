'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('carritos', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      }, 
      usuario: {
          type: Sequelize.INTEGER,
          allowNull: false,
      }, 
      listaDeItems: {
          type: Sequelize.INTEGER,
          allowNull: false,
      }, 
      itemsTotales: {
          type: Sequelize.INTEGER,
          allowNull: false,
      }, 
      precioTotal: {
          type: Sequelize.INTEGER,
          allowNull: false,
      }, 
      horaDeLaCompra: {
          type: Sequelize.TEXT,
          allowNull: false,
      }, 
      fechaDeLaCompra: {
          type: Sequelize.TEXT,
          allowNull: false,
      }, 
      metodoDePago: {
          type: Sequelize.INTEGER,
          allowNull: false,
      }
  });
/*
  await queryInterface.addConstraint('carritos', ['usuario'], {
    type: 'foreign key',
    name: 'fk_cartUserUsuarios',
    references: {
        table: 'usuarios',
        field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });

  await queryInterface.addConstraint('carritos', ['metodoDePago'], {
    type: 'foreign key',
    name: 'fk_metodosDePago',
    references: {
        table: 'metodosdepago',
        field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });

  */
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('carritos');
  }
};
