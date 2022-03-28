'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('productimages', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        image: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }, 
        producto: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    });
/*
    await queryInterface.addConstraint('productimages', ['image'], {
      type: 'foreign key',
      name: 'fk_ImagesPImg',
      references: {
          table: 'images',
          field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('productimages', ['producto'], {
      type: 'foreign key',
      name: 'fk_ProdImgIdProd',
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

    await queryInterface.dropTable('productimages');

  }
};
