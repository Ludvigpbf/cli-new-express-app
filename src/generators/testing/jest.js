export const jestConfig = `
import request from "supertest";
import app from "../server.js";

describe("GET /", () => {
  it("should return 'Hello, World!'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, World!");
  });
});
`;
