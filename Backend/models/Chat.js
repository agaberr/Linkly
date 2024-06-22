const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    type: {
        type: String,
        enum: ['chat', 'group'],
        default: 'chat'
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

}, {timestamps: true});

module.exports = mongoose.model('Chat', userSchema);