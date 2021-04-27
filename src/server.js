'use strict';

// 3rd party npm dependencies
const express = require('express'); // gives us a framework for building APIs
const bcrypt = require('bcrypt'); // encryption
const base64 = require('base-64'); // encoding / decoding -> we decode on the backend
const cors = require('cors'); // opens up our server for any domain to access
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // connects us to the DB -> gives us methods like .save(), .find()

// Prepare the express app
const app = express();
dotenv.config();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(cors());
app.use(express.urlencoded({ extended: true }));

module.exports = { server:app, start: (port)=> app.listen(port, ()=> console.log('server is up'))};
// // application constants
// const app = express();
// dotenv.config();

// // BASIC CONFIGURATION FOR A PRO LEVEL SERVER
// app.use(express.json()); // this handles parsing of a req.body on POST/PUT
// app.use(cors()); // let anyone use this app
// app.use(express.urlencoded({ extended: true })) // this processes form input on the req.body

