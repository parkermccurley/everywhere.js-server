var async = require('async');
var env = require('dotenv').load();
var server = require('./config/server');
var database = require('./config/database');

async.series([
  function connect(callback) {
    database(callback);
  },
  function start(callback) {
    server(callback);
  }]);
