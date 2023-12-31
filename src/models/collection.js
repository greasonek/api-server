'use strict';

// collection interface - provides abstraction for our CRUD behaviors regardless of our model

class Collection {
  //this is where we pass in our model/schema
  constructor(model) {
    this.model = model;
  }
  // CREATE
  async create(jsonObj) {
    try {
      let record = await this.model.create(jsonObj);
      return record;
    } catch (e) {
      // if it doesn't catch the work you'll get an error and you'll have to do something with it
      console.error( `error when creating data for model: ${this.model.name}`);
      return e;
    }
  }
  // READ
  async get(id, options = {}) {
    let records = null; // if we get one record it will be an object, if we get many it will be an array
    try {
      if(id) {
        options.where = {id: id};
        records = await this.model.findOne(options);
      } else records = await this.model.findAll(options);
      return records;
    } catch (e) {
      console.log(e);
      console.error( `error when reading data for model: ${this.model.name}`);
    }
  }
  
  // UPDATE
  async update(id, jsonObj) {
    try { 
      if(!id) throw new Error (`No ID provided for the model: ${this.model.name}`);
      //only allow valid requests past the gate (objects with an ID)
      let record = await this.model.findOne({where: {id: id}});
      let updatedRecord = await record.update(jsonObj);
      return updatedRecord;
    } catch (e) {
      console.error(`error when update data for model: ${this.model.name}`);
      return e;
    }
  }

  // DELETE
  async delete(id) {
    try {
      if(!id) throw new Error (`No ID provided for the model: ${this.model.name}`);
      let deletedRecord = await this.model.destroy({where: {id: id}});
      return deletedRecord;
    } catch(e) {
      console.error(`error when update data for model: ${this.model.name}`);
      return e;
    }
  }
}

module.exports = Collection;
