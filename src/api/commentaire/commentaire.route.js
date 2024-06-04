const express = require('express');
const commentaireController = require('./commentaire.controller');

const router = express.Router();

router.post('/', commentaireController.createCommentaire);
router.get('/', commentaireController.getCommentaires);
router.get('/:id', commentaireController.getCommentaireById);
router.put('/:id', commentaireController.updateCommentaire);
router.delete('/:id', commentaireController.deleteCommentaire);

module.exports = router;
