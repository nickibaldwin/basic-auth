'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Create a mongoose model - aka user blue print for information we want
const users = new mongoose.Schema({
  username: { type: String, required: true , unique: true},
  password: { type: String, required: true },
});

users.pre('save', async function() {
  if(this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

users.statics.authenticateBasic = async function (username, password) {
  const user = await this.findOne({ username })
  const valid = await bcrypt.compare(password, user.password)
  if(valid) { return user; }
  throw new Error('Invalid User');
}

module.exports = mongoose.model('users', users);