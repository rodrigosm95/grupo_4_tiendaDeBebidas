const {Router} = require('express');
const {index, login} = require('../controllers/login');
const router = Router();

router.get('/login', index);
router.post('/login', login)

module.exports = router;