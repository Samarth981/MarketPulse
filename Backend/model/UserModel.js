const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Your email address is required'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Your username is required'],
  },
  password: {
    type: String,
    required: [true, 'Your password is required'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Mongoose pre-save middleware to hash the password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // If password is not modified, just proceed to the next middleware

  try {
    this.password = await bcrypt.hash(this.password, 12); // Hash the password
    next(); // Proceed to the next middleware or save operation
  } catch (err) {
    next(err); // Pass any errors to the next middleware or error handler
  }
});

module.exports = mongoose.model('User', userSchema);
