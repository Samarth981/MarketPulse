const mongoose = require('mongoose');
const { OrdersSchema } = require('../Schema/OrdersSchema');

const OrdersModel = mongoose.model('orders', OrdersSchema);

module.exports = { OrdersModel };
