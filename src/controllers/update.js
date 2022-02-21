const model = require("../models/product");
const { match, list, write, remove } = require("../models/product");

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
                return producto;
            }
            return producto;
        })
        write(productos)
        return res.send(req.body)
    },
    remove: (req, res) => {
        res.send("Delete funciona")
    }
}
module.exports = controller;