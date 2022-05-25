const app = require("../app");
const supertest = require("supertest");


test("GET /searched-movies", async () => {

  await supertest(app).get("/searched-movies")
    .query({
      search: 'Marvel'
    })
    .expect(200)

});

test("GET /movie", async () => {

  await supertest(app).get("/movie")
    .query({
      id: 'tt11138512'
    })
    .expect(200)
    .then((response) => {
      expect(response.body.Year).toBe("201");

    });
});


test("POST /create-account", async () => {
  const data = {
    first_name: "john2",
    last_name: "doe2",
    email_address: "john2@gmail.com",
    phone_number: "07082079883",
    password: "johnny"
  }

  await supertest(app).post("/create-account")
    .send(data)
    .expect(201)
});

test("POST /login", async () => {
  const data = {
    email_address: "john@gmail.com",
    password: "johnny"
  }

  await supertest(app).post("/login")
    .send(data)
    .expect(200)
});

test("GET /favourites WITH TOKEN", async () => {

  await supertest(app).get("/favourites")
    .query({
      id: 1
    })
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMiIsImlhdCI6MTY1MzQ3MTUxMn0.fD6VLGqAkPL9DdrRZAWg3FjaQvmKxWoa62Y3c9L05OA')
    .expect(200)

});

test("GET /favourites NO TOKEN", async () => {

  await supertest(app).get("/favourites")
    .query({
      id: 1
    })
    .expect(401)

});

test("PATCH /update-favourites WITH TOKEN", async () => {
  const data = {
    id: 1,
    favourite_movies: "tt11138512"
  }
  await supertest(app).patch("/update-favourites")
    .send(data)
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMiIsImlhdCI6MTY1MzQ3MTUxMn0.fD6VLGqAkPL9DdrRZAWg3FjaQvmKxWoa62Y3c9L05OA')
    .expect(200)

});

test("PATCH /update-favourites NO TOKEN", async () => {
  const data = {
    id: 1,
    favourite_movies: "tt11138512"
  }
  await supertest(app).patch("/update-favourites")
    .send(data)
    .expect(401)

});