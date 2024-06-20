const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.route('/api/auth/signin')
    .post(authController.signin)

router.route('/api/auth/refresh')
    .post(authController.refresh)


router.route('/api/auth/signout')
    .post(authController.signout)

module.exports = router;