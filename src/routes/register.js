const {Router} = require('express');
const { index, store } = require('../controllers/register');
const router = Router();
const path = require('path');
const multer = require('multer');

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

router.get('/register', index);
router.post('/register/guardar', upload.single('FotoPerfil'), store);

module.exports = router;