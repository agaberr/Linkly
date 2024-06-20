const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },

    type: {
        type: String,
        enum: ['chat', 'group'],
    },

    members: {
        type: [String],
        default: [], 
    },

    created_at: {
        type: Date,
        default: Date.now,
    },

    messages: {
        type: [String],
        default: [], 
    },

});

module.exports = mongoose.model('Chat', userSchema);