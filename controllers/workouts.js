const Workout = require('../models/Workout');

// Get all workouts
const getAll = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching workouts.' });
  }
};

// Get a single workout by ID
const getSingle = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) return res.status(404).json({ error: 'Workout not found.' });
    res.status(200).json(workout);
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid workout ID format.' });
    }
    res.status(500).json({ error: 'An error occurred while fetching the workout.' });
  }
};

module.exports = { getAll, getSingle };