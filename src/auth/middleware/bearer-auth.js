'use strict';

const users = require('../models/user-schema.js')

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) { next('Invalid Login') }
    const token = req.headers.authorization.split(' ').pop();
    const validUser = await users.authenticateWithToken(token);
    req.user = validUser;
    req.token = validUser.token;
    console.log('token',token);
    console.log('valid',validUser);
    next()  
  } catch (e) {
    res.status(403).send('Invalid Login');;
  }
}