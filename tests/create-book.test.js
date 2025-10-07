const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
const createBookSchema = '../data/response/create-book-schema.json';
const baseUrl = `${process.env.BASE_URL}`;

let chance = require('chance').Chance();

console.log("Random data using chance: " + chance.first());

describe('API test for create a book', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it('Create book by id', async () => {
    const requestBody = {
      title: faker.book.title(),
      author: faker.book.author(),
    };
    await spec()
      .post(`${baseUrl}/books`)
      .withBody(requestBody)
      .expectStatus(201)
      .expectJsonSchema(createBookSchema);
  });

  it('Validate mandatory title on body', async () => {
    const requestBody = {
      title: '',
      author: 'F. Scott Fitzgerald',
    };
    await spec()
      .post(`${baseUrl}/books`)
      .withBody(requestBody)
      .expectStatus(400)
      .expectBodyContains('Title and author are required.');
  });

  it('Validate mandatory author on body', async () => {
    const requestBody = {
      title: 'Narnia',
      author: '',
    };
    await spec()
      .post(`${baseUrl}/books`)
      .withBody(requestBody)
      .expectStatus(400)
      .expectBodyContains('Title and author are required.');
  });
});
