'use strict';

// 3rd party npm dependencies
const express = require('express'); // gives us a framework for building APIs
const cors = require('cors'); // opens up our server for any domain to access
const morgan = require('morgan');

const errorHandler = require('./auth/middleware/500.js');
const notFound = require('./auth/middleware/404.js');
const authRouter = require('./routes/router.js');

const app = express();

//MW
app.use(morgan('dev'));
app.use(cors());

// Process JSON input and put the data on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRouter);

//Catchall
app.use(notFound);
app.use(errorHandler);

module.exports = { server:app, start: (port)=> app.listen(port, ()=> console.log(`server is up on ${PORT}`))};


