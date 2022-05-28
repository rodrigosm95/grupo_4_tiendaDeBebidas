const {products, images , categories} = require ('../database/models')

const controller = {
    index: async (req,res) => {
        try {
            const productos = await products.findAll({include:{all:true}, order:[['price', 'desc']]});
            const categorias = await categories.findAll({include:{all:true}});
            res.send({productos})
            // res.render('./products/product_list',{
            //     productos: products
            // })
        } catch (error) {
            res.status(500).send({message: error.message})
        }
},
    detail_product: async (req, res) => {
        try {
            let product = await products.findByPk(req.params.id)
            res.render('./products/detail', {
                product: product});
        } catch (error) {
            res.status(500).send({message: error.message})
        }
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