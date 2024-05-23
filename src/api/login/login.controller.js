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
