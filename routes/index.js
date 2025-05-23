const express = require('express');
const router = express.Router();
const usersRoutes = require('./users');
const workoutsRoutes = require('./workouts');
// const swaggerRoutes = require('./swagger');

router.use('/users', usersRoutes);
router.use('/workouts', workoutsRoutes);

// router.use('/api-docs', swaggerRoutes);

module.exports = router;
