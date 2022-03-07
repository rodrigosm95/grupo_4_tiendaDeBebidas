const { readFileSync, writeFileSync, unlinkSync, existsSync } = require('fs');
const { resolve } = require('path');
const model = {
    file: resolve(__dirname, "../data", "users.json"),
    read: () => readFileSync(model.file),
    list: () => JSON.parse(model.read()),
    convert: data => JSON.stringify(data, null, 2),
    write: data => writeFileSync(model.file, model.convert(data)),
    find : (id) => {
        let rows = model.list();
        return rows.find(row => row.id == id)
    },
    filter: (propiedad, valor) => model.all().filter(user => typeof valor !== "string" ? user[propiedad] == valor : user[propiedad].includes(valor)),
    match: (propiedad, valor) => model.all().find(user => user[propiedad] == valor),
    generate: data => Object({
        id: model.list().length > 0 ? model.list().sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0).pop().id + 1 : 1,
        name: data.name,
        address: data.address,
        province: data.province,
        location: data.location,
        email: data.email,
        pass: data.pass,
        category: data.category > 0 ? data.category : "user",
        image: data.image ? data.image : "default.png",
        legalAge: data.legalAge && data.legalAge.length > 0 ? data.legalAge : [],
        politicas: data.politicas && data.politicas.length > 0 ? data.politicas : [],
        notificaciones: data.notificaciones && data.notificaciones.length > 0 ? data.notificaciones : [],
    }),
    create: data => {
        let lista = model.list().sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
        lista.push(data);
        model.write(lista);
    },
    findByField : (field, text) => {
        let allUser = model.list();
        let userFound = allUser.find(row => row[field] === text)
        return userFound
    }        
}

module.exports = model;