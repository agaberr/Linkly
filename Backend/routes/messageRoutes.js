const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const authUser = require('../middleware/authUser')

router.route('/api/message/:id')
    .get(authUser, messageController.getMessages)

router.route('/api/message/send/:id')
    .post(authUser, messageController.sendMessage)


module.exports = router;