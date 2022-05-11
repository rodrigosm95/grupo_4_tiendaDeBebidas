const lista_de_productos = require("../data/products.json")
const products = require('../models/product')
const users = require('../models/user')
const { update } = require("./update")

const controller = {
    index: (req,res) => res.render('./products/product_list',{
        productos: lista_de_productos
    }),
    detail_product: (req, res) => {
        let id = Number(req.params.id)
        let productById = products.findByPk(id)
        res.render('./products/detail', {
            product: productById});
    },
    update: (req,res) => {
        let id = Number(req.params.id)
        let productById = products.findByPk(id)
        res.render('./products/update', {
            product: productById})
    },
    categories: (req,res) => {
        let allProducts = products.findAll();
        let catProducts = allProducts.filter(oneproduct => oneproduct["categorie"] === req.params.id)
        res.render('./products/categories_products',{
            productos : catProducts
        })
    },
    
    delete: (req,res) => {
        let id = Number(req.params.id)
        products.delete(id)
        res.send("el borrado funciona")
    }
}

module.exports = controller;