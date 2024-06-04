const ColisService = require('./colis.service');
const ReservationService = require('../reservation/reservation.service');
const NotFoundError = require('../../error/not-found');

exports.createColis = async (req, res, next) => {
    try {
        const { poids, nombre, reservationId } = req.body;
        const reservation = await ReservationService.get(reservationId);
        if (!reservation) {
            return next(new NotFoundError("Reservation not found"));
        }
        const newColis = { poids, nombre, reservation: reservationId };
        const createdColis = await ColisService.create(newColis);
        
        //je rajoute colis a la reservation
        reservation.colis.push(createdColis._id);
        await reservation.save();
        
        res.status(201).json(createdColis);
    } catch (error) {
        next(error);
    }
};

exports.getAllColis = async (req, res, next) => {
    try {
        const colis = await ColisService.getAll();
        res.status(200).json(colis);
    } catch (error) {
        next(error);
    }
};

exports.getColisById = async (req, res, next) => {
    try {
        const colis = await ColisService.get(req.params.id);
        if (!colis) {
            return next(new NotFoundError("Colis not found"));
        }
        res.status(200).json(colis);
    } catch (error) {
        next(error);
    }
};

exports.updateColis = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedColis = await ColisService.update(id, req.body);
        if (!updatedColis) {
            return next(new NotFoundError("Colis not found"));
        }
        res.status(200).json(updatedColis);
    } catch (error) {
        next(error);
    }
};

exports.deleteColis = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedColis = await ColisService.delete(id);
        if (!deletedColis) {
            return next(new NotFoundError("Colis not found"));
        }
        res.status(200).json({ message: 'Colis deleted successfully' });
    } catch (error) {
        next(error);
    }
};
