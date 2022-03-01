'use strict';
require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');
const food = require('./food.model');
const cloths = require('./clothes.model')


const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL; // npm i sqlite3

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};


let sequelize = new Sequelize(POSTGRES_URI,sequelizeOptions);

module.exports = {
    db: sequelize,
    food: food(sequelize,DataTypes),
    cloths: cloths(sequelize,DataTypes)
}