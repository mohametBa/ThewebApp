const mongoose = require("mongoose");

const colisSchema = new mongoose.Schema({
    poids: { type: Number, required: true },
    nombre: { type: Number, required: true },
    reservation: { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation', required: true }
});

const Colis = mongoose.model("Colis", colisSchema);

module.exports = Colis;
