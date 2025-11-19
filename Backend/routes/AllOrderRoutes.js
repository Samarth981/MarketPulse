const express = require('express');
const { OrdersModel } = require('../model/OrdersModel');
const AuthMiddleware = require('../Middlewares/AuthMiddleware');
const WrapAsync = require('../utils/WrapAsync');
const { AuthorizationError } = require('../utils/ExpressError');

const router = express.Router();

router.get(
  '/',
  AuthMiddleware,
  WrapAsync(async (req, res, next) => {
    const userId = req.user.id;

    let AllOrder = await OrdersModel.find({ userId });

    if (!AllOrder.length) {
      throw new AuthorizationError('No orders found for this user');
    }

    res.json(AllOrder);
  }),
);
module.exports = router;
