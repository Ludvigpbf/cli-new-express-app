export const jasmineConfig = `
import request from "supertest";
import app from "../server.js";

describe("GET /", function () {
  it("should return 'Hello, World!'", async function (done) {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, World!");
    done();
  });
});
`;
