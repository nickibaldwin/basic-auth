'use strict';

const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const server = require('./src/server.js');

require('dotenv').config(); //need for process.env (works for whole file)

//this starts the DB Server

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopography: true,
};

// mongoose.connect(process.env.MONGODB_URI, options);

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
  app.listen(PORT, () => {
    console.log(`server up: ${PORT}`)
  });
})
.catch(e => console.error(e.message));