const {users} = require ('../database/models')

const controllers = {
    index: async (req, res) => {
        try {
            const usuarios = await users.findAll();
            res.status(200).json(usuarios)
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = controllers