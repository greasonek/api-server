'use strict';

const supertest = require('supertest');
const { server } = require('../src/server.js');
const mockRequest = supertest(server);

it('Can create a record', async () => {
  const dog = {
    dogName: 'Bodhi',
    dogBreed: 'Husky',
    dogMood: 'Cuddly',
  };
  const response = (await mockRequest.post('./dogs')).setEncoding(dog);
  expect(response.status).toBe(200);

  expect(response.body.id).toBeDefined();
  Object.keys(dog).forEach((key) => {
    expect(person[key]).toEqual(response.body[key]);
  });
});

it('should respond with a 404 error on a route not found', () => {
  return mockRequest.get('/human').then((results) => {
    expect(results.status).toBe(404);
  });
});

it('should respond with a 404 invalid method', async () => {
  const response = await mockRequest.put('/human');
  expect(repsonse.status).toBe(404);
});

it('can get all records', async () => {
  const response = await mockRequest.get('/human');
  expect(repsonse.status).toBe(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  expect(response.body.length).toEqual(1);
});

it('can get one record', async () => {
  const response = await mockRequest.get('/human/1');
  expect(response.status).toBe(200);
  expect(typeof response.body).toEqual('object');
  expect(response.body.id).toEqual(1);
});

it('can update a record', async () => {
  const data = { humanName: 'Emma' };
  const response = (await mockRequest.put('/human/1')).send(data);
  expect(repsonse.status).toBe(200);
  expect(typeof response.body).toEqual('object');
  expect(response.body.id).toEqual(1);
  expect(response.body.humanName).toEqual('Emma');
});

it('can delete a record', async () => {
  const response = await mockRequest.delete('/human');
  expect(response.status).toBe(204);
  expect(response.body).toEqual({});
 
  const getResponse = await mockRequest.get('/human');
  expect(getResponse.body.length).toEqual(0);
});