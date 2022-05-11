const { Router } = require('express');
const products_controllers = require('../controllers/products');
const router = Router();
const authMiddleware= require('../middlewares/authMiddleware')

router.get('/products',authMiddleware, products_controllers.index);
router.get('/products/:id', products_controllers.detail_product)
router.get('/products/update/:id',authMiddleware, products_controllers.update);
router.put('/products/update/:id',authMiddleware, products_controllers.update);
router.delete('/products/delete/:id',authMiddleware, products_controllers.delete);
router.get('/categories/:id', products_controllers.categories)


module.exports = router;