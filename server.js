const express = require('express');
const connectDb = require('./data/connect');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT || 8080;
const app = express();

// Connect to MongoDB
connectDb();

// Routes
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});