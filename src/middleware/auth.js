const UnauthorizedError = require("../error/unauthorized");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../api/user/users.model"); 
const Transporter = require("../api/transporteur/transporteur.model");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      throw new UnauthorizedError("No token provided.");
    }
    const decoded = jwt.verify(token, config.secretJwtToken);
    if (!decoded || (!decoded.userId && !decoded.transporterId)) {
      throw new UnauthorizedError("Invalid token.");
    }
    const user = decoded.userId ? 
      await User.findById(decoded.userId).select('-password') : null;
    const transporter = decoded.transporterId ? 
      await Transporter.findById(decoded.transporterId).select('-password') : null;

    if (!user && !transporter) {
      throw new UnauthorizedError("User/Transporter not found.");
    }

    req.user = user || transporter;
    next();
  } catch (error) {
    next(error instanceof UnauthorizedError ? 
      error : new UnauthorizedError(error.message || "Unauthorized."));
  }
};
