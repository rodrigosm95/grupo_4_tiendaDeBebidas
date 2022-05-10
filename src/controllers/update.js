const model = require("../models/product");
const { match, list, write, remove} = require("../models/product");

const controller = {
    update: (req, res) => {
        const { id } = req.params;
        let producto = id ? match('id', id) : null;
        return producto ? res.render('products/update', {
            producto: producto
        }) : res.render('error', { error: "No se encontro ningun producto" })
    },
    modify: (req, res) => {
        let productos = list().sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
        productos = productos.map((producto) => {
            if (producto.id == req.body.id) {
                producto.name = req.body.name;
                producto.price = req.body.price;
                producto.description = req.body.description;
                producto.stock = req.body.stock;
                producto.categorie = req.body.categorie
                return producto;
            }
            return producto;
        })
        write(productos)
        return res.redirect("../")
    },
    remove: (req, res) => {
        let productos = model.findAll
        model.delete(productos)
        res.redirect("/")
    }
}
module.exports = controller;