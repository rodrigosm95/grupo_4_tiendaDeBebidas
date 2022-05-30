const {products, categories} = require ('../database/models')

const controllers = {
    index: async (req, res) => {
        try {
            const productos = await products.findAll();
            const categorias = await categories.findAll({include:{all: true}
            })
            res.send(productos)
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = controllers