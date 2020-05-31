const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Dancer = require('../models/dancer');


passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID, 
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    
function(accessToken, refreshToken, profile, cb) {
    Dancer.findOne({ 'googleId': profile.id}, function(err, dancer) {
        if (err) return cb(err);
        if (dancer) {
            return cb(null, dancer);
        } else {
        const newDancer = new Dancer({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
        });
        newDancer.save(function(err) {
            if (err) return cb(err);
            return cb(null, newDancer);
        });
        }
    });
    }
));    


passport.serializeUser(function(dancer, done) {
    return done(null, dancer._id);
});
passport.deserializeUser(function(id, done) {
    Dancer.findById(id, function(err, dancer) {
        return done(err, dancer);
    });
});