require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { logger } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/dbConn');
const mongoose = require('mongoose');

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

app.use(errorHandler);

mongoose.connection.on('connected', () => {

console.log('Mongoose is connected');
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});

});

module.exports = app;
