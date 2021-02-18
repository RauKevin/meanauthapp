const { client } = require('../dbConnect');


module.exports.addAppointment = function (apt, cb) {
    // This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch().
    console.log(apt);
    const values = ['Available', apt.FacultyID, apt.Location, apt.StartTime, apt.Duration, 'now()'];
    const query = `
        INSERT INTO "Appointment" ("Status", "FacultyID", "Location", "StartTime", "Duration", "Modified") 
        VALUES ($1, $2, $3, $4, $5, $6) 
        RETURNING *;`;
    
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
            cb(null, err);
        } else {
            console.log(res.rows);
            cb(res, null);
        }
    })
}

module.exports.addAppointments = function (appointment, cb) {
    //loop through, and if the appointment has an id then see if it need to be modified, no id then just insert
    //maybe hand this first loop in the controller?
    
    console.log("add Appointments");
    let AptValues = `VALUES`;
    appointment.forEach(apt => {
        const val = ` ('Available', '${apt.FacultyID}', '${apt.Location}', '${apt.StartTime}', '${apt.Duration}', current_timestamp),`;
        AptValues += val;
    });
    AptValues = AptValues.substring(0, AptValues.length -1);

    const query = `
        INSERT INTO "Appointment" ("Status", "FacultyID", "Location", "StartTime", "Duration", "Modified") 
        ${AptValues} 
        RETURNING *;`;

    console.log(query);
    client.query(query, (err, res) => {
        if (err) {
            console.log(err.stack);
            cb(null, err);
        } else {
            console.log(res.rows);
            cb(res.rows, null);
        }
    });

    //at some point you need to do checks for are appointments going to overlap?
    //so maybe it should query the appointments for the week first and check if something has been removed?
    //not if they use my UI for making apoointments
    //however, can they modify an apointment afterward? like delete and what not
    //if deleting an appointment with a student it should, notify student, then set to cancel
}

//https://popsql.com/learn-sql/postgresql/how-to-query-date-and-time-in-postgresql
module.exports.getAppointments = function (filter, cb) {
    //appointments where time greater than now and student id is null and not deleted
    let extraWhere = ` "StartTime" >= CURRENT_DATE\n`; //or now()?
    if ('dateRange' in filter && Array.isArray(filter.dateRange) && filter.dateRange.length == 2) {
        extraWhere += ` AND "StartTime" BETWEEN '${filter.dateRange[0]}' AND '${filter.dateRange[1]}'\n`;
    }

    if ('date' in filter && filter.date) {
        extraWhere += ` AND DATE_PART('day', "StartTime") = DATE_PART('day', ('${filter.date}')::date)\n`;
    }

    if ('facultyID' in filter && filter.facultyID) {
        extraWhere += ` AND "FacultyID" = '${filter.facultyID}'\n`;
    }

    if ('studentID' in filter && filter.studentID) {
        extraWhere += ` AND "StudentID" = '${filter.studentID}'\n`;
    }

    if ('open' in filter && filter.open) {
        extraWhere += ` AND "StudentID" IS NULL AND "Status" != 'Removed'\n`;
    }

    if ('id' in filter && filter.id) {
        extraWhere += ` AND "ID" = '${filter.id}'\n`;
    }

    let query = `
        SELECT * FROM "Appointment" WHERE TRUE AND ${extraWhere} ORDER BY "StartTime" ASC;
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
//if you want to use these functions by themselves you should  export them all at the end.
module.exports.setAppointment = function (appointmentID, studentID, cb) {
    //check if appointment exisit first and available
    const q1 = `SELECT * FROM "Appointments" WHERE "ID" = '${appointmentID}'`;
    client.query(query, (err, res) => {
        if (err) {
            console.log(err);
            return cb(null, err);
        }

        let apt = typeof res.rows[0] !== "undefined";
        if (apt && !apt.StudentID && apt.Status == 'Available' ) {
            //update aka schedule apt
            const query = `UPDATE "Appointment"
            SET "StudentID" = '${studentID}',"Status" = 'Scheduled', "Modified" = current_timestamp
            WHERE "ID" = '${appointmentID}'
            RETURNING *;`;
            client.query(query, (err, res) => {
                if (err) {
                    console.log(err);
                    cb(null, err);
                } else {
                    console.log(res.rows);
                    //do I need to check for res.rows !== undefined?
                    cb(res.rows, null);
                }
            });
        } else {
            cb(null, {error: true, message:"Appointment not available"});
        }
    });
}
//or would a simple cancel apt be easier?

module.exports.updateAppointments = function (appointments, cb) {
    console.log("Update Appointments");
    // let AptValues = `VALUES`;
    // appointment.forEach(apt => {
    //     const val = ` ('Available', '${apt.FacultyID}', '${apt.Location}', '${apt.StartTime}', '${apt.Duration}', current_timestamp),`;
    //     AptValues += val;
    // });
    // AptValues = AptValues.substring(0, AptValues.length -1);

    // const query = `
    //     INSERT INTO "Appointment" ("Status", "FacultyID", "Location", "StartTime", "Duration", "Modified") 
    //     ${AptValues} 
    //     RETURNING *;`;

    /*https://stackoverflow.com/questions/18797608/update-multiple-rows-in-same-query-using-postgresql
        update test as t set
            column_a = c.column_a,
            column_c = c.column_c
        from (values
            ('123', 1, '---'),
            ('345', 2, '+++')  
        ) as c(column_b, column_a, column_c) 
        where c.column_b = t.column_b;

        update users as u set
            email = u2.email,
            first_name = u2.first_name,
            last_name = u2.last_name
        from (values
            (1, 'hollis@weimann.biz', 'Hollis', 'O\'Connell'),
            (2, 'robert@duncan.info', 'Robert', 'Duncan')
            ) as u2(id, email, first_name, last_name)
        where u2.id = u.id;
    */

    //Need to dynamically, for each field set q1-q4

    return cb();
    //The good stuff
    const badAssQuery = `
            UPDATE "Appointment" as apt set
            ${q1}
            FROM (VALUES
                ${q2}
            ) as c(${q3})
            WHERE 
    `;
}

