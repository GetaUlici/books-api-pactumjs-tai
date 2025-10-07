const { faker } = require('@faker-js/faker');
const { spec, request } = require('pactum');

const getNewBookID = async (
  title = faker.lorem.words({ min: 1, max: 3 }),
  author = faker.book.author()
) => {
  const requestBody = {
    title: title,
    author: author,
  };

  const newPostId = await spec()
    .post(`${process.env.BASE_URL}/books`)
    .withBody(requestBody)
    .expectStatus(201);
  return newPostId.body.id;
};

module.exports = {
  getNewBookID,
};
