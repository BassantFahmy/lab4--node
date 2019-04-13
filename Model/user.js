const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        minlength: 2
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    age: { type: Number, min: 18 },
    gender: {
        type: String,
        enum: ["male", "female", "notassigned"],
        default: 'n/a'
    },
    country: {
        type: String,
        enum: ["egypt", "england", "us"],
        required: true,
        lowercase: true,
    },

});

const User = mongoose.model('User', userSchema);
module.exports = User;