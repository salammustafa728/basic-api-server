const server = require("../server");
const supertest = require("supertest");

const request = supertest(server.app);

describe("test API server ", () => {
  it("testing /", async () => {
    const response = await request.get("/");
    expect(response.text).toEqual("Home");
    expect(response.status).toEqual(200);
  });
 
 
});

