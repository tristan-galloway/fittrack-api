const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true },
  avatarUrl: String,
  fitnessGoals: String,
  friends: [String],
  routines: [String],
  joinedAt: { type: Date, required: true },
  bio: String
});

module.exports = mongoose.model('User', userSchema);