const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/v1");

app.use(express.json());
app.use(cors());
app.use("*", cors());
app.use("/v1", routes);

module.exports = app;
