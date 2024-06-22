
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({

    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    reciever_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    read_by : {
        type:[String],
        default: [],
    },
}, { timestamps: true });


module.exports = mongoose.model('Message', messageSchema);
