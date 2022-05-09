const { Router } = require('express');
const products_controllers = require('../controllers/products');
const router = Router();

router.get('/products', products_controllers.index);


module.exports = router;