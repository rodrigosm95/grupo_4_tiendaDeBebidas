const { Router } = require('express');
const { index } = require('../controllers/products');
const router = Router();

router.get('/products', index);

module.exports = router;