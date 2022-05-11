const { Router } = require('express');
const products_controllers = require('../controllers/products');
const router = Router();
const authMiddleware= require('../middlewares/authMiddleware')

router.get('/products',authMiddleware, products_controllers.index);


module.exports = router;