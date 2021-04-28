'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('../auth/models/user-schema.js');
const basicAuth = require('../auth/middleware/basic-auth.js');
const bearerAuth = require('../auth/middleware/bearer-auth');


authRouter.post('/signup', async (req, res, next) => {
  try {
    let user = new User(req.body);
    const userRecord = await user.save();
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message)
  }
});
authRouter.post('/signin', basicAuth, (req, res, next) => {
  try {
    const user = {
      user: req.user, // changed request to req to match above
      token: req.user.token,
    };
    res.status(200).json(user);
  } catch (e) {
    next(e.message);
  }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
  res.status(200).json(req.user);
});

authRouter.get('/users', bearerAuth, async (req, res, next) => {
  const users = await Users.find({});
  const list = users.map(user => user.username);
  res.status(200).json(list);
});

authRouter.get('/secret', bearerAuth, async (req, res, next) => {
  res.status(200).send("Secret Area!");
});

module.exports = authRouter;