const { readFileSync, writeFileSync, unlinkSync, existsSync } = require('fs');
const { resolve } = require('path');
const model = {
    file: resolve(__dirname, "../data", "products.json"),
    getData: () => JSON.parse(readFileSync(model.file, 'utf-8' )),
    findAll: () => {
        return model.getData()
    },
    genereteId: function () {
        let allProducts = model.findAll();
        let lastProduct = allProducts.pop();
        if (lastProduct) {
            return lastProduct.id + 1;
        }else{
            return 1
        }
    },
    findByPk: function (id) {
        let allProducts = model.findAll();
        let productFound = allProducts.find(oneProduct => oneProduct.id === id);
        return productFound;
    },
    findByField: function (field, text) {
        let allProducts = model.findAll();
        let productFound = allProducts.find(oneProduct => oneProduct[field] === text);
        return productFound;
    },
    create: function (productData) {
        let allProducts = model.findAll();
        let newProduct = {
            id: this.genereteId(),
            ...productData
        }
        allProducts.push(newProduct)
        writeFileSync(this.file, JSON.stringify(allProducts, null, ' '));
        return newProduct
    },
    delete: function (id) {
        let allProducts = this.findAll();
        let finalProducts = allProducts.filter(oneProduct => oneProduct.id !== id);
        writeFileSync(this.file, JSON.stringify(finalProducts, null, ' '));
        return true
    }
}
console.log();
module.exports = model;