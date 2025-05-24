const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get(
    '/',
    /* #swagger.description = 'Get all contacts'
     #swagger.responses[200] = {
       description: 'List of contacts',
       schema: [
            {
                "username": "fit_jane",
                "email": "jane@example.com",
                "avatarUrl": "https://example.com/avatar/jane.jpg",
                "fitnessGoals": "Build strength and endurance",
                "friends": [],
                "routines": [],
                "joinedAt": "2024-10-01T10:00:00Z",
                "bio": "Lifelong runner and HIIT fan"
            }
       ]
    }
    */
    usersController.getAll
);


router.get('/:id',
    /* #swagger.description = 'Get a single User by ID'
        #swagger.parameters['id'] = { 
            description: 'User ID', 
            type: 'string', 
            example: '6830e82ded56c2256c29b108' 
        }
        #swagger.responses[200] = {
            description: 'User found',
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
        #swagger.responses[404] = { description: 'User not found' }
    */
usersController.getSingle
);


router.post(
    '/',
    /* #swagger.description = 'Create a new contact'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Contact data',
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
            description: 'Contact created',
            schema: {
                "acknowledged": true,
                "insertedId": "6830e82ded56c2256c29b108"
            }
        }
        #swagger.responses[400] = { description: 'Missing a required field.' }
    */ 
    
usersController.createUser);


// Not tested yet.
router.put(
    '/:id',
    /* #swagger.description = 'Update a User by ID'
        #swagger.parameters['id'] = { 
            description: 'User ID', 
            type: 'string', 
            example: '6830e82ded56c2256c29b108' 
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
        #swagger.responses[204] = { description: 'User updated' }
        #swagger.responses[404] = { description: 'User not found' }
  */
usersController.updateUser);

router.delete(
    '/:id',
    /* #swagger.description = 'Delete a User by ID'
        #swagger.parameters['id'] = { 
            description: 'User ID', 
            type: 'string', 
            example: '6830e82ded56c2256c29b108' 
        }
        #swagger.responses[204] = { description: 'User deleted' }
        #swagger.responses[404] = { description: 'User not found' }
    */
usersController.deleteUser);
    

module.exports = router;