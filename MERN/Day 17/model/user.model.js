const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 20,
        minLength: 5
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel