class ExpressError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}

class ValidationError extends ExpressError {
  constructor(message) {
    super(400, message);
  }
}

class AuthenticationError extends ExpressError {
  constructor(message) {
    super(401, message);
  }
}

class AuthorizationError extends ExpressError {
  constructor(message) {
    super(403, message);
  }
}

module.exports = {
  ExpressError,
  ValidationError,
  AuthenticationError,
  AuthorizationError,
};
