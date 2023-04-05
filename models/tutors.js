'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tutors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tutors.init({
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
    phone: {
      type: DataTypes.STRING(11),
      validate: {
        len: {
          args: [11,11],
          msg: 'The phone field must contains exactally 11 characteres'
        },
        isNumeric: {
          msg: 'The phone field accept only numbers'
        }
      }
    },
    city: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    url: DataTypes.STRING,
    about: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'tutors',
  });
  return tutors;
};