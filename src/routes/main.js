const {Router} = require('express');
const {index} = require('../controllers/main');
const router = Router();
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/',authMiddleware, index);

module.exports = router;