const model = require("../models/user");

const controller = {
    index: (req, res) => res.render('./users/register'),
    store: (req, res) => {

        if (req.file) {

            let image = req.body;
            image.image = req.file.filename;

            const nuevo = model.generate(req.body);
            model.create(nuevo);
            return res.redirect('/users/' + nuevo.id);

        } else {

            const nuevo = model.generate(req.body);
            model.create(nuevo);
            return res.redirect('/users/' + nuevo.id);
        }

    }
}

module.exports = controller;