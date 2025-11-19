const express = require('express');
const { HoldingsModel } = require('../model/HoldingsModel');
const AuthMiddleware = require('../Middlewares/AuthMiddleware');

const router = express.Router();
const WrapAsync = require('../utils/WrapAsync');
const {
  AuthenticationError,
  AuthorizationError,
} = require('../utils/ExpressError');

//holding routs
router.get(
  '/',
  AuthMiddleware,

  WrapAsync(async (req, res, next) => {
    const userId = req.user.id;

    if (!userId) {
      throw new AuthenticationError('User is unauthorized');
    }

    const userHoldings = await HoldingsModel.find({ userId });

    if (!userHoldings.length) {
      throw new AuthorizationError('No holdings found');
    }

    res.json(userHoldings);
  }),
);

module.exports = router;
