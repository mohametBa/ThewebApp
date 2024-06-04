const express = require("express");
const messageController = require("./message.controller");
const auth = require("../../middleware/auth");

const router = express.Router();

router.get("/", auth, messageController.getAllMessages);
router.get("/:id", auth, messageController.getMessageById);
router.get("/user", auth, messageController.getMessagesByUser);
router.post("/", auth, messageController.createMessage);
router.put("/:id", auth, messageController.updateMessage);
router.delete("/:id", auth, messageController.deleteMessage);

module.exports = router;
