
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
   
    chat_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Chat',
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    description: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Message', messageSchema);
