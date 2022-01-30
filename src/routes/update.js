const { Router } = require('express');
const { update, modify } = require('../controllers/update');
const router = Router();

router.get('/products/editar/:id', update);
router.put('/products/actualizar', modify)

module.exports = router;