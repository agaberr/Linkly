const express = require('express');
const router = express.Router();
const searchControllers = require('../controllers/searchControllers');
const authUser = require('../middleware/authUser');

router.route('/api/search')
    .post( authUser, searchControllers.searchByUser)


module.exports = router;