var mongoose = require('mongoose');
var hostname;
var database;

var start = function start(callback) {
  hostname = process.env.DB_HOST;
  database = process.env.DB_NAME;
  mongoose.connect('mongodb://' + hostname + '/' + database);

  callback();
};

module.exports = start;
