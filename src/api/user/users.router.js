const express = require("express");
const userController = require("./users.controller");
const auth = require("../../middleware/auth");

const router = express.Router();

router.get("/", auth, userController.getAllUsers);
router.get("/:id", auth, userController.getUserById);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.put("/:id", auth, userController.updateUser);
router.delete("/:id", auth, userController.deleteUser);

module.exports = router;
