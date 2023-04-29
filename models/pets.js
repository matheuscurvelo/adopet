'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pets.belongsTo(models.shelters)
      pets.hasOne(models.adoptions, {
        foreignKey: {
          unique: true,
          allowNull: false,
        }
      })
    }
  }
  pets.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    describle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adopted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'pets',
  });
  // pets.sync().then(() => console.log('pets sync complete'))
  return pets;
};