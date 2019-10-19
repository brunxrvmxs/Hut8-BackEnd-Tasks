//Summoning Packages
const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

require('dotenv').config()

//Starting App
const app = express()
app.use(express.json())

//Conecting
mongoose.connect(
    process.env.URL,
    { useNewUrlParser: true }
)

requireDir('./src/models')

//Routes
app.use('/crud', require('./src/routes'))

app.listen(3333)