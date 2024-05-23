const Transporter = require("./transporteur.model");
const bcrypt = require('bcrypt');

class TransporterService {
    getAll() {
        return Transporter.find({}, "-password");
    }
    get(id) {
        return Transporter.findById(id, "-password");
    }
    findByEmail(email) {
        return Transporter.findOne({ email });
    }
    create(data) {
        const transporter = new Transporter(data);
        return transporter.save();
    }
    update(id, data) {
        return Transporter.findByIdAndUpdate(id, data, { new: true });
    }
    delete(id) {
        return Transporter.deleteOne({ _id: id });
    }
    async checkPasswordTransporter(email, password) {
        const transporter = await this.findByEmail(email);
        if (!transporter) {
            return false;
        }
        const isMatch = await bcrypt.compare(password, transporter.password);
        if (!isMatch) {
            return null;
        }
        return transporter._id;
    }
}

module.exports = new TransporterService();
