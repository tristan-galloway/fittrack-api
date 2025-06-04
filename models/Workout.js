const mongoose = require('mongoose');

// Define the schema for exercises within a workout
const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true }
}, { _id: false });

// Define the main Workout schema
const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User
  date: { type: Date, required: true },
  title: { type: String, required: true },
  exercises: { type: [exerciseSchema], required: true },
  duration: { type: Number, required: true }, // in minutes
  intensity: { type: String, enum: ['low', 'medium', 'high'], required: true },
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Workout', workoutSchema);