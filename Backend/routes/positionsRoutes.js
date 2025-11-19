const express = require('express');
const { PositionsModel } = require('../model/PositionsModel');
const AuthMiddleware = require('../Middlewares/AuthMiddleware');

const router = express.Router();
const WrapAsync = require('../utils/WrapAsync');
const {
  AuthenticationError,
  ValidationError,
} = require('../utils/ExpressError');

router.get(
  '/',
  AuthMiddleware,
  WrapAsync(async (req, res, next) => {
    const userId = req.user.id;

    if (!userId) {
      throw new AuthenticationError('User is unauthorized');
    }

    const allPositions = await PositionsModel.find({ userId });

    if (!allPositions.length) {
      throw new ValidationError('No positions found for this user');
    }

    res.json(allPositions);
  }),
);

module.exports = router;
