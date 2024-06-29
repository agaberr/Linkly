const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },

    bio: {
        type: String,
        default: "No Bio"
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
    },

    created_at: {
        type: Date,
        default: Date.now,
    },

    profile_picture: {
        type: String,
    },

    online_status: {
        type: Boolean,
        default: false,
    },

    token: {
        type: String,
        default: '',
    },

});

module.exports = mongoose.model('User', userSchema);