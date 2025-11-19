require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.createSecretToken = (id) => {
  // Access Token
  const accessToken = jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: '1h', // 1 hour expiration for access token
  });

  const refreshToken = jwt.sign({ id }, process.env.REFRESH_TOKEN_KEY, {
    expiresIn: '7d', // 7 days expiration for refresh token
  });

  return { accessToken, refreshToken };
};
