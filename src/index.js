var server = require('./config/server');
var env = require('dotenv').load();

server(env);
