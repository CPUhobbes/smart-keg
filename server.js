// Dependencies
const express = require('express');
const app = require('express')();
const Routes = require('./server/config/routes.js');
const BodyParser = require('body-parser');
const Mongoose = require('mongoose');
const Promise = require('bluebird');
const Path = require('path');
const http = require('http').Server(app);

/**
 * --- Mongoose ---
 */

// Mongoose promise
Mongoose.Promise = Promise;

// mongoose.connect("mongodb://DBNAMEHERE");
Mongoose.connect('mongodb://localhost/smart-keg', { useMongoClient: true });
const db = Mongoose.connection;

// Mongoose Error
db.on('error', (error) => {
  console.log('Mongoose Error: ', error);
});

// Mongoose Connect
db.once('open', () => {
  console.log('Mongoose connection successful.');
});


// Add Body Parser
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));

// Add static content directory (img, css, js, etc)
app.use(express.static(Path.join(__dirname, 'build')));

// Routes
app.use('/', Routes);

// Server listen
http.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on ${process.env.PORT || 3000}`);
});

module.exports = app;
