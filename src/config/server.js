var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var server;

var start = function start(env) {
  server = express();
  
  server.use(morgan('common'));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.use(function errorHandler(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
    next(err);
  });

  server.listen(env.NODE_PORT, function() {
    console.log("It's alive!");
  });
};

module.exports = start;
