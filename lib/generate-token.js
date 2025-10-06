const { spec, request } = require('pactum');
require('dotenv').config();

const generateToken = async (
  baseUrl,
  email = process.env.PACTUM_EMAIL,
  password = process.env.PACTUM_PWW
) => {
  const requestBody = {
    email: email,
    password: password,
  };
  const response = await spec()
    .post(`${baseUrl}/auth/login`)
    .withBody(requestBody)
    .expectStatus(200);
  return response.body.token;
};

module.exports = {
  generateToken,
};
