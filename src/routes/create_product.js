const { Router } = require('express');
const { index, store } = require('../controllers/create_product');
const router = Router();
const path = require('path');
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddleware')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/products'))
    },
    filename: (req, file, cb) => {
        const newFilename = 'product-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({ storage });

router.get('/products/create',authMiddleware, index);
router.post('/products/guardar', upload.single('ProductImage'),store)

module.exports = router;