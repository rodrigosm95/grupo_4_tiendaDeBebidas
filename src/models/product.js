const { readFileSync, writeFileSync, unlinkSync, existsSync } = require('fs');
const { resolve } = require('path');
const model = {
    file: resolve(__dirname, "../data", "products.json"),
    read: () => readFileSync(model.file),
    list: () => JSON.parse(model.read()),
    convert: data => JSON.stringify(data, null, 2),
    write: data => writeFileSync(model.file, model.convert(data)),
    all: () => model.list().filter(producto => producto.stock > 0),
    filter: (propiedad, valor) => model.all().filter(producto => typeof valor !== "string" ? producto[propiedad] == valor : producto[propiedad].includes(valor)),
    match: (propiedad, valor) => model.all().find(producto => producto[propiedad] == valor),
    generate: data => Object({
        id: model.list().length > 0 ? model.list().sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0).pop().id + 1 : 1,
        name: data.name,
        description: data.description,
        price: Number(data.price),
        stock: Number(data.stock)
    }),
    create: data => {
        let lista = model.list().sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
        lista.push(data);
        model.write(lista);
    }
}

module.exports = model;