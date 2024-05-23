const express = require("express");
const clientController = require("./users.controller");
const authController = require("../auth/auth.controller");


const router = express.Router();

router.get("/", clientController.getAllUser);
router.get("/:id", clientController.getUserById);
router.post("/register", authController.registerClient);
router.post("/login", clientController.loginUser);

module.exports = router;
