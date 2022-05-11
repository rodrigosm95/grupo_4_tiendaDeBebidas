const {Router} = require('express');
const { index, store } = require('../controllers/register');
const router = Router();
const path = require('path');
const multer = require('multer');
const {body} = require('express-validator')
const guestMiddleware= require('../middlewares/guestMiddleware')
const authMiddleware= require('../middlewares/authMiddleware')

const validaciones = [
    body('name').notEmpty().withMessage('tienes que escribir un nombre'),
    body('address').notEmpty().withMessage('tienes que escribir una direccion'), 
    body('province').notEmpty().withMessage('tienes que escribir una provincia'), 
    body('location').notEmpty().withMessage('tienes que escribir una localidad'), 
    body('email')
        .notEmpty().withMessage('tienes que escribir un email').bail()
        .isEmail().withMessage('debes escribir un correo electronico valido'), 
    body('pass').notEmpty().withMessage('tienes que escribir una contraseña'),
    body('avatar').custom((value, {req}) => {
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
        cb(null, path.join(__dirname, '../../public/images/users'))
    },
    filename: (req, file, cb) => {
        const newFilename = 'user-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({ storage });

router.get('/register',authMiddleware,guestMiddleware, index);
router.post('/register', upload.single('avatar'), validaciones, store);



module.exports = router;