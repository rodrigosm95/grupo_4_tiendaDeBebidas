const { generate, create } = require("../models/product");

//Agregar despues en la pagina Productos (que todavia no tenemos) =====> const {list,all,filter,one} = require('../models/product');
const controller = {
    index: (req, res) => res.render('./products/create_product'),
    store: (req, res) => {

        if (req.file) {
            let image = req.body;
            image.ProductImage = req.file.filename;

            const nuevo = generate(req.body);
            create(nuevo);
            return res.redirect('/products/product_detail');

        } else {
            
            const nuevo = generate(req.body);
            create(nuevo);
            return res.redirect('/products/product_detail');
        }
    }
}

module.exports = controller;