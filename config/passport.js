const JwtStragety = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/users');
const config = require('./database');

module.exports = function(passport)
{
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStragety(opts, (jwt_payload, done)=>{
        console.log(jwt_payload);
        User.getUserById(jwt_payload._id, (err, user)=>{
            if(err)
            {
                return done(err, false);
            }
            if(user)
            {
                return done(null, user);
            }
            else{
                return done(null, false);
            }
        });
    }));
}