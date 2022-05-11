const products = require("../models/product");
const {validationResult} = require('express-validator')

//Agregar despues en la pagina Productos (que todavia no tenemos) =====> const {list,all,filter,one} = require('../models/product');
const controller = {
    index: (req, res) => res.render('./products/create_product'),
    store: (req, res) => {
        const resultsValidations = validationResult(req);
        if (resultsValidations.errors.length > 0) {
            console.log(resultsValidations);
            return res.render('./products/create_product',{
                errors: resultsValidations.mapped(),
                oldData: req.body
            })
        } else {
            products.create({
            ...req.body,
            ProductImage: req.file.filename
        });
        return res.render('./products/created')

        }
    },
    created: (req,res) => {
        res.render('./products/created')
    }
}

module.exports = controller;