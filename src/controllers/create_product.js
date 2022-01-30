const { generate, create } = require("../models/product");

//Agregar despues en la pagina Productos (que todavia no tenemos) =====> const {list,all,filter,one} = require('../models/product');
const controller = {
    index: (req, res) => res.render('./products/create_product'),
    storage: (req, res) => {
        const nuevo = generate(req.body);
        create(nuevo);
        return res.send(nuevo);
    }
}

module.exports = controller;