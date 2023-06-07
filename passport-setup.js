
const passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:process.env.GOOGLE_CALL_BACK_URL,
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
        console.log(profile);
      return done(null, profile);
    
  }
));