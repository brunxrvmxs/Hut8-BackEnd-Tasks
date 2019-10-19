const express = require('express')
const routes = express.Router()

const PostController = require('./controllers/PostController')

//Routes
routes.post('/posts', PostController.store)
routes.get('/posts', PostController.index)
routes.get('/posts/:id', PostController.show)
routes.put('/posts/:id', PostController.update)
routes.delete('/posts/:id', PostController.destroy)

module.exports = routes