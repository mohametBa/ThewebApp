const express = require("express");
const colisController = require("./colis.controller");
const auth = require("../../middleware/auth");

const router = express.Router();

router.get("/", auth, colisController.getAllColis);
router.get("/:id", auth, colisController.getColisById);
router.post("/", auth, colisController.createColis);
router.put("/:id", auth, colisController.updateColis);
router.delete("/:id", auth, colisController.deleteColis);

module.exports = router;
