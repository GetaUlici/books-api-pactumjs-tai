const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
const baseUrl = 'http://localhost:3000';
const getBookByIdSchema = require('../data/response/get-book-by-id-schema.json');

describe('API test to get a single book', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it('Get book by id', async () => {
    await spec().get(`${baseUrl}/books/1`).expectStatus(200).expectJsonSchema(getBookByIdSchema);
  });

  it('Get book by id negative test', async () => {
    await spec()
      .get(`${baseUrl}/books/777`)
      .expectStatus(404)
      .expectBodyContains('Book not found.');
  });
});
