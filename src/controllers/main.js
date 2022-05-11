const categories = require("../data/categories.json")

const controller = {

    index: (req,res) => res.render('./website/index',{
        categories: categories
    })
}

module.exports = controller;