const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login-failure.html' }),
  (req, res) => {
    // Successful authentication
    res.redirect('/login-success.html');
  }
);

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/logout-success.html');
  });
});

module.exports = router;