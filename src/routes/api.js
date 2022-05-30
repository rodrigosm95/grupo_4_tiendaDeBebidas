const { Router } = require('express');
const router = Router();
const api = require('../controllers/api');

router.get('/api', api.index)

module.exports = router