const { spec, request } = require('pactum');

const baseUrl = `${process.env.BASE_URL}`;
const getAllBooksSchema = '../data/response/get-all-books-schema.json';

describe('API test for Get all books', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it('Get all books', async () => {
    await spec().get(`${baseUrl}/books`).expectStatus(200).expectJsonSchema(getAllBooksSchema);
  });
});
