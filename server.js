const express = require("express");
const cors = require("cors");
const NotFoundError = require("./src/error/not-found");
const userRouter = require("./src/api/user/users.router");
const transporterRouter = require("./src/api/transporteur/transporteur.route");
const authRoutes = require('./src/api/auth/auth.route');

require("./src/api/user/users.model");
require("./src/api/transporteur/transporteur.model");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/clients", userRouter);
app.use('/api/auth', authRoutes);
app.use("/api/transporters", transporterRouter);


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
