const { Router } = require('express');
const { index } = require('../controllers/product_detail');
const router = Router();

router.get('/product_detail', index);

module.exports = router;