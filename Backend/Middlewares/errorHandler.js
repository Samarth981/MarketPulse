const {
  ExpressError,
  ValidationError,
  AuthenticationError,
  AuthorizationError,
} = require('../utils/ExpressError');

module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation Error',
      details: err.errors,
    });
  }

  if (err instanceof AuthenticationError) {
    return res.status(401).json({
      error: 'Authentication Error',
      message: err.message,
    });
  }

  // Handling AuthorizationError
  if (err instanceof AuthorizationError) {
    return res.status(403).json({
      error: 'Authorization Error',
      message: err.message,
    });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid ID format.' });
  }
  // Handling MongoDB Duplicate Key Error
  if (err.code === 11000) {
    return res.status(409).json({
      error: 'Duplicate Key Error',
      message: 'Entry already exists.',
    });
  }

  // Default error logging
  console.error(`Error [${statusCode}]: ${message}`);

  if (!res.headersSent) {
    res.status(statusCode).json({ error: message });
  } else {
    next(err);
  }
};
