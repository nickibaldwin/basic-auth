'use strict';

const server = require('./src/server.js');
require('dotenv').config(); //need for process.env (works for whole file)
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
// const MONGODB_URI = process.env.MONGODB_URI;


//this starts the DB Server

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopography: true,
};

//KEEP IN INDEX!!!
mongoose.connect(process.env.MONGODB_URI, options)
.then(() => server.start(PORT))
  .catch(error => console.error('Cannot start server', error.message));
