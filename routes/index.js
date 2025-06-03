const express = require('express');
const router = express.Router();
const usersRoutes = require('./users');
const workoutsRoutes = require('./workouts');
const swaggerRoutes = require('./swagger');
const path = require('path'); // Add this at the top

router.use('/users', usersRoutes);
router.use('/workouts', workoutsRoutes);
router.use('/api-docs', swaggerRoutes);

// Serve index.html at the root route
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../views') });
});

module.exports = router;
