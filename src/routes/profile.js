const { Router } = require('express');
const { index, show } = require('../controllers/profile');
const router = Router();

router.get('/users', index);
router.get('/users/:id', show);

module.exports = router;