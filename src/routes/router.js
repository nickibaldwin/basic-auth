'use strict';

const express = require('express');
const authRouter = express.Router();

const Users = require('../auth/models/user-schema.js');
const basicAuth = require('../auth/middleware/basic-auth.js');

authRouter.post('/signup', async (req, res, next) => {
  try {
    let user = new Users(req.body);
    const record = await user.save();
    res.status(201).json(record); //future will redirect to another page, but for now leave like this.
  } catch (e) { 
    next(e.message)
  }
});

userRouter.post('/signin', basicAuth, (req, res, next) => {
  res.status(200).json(req.user);
});

module.exports = authRouter;