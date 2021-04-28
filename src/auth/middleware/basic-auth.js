'use strict';

//1:56 snagit
const base64 = require('base-64'); //we need this to decode req.headers.authorization
const Users = require('../models/user-schema.js');


module.exports = async (req, res, next) => {
  if(!req.headers.authorization) { return _authError();}

  let basic = req.headers.authorization.split(' ').pop();
  //above is encoded username and password
  let [user, pass] = base64.decode(basic).split(':');//1:59

  try {
    //lets use our authenticateBasic method on the user model to check username and password
  //2:00 
    req.user = await Users.authenticateBasic(user, pass);
        next();
      } catch(e) {
        res.status(403).send('Invalid Login');
  }
};