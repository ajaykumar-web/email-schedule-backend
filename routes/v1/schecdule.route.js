const express = require("express");
const router = express.Router();
const controller = require("../../controllers/schecdule.controller");
router.get("/", controller.getAllSchecdule);
router.get("/:id", controller.getAllSchecdule);
router.post("/", controller.postSchecdule);
router.delete("/:id", controller.deleteSchecdule);
router.patch("/:id", controller.editSchecdule);

module.exports = router;
