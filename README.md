# everywhere.js-server
Boilerplate for JavaScript-powered Web APIs

### Synopsis
everywhere.js is a collection of JavaScript boilerplate repositiories which
exist to provide an immediate entry point to development whenever inspiration
strikes. The goal of the project is to provide a boilerplate repository for
every (reasonable) platform that JavaScript runs on. The concept behind each
repository is to have a near-zero startup time, but also act as a blank
canvas.  In this repository, for example, there is an example model to act as
a template for modeling and routing, but it does nothing else.

This repository provides an express-powered Web API.  If you choose to use
mongoDB as your data source, time from `git clone` to active development is mere
seconds.

### System Dependencies
* node && ( npm || yarn )
* mongoDB (or, alter `config/database.js` and `models/` to your liking)

### Setup
* `cd src/`
* `npm install`
* `cp .env.example .env`
* set your `.env` variables
* `node index.js`

### Development Process
* `app/models/mock.js` and `app/routes/mocks.js` offer a template for mongoose
powered DB interactivity.  copy these files for any models you need.
* `config/database.js` can be reconfigured to fit any data source.
* `config/server.js` is where to go to manage middleware and express.

### Notes
* the routing system in `app/routes/index.js` automatically imports new files
placed in the `app/routes/` directory.
* although this layout is setup for quick use with mongoDB and mongoose, it can
easily by altered to work with any data source.
