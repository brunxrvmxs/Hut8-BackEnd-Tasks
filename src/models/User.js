const mongoose = require('mongoose')

//Schema
const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },    
    Password: {
        type: String,
        required: true
    },
    Bio: {
        type: String,
        required: true
    }
})

mongoose.model('User', UserSchema)