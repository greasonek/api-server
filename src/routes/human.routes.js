'use strict';

const express = require('express');

const { humanModelCollection, dogModelCollection } = require('../models/index.model');

const router = express.Router();

// RESTful ROUTES
router.get('/human', getHuman);
router.get('/human/:id', getOneHuman);
router.post('/human', createHuman);
router.put('/human/:id', updateHuman);
router.delete('/human/:id',deleteHuman);

// ROUTE HANDLERS
async function getHuman(req,res) {
  let allHumans = await humanModelCollection.get(null, {include:{model:dogModelCollection}});
  res.status(200).json(allHumans);
}

async function getOneHuman(req, res) {
  let id = parseInt(req.params.id);
  let oneHuman = await humanModelCollection.get(id, {
    include: { model: dogModelCollection.model },
  });
  const dogs = await oneHuman.getDogs();
  console.log(dogs);
  res.status(200).json(oneHuman);
}

async function createHuman(req, res) {
  let obj = req.body;
  let addedHuman = await humanModelCollection.create(obj);
  res.status(200).json(addedHuman);
}

async function updateHuman (req, res) {
  let obj = req.body;
  let id = parseInt(req.params.id);
  let updatedHuman = await humanModelCollection.update(id, obj);
  res.status(200).json(updatedHuman);
}

async function deleteHuman(req, res) {
  let id = parseInt(req.params.id);
  let deletedHuman = await humanModelCollection.delete(id);
  res.status(204).json(deletedHuman);
}

module.exports = router;