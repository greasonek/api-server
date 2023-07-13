'use strict';

// const { DataTypes } = require("sequelize");
// const { dbConnect } = require("./index.model");

const Human = (dbConnect, DataTypes) => {
  return dbConnect.define('human', {
    humanName: {
      type:DataTypes.STRING,
      allowNull: false
    },
    humanAge: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });
};

module.exports = Human;