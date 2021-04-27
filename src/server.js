'use strict';

// 3rd party npm dependencies
const express = require('express');// gives us a framework for building APIs
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');// opens up our server for any domain to access
const { response } = require('express');

const basicAuth = require('./auth/middleware/basic-auth.js');

dotenv.config();

// const errorHandler = require('./auth/middleware/500.js');
// const notFound = require('./auth/middleware/404.js');
// const authRouter = require('./routes/router.js');

const app = express();
const PORT = process.env.MONGODB_URI;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: true }));

// Routes
app.use(basicAuth);

//Catchall
// app.use(notFound);
// app.use(errorHandler);

// mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true})
// .then(() => {
//   app.listen(PORT, () => {
//     console.log(`server up: ${PORT}`)
//   });
// })
// .catch(e => console.error(e.message));

