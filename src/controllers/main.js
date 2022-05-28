// const categories = require("../data/categories.json");
const lista_de_productos = require("../data/products.json");
const {categories, products} = require("../database/models");

const controller = {
    index: async (req,res) => {
        try {
            const categorias = await categories.findAll()
            const productos = await products.findAll()

            res.render('./website/index',{
                categories: categorias,
                products: productos
            })
        } catch (error) {
            res.status(500).send({message: error})
        }
    }



    // index: (req,res) => res.render('./website/index',{
    //     categories: categories,
    //     productos: lista_de_productos

    // })
}

module.exports = controller;