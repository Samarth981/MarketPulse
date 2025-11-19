const { ValidationError } = require('../utils/ExpressError');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const typoCorrections = {
  'gamil.com': 'gmail.com',
  'yaho.com': 'yahoo.com',
  'hotmial.com': 'hotmail.com',
  'outlok.com': 'outlook.com',
};

const validateEmail = (req, res, next) => {
  let { email } = req.body;

  if (!email) {
    return next(new ValidationError('Email is required'));
  }

  const emailParts = email.split('@');
  if (emailParts.length !== 2) {
    return next(new ValidationError('Invalid email format'));
  }

  const domain = emailParts[1];
  if (typoCorrections[domain]) {
    return next(
      new ValidationError(`Did you mean @${typoCorrections[domain]}?`),
    );
  }

  if (!emailRegex.test(email)) {
    return next(new ValidationError('Invalid email format'));
  }

  next();
};

module.exports = validateEmail;
