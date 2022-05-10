const {validationResult} = require('express-validator')

const controller = {
    index: (req,res) => res.render('./users/login'),
    login: (req, res) => {
        const resultsValidations = validationResult(req);

        if (resultsValidations.errors.length > 0) {
            res.render('./users/login',{
                errors: resultsValidations.mapped(),
                oldData: req.body
            })
        }
    }
}

module.exports = controller;