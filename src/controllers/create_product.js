// const products = require("../models/product");
const {categories, products,images} = require("../database/models");
const {validationResult} = require('express-validator');
const Category = require("../database/models/Category");

//Agregar despues en la pagina Productos (que todavia no tenemos) =====> const {list,all,filter,one} = require('../models/product');
const controller = {
    index: async (req,res) => {
        try {
            const categorias = await categories.findAll()

        res.render('./products/create_product',{categories: categorias
        })
        } catch (error) {
            res.send(error)
        }
    },

    store: async function (req, res) {
        try {
            let image = null
            if (req.file) {
                image = await images.create({
                    url: req.file.filename
                })
            } else {
                image = await images.create({
                    url: "default.png"
                })
            }

            const data = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                stock: req.body.stock,
                category: req.body.category,
                image: req.file ? image.id : "default.png"         
            }
            let newProd = await products.create(data)
            res.redirect('/products/created')
            
        } catch (error) {
            res.status(500).send({message: error.message})
        }

    },

    created: (req,res) => {
        res.render('/products/created')
    }
}

module.exports = controller;