const {products} = require ('../database/models')

const controllers = {
    index: async (req, res) => {
        try {
            const productos = await products.findAll();
            res.status(200).json(productos)
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = controllers