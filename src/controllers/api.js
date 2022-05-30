const {users, products, categories} = require ('../database/models')

const controllers = {
    index: async (req, res) => {
        try {
            const usuarios = await users.findAll();
            const productos = await products.findAll();
            const categorias = await categories.findAll({include:{all: true}});
            res.render('./api/home', {
                usuario: usuarios,
                producto: productos,
                categoria: categorias
            })
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = controllers