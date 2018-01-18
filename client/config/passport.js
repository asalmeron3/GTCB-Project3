const passport = require('passport');
const User = require('../models/user');
const Auth0Strategy = require('passport-auth0');
const keys = require('./keys');

const strategy = new Auth0Strategy({
    domain: 'gtcbproject3.auth0.com',
    clientID: keys.oauth.clientID,
    clientSecret: keys.oauth.clientSecret,
    callbackURL:  '/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);
