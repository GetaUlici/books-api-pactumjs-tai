const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
const baseUrl = 'http://localhost:3000';
const getAllBooksSchema = '../data/response/get-all-books-schema.json';

describe('API test for Get all books', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it('Get all books', async () => {
    await spec().get(`${baseUrl}/books`).expectStatus(200).expectJsonSchema(getAllBooksSchema);
  });
});
