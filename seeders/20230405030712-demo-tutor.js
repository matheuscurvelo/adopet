'use strict';

const { getMaxListeners } = require('../app');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('tutors', [
      {
        name: 'Jhon Stewart',
        email: 'greenlantern@gmail.com',
        password: bcrypt.hashSync('123', salt),
        phone: '21998653265',
        url: 'https://static.wikia.nocookie.net/dccomics/images/3/37/Green_Lantern_The_Lost_Army_Vol_1_3_Variant_B.jpg/revision/latest?cb=20180123211545&path-prefix=pt',
        city: 'Brooklin',
        about: 'Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Per aumento de cachacis, eu reclamis.Sapien in monti palavris qui num significa nadis i pareci latim.Atirei o pau no gatis, per gatis num morreus.',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Diana Prince',
        email: 'wonderwoman@gmail.com',
        password: bcrypt.hashSync('456', salt),
        phone: '21998653265',
        url: 'https://static.wikia.nocookie.net/dccomics/images/c/cc/Wonder_Woman_Vol_5_4_Textless.jpg/revision/latest?cb=20180109182203&path-prefix=pt',
        city: 'Themyscira',
        about: 'Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Per aumento de cachacis, eu reclamis.Sapien in monti palavris qui num significa nadis i pareci latim.Atirei o pau no gatis, per gatis num morreus.',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tutors', null, {});
  }
};
