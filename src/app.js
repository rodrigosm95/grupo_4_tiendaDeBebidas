const express = require('express');
const session = require('express-session')
const { resolve } = require('path');
const method = require('method-override');
const userLoggedMiddlewar = require('./middlewares/userLoggedMiddleware')
const cookies = require('cookie-parser')
const app = express();
const cors = require('cors') 

const listen = () => console.log('listening on port 3001');

app.set('port', 3001);
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname, './views'));

app.listen(app.get('port'), listen);

app.use(express.json())
app.use(cors())
app.use(session({
    secret: 'shh es un secreto',
    resave: true,
    saveUninitialized: true
}))
app.use(cookies())
app.use(userLoggedMiddlewar)
app.use(express.static(resolve(__dirname, '../public')));
app.use(express.static(resolve(__dirname, '../uploads')));
app.use(express.urlencoded({ extended: true })); //procesar la informacion de un formulario
app.use(method("m"));


//Rutas:

app.use(require('./routes/main'));
app.use(require('./routes/register'));
app.use(require('./routes/login'));
app.use(require('./routes/create_product'));
app.use(require('./routes/products'));
app.use(require('./routes/api_products'));
app.use(require('./routes/api_users'));


