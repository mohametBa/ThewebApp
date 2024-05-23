const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    ville: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model("Client", userSchema);

module.exports = User;
