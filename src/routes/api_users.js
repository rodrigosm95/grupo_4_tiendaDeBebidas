const { Router } = require('express');
const router = Router();
const users = require('../controllers/api_users');

router.get('/api/users', users.index)

module.exports = router