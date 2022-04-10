const { Posters } = require("./posters.class");
const createModel = require("../../models/posters.model");
const hooks = require("./posters.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  app.use("/posters", new Posters(options, app));

  const service = app.service("posters");

  service.hooks(hooks);
};
