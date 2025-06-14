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

// Create a new workout
const createWorkout = async (req, res) => {
  // Validate required fields
  const requiredFields = [
    "userId",
    "date",
    "title",
    "exercises",
    "duration",
    "intensity"
  ];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }
  try {
    const workout = new Workout(req.body);
    const result = await workout.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while creating the workout.' });
  }
};

// Update a workout by ID
const updateWorkout = async (req, res) => {
  try {
    const result = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!result) return res.status(404).json({ error: 'Workout not found.' });
    res.status(204).send();
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid workout ID format.' });
    }
    res.status(500).json({ error: 'An error occurred while updating the workout.' });
  }
};

// Delete a workout by ID
const deleteWorkout = async (req, res) => {
  try {
    const result = await Workout.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'Workout not found.' });
    res.status(200).json({ message: 'Workout deleted successfully.' });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid workout ID format.' });
    }
    res.status(500).json({ error: 'An error occurred while deleting the workout.' });
  }
};

module.exports = { getAll, getSingle, createWorkout, updateWorkout, deleteWorkout };