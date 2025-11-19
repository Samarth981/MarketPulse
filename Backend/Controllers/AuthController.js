const User = require('../model/UserModel');
const { createSecretToken } = require('../utils/SecretToken');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validateEmail = require('../Middlewares/validateEmail');

const {
  ExpressError,
  ValidationError,
  AuthenticationError,
  AuthorizationError,
} = require('../utils/ExpressError');

module.exports.signUp = async (req, res, next) => {
  try {
    validateEmail(req, res, (error) => {
      if (error) return next(new ValidationError('Invalid email format.'));
    });

    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      throw new ValidationError(400, 'All fields are required');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ExpressError(400, 'User already exists');
    }

    const user = await User.create({ email, password, username });

    const { accessToken, refreshToken } = createSecretToken(user._id);

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      sameSite: 'Lax',
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'Lax',
    });

    res.status(201).json({
      message: 'User logged in successfully',
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new ValidationError('All fields are required');
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError('Invalid email or password');
    }

    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      throw new AuthenticationError('Invalid password');
    }

    const { accessToken, refreshToken } = createSecretToken(user._id);

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      sameSite: 'Lax',
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'Lax',
    });

    res.status(201).json({
      message: 'User logged in successfully',
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports.logout = async (req, res, next) => {
  try {
    // Clear cookies for both accessToken and refreshToken
    res.clearCookie('accessToken', { path: '/' });
    res.clearCookie('refreshToken', { path: '/' });

    res.status(200).send({ message: 'Logged out successfully' });
  } catch (error) {
    next(new ExpressError(500, 'Error logging out'));
  }
};
