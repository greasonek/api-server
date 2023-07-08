'use strict';

const supertest = require('supertest');
const { server } = require('../src/server.js');
const mockRequest = supertest(server);

it('Can create a record', async () => {
  const Dog = {
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