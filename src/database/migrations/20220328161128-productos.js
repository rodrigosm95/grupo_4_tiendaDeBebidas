'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('productos', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        categoria: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }, 
        marca: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }, 
        sabor: {
            type: Sequelize.TEXT,
            allowNull: false,
        }, 
        tamanio: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }, 
        stock: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    });
    /*
    await queryInterface.addConstraint('productos', ['categoria'], {
      type: 'foreign key',
      name: 'fk_CatProdCat',
      references: {
          table: 'productcategoria',
          fields: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    
    await queryInterface.addConstraint('productos', ['marca'], {
      type: 'foreign key',
      name: 'fk_marcaMarcas',
      references: {
          table: 'marcas',
          fields: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('productos', ['tamanio'], {
      type: 'foreign key',
      name: 'fk_tamanioTamanios',
      references: {
          table: 'tamanios',
          fields: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
*/    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('productos');

  }
};
