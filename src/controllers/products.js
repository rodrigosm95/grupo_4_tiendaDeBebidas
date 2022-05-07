const lista_de_productos = require("../data/products.json")

const controller = {
    index: (req,res) => res.render('./products/products_list',{
        productos: lista_de_productos
    })
}

module.exports = controller;