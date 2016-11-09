var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('../app/routes/index');
var server;
var port;

var start = function start(env) {
  server = express();
  port = env.NODE_PORT;

  server.use(morgan('common'));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  routes(server);

  server.use(function errorHandler(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
    next(err);
  });

  server.listen(port, function() {
    console.log("It's alive!");
  });
};

module.exports = start;
