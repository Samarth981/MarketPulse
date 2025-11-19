const { Schema } = require('mongoose');
const PositionsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
  product: String,
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
  net: String,
  day: String,
  isLoss: Boolean,
});

module.exports = { PositionsSchema };
