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
});

app.get('/shopping_cart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/shopping_cart.html'))
});

app.listen(3000, () => {
    console.log('Servidor en linea, en el puerto 3000');
});
