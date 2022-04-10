const mongoose = require("mongoose");
const logger = require("./logger");
require("dotenv").config();

module.exports = function (app) {
  mongoose.connect(String(process.env.MONGODB)).catch(err => {
    logger.error(err);
    process.exit(1);
  });

  app.set("mongooseClient", mongoose);
};
