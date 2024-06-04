const express = require("express");
const authController = require("./auth.controller");

const router = express.Router();

router.post("/login", authController.login);
router.post("/register-client", authController.registerClient);
router.post("/register-transporteur", authController.registerTransporter);

module.exports = router;
