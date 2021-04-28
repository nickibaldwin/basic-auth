'use strict';

// 3rd party npm dependencies
const express = require('express');// gives us a framework for building APIs
const morgan = require('morgan');
const cors = require('cors');// opens up our server for any domain to access
const dotenv = require('dotenv');

dotenv.config();

const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404.js');
const authRouter = require('./routes/router.js');

const app = express();

const PORT = process.env.MONGODB_URI;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRouter);

// Catchall
app.use("*", notFound);
app.use(errorHandler);

module.exports = { server: app, start:(PORT) => app.listen(PORT, () => {
    console.log(`server up: ${PORT}`)
})};

