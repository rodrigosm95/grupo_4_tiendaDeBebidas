// const user = require("../models/user");
const {users, images} = require('../database/models')
const bc = require("bcryptjs");
const bcryptjs = require("bcryptjs");
const {validationResult} = require('express-validator');

const controller = {
    index: (req, res) => res.render('./users/register'),
    store: async(req, res) => {

        try {
            let resultsValidations = validationResult(req);
            if (resultsValidations.errors.length > 0) {
                res.render('./users/register',{
                    errors: resultsValidations.mapped(),
                    oldData: req.body
                })
            } else {
                let userInDb = await users.findOne({where:{email: req.body.email}})    
                if (userInDb !== null ) {
                    return res.render('./users/register',{
                        errors: {
                            email: {
                                msg: "Ese correo ya esta registrado"
                            }
                        },
                        oldData: req.body
                    });
                }else{
                    let image = null
                if (req.file) {
                    image = await images.create({
                        url: req.file.filename
                    })
                } else {
                    image = await images.create({
                        url: "default.png"
                    })
                }
        
                let userCreate = {
                    name: req.body.name,
                    adress: req.body.address,
                    province: req.body.province,
                    location: req.body.location,
                    email: req.body.email,
                    pass: bcryptjs.hashSync(req.body.pass, 10),
                    image: req.file ? image.id : "default.png"        
                }
                let userCreated = await users.create(userCreate);
                return res.redirect("/login");
                }                
            }            
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
}

module.exports = controller;