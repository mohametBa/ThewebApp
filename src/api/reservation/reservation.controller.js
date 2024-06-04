const ReservationService = require('./reservation.service');
const NotFoundError = require('../../error/not-found');

exports.createReservation = async (req, res, next) => {
    try {
        const { nom, prenom, villeDepart, villeArriver, typeService, poidsColis, nombreColis } = req.body;
        const client = req.user._id;
        const newReservation = { nom, prenom, villeDepart, villeArriver, typeService, poidsColis, nombreColis, client };
        const createdReservation = await ReservationService.create(newReservation);
        res.status(201).json(createdReservation);
    } catch (error) {
        next(error);
    }
};

exports.getAllReservations = async (req, res, next) => {
    try {
        const reservations = await ReservationService.getAll();
        res.status(200).json(reservations);
    } catch (error) {
        next(error);
    }
};

exports.getReservationById = async (req, res, next) => {
    try {
        const reservation = await ReservationService.get(req.params.id);
        if (!reservation) {
            return next(new NotFoundError("Reservation not found"));
        }
        res.status(200).json(reservation);
    } catch (error) {
        next(error);
    }
};

exports.updateReservation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedReservation = await ReservationService.update(id, req.body);
        if (!updatedReservation) {
            return next(new NotFoundError("Reservation not found"));
        }
        res.status(200).json(updatedReservation);
    } catch (error) {
        next(error);
    }
};

exports.deleteReservation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedReservation = await ReservationService.delete(id);
        if (!deletedReservation) {
            return next(new NotFoundError("Reservation not found"));
        }
        res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
        next(error);
    }
};
