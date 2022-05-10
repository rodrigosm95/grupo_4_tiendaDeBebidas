const { readFileSync, writeFileSync, unlinkSync, existsSync } = require('fs');
const { resolve } = require('path');
const bc = require ('bcryptjs')
const model = {
    file: resolve(__dirname, "../data", "users.json"),
    getData: () => JSON.parse(readFileSync(model.file, 'utf-8' )),
    findAll: () => {
        return model.getData()
    },
    genereteId: function () {
        let allUsers = model.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }else{
            return 1
        }
    },
    findByPk: function (id) {
        let allUsers = model.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },
    findByField: function (field, text) {
        let allUsers = model.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },
    create: function (userData) {
        let allUsers = model.findAll();
        let newUser = {
            id: this.genereteId(),
            ...userData
        }
        allUsers.push(newUser)
        writeFileSync(this.file, JSON.stringify(allUsers, null, ' '));
        return newUser
    },
    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        writeFileSync(this.file, JSON.stringify(finalUsers, null, ' '));
        return true
    }
}
module.exports = model;