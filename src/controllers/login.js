const user = require("../models/user");
const {validationResult} = require('express-validator');
const bcryptjs = require("bcryptjs");

const controller = {
    index: (req,res) => {
        res.render('./users/login')},
    login: (req, res) => {
        const resultsValidations = validationResult(req);

        if (resultsValidations.errors.length > 0) {
            res.render('./users/login',{
                errors: resultsValidations.mapped(),
                oldData: req.body
            })
        }

        let userToLogin = user.findByField('email', req.body.email) 

        if(userToLogin){
            let passOk = bcryptjs.compareSync(req.body.pass, userToLogin.pass)
            if (passOk) {
                delete userToLogin.pass;
                req.session.userLogged = userToLogin;
                if (req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, {
                        maxAge: 1000 * 120
                    })
                }
                return res.redirect('./profile');
            } else {
                return res.render('./users/login',{
                    errors: {
                        pass: {
                            msg: 'la contraseña y correo electronico no coincide',
                        }
                    }
                })
            }

            
        }else{
            return res.render('./users/login',{
                errors: {
                    email: {
                        msg: 'El email no se encuentra registrado en nuestra base de datos',
                    }
                }
            })
        }
    },
    profile: (req,res) => {
       res.render('./users/profile',{
            user: req.session.userLogged
        })},
    logout: (req,res) => {
        res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect('./')
    } 
}

module.exports = controller;