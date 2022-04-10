// Initializes the `posters` service on path `/posters`
const { Posters } = require("./posters.class");
const createModel = require("../../models/posters.model");
const hooks = require("./posters.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/posters", new Posters(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("posters");

  service.hooks(hooks);
};
