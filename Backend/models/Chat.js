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

    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: [],
        } 
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        }
    ],

}, {timestamp: true});

module.exports = mongoose.model('Chat', userSchema);