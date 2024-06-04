const Commentaire = require('./commentaire.model');

class CommentaireService {
    getAll() {
        return Commentaire.find().populate('clientId').populate('transporterId');
    }

    get(id) {
        return Commentaire.findById(id).populate('clientId').populate('transporterId');
    }

    create(data) {
        const commentaire = new Commentaire(data);
        return commentaire.save();
    }

    update(id, data) {
        return Commentaire.findByIdAndUpdate(id, data, { new: true });
    }

    delete(id) {
        return Commentaire.findByIdAndDelete(id);
    }
}

module.exports = new CommentaireService();
