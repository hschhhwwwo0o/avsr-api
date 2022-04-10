const users = require("./users/users.service.js");
const posters = require("./posters/posters.service.js");
module.exports = function (app) {
  app.configure(users);
  app.configure(posters);
};
