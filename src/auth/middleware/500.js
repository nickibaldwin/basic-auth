'use strict';

module.exports = (err, req, res, next) => {
  let error = { err: err.message || err };
  res.statusCode = err.status || 500;
  res.statusMessage = err.statusMessage || 'Server Error';
  res.setHeader('Content-Type', 'appliation/json');
  res.write(JSON.stringify(error));
  res.end();
  // console.log(err);
  // res.status(500).send('something broke - 500', err);
};