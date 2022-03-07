const { redirect } = require("express/lib/response");
const users = require("../models/user")


const controller = {
    index: (req,res) => res.render('./users/login'),
    login: (req, res) => {
        let userToLogin = users.findByField("email", req.body.email)
        if (userToLogin){
            if (userToLogin.pass === req.body.pass) {
                res.redirect("./users/" + userToLogin.id)
            }
            return res.render("./users/login", {
                errors: {
                    email:{
                        msg: "las credenciales no son validas"
                    }
                }
            })
        }
        return res.render("./users/login", {
            errors: {
                email:{
                    msg: "No se encuentra registrado en nuestra base de datos"
                }
            }
        })
    }
}

module.exports = controller;