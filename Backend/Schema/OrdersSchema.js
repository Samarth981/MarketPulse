const { Schema } = require('mongoose');

const OrdersSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
  name: {
    type: String,
    required: [true, 'Stock name is required'],
  },
  qty: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [1, 'Quantity must be at least 1'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [1, 'Price must be a positive value'],
  },
  mode: {
    type: String,
    required: [true, 'Mode is required'],
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = { OrdersSchema };
