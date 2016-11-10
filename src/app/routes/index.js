var router = require('express').Router();
var routes = require('require-dir')();

var expressRouter = function expressRouter(server) {
  Object.keys(routes).forEach(function(model) {
    var setRoutes = routes[model];
    setRoutes(router);
  });

  server.use(router);
};

module.exports = expressRouter;
