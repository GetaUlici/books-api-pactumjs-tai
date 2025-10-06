const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
const { generateToken } = require('../lib/generate-token');
const baseUrl = 'http://localhost:3000';
const getPrivateBooksSchema = '../data/response/get-private-books-schema.json';

describe('API test suite to get all private books', () => {
  let tokenId;
  before(async () => {
    request.setDefaultTimeout(10000);
    tokenId = await generateToken(baseUrl);
  });

  it('Get all private books -unauthorized', async () => {
    await spec().get(`${baseUrl}/private/books`).expectStatus(401);
  });

  it('Get all private books -unauthorized', async () => {
    // const tokenId = await generateToken(baseUrl);
    await spec()
      .get(`${baseUrl}/private/books`)
      .withHeaders('Authorization', `Bearerer ${tokenId}`)
      .expectStatus(200)
      .expectJsonSchema(getPrivateBooksSchema);
  });
});
