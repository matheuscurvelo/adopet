'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('adoptions', [
    //   {
    //     petId: 1,
    //     tutorId: 1,
    //     date: new Date(),
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('adoptions', null, {truncate: true});
  }
};
