'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const dogs = require('./dogs.model.js');
const cats = require('./cats.model.js');

const POSTGRES_URI = process.env.NODE_ENV = 'test' ? 'sqlite:memory:' : process.env. 
DATABASE_URI;
let sequelize = new Sequelize(POSTGRES_URI);

module.exports = {
  dbConnect: sequelize,
  Dogs: dogs(sequelize, DataTypes),
  Cats: cats(sequelize, DataTypes)
}