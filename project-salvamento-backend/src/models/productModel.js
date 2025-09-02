const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class ProductModel extends Model { }

ProductModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    currency: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    unit: {
      type: DataTypes.STRING,
    },
    publishedOn: {
      type: DataTypes.STRING,
    },

  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'product',
  }
);

module.exports = ProductModel;




