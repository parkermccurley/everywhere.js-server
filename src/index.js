var env = require('dotenv').load();
var server = require('./config/server');
var database = require('./config/database');


server(env);
database(env);
