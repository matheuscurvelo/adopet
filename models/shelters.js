'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shelters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      shelters.hasMany(models.pets)
    }
  }
  shelters.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Needs to be a valid email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: DataTypes.STRING(2),
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'shelters',
  });
  // shelters.sync().then(() => console.log('shelters sync complete'))
  return shelters;
};