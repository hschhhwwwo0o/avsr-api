module.exports = function (app) {
  if (typeof app.channel !== "function") {
    return;
  }

  app.on("connection", connection => {
    app.channel("anonymous").join(connection);
  });

  app.on("login", (authResult, { connection }) => {
    if (connection) {
      app.channel("anonymous").leave(connection);
      app.channel("authenticated").join(connection);
    }
  });

  app.publish((data, hook) => {
    console.log(
      "Publishing all events to all authenticated users. See `channels.js` and https://docs.feathersjs.com/api/channels.html for more information."
    );
    return app.channel("authenticated");
  });
};
