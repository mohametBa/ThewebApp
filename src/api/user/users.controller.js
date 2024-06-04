const UserService = require('./users.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/index');
const NotFoundError = require('../../error/not-found');
const UnauthorizedError = require('../../error/unauthorized');

exports.registerUser = async (req, res, next) => {
    try {
        const { nom, prenom, email, password, ville } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newClient = { nom, prenom, email, password: hashedPassword, ville };
        const createdClient = await UserService.create(newClient);
        res.status(201).json(createdClient);
    } catch (error) {
        next(error);
    }
};

exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userId = await UserService.checkPasswordUser(email, password);
        if (!userId) {
            return next(new UnauthorizedError("Invalid credentials"));
        }
        const token = jwt.sign({ userId }, config.secretJwtToken, { expiresIn: '1h' });
        res.status(200).json({ token, role: 'client' });
    } catch (error) {
        next(error);
    }
};

exports.getAllUsers = async (req, res, next) => {
    try {
        const clients = await UserService.getAll();
        res.status(200).json(clients);
    } catch (error) {
        next(error);
    }
};

exports.getUserById = async (req, res, next) => {
    try {
        const client = await UserService.get(req.params.id);
        if (!client) {
            return next(new NotFoundError("User not found"));
        }
        res.status(200).json(client);
    } catch (error) {
        next(error);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedUser = await UserService.update(id, req.body);
        if (!updatedUser) {
            return next(new NotFoundError("User not found"));
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await UserService.delete(id);
        if (!deletedUser) {
            return next(new NotFoundError("User not found"));
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        next(error);
    }
};
