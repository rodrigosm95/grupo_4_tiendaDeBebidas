const { generate, create } = require("../models/user");

const controller = {
    index: (req, res) => res.render('./users/register'),
    store: (req, res) => {

        if (req.file) {

            let image = req.body;
            image.image = req.file.filename;

            

            const nuevo = generate(req.body);
            create(nuevo);
            return res.redirect('/users/' + nuevo.id);

        } else {

            const nuevo = generate(req.body);
            create(nuevo);
            return res.redirect('/users/' + nuevo.id);
        }

    }
}

module.exports = controller;