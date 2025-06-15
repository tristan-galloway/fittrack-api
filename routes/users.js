const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const ensureAuthenticated = require('../middleware/auth');

router.get(
    '/',
    /* #swagger.description = 'Get all users'
     #swagger.responses[200] = {
       description: 'List of users',
       schema: [
            {
                "_id": "6657e82ded56c2256c29b108",
                "username": "fit_jane",
                "email": "jane@example.com",
                "avatarUrl": "https://example.com/avatar/jane.jpg",
                "fitnessGoals": "Build strength and endurance",
                "friends": [],
                "routines": [],
                "joinedAt": "2024-10-01T10:00:00Z",
                "bio": "Life                    long runner and HIIT fan"
            }
       ]
    }
    #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    usersController.getAll
);


router.get(
    '/:id',
    /* #swagger.description = 'Get a single User by ID'
        #swagger.parameters['id'] = { 
            description: 'User ID', 
            type: 'string', 
            example: '6657e82ded56c2256c29b108' 
        }
        #swagger.responses[200] = {
            description: 'User found',
            schema: {
                "_id": "6657e82ded56c2256c29b108",
                "username": "fit_jane",
                "email": "jane@example.com",
                "avatarUrl": "https://example.com/avatar/jane.jpg",
                "fitnessGoals": "Build strength and endurance",
                "friends": [],
                "routines": [],
                "joinedAt": "2024-10-01T10:00:00Z",
                "bio": "Lifelong runner and HIIT fan"
            }
        }
        #swagger.responses[400] = { description: 'Invalid user ID format.' }
        #swagger.responses[404] = { description: 'User not found' }
        #swagger.responses[500] = { description: 'Internal Server Error' }
    */
usersController.getSingle
);


router.post(
    '/',
    ensureAuthenticated,
    /* #swagger.description = 'Create a new user'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'User data',
            required: true,
            schema: {
                "username": "fit_jane",
                "email": "jane@example.com",
                "avatarUrl": "https://example.com/avatar/jane.jpg",
                "fitnessGoals": "Build strength and endurance",
                "friends": [],
                "routines": [],
                "joinedAt": "2024-10-01T10:00:00Z",
                "bio": "Lifelong runner and HIIT fan"
            }
        }
        #swagger.responses[201] = { 
            description: 'User created',
            schema: {
                "_id": "6657e82ded56c2256c29b108",
                "username": "fit_jane",
                "email": "jane@example.com",
                "avatarUrl": "https://example.com/avatar/jane.jpg",
                "fitnessGoals": "Build strength and endurance",
                "friends": [],
                "routines": [],
                "joinedAt": "2024-10-01T10:00:00Z",
                "bio": "Lifelong runner and HIIT fan"
            }
        }
        #swagger.responses[400] = { description: 'Missing required field.' }
        #swagger.responses[401] = { description: 'Unauthorized. Please log in.' }
        #swagger.responses[500] = { description: 'Internal Server Error' }
    */ 
    
usersController.createUser);


router.put(
    '/:id',
    ensureAuthenticated,
    /* #swagger.description = 'Update a User by ID'
        #swagger.parameters['id'] = { 
            description: 'User ID', 
            type: 'string', 
            example: '6657e82ded56c2256c29b108' 
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Updated User data',
            required: true,
            schema: {
                "username": "fit_jane",
                "email": "jane@example.com",
                "avatarUrl": "https://example.com/avatar/jane.jpg",
                "fitnessGoals": "Build strength and endurance",
                "friends": [],
                "routines": [],
                "joinedAt": "2024-10-01T10:00:00Z",
                "bio": "Lifelong runner and HIIT fan"
            }
        }
        #swagger.responses[204] = { description: 'User updated (no content)' }
        #swagger.responses[400] = { description: 'Invalid user ID format.' }
        #swagger.responses[404] = { description: 'User not found' }
        #swagger.responses[401] = { description: 'Unauthorized. Please log in.' }
        #swagger.responses[500] = { description: 'Internal Server Error' }
  */
usersController.updateUser);


router.delete(
    '/:id',
    ensureAuthenticated, 
    /* #swagger.description = 'Delete a User by ID'
        #swagger.parameters['id'] = { 
            description: 'User ID', 
            type: 'string', 
            example: '6657e82ded56c2256c29b108' 
        }
        #swagger.responses[200] = { description: 'User deleted successfully.' }
        #swagger.responses[400] = { description: 'Invalid user ID format.' }
        #swagger.responses[404] = { description: 'User not found' }
        #swagger.responses[401] = { description: 'Unauthorized. Please log in.' }
        #swagger.responses[500] = { description: 'Internal Server Error' }
    */
usersController.deleteUser);
    

module.exports = router;