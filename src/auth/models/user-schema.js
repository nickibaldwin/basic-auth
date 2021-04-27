'use strict';

const mongoose = require('mongoose');


// Create a mongoose model - aka user blue print for information we want
const usersSchema = mongoose.Schema({
  username: { type: String, required: true , unique: true},
  password: { type: String, required: true },
});
const Users = mongoose.model('users', usersSchema);

module.export = Users;