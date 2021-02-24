const { client } = require('../dbConnect');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.registerUser = function (user, cb) {
    // This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch().
    console.log(user);
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.Password, salt);
    
    const values = [
        user.Email, 
        ('StudentID' in user ? user.StudentID : null), 
        ('FacultyID' in user ? user.FacultyID : null), 
        user.FirstName,
        user.LastName,
        hash
    ];
    const query = `
        INSERT INTO "User" ("Email", "StudentID", "FacultyID", "FirstName", "LastName", "Password") 
        VALUES ($1, $2, $3, $4, $5, $6) 
        RETURNING "User"."ID", "User"."Email", "User"."StudentID", "User"."FacultyID";
    `;

    client.query(query, values).then(res => {
        console.log("User_model[21]: res");
        console.log(res);
        cb(res.rows, null);
        // for (let row of res.rows) {
        //     console.log(row);
        // }
    }).catch(e => {
        console.log(e);
        cb(null, e);
    });
}

//not the most efficient export, but it works for now
module.exports.validateUser = function (email, pw, cb) {
    console.log("Validate User");
    //const query = `SELECT * FROM "User" WHERE "Email" = '${email}' AND "Password" = '${pw}';`;
    const query = `SELECT * FROM "User" WHERE "Email" = '${email}' LIMIT 1;`;
    client.query(query).then(res => {
        if (typeof res.rows !== "undefined" && res.rows.length == 1) {
            const user = res.rows[0];
            console.log("success");
            console.log(user);

            //Check password
            const passwordMatch = bcrypt.compareSync(pw, user.Password);
            if (!passwordMatch) {
                console.log(`password ${pw} - mismatch`);
                cb(false, false, {err: "Password doesn't match"});
            }

            //create JWT token
            const token = jwt.sign(user, config.secret, {
                expiresIn: 604800 // 1 week
            });
            delete user.Password;
            cb(user, "JWT "+token, null);
        } else {
            console.log("fail");
            cb(false, false, {err: "User not found."});
        }
    });
}

module.exports.getFaculty = function (cb) {
    let query = `
        SELECT "FacultyID", "FirstName", "LastName" FROM "User" WHERE "FacultyID" IS NOT NULL;
    `;
    console.log(query);
    client.query(query, (err, res) => {
        if (err) {
            console.log(err);
            cb(null, err);
        } else {
            console.log(res.rows);
            cb(res.rows, null);
        }
    });
}

//https://node-postgres.com/features/queries