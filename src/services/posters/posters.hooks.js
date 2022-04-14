const authentication = require("@feathersjs/authentication");
const { authenticate } = authentication.hooks;

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate("jwt")],
    update: [authenticate("jwt")],
    patch: [authenticate("jwt")],
    remove: [authenticate("jwt")],
  },

  after: {
    all: [],
    find: [
      async ctx => {
        const newPosters = await ctx.result.data.map(async poster => {
          const { _id, email } = await ctx.app.service("users").get(poster.userId);
          return { ...poster, user: { _id, email } };
        });
        await Promise.all(newPosters).then(data => {
          ctx.result.data = data;
          return ctx;
        });
      },
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
