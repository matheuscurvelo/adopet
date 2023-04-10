'use strict';

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('shelters', [
      {
        name: 'CAARP',
        email: 'caarp@caarp.com',
        password: bcrypt.hashSync('123', salt),
        city: 'Rio de Janeiro',
        state: 'RJ',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('shelters', null, {});
  }
};
