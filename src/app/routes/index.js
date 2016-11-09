var express = require('express');
var mockRoutes = require('./mocks.js');

var expressRouter = function expressRouter(server) {
  var router = express.Router();

  mockRoutes(router);

  router.get('/', function(req, res, next) {
    res.json({ message: 'Hello, world!' });
  });

  server.use(router);
};

module.exports = expressRouter;
