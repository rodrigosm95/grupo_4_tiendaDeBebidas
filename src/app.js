const express = require('express');
const {resolve} = require('path');
const app = express();

const listen = () => console.log('listening on port 3000');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname,'./views'));

app.listen(app.get('port'),listen);

app.use(express.static(resolve(__dirname, '../public')));
app.use(express.static(resolve(__dirname, '../uploads')));

app.use(require('./routes/main'));
app.use(require('./routes/register'));

app.use(require('./routes/login'));
app.use(require('./routes/cart'));
app.use(require('./routes/product_detail.js'));
/*
const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/product_detail', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/product_detail.html'))
});

app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
});

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname,'/views/login.html'))

app.get('/shopping_cart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/shopping_cart.html'))
});

app.listen(3000, () => {
    console.log('Servidor en linea, en el puerto 3000');
});

*/