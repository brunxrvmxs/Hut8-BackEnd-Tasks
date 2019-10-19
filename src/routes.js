const express = require('express')
const routes = express.Router()

const PostController = require('./controllers/PostController')
const UserController = require('./controllers/UserController')

//Post Routes
routes.post('/posts', PostController.store)
routes.get('/posts', PostController.index)
routes.get('/posts/:id', PostController.show)
routes.put('/posts/:id', PostController.update)
routes.delete('/posts/:id', PostController.destroy)

//User Routes
routes.post('/users', UserController.store)
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

module.exports = routes