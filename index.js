'use strict';

require('dotenv').config(); //need for process.env (works for whole file)

//this starts the DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopography: true,
};

mongoose.connect(process.env.MONGODB_URI, options)
  .then(() => { //if I can connect to my database, THEN connect to my server.
    server.start(process.env.PORT);
  })
  .catch(e => console.error(e)); 