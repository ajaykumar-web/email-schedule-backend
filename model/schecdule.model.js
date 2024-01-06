const mongoose = require("mongoose");

const schecduleSchema = new mongoose.Schema({
  title: { type: String, default: "-" },
  description: { type: String, default: "-" },
  subject: { type: String, default: "-" },
  frequency: { type: String, default: "-" },
  repeat: { type: String, default: "-" },
  time: { type: String, default: "-" },
});

const schecduleModel = mongoose.model("Schecdule", schecduleSchema);

module.exports = schecduleModel;
