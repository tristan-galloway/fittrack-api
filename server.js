const express = require('express');
const connectDb = require('./data/connect');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
require('./config/passport'); // Make sure this path is correct

const port = process.env.PORT || 8080;
const app = express();

// Connect to MongoDB
connectDb();

// Serve static files from the 'views' directory
app.use(express.static('views'));

// Express session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_secret',
  resave: false,
  saveUninitialized: false
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

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