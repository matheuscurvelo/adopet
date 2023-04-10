'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      specie: {
        type: Sequelize.STRING
      },
      describle: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      adopted: {
        type: Sequelize.BOOLEAN
      },
      url: {
        type: Sequelize.STRING
      },
      shelter_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'shelters',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pets');
  }
};