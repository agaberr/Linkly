const Message = require('../models/Message');
const Chat = require('../models/Chat');
const { getRecieverSocketId, getSenderSocketId, io } = require('../socket/socket');

// const dotenv = require('dotenv');

// dotenv.config();

const messageController = {

    sendMessage: async (req, res) => {

        // res.json({ message: 'message sent' });
        try {
            const { content } = req.body;
            const { id: recieverId } = req.params;
            const senderId = req.user._id;

            let chat = await Chat.findOne({
                members: {$all: [senderId, recieverId]},
            });

            if (!chat) {
                chat = await Chat.create({
                    members: [senderId, recieverId],

                });
            }

            const newMessage = new Message({
                sender_id: senderId,
                reciever_id: recieverId,
                content
            });

            if (newMessage){
                chat.messages.push(newMessage._id);
            }

            await Promise.all([newMessage.save(), chat.save()]);

            const recieverSocketId = getRecieverSocketId(recieverId);
            const senderSocketId = getSenderSocketId(senderId);
            if (recieverSocketId) {
                io.to(recieverSocketId).emit("newMessage", newMessage);
                io.to(senderSocketId).emit("newMessage", newMessage);
            }
            
            res.status(201).json({ message: newMessage })

        } catch(error) {
            console.log('Error in sendMessageController ', error.message);
            res.status(500).json({ message: "internal server error" });
        }
    },
    getMessages: async (req, res) => {

        try {

            const { id: recieverId } = req.params;
            const senderId = req.user._id;

            const chat = await Chat.findOne({
                members: {$all: [senderId, recieverId]},
            }).populate('messages');

            if(!chat) return res.status(200).json([]);

            res.status(200).json(chat.messages);


        } catch (error) {
            console.log('Error in getMessagesController ', error.message);
            res.status(500).json({ message: "internal server error" });
        }

    }
}

module.exports = messageController;