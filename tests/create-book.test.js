const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
const baseUrl = 'http://localhost:3000';
const createBookSchema = '../data/response/create-book-schema.json';

describe('API test for create a book', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it('Create book by id', async () => {
    const requestBody = {
      title: 'The Great Gatsby',
      author: faker.book.author(),
    };
    await spec()
      .post(`${baseUrl}/books`)
      .withBody(requestBody)
      .expectStatus(201)
      .expectJsonSchema(createBookSchema);
  });
});
