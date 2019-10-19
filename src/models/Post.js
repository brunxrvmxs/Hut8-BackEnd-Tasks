const mongoose = require('mongoose')

//Schema
const PostSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },    
    Body: {
        type: String,
        required: true
    },
    Likes: {
        type: Number,
        required: false
    },
    Author: {
        type: String,
        required: true
    }
})

mongoose.model('Post', PostSchema)