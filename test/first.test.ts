import * as chai from "chai";
import chaiHttp = require("chai-http");
import * as mocha from "mocha";

import app from "../src/include/app";

chai.use(chaiHttp);
const expect = chai.expect;

describe("baseRoute", () => {

  it("/ should have a status prop eq to OK", () => {
    return chai.request(app).get("/")
    .then((res) => {
      expect(res.type).to.eql("application/json");
      expect(res.body.status).to.eql("OK");
    });
  });

  it("/uno should have a status prop eq to OK", () => {
    return chai.request(app).get("/uno")
    .then((res) => {
      expect(res.type).to.eql("application/json");
      expect(res.body.status).to.eql("OK");
    });
  });

  it("/ should be json", () => {
    return chai.request(app).get("/")
    .then((res) => {
      expect(res.type).to.eql("application/json");
    });
  });

});

describe("ldeRoute", () => {

    it("/lde should have a status prop eq to OK", () => {
      return chai.request(app).get("/lde")
      .then((res) => {
        expect(res.type).to.eql("application/json");
        expect(res.body.status).to.eql("OK");
      });
    });

    it("/lde/uno should have a status prop eq to OK", () => {
      return chai.request(app).get("/lde/uno")
      .then((res) => {
        expect(res.type).to.eql("application/json");
        expect(res.body.status).to.eql("OK");
      });
    });

    it("/lde/uno should be json", () => {
      return chai.request(app).get("/lde/uno")
      .then((res) => {
        expect(res.type).to.eql("application/json");
      });
    });

});
