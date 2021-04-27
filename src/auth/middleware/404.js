'use strict';

module.exports = (req, res, next) => {
  let error = { err: err.message || err };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'appliation/json');
  res.write(JSON.stringify(error));
  res.end();
}; 