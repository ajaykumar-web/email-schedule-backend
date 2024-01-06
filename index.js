const { default: mongoose } = require("mongoose");
const app = require("./app");
let server;
const PORT = "8082";
const DB_URI = "mongodb+srv://ajayakay1:ajayakay1@cluster0.fcz2mqz.mongodb.net";
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("DB connected successfully.", DB_URI);
    server = app.listen(PORT, () => {
      console.log("Connect at", PORT);
    });
  })
  .catch((e) => {
    console.log(e);
  });
