var router = require('express').Router();
var routes = require('require-dir')();

var expressRouter = function expressRouter(server) {
  Object.keys(routes).forEach(function(model) {
    var setRoutes = routes[model];
    setRoutes(router);
  });

  router.route('/').get(function index(req, res, next) {
    res.json({ message: 'Hello, world!' });
  });

  server.use(router);
};

module.exports = expressRouter;
