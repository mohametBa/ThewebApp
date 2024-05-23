const ClientService = require('../user/users.service');
const TransporterService = require('../transporteur/transporteur.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/index');
const UnauthorizedError = require('../../error/unauthorized');

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check if user is a client
        let user = await ClientService.findByEmail(email);
        let role = 'client';

        // If not a client, check if user is a transporter
        if (!user) {
            user = await TransporterService.findByEmail(email);
            role = 'transporter';
        }

        if (!user) {
            return next(new UnauthorizedError("Email ou mot de passe incorrect"));
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return next(new UnauthorizedError("Mot de passe non valide"));
        }

        const token = jwt.sign({ userId: user._id, role }, config.secretJwtToken, { expiresIn: '1h' });

        // Send the user data along with the token
        res.status(200).json({ token, role, ...user._doc });
    } catch (error) {
        next(error);
    }
};

exports.registerClient = async (req, res, next) => {
    try {
        const { nom, prenom, email, password, ville } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            nom,
            prenom,
            email,
            password: hashedPassword,
            ville
        };
        const user = await ClientService.create(newUser);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

exports.registerTransporter = async (req, res, next) => {
    try {
        const { nom, prenom, email, password, ville, vehicle } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newTransporter = {
            nom,
            prenom,
            email,
            password: hashedPassword,
            ville,
            vehicle
        };

        const transporter = await TransporterService.create(newTransporter);
        res.status(201).json(transporter);
    } catch (error) {
        next(error);
    }
};
