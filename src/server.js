'use strict';

const express = require('express');
const server = express();
//I know Sara puts .js on everything but it's not usually neccessary in requires
const validator = require('./middleware/validator.js');
const handle404 = require('./ErrorHandling/404.js');
const handle500 = require('./ErrorHandling/500.js');
const dogRoutes = require('./routes/dogs.routes.js');
const catRoutes = require('./routes/cats.routes.js');
const humanRoutes = require('./routes/human.routes.js');

function start(PORT) {
  server.listen(PORT, () => console.log(`I am listing on PORT ${PORT}`)); //list/en/ing
}

server.use(validator);

server.use(express.json());

server.get('/', (req, res) => res.send('Welcome to my home page'));

server.use(dogRoutes);
server.use(catRoutes);
server.use(humanRoutes);

server.use('*', handle404); //handles all other undefined routes, nice
server.use(handle500);

module.exports = { server, start };