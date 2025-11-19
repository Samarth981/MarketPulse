const { signUp, Login, logout } = require('../Controllers/AuthController');
const express = require('express');
const User = require('../model/UserModel');
const rateLimit = require('express-rate-limit');
const router = express.Router();
const WrapAsync = require('../utils/WrapAsync');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many login attempts, please try again later',
});

const signupLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many sign-up attempts, please try again later',
});

router.post('/signup', signupLimiter, signUp);
router.post('/login', loginLimiter, Login);
router.post('/logout', logout);

module.exports = router;
