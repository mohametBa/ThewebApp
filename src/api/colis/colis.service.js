const Colis = require("./colis.model");

class ColisService {
    getAll() {
        return Colis.find().populate('reservation', 'nom prenom villeDepart villeArriver typeService client date');
    }
    get(id) {
        return Colis.findById(id).populate('reservation', 'nom prenom villeDepart villeArriver typeService client date');
    }
    create(data) {
        const colis = new Colis(data);
        return colis.save();
    }
    update(id, data) {
        return Colis.findByIdAndUpdate(id, data, { new: true });
    }
    delete(id) {
        return Colis.deleteOne({ _id: id });
    }
}

module.exports = new ColisService();
