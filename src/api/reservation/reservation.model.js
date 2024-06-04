const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    villeDepart: { type: String, required: true },
    villeArriver: { type: String, required: true },
    typeService: { type: String, required: true },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    date: { type: Date, default: Date.now },
    colis: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Colis' }]
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
