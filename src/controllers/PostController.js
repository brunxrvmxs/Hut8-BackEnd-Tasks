const mongoose = require('mongoose')

const Post = mongoose.model('Post')

module.exports = {
    async store(req, res){
        const Cpost = await Post.create(req.body)

        return res.json(Cpost)
    },

    async index(req, res) {
        const Rallpost = await Post.find()

        return res.json(Rallpost)
    },

    async show(req, res) {
        const Rpost = await Post.findById(req.params.id)

        return res.json(Rpost)
    },

    async update(req, res) {
        const Upost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true})

        return res.json(Upost)
    },

    async destroy(req, res) {
        const Dpost = await Post.findByIdAndRemove(req.params.id)

        return res.send()
    }
}