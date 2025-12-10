const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("debe responder con Hola mundo", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Hola mundo");
  });
});
