'use strict';

require('dotenv').config();
const {start} = require('./src/server.js')
const {dbConnect} = require('./src/models/index.model.js');
const PORT = process.env.PORT || 3000;

dbConnect
  .sync()
  // .drop()
  .then(() => {
    start(PORT);
  })
  .catch(console.error);