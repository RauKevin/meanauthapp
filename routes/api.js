const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const user_model = require('../models/User_model');
const appointment_model = require('../models/Appointment_model');

router.post('/path', (req, res, next) => {});
/*
{
	"Email": "professor3@csudh.edu",
	"FirstName": "Bin",
	"LastName": "Tang3",
	"FacultyID": "999999997",
	"Password": "password"
}
*/
router.post('/register', (req, res, next) => {
    console.log("Registering");
    console.log(req.body);
    if (typeof req.body.Email === "undefined" ||
        typeof req.body.FirstName === "undefined" ||
        typeof req.body.LastName === "undefined" ||
        typeof req.body.Password === "undefined" &&
        !(typeof req.body.StudentID === "undefined" || typeof req.body.FacultyID === "undefined")
    ) {
        return res.json({success: false, msg: 'Unable to register user, incorrect parameters'});
    }

    const user = {
        "Email": req.body.Email,
        "FirstName": req.body.FirstName,
        "LastName": req.body.LastName,
        "Password": req.body.Password
    };
    if (typeof req.body.FacultyID !== "undefined" && req.body.FacultyID) {
        user.FacultyID = req.body.FacultyID;
    } else {
        user.StudentID = req.body.StudentID;
    }
    user_model.registerUser(user, (row, err) => {
        if (err) {
            res.json({success: false, msg: 'Unable to register user'});
        } else {
            console.log("api[36] row");
            console.log(row);
            res.json({success: true, msg: 'User registed.', user: row});
        }
    });
});

router.post('/auth', (req, res, next) => {
    console.log("Validate");
    console.log(req.body);
    console.log(typeof req.body.Email);
    console.log(typeof req.body.Password);

    if (typeof req.body.Email !== "undefined" && typeof req.body.Password !== "undefined") {
        user_model.validateUser(req.body.Email, req.body.Password, (user, jwt, err) => {
            if (user, jwt) {

                res.json({success: true, user: user, token: jwt, msg: 'User Validated!'});
            } else {
                res.json({success: false, msg: 'Incorrect username or password', error: err});
            }
        });
    } else {
        //you may want to fix this logic, it looks bad.
        res.json({success: false, msg: 'Missing Required validation fields'});
    }

    //this can be saved to a cookie or something, used to see profile
    //maybe i'll add uipdate pw and other stuff if time permits
});

// only professors create appointments
/*
{
    "FacultyID":"999999999",
    "Location": "Room 102",
    "StartTime": "2021-02-07 14:30",
    "Duration": "0.5"
}
*/
router.post('/createAppointment', (req, res, next) => {
    if (typeof req.body.FacultyID !== "undefined" && 
        typeof req.body.Location !== "undefined" && 
        typeof req.body.StartTime !== "undefined" && 
        typeof req.body.Duration !== "undefined"
        ) {
            let newApt = {
                FacultyID: req.body.FacultyID,
                Location: req.body.Location, 
                StartTime: req.body.StartTime,
                Duration: req.body.Duration
            };
            appointment_model.addAppointment(newApt, (apt, err) => {
            console.log(apt);
            if (apt) {
                //may have to trim white space for some stuff
                res.json({success: true, appointment: apt, msg: 'Appointment Created'});
            } else {
                console.log(err);
                res.json({success: false, msg: 'Error'});
            }
        });
    } else {
        res.json({success: false, msg: 'Missing required request fields.'});
    }
});

//you can build the curl testing later or document postman
router.post('/createAppointments', (req, res, next) => {
    console.log(req.body);
    let Appointments = [];
    let updateAppointments = [];
    let error = [];
    for (const key in req.body) {
        console.log(key);
        if (req.body.hasOwnProperty(key)) {
            let value = req.body[key];
            // you will go off of jwt in the future
            if ((typeof value.FacultyID === "undefined" && value.FacultyID) || 
                (typeof value.Location === "undefined" && value.Location) || 
                (typeof value.StartTime === "undefined" && value.StartTime) || 
                (typeof value.Duration === "undefined" && value.Duration)
            ) {
                console.log("Error!!!");
                error.push(value);
                continue;
            }
            const newApt = {
                FacultyID: value.FacultyID,
                Location: value.Location, 
                StartTime: value.StartTime,
                Duration: value.Duration
            };
            if ('ID' in value) {
                //typeof value.FacultyID === "undefined"
                newApt.ID = value.ID;
                updateAppointments.push(newApt);
            } else {
                Appointments.push(newApt);
            }
        }
    }
    if (error.length || Appointments.length == 0) {
        return res.json({success: false, msg: 'Bad input data.', error: error});
    }

    /* What to do with update Appointments */ //might have to nest the callback
    //call appointment_model.updateAppointments;
    appointment_model.updateAppointments(updateAppointments, (apts, err) => {
        //too much work, how about just a true or false if db transaction successful
        // let a = apts;
        // let error = err;
        appointment_model.addAppointments(Appointments, (apts, err) => {
            if (apts) {
                //append to a and return
                res.json({success: true, appointment: apts, msg: 'Appointments Created'});
            } else {
                res.json({success: false, msg: 'Database error', error: err});
            }
        });
    });
});

router.post('/setAppointment', (req, res, next) => {
    if (typeof req.body.StudentID === "undefined" || typeof req.body.AppointmentID === "undefined") {
        return res.json({success: false, msg: 'Bad input data.', error: error});
    }
    let filter = {
        id: req.body.AppointmentID,
        open: true
    };
    appointment_model.getAppointments(filter, (apts, err) => {
        if (apts) {
            console.log("is appointment avaialble?'");
            console.log(apts);
            appointment_model.setAppointment(req.body.AppointmentID, req.body.StudentID, (apt, err) => {
                if (apt) {
                    res.json({success: true, appointment: apt, msg: 'Successfully made appointment'});
                } else {
                    res.json({success: false, msg: 'Database error', error: err});
                }
            });
        } else {
            return res.json({success: false, msg: 'Appointment unavailable.', error: error});
        }
    });

    
});

router.post('/getAppointments', (req, res, next) => {
    console.log("get Appointments");
    console.log(req.body);
    //may need to account for empty strings as null
    let filter = [];
    if (typeof req.body.StartTime !== "undefined" && typeof req.body.EndTime !== "undefined") {
        filter.push({dateRange: [req.body.StartTime, req.body.EndTime]});
    }
    if (typeof req.body.StudentID !== "undefined") {
        //is filter an object or array
        filter.studentID = req.body.StudentID;
    }
    if (typeof req.body.FacultyID !== "undefined") {
        filter.facultyID = req.body.FacultyID;
    }
    if (typeof req.body.Date !== "undefined") {
        filter.date = req.body.Date;
    }
    if (typeof req.body.Open !== "undefined") {
        filter.open = req.body.Open;
    }

    appointment_model.getAppointments(filter, (apts, err) => {
        if (apts) {
            res.json({success: true, appointments: apts});
        } else {
            res.json({success: false, msg: 'Database error', error: err});
        }
    });
});

router.post('/cancelAppointment', (req, res, next) => {
    if (typeof req.body.StudentID === "undefined" || typeof req.body.AppointmentID === "undefined") {
        return res.json({success: false, msg: 'Bad input data.', error: error});
    }
    const removeApt = {
        ID: req.body.AppointmentID,
        StudentID: null,
        Status: 'Available'
    };

    appointment_model.updateAppointments(removeApt, (status, err) => {
        if (status) {
            return res.json({success: true, message: "Successfully canceled appointment."});
        } else {
            return res.json({success: true, message: "Unable to cancel appointment at this time. If issue persist please contact support.", error: err});
        }
    });
});

router.post('/admin/updateAppointments', (req, res, next) => {
    //used by admin to update appointments across all parameters
    //takes array of appointments
    let Appointments = [];
    for (const key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            let value = req.body[key];
            if (typeof value.ID === "undefined") {
                continue;
            }
            //I hope admin knows what they are doing.
            const apt = {
                ID: value.ID,
                Status: 'Status' in value ? value.Status : null,
                StudentID: 'StudentID' in value ? value.StudentID : null,
                FacultyID: 'FacultyID' in value ? value.FacultyID : null,
                Location: 'Location' in value ? value.Location : null, 
                StartTime: 'StartTime' in value ? value.StartTime : null,
                Duration: 'Duration' in value ? value.Duration : null
            };
        }
    }
});

router.post('/faculty', (req, res) => {
    console.log("get Faculty");
    user_model.getFaculty((faculty, err) => {
        if (faculty) {
            res.json({success: true, faculty: faculty});
        } else {
            res.json({success: false, msg: 'Database error', error: err});
        }
    });
});

module.exports = router;

/*
To Do:
1. (15min) Set update to create appointments incase prof wants to remove existing ones
2. (30mins) Add update Appointments method to model
3. (15mins) Check if appointment is available before assigning it
4. (1hr) Crudely test method
5. (1hr) In DB init create script to prepoulate users and appointments
6. (30mins) Set up git upstream and commit.
*/