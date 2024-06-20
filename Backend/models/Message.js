
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({

    chat_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Chat',
    },
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    read_by : {
        type:[String],
        default: [],
    },
});


module.exports = mongoose.model('Message', messageSchema);
