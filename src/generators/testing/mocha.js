export const mochaConfig = `
import { describe, it } from "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server.js";

const { expect } = chai;
chai.use(chaiHttp);

describe("GET /", () => {
  it("should return 'Hello, World!'", async () => {
    const res = await chai.request(app).get("/");
    expect(res).to.have.status(200);
    expect(res.text).to.equal("Hello, World!");
  });
});
`;
