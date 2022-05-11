const products = require("../models/product");

//Agregar despues en la pagina Productos (que todavia no tenemos) =====> const {list,all,filter,one} = require('../models/product');
const controller = {
    index: (req, res) => res.render('./products/create_product'),
    store: (req, res) => {
        products.create({
            ...req.body,
            ProductImage: req.file.filename
        });
        return res.render('./products/created')
    },
    created: (req,res) => {
        res.render('./products/created')
    }
}

module.exports = controller;