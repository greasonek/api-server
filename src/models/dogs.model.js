'use strict';

// const { DataTypes } = require('sequelize');
// const { dbConnect } = require('./index.model');

const Dogs = (dbConnect, DataTypes) => {
  return dbConnect.define('dogs', {
    dogName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dogBreed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dogMood: {
      type: DataTypes.STRING
    },
    humanId: {
      type: DataTypes.INTEGER
    }
  });
};

module.exports = Dogs;