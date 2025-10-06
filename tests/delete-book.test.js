const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
const { getNewBookID } = require('../lib/create-books');
const baseUrl = 'http://localhost:3000';
const deleteBookSchema = '../data/response/delete-book-schema.json';
const deleteBookNegativeSchema = '../data/response/delete-book-negative-schema.json';

describe('API test to delete a book', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it('Delete book by id', async () => {
    const newBookId = await getNewBookID(baseUrl, 'Chronicles of Narnia', 'C.S. Lewis');
    await spec()
      .delete(`${baseUrl}/books/${newBookId}`)
      .expectStatus(200)
      .expectJsonSchema(deleteBookSchema);
  });

  it('Delete book negative test', async () => {
    const newBookId = await getNewBookID(baseUrl, 'Chronicles of Narnia', 'C.S. Lewis');
    await spec().delete(`${baseUrl}/books/${newBookId}`);
    await spec()
      .delete(`${baseUrl}/books/${newBookId}`)
      .expectStatus(404)
      .expectBodyContains('Book not found.')
      .expectJsonSchema(deleteBookNegativeSchema);
  });
});
