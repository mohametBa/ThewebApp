const TransporterService = require('./transporteur.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/index');
const NotFoundError = require('../../error/not-found');
const UnauthorizedError = require('../../error/unauthorized');

exports.registerTransporter = async (req, res, next) => {
    try {
        const { nom, prenom, email, password, vehicle, ville } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newTransporter = { nom, prenom, email, password: hashedPassword, vehicle, ville };
        const createdTransporter = await TransporterService.create(newTransporter);
        res.status(201).json(createdTransporter);
    } catch (error) {
        next(error);
    }
};

exports.loginTransporter = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const transporterId = await TransporterService.checkPasswordTransporter(email, password);
        if (!transporterId) {
            return next(new UnauthorizedError("Invalid credentials"));
        }
        const token = jwt.sign({ transporterId }, config.secretJwtToken, { expiresIn: '1h' });
        res.status(200).json({ token, role: 'transporter' });
    } catch (error) {
        next(error);
    }
};

exports.getAllTransporters = async (req, res, next) => {
    try {
        const transporters = await TransporterService.getAll();
        res.status(200).json(transporters);
    } catch (error) {
        next(error);
    }
};

exports.getTransporterById = async (req, res, next) => {
    try {
        const transporter = await TransporterService.get(req.params.id);
        if (!transporter) {
            return next(new NotFoundError("Transporter not found"));
        }
        res.status(200).json(transporter);
    } catch (error) {
        next(error);
    }
};
