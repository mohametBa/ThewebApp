const MessageService = require('./message.service');
const NotFoundError = require('../../error/not-found');

exports.createMessage = async (req, res, next) => {
    try {
        const { content, receiver, receiverModel } = req.body;
        const sender = req.user._id;
        const senderModel = req.user.constructor.modelName; 
        const newMessage = { sender, senderModel, receiver, receiverModel, content };
        const createdMessage = await MessageService.create(newMessage);
        res.status(201).json(createdMessage);
    } catch (error) {
        next(error);
    }
};

exports.getAllMessages = async (req, res, next) => {
    try {
        const messages = await MessageService.getAll();
        res.status(200).json(messages);
    } catch (error) {
        next(error);
    }
};

exports.getMessageById = async (req, res, next) => {
    try {
        const message = await MessageService.get(req.params.id);
        if (!message) {
            return next(new NotFoundError("Message not found"));
        }
        res.status(200).json(message);
    } catch (error) {
        next(error);
    }
};

exports.getMessagesByUser = async (req, res, next) => {
    try {
        const messages = await MessageService.getByUser(req.user._id);
        res.status(200).json(messages);
    } catch (error) {
        next(error);
    }
};

exports.updateMessage = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedMessage = await MessageService.update(id, req.body);
        if (!updatedMessage) {
            return next(new NotFoundError("Message not found"));
        }
        res.status(200).json(updatedMessage);
    } catch (error) {
        next(error);
    }
};

exports.deleteMessage = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedMessage = await MessageService.delete(id);
        if (!deletedMessage) {
            return next(new NotFoundError("Message not found"));
        }
        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        next(error);
    }
};
