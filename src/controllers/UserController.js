const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

var salt = bcrypt.genSaltSync(10)

const User = mongoose.model('User')

const hashPassword = (password) => bcrypt.hashSync(password, salt)

module.exports = {
    async store(req, res){
        req.body.Password = hashPassword(req.body.Password)
        const Cuser = await User.create(req.body)
        
        return res.json(Cuser)
    },

    async index(req, res) {
        const Ralluser = await User.find()

        return res.json(Ralluser)
    },

    async show(req, res) {
        const Ruser = await User.findById(req.params.id)

        return res.json(Ruser)
    },

    async update(req, res) {
        req.body.Password = hashPassword(req.body.Password)
        const Uuser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true})

        return res.json(Uuser)
    },

    async destroy(req, res) {
        const Duser = await User.findByIdAndRemove(req.params.id)

        return res.send()
    }
}