const mongoose = require("mongoose");

const transporterSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    ville: { type: String, required: true },
    password: { type: String, required: true },
    vehicle: { type: String, required: true }
});

const Transporter = mongoose.model("Transporter", transporterSchema);

module.exports = Transporter;
