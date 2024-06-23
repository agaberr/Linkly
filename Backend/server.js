require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { logger } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/dbConn');
const mongoose = require('mongoose');
const { app, server } = require('./socket/socket');

console.log(process.env.NODE_ENV);

connectDB();

app.use(express.json());

app.use(logger);

app.use(cors(corsOptions));
app.use(cookieParser());

const PORT = process.env.PORT || 5000;


function loadRoutes(directory) {
    fs.readdirSync(directory).forEach((file) => {
      const filePath = path.join(directory, file);
      const route = require(filePath);
      app.use('/', route);
    });
  }
  
const routesDirectory = path.join(__dirname, 'routes');
loadRoutes(routesDirectory);

app.use(express.static(path.join(__dirname, "..", "Frontend","dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "Frontend", "dist", "index.html"));
});

app.use(errorHandler);

mongoose.connection.on('connected', () => {

console.log('Mongoose is connected');
server.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});

});


module.exports = app;
require('dotenv').config();
