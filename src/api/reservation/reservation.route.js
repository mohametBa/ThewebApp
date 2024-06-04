const express = require("express");
const reservationController = require("./reservation.controller");
const auth = require("../../middleware/auth");

const router = express.Router();

router.get("/", auth, reservationController.getAllReservations);
router.get("/:id", auth, reservationController.getReservationById);
router.post("/", auth, reservationController.createReservation);
router.put("/:id", auth, reservationController.updateReservation);
router.delete("/:id", auth, reservationController.deleteReservation);

module.exports = router;
