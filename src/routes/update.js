const { Router } = require('express');
const { update, modify, remove } = require('../controllers/update');
const router = Router();

router.get('/products/editar/:id', update);

router.put('/products/actualizar', modify);

router.delete('/products/delete/:id', remove);

module.exports = router;