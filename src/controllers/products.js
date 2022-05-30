const {products, images , categories} = require ('../database/models')

const controller = {
    index: async (req,res) => {
        try {
            const productos = await products.findAll({include:{all:true}});
            // res.send(productos)
            res.render('./products/product_list',{
                productos: productos
            })
        } catch (error) {
            res.status(500).send({message: error.message})
        }
},
    detail_product: async (req, res) => {
        try {
            let product = await products.findByPk(req.params.id, {include:{all: true}})
            res.render('./products/detail', {
                product: product});
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    categories: async (req,res) => {
        let allProducts = await products.findAll({include:{all: true}, where:{
            'category': req.params.id
        }});
        // res.send(allProducts)
        res.render('./products/categories_products',{
            productos : allProducts
        })
    },
    update: async (req,res) => {
        const producto = await products.findByPk(req.params.id)
        res.render('./products/update', {
            product: producto})
    },
    updated: async (req,res) => {
        try {
            const producto = await products.findByPk(req.params.id);
            const data =  {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                stock: req.body.stock,
                category: producto.category,
                image: producto.image   
            }
            res.send('Nose por qué no me llegan las cosas del body, ya intente de todo :´(')
            const producto_actualizado = await products.update(data)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    
    delete: async (req,res) => {
        try {
            let prod_delete = await products.findByPk(req.params.id);
            await prod_delete.destroy();
            res.redirect("/products")
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
}

module.exports = controller;