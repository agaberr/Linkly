const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userControllers');
const authUser = require('../middleware/authUser');

router.route('/api/users')
    .get(usersController.getAllUsers)
    .post(usersController.createUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

router.route('/api/users/:id')
    .get(usersController.getUser)

// router.route('/api/users/conversationusers')
//     .get(authUser, usersController.getConversationUsers)


module.exports = router;