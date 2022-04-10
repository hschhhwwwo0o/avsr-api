const { Users } = require("./users.class");
const createModel = require("../../models/users.model");
const hooks = require("./users.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  app.use("/users", new Users(options, app));

  const service = app.service("users");

  service.hooks(hooks);
};
