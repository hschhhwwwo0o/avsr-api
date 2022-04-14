module.exports = function (app) {
  const modelName = "posters";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      title: { type: String, required: true },
      image: { type: String, required: true },
      userId: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
