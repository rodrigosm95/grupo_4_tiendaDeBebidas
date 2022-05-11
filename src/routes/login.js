const {Router} = require('express');
const {index, login, profile, logout} = require('../controllers/login');
const router = Router();
const {body} = require('express-validator');
const guestMiddleware= require('../middlewares/guestMiddleware')
const authMiddleware= require('../middlewares/authMiddleware')

const validation = [
    body('email').notEmpty(),
    body('pass').notEmpty()
]

router.get('/login', guestMiddleware , index);
router.post('/login',validation,login);
router.get('/profile',authMiddleware, profile);
router.get('/logout', logout)

module.exports = router;