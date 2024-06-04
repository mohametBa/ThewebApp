const { app } = require("../server");
const config = require("../src/config/index");
const mongoose = require("mongoose");

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
    console.log(err);
});
db.once("open", () => {
    console.log("Database connected");
});

app.listen(config.port, () => {
    console.log("app running")
}) 