var Mock = require('../models/mock');

var routes = function routes(router) {
  router.route('/mocks')
    .get(function getAllMocks(req, res, next) {
      Mock.find(function(err, mocks) {
        if (err) {
          return next(err);
        } else {
          res.json(mocks);
        }
      });
    })
    .post(function postMock(req, res, next) {
      var mock = new Mock(req.body);
      mock.save(function(err, mock) {
        if (err) {
          return next(err);
        } else {
          res.json(mock);
        }
      });
    });
};

module.exports = routes;
