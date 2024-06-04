const Reservation = require("./reservation.model");

class ReservationService {
    getAll() {
        return Reservation.find().populate('client', '-password');
    }
    get(id) {
        return Reservation.findById(id).populate('client', '-password');
    }
    create(data) {
        const reservation = new Reservation(data);
        return reservation.save();
    }
    update(id, data) {
        return Reservation.findByIdAndUpdate(id, data, { new: true });
    }
    delete(id) {
        return Reservation.deleteOne({ _id: id });
    }
}

module.exports = new ReservationService();
