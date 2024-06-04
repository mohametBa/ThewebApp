const Message = require("./message.model");

class MessageService {
    getAll() {
        return Message.find().populate('sender receiver', '-password');
    }
    get(id) {
        return Message.findById(id).populate('sender receiver', '-password');
    }
    getByUser(userId) {
        return Message.find({
            $or: [{ sender: userId }, { receiver: userId }]
        }).populate('sender receiver', '-password');
    }
    create(data) {
        const message = new Message(data);
        return message.save();
    }
    update(id, data) {
        return Message.findByIdAndUpdate(id, data, { new: true });
    }
    delete(id) {
        return Message.deleteOne({ _id: id });
    }
}

module.exports = new MessageService();
