// Signup Route -- create a new user
// =====Create a new user, given the input information, and save to database

const Users = require('../models/user-schema');
const basic = require('../middleware/basic');

const express = require('express');
const userRouter = express.Router();

// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup usernmae=john password=foo
userRouter.post('/signup', async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(200).json(record); //future will redirect to another page, but for now leave like this.
  } catch (e) { res.status(403).send("Error Creating User"); }
});

userRouter.post('/signin', basic, async (req, res) => {
  res.status(200).json(req.user);
});

module.export = { userRouter };