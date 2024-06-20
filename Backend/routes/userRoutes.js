const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userControllers');
// const verifyJWT = require('../middleware/verifyJWT')

// router.use(verifyJWT);

router.route('/api/users')
    .get(usersController.getAllUsers)
    .post(usersController.createUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

router.route('/api/users/:id')
    .get(usersController.getUser)


module.exports = router;