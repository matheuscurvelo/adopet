'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class adoptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      adoptions.belongsTo(models.pets)
      adoptions.belongsTo(models.tutors)
    }
  }
  adoptions.init({
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'adoptions',
  });
  // adoptions.sync({alter: true}).then(() => console.log('adoptions sync complete'));
  return adoptions;
};