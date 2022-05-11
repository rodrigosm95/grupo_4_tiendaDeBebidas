const user = require("../models/user");
const bc = require("bcryptjs");
const bcryptjs = require("bcryptjs");
const {validationResult} = require('express-validator')

const controller = {
    index: (req, res) => res.render('./users/register'),
    store: (req, res) => {
        const resultsValidations = validationResult(req);

        if (resultsValidations.errors.length > 0) {
            res.render('./users/register',{
                errors: resultsValidations.mapped(),
                oldData: req.body
            })
        } else {
            let userInDb = user.findByField("email", req.body.email)

            if (userInDb) {
                return res.render('./users/register',{
                    errors: {
                        email: {
                            msg: "Ese correo ya esta registrado"
                        }
                    },
                    oldData: req.body
                });
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
}

module.exports = controller;