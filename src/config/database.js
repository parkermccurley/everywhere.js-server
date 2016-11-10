var mongoose = require('mongoose');
var hostname;
var database;

var start = function start(env) {
  hostname = env.DB_HOST;
  database = env.DB_NAME;
  mongoose.connect('mongodb://' + hostname + '/' + database);
};

module.exports = start;
