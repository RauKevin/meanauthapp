const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to mongoDB
/*
mongoose.connect(config.database);
mongoose.connection.on('connected', ()=>{
    console.log("connected to db");
});
mongoose.connection.on('error', (err)=>{
    console.log("db error: "+err);
});
*/
//var db = mongoose.createConnection(config.uri, config.database, config.port, config.opts);
/*
mongoose.connect(config.uri, config.opts, ()=>{
    console.log('connecting to db...');
});
*/
//{ useNewUrlParser: true }
mongoose.connect(config.uri, ()=>{
    console.log('connecting to db...for reals this time');
});
mongoose.connection.on('error', (err)=>{ 
    console.log("db error: "+err);
});


//set up express app
const app = express();

const users = require('./routes/users');

const port = 3000;

// middleware
app.use(cors());        //to request web assets from another server
app.use(bodyParser.json());     //stripe off headers?

app.use(passport.initialize());  //authentication middleware 
app.use(passport.session());  // :____________
require('./config/passport')(passport);

app.use('/users', users);

//set Static folder for front end?
app.use(express.static(path.join(__dirname, 'public')));

//test: get request / index
app.get('/',(req, res) => {
    res.send({'myballs':'true'});
});

//FIX LATER
app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
    console.log('Sever starting on port '+port);
});