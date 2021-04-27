'use strict';

//3rd Party Resources
const mongoose = require('mongoose');
require('dotenv').config(); //need for process.env (works for whole file)
const server = require('./src/server.js');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => { //if I can connect to my database, THEN connect to my server.
    server.start(process.env.PORT);
  })
  .catch(e => console.error(e)); 