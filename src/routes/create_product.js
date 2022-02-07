const { Router } = require('express');
const { index, storage } = require('../controllers/create_product');
const router = Router();

router.get('/products/create', index);
router.post('/products/guardar', storage)

module.exports = router;