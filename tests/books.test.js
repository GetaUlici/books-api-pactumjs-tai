const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");
const baseUrl = "http://localhost:3000";

describe("API test suite for books", () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it("Get all books", async () => {
    await spec().get(`${baseUrl}/books`).expectStatus(200);
  });

  it("Get book by id", async () => {
    await spec().get(`${baseUrl}/books/1`).expectStatus(200);
  });

  it("Update book by id", async () => {
    const requestBody = {
      id: 2,
      title: "The Great Gatsby/test",
      author: "F. Scott Fitzgerald",
    };
    await spec()
      .put(`${baseUrl}/books/2`)
      .withBody(requestBody)
      .expectStatus(200);
  });

  it("Create book by id", async () => {
    const requestBody = {
      id: 3,
      title: "The Great Gatsby/post",
      author: faker.book.author(),
    };
    await spec()
      .post(`${baseUrl}/books`)
      .withBody(requestBody)
      .expectStatus(201);
  });

  it("Delete book by id", async () => {
    await spec().delete(`${baseUrl}/books/4`).expectStatus(200);
  });

  it("Login to get JWT", async () => {
    const requestBody = {
      email: "rv@tai.com",
      password: "learnwithrv",
    };
    await spec()
      .post(`${baseUrl}/auth/login`)
      .withBody(requestBody)
      .expectStatus(200);
  });
});
