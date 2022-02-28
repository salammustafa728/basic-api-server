'use strict';

const {Sequelize, DataTypes} = require('sequelize');
const food = require('./food.model');
const cloths = require('./clothes.model')

const POSTGRES_URL = process.env.DATABASE_URL

let sequelizeOption = {
    dialectOption: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
}

let sequelize = new Sequelize(POSTGRES_URL,sequelizeOption);

module.exports = {
    db: sequelize,
    food: food(sequelize,DataTypes),
    cloths: cloths(sequelize,DataTypes)
}