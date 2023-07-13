'use strict';

//I get putting model in the model filenames and routes in routes but with the folder seperation it seems uneccesary

const { Sequelize, DataTypes } = require('sequelize');
const dogs = require('./dogs.model.js');
const cats = require('./cats.model.js');
const human = require('./human.model.js');
const Collection = require('./collection.js');

const POSTGRES_URI = process.env.NODE_ENV = 'test' ? 'sqlite:memory:' : process.env. 
DATABASE_URI;
let sequelize = new Sequelize(POSTGRES_URI);


// CALL MODEL FUNCTIONS
const humanModel = human(sequelize, DataTypes);
const dogModel = dogs(sequelize, DataTypes);
  
//make associations
humanModel.hasOne(dogModel);

dogModel.belongsTo(humanModel);

// create a new COLLECTION class for each model
const humanModelCollection = new Collection(humanModel);
const dogModelCollection = new Collection(dogModel);


module.exports = {
  dbConnect: sequelize,
  Dogs: dogs(sequelize, DataTypes),
  Cats: cats(sequelize, DataTypes),
  humanModelCollection,
  dogModelCollection
};