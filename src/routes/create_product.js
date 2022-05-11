const { Router } = require('express');
const { index, store, created } = require('../controllers/create_product');
const router = Router();
const path = require('path');
const multer = require('multer');
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/authMiddleware');

const validaciones = [
    body('name').notEmpty().withMessage('tienes que escribir un nombre'),
    body('description').notEmpty().withMessage('tienes que escribir una direccion'), 
    body('price').notEmpty().withMessage('tienes que escribir una provincia'), 
    body('stock').notEmpty().withMessage('tienes que escribir una localidad'), 
    body('categorie').notEmpty().withMessage('tienes que escribir un email'), 
    body('ProductImage').custom((value, {req}) => {
        let file = req.file;
        let acceptedExt = ['.png', '.jpg', '.gif'];

        if (!file){
            throw new Error ('Debes subir una imagen')
        }else{
            let fileExt = path.extname(file.originalname);
            if (!acceptedExt.includes(fileExt)){
                throw new Error ('Debes subir un archivo .png, .jpg o .gif')
            }

        }
        return true
    })  
]

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
router.get('/products/created',authMiddleware, created);

module.exports = router;