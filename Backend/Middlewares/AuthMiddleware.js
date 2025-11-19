const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../model/UserModel');
const ExpressError = require('../utils/ExpressError');

module.exports = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken || req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return next(new ExpressError(401, 'Unauthorized: Token is missing.'));
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    if (!decoded || !decoded.id) throw new ExpressError(403, 'Invalid token.');

    const user = await User.findById(decoded.id).select('-password');

    if (!user) throw new ExpressError(404, 'User not found.');

    req.user = user;
    // req.username = req.params.username;

    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return next(new ExpressError(401, 'Unauthorized: Token has expired.'));
    }
    if (err.name === 'JsonWebTokenError') {
      return next(new ExpressError(403, 'Forbidden: Invalid token.'));
    }
    next(new ExpressError(500, 'Internal Server Error.'));
  }
};
