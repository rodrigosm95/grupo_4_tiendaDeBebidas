const express = require('express');
const { resolve } = require('path');
const method = require('method-override');
const app = express();

const listen = () => console.log('listening on port 3000');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname, './views'));

app.listen(app.get('port'), listen);

app.use(express.static(resolve(__dirname, '../public')));
app.use(express.static(resolve(__dirname, '../uploads')));
app.use(express.urlencoded({ extended: true })); //procesar la informacion de un formulario
app.use(method("m"));

//Rutas:

app.use(require('./routes/main'));
app.use(require('./routes/register'));
app.use(require('./routes/login'));
app.use(require('./routes/cart'));
app.use(require('./routes/product_detail'));
app.use(require('./routes/create_product'));
app.use(require('./routes/update'));
app.use(require('./routes/profile'));
