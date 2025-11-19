const { Schema } = require('mongoose');
const HoldingsSchema = new Schema({
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
  avg: {
    type: Number,
    required: [true, 'avg is required'],
    min: [1, 'avg must be at least 1'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [1, 'Price must be a positive value'],
  },
  net: { type: String, required: true },
  day: { type: String, required: true },
});

module.exports = { HoldingsSchema };
