'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pets', [
      {
        name: "Doguinho",
        describle: "Muito carinhoso",
        type: "dog",
        specie: "poodle",
        adopted: false,
        age: "Dois meses",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktXg5_v8-L9AslphhrFvphE12SWkGl-_Jig&usqp=CAU",
        shelterId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Doguinho",
        describle: "Muito carinhoso",
        type: "dog",
        specie: "poodle",
        adopted: false,
        age: "Dois meses",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktXg5_v8-L9AslphhrFvphE12SWkGl-_Jig&usqp=CAU",
        shelterId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Doguinho",
        describle: "Muito carinhoso",
        type: "dog",
        specie: "poodle",
        adopted: false,
        age: "Dois meses",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktXg5_v8-L9AslphhrFvphE12SWkGl-_Jig&usqp=CAU",
        shelterId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Doguinho",
        describle: "Muito carinhoso",
        type: "dog",
        specie: "poodle",
        adopted: false,
        age: "Dois meses",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktXg5_v8-L9AslphhrFvphE12SWkGl-_Jig&usqp=CAU",
        shelterId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Doguinho",
        describle: "Muito carinhoso",
        type: "dog",
        specie: "poodle",
        adopted: false,
        age: "Dois meses",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktXg5_v8-L9AslphhrFvphE12SWkGl-_Jig&usqp=CAU",
        shelterId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pets', null, {});
  }
};
