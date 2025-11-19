const jwt = require('jsonwebtoken');
const { createSecretToken } = require('../utils/SecretToken');
require('dotenv').config();
const User = require('../model/UserModel');
const ExpressError = require('../utils/ExpressError');

module.exports.refreshToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ error: 'No refresh token provided' });
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, async (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ error: 'Invalid or expired refresh token' });
    }

    const { id } = user;
    const newAccessToken = jwt.sign({ id }, process.env.TOKEN_KEY, {
      expiresIn: '1h',
    });

    res.json({ accessToken: newAccessToken });
  });
};
