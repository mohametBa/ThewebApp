const User = require("./users.model");
const bcrypt = require('bcrypt');

class UserService {
    getAll() {
        return User.find({}, "-password");
    }
    get(id) {
        return User.findById(id, "-password");
    }
    findByEmail(email) {
        return User.findOne({ email });
    }
    create(data) {
        const user = new User(data);
        return user.save();
    }
    update(id, data) {
        return User.findByIdAndUpdate(id, data, { new: true });
    }
    delete(id) {
        return User.deleteOne({ _id: id });
    }
    async checkPasswordUser(email, password) {
        const user = await this.findByEmail(email);
        if (!user) {
            return false;
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return null;
        }
        return user._id;
    }
}

module.exports = new UserService();
