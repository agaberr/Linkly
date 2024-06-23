const { Server } = require('socket.io');
const http = require('http');
const express = require('express');
const corsOptions = require('../config/corsOptions');

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: corsOptions
});

const getRecieverSocketId = (recieverId) => {
    return userSocketMap[recieverId];
}

const getSenderSocketId = (senderId) => {
    return userSocketMap[senderId];
}

const userSocketMap = {};


io.on("connection", (socket) => {
    console.log("A user connected", socket.id);


    const userId = socket.handshake.query.userId;
    if (userId != "undefined") {
        userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});





module.exports = { app, server, getRecieverSocketId, getSenderSocketId, io };
