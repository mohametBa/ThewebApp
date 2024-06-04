const express = require("express");
const transporterController = require("./transporteur.controller");
const auth = require("../../middleware/auth");

const router = express.Router();

router.get("/", auth, transporterController.getAllTransporters);
router.get("/:id", auth, transporterController.getTransporterById);
router.post("/register", transporterController.registerTransporter); 
router.post("/login", transporterController.loginTransporter); 
router.put("/:id", auth, transporterController.updateTransporter);
router.delete("/:id", auth, transporterController.deleteTransporter);

module.exports = router;
