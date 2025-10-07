const { spec, request } = require('pactum');
const baseUrl = `${process.env.BASE_URL}`;
const createTokenSchema = '../data/response/create-token-schema.json';

describe('API test to create token', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it('Login to get JWT', async () => {
    const requestBody = {
      email: 'rv@tai.com',
      password: 'learnwithrv',
    };
    await spec()
      .post(`${baseUrl}/auth/login`)
      .withBody(requestBody)
      .expectStatus(200)
      .expectJsonSchema(createTokenSchema);
  });
});
