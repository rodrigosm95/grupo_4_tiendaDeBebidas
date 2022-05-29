const { Router } = require('express');
const api = require ('../controllers/api_products')
const router = Router();
const authMiddleware= require('../middlewares/authMiddleware')

router.get('/api/products', api.index);

module.exports = router