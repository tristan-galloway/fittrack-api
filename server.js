const express = require('express');
const mongodb = require('./data/connect');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT || 8080;
const app = express();

// Routes
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});