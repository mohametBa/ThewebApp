const Commentaire = require('./commentaire.model');

exports.createCommentaire = async (req, res, next) => {
    try {
        const commentaire = new Commentaire(req.body);
        await commentaire.save();
        res.status(201).json(commentaire);
    } catch (error) {
        next(error);
    }
};

exports.getCommentaires = async (req, res, next) => {
    try {
        const commentaires = await Commentaire.find().populate('clientId').populate('transporterId');
        res.status(200).json(commentaires);
    } catch (error) {
        next(error);
    }
};

exports.getCommentaireById = async (req, res, next) => {
    try {
        const commentaire = await Commentaire.findById(req.params.id).populate('clientId').populate('transporterId');
        if (!commentaire) {
            return res.status(404).json({ message: 'Commentaire not found' });
        }
        res.status(200).json(commentaire);
    } catch (error) {
        next(error);
    }
};

exports.updateCommentaire = async (req, res, next) => {
    try {
        const commentaire = await Commentaire.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!commentaire) {
            return res.status(404).json({ message: 'Commentaire not found' });
        }
        res.status(200).json(commentaire);
    } catch (error) {
        next(error);
    }
};

exports.deleteCommentaire = async (req, res, next) => {
    try {
        const commentaire = await Commentaire.findByIdAndDelete(req.params.id);
        if (!commentaire) {
            return res.status(404).json({ message: 'Commentaire not found' });
        }
        res.status(200).json({ message: 'Commentaire deleted' });
    } catch (error) {
        next(error);
    }
};
