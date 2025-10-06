const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
const baseUrl = 'http://localhost:3000';
const updateBookSchema = '../data/response/update-book-schema.json';

describe('API test to update a book', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it('Update book by id', async () => {
    const requestBody = {
      id: 2,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    };
    await spec()
      .put(`${baseUrl}/books/2`)
      .withBody(requestBody)
      .expectStatus(200)
      .expectJsonSchema(updateBookSchema);
  });
});
