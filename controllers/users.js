const User = require('../models/User');

const getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
};

const getSingle = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found.' });
    res.status(200).json(user);
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid user ID format.' });
    }
    res.status(500).json({ error: 'An error occurred while fetching the user.' });
  }
};

const createUser = async (req, res) => {
  const requiredFields = [
    "username",
    "email",
    "avatarUrl",
    "fitnessGoals",
    "bio",
    "joinedAt"
  ];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!result) return res.status(404).json({ error: 'User not found.' });
    res.status(204).send();
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid user ID format.' });
    }
    res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'User not found.' });
    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid user ID format.' });
    }
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
};

module.exports = { getAll, getSingle, createUser, updateUser, deleteUser };