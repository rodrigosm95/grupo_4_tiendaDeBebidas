const test = require('../models/user');

const controller = {
    index: (req, res) => res.render('./users/profile'),
    show: (req, res) => {

        let group = test.find(req.params.id);
        
        res.render('users/profile', { group });
        
    }
}

module.exports = controller;