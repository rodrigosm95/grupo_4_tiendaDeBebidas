const categories = require("../data/categories.json")
const lista_de_productos = require("../data/products.json")

const controller = {

    index: (req,res) => res.render('./website/index',{
        categories: categories,
        productos: lista_de_productos

    })
}

module.exports = controller;