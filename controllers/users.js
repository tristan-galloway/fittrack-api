const mongodb = require('../data/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('fittrack').collection('users').find();
    const lists = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('fittrack').collection('users').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
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

  const user = {
    username: req.body.username,
    email: req.body.email,
    avatarUrl: req.body.avatarUrl,
    fitnessGoals: req.body.fitnessGoals,
    friends: req.body.friends || [],
    routines: req.body.routines || [],
    joinedAt: req.body.joinedAt,
    bio: req.body.bio
  };

  try {
    const result = await mongodb.getDb().db('fittrack').collection('users').insertOne(user);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};

const updateUser = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const updatedUser = {
    username: req.body.username,
    email: req.body.email,
    avatarUrl: req.body.avatarUrl,
    fitnessGoals: req.body.fitnessGoals,
    friends: req.body.friends || [],
    routines: req.body.routines || [],
    joinedAt: req.body.joinedAt,
    bio: req.body.bio
  };

  try {
    const result = await mongodb.getDb().db('fittrack').collection('users').updateOne(
      { _id: userId },
      { $set: updatedUser }
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
}

const deleteUser = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  try {
    const result = await mongodb.getDb().db('fittrack').collection('users').deleteOne({ _id: userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
};

module.exports = { getAll, getSingle, createUser, updateUser, deleteUser };