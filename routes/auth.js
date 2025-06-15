const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get(
  '/google',
  /* #swagger.description = 'Start Google OAuth login'
     #swagger.responses[302] = { description: 'Redirects to Google for authentication' }
  */
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  /* #swagger.description = 'Google OAuth callback'
     #swagger.responses[302] = { description: 'Redirects to login-success or login-failure page' }
     #swagger.responses[401] = { description: 'Unauthorized. Login failed.' }
  */
  passport.authenticate('google', { failureRedirect: '/login-failure.html' }),
  (req, res) => {
    // Successful authentication
    res.redirect('/login-success.html');
  }
);

router.get(
  '/logout',
  /* #swagger.description = 'Logout the current user'
     #swagger.responses[302] = { description: 'Redirects to logout-success page' }
  */
  (req, res) => {
    req.logout(() => {
      res.redirect('/logout-success.html');
    });
  }
);

module.exports = router;