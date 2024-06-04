const mongoose = require('mongoose');

const commentaireSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    transporterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Transporter', required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Commentaire = mongoose.model('Commentaire', commentaireSchema);

module.exports = Commentaire;
