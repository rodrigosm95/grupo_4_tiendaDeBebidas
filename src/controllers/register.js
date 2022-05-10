const user = require("../models/user");
const bc = require("bcryptjs");
const bcryptjs = require("bcryptjs");

const controller = {
    index: (req, res) => res.render('./users/register'),
    store: (req, res) => {
        let userInDb = user.findByField("email", req.body.email)

        if (userInDb) {
            return res.render('./users/register');
        };

        let userCreate = {
            ...req.body,
            pass: bcryptjs.hashSync(req.body.pass, 10),
            avatar: req.file.filename,

        }
        let userCreated = user.create(userCreate);
        return res.redirect("/login");
    }
}

module.exports = controller;