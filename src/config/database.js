var mongoose = require('mongoose');
var host;
var database;

var start = function start(env) {
  host = env.DB_HOST;
  database = env.DB_NAME;

  mongoose.connect('mongodb://' + host + '/' + database);
};

module.exports = start;
