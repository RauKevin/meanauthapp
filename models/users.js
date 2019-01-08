const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    }, 
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

// Mongoose API wrapper add user to MongoDB
module.exports.addUser = function(newUser, callback)
{
    console.log('0.'+newUser);   //test
    //generate hash key 
    bcrypt.genSalt(10, (err, salt)=>{
        console.log('1.'+newUser);   //test
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if(err){
                console.log(err);
            }
            newUser.password = hash;
            console.log('2.'+newUser);   //test
            newUser.save(callback);
        });
    });
}


// Mongoose API wrapper find user by ID
module.exports.getUserById = function(id, callback)
{
    console.log('get user by id attempted');
    User.findById(id,callback);
}

// Mongoose API wrapper find first user by username
module.exports.getUserByUsername = function(username, callback)
{
    const query = {username: username};
    User.findOne(query,callback);
}

module.exports.comparePassword = function(canidatePassword, hash, callback){
    console.log('comparing '+canidatePassword+' to '+hash);
    bcrypt.compare(canidatePassword, hash, (err, isMatch)=>{
        if(err) throw err;
        console.log('I guess the password authentication was succesful?');
        callback(null, isMatch);
    });
}