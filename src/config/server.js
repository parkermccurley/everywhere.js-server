var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('../app/routes/index');
var server;
var port;

var start = function start(callback) {
  port = process.env.NODE_PORT;

  server = express();
  server.use(morgan('common'));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(errorHandler);

  routes(server);

  server.listen(port, function() {
    console.log("It's alive!");
  });

  if (callback) {
    return callback;
  }

  function errorHandler(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
    next(err);
  }
};

module.exports = start;
