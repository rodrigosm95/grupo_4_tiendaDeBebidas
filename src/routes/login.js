const {Router} = require('express');
const {index, login} = require('../controllers/login');
const router = Router();
const {body} = require('express-validator');

const validation = [
    body('email').notEmpty(),
    body('pass').notEmpty()
]

router.get('/login', index);
router.post('/login',validation ,login);

module.exports = router;