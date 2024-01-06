const express = require("express");
const router = express.Router();
const schecduleRouter = require("./schecdule.route");

router.use("/schecdule", schecduleRouter);

module.exports = router;
