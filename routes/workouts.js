const express = require('express');
const router = express.Router();
const workoutsController = require('../controllers/workouts');

// GET all workouts
router.get(
    '/',
    /* #swagger.description = 'Get all workouts'
       #swagger.responses[200] = {
         description: 'List of workouts',
         schema: [
            {
                "_id": "60c72b2f9b1e8a001c8e4f3b",
                "userId": "6830e84aed56c2256c29b10a",
                "date": "2025-05-21T07:30:00Z",
                "title": "Morning Full Body Circuit",
                "exercises": [
                    { "name": "Push-ups", "sets": 3, "reps": 12, "weight": 0 }
                ],
                "duration": 40,
                "intensity": "medium",
                "notes": "Felt energized today, good start to the week!"
            }
         ]
       }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    workoutsController.getAll
);

// GET a single workout by ID
router.get(
    '/:id',
    /* #swagger.description = 'Get a single workout by ID'
        #swagger.parameters['id'] = { 
            description: 'Workout ID', 
            type: 'string', 
            example: '60c72b2f9b1e8a001c8e4f3b' 
        }
        #swagger.responses[200] = {
            description: 'Workout found',
            schema: {
                "_id": "60c72b2f9b1e8a001c8e4f3b",
                "userId": "6830e84aed56c2256c29b10a",
                "date": "2025-05-21T07:30:00Z",
                "title": "Morning Full Body Circuit",
                "exercises": [
                    { "name": "Push-ups", "sets": 3, "reps": 12, "weight": 0 }
                ],
                "duration": 40,
                "intensity": "medium",
                "notes": "Felt energized today, good start to the week!"
            }
        }
        #swagger.responses[400] = { description: 'Invalid workout ID format.' }
        #swagger.responses[404] = { description: 'Workout not found' }
        #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    workoutsController.getSingle
);

module.exports = router;