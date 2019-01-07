const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const config = require('../config/database');

// register user
router.post('/register', (req, res, next)=>{
   let newUser = new User({
       name: req.body.name,
       email: req.body.email,
       username: req.body.username,
       password: req.body.password
   });

   User.addUser(newUser, (err, user)=>{
    if(err)
    {
        res.json({
           success: false,
           msg: 'failed to register user' 
        });
    }
    else{
        res.json({
            success: true,
            msg: 'user registered' 
         });
    }
   });
});

// authenticate
router.post('/auth', (req, res, next)=>{
   const username = req.body.username;
   const password = req.body.password;
   
   User.getUserByUsername(username, (err, user)=>{
       if(err) throw err;
       if(!user){
           return res.json({success: false, msg:'User not found'});
       }
       console.log("Username found, checking password...");
       User.comparePassword(password, user.password, (err, isMatch)=>{
            if(err) throw err;
            console.log(user);
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800
                });
                console.log('password match!');
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            }
            else{
                return res.json({success: false, msg:'Password mismatch'});
            }
        });
   });
});

// profile view
/*
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
   res.json({user:req.user});
});
*/
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    res.json({user:req.user});
 });

// validate
router.get('/validate', (req, res, next)=>{
    res.send('VALIDATE ');
});

//need for nodejs to be used as a module
module.exports = router;