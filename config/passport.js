const JwtStragety = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/users');
const config = require('./database');

module.exports = function(passport)
{
    console.log('passport doing its thang');//runs when app first starts
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    //opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
    //opts.jwtFromRequest = ExtractJwt.fromHeader('Authorization');
    opts.secretOrKey = config.secret;
    opts.ignoreExpiration = true;
    passport.use(new JwtStragety(opts, (jwt_payload, done)=>{
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