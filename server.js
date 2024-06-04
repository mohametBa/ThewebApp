// server.js

const express = require("express");
const cors = require("cors");
require('dotenv').config(); 
const NotFoundError = require("./src/error/not-found");
const userRouter = require("./src/api/user/users.router");
const transporterRouter = require("./src/api/transporteur/transporteur.route");
const reservationRouter = require("./src/api/reservation/reservation.route");
const colisRouter = require("./src/api/colis/colis.route");
const messageRouter = require("./src/api/message/message.route");
const authRoutes = require('./src/api/auth/auth.route');

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN })); 
app.use(express.json());

app.use("/api/clients", userRouter);
app.use('/api/auth', authRoutes);
app.use("/api/transporters", transporterRouter);
app.use("/api/reservations", reservationRouter);
app.use("/api/colis", colisRouter);
app.use("/api/messages", messageRouter);

app.use((req, res, next) => {
    next(new NotFoundError());
});

app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message;
    res.status(status).json({
        status,
        message,
    });
});

module.exports = {
    app,
};
