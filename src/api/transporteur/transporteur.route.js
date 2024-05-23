const express = require("express");
const transporterController = require("./transporteur.controller");
const authController = require("../auth/auth.controller");


const router = express.Router();

router.get("/", transporterController.getAllTransporters);
router.get("/:id", transporterController.getTransporterById);
router.post("/register", authController.registerTransporter);
router.post("/login", transporterController.loginTransporter);

module.exports = router;
