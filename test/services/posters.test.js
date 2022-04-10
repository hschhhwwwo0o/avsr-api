const app = require("../../src/app");

describe("'posters' service", () => {
  it("registered the service", () => {
    const service = app.service("posters");
    expect(service).toBeTruthy();
  });
});
