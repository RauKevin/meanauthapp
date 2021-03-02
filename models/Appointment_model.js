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
    if (appointment.length == 0) {
        return cb(true, null);
    }
    
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
    let extraWhere = ` "StartTime" >= CURRENT_TIMESTAMP AND "Status" <> 'Removed'\n`; //or now()?  or CURRENT_DATE
    if ('dateRange' in filter && Array.isArray(filter.dateRange) && filter.dateRange.length == 2) {
        extraWhere += ` AND "StartTime" BETWEEN '${filter.dateRange[0]}' AND '${filter.dateRange[1]}'\n`;
    }

    if ('date' in filter && filter.date) {
        extraWhere += ` AND DATE_PART('day', "StartTime") = DATE_PART('day', ('${filter.date}')::date)\n`;
    }

    if ('facultyID' in filter && filter.facultyID) {
        extraWhere += ` AND "Appointment"."FacultyID" = '${filter.facultyID}'\n`;
    }

    if ('studentID' in filter && filter.studentID) {
        extraWhere += ` AND "Appointment"."StudentID" = '${filter.studentID}'\n`;
    }

    if ('open' in filter && filter.open) {
        extraWhere += ` AND "Appointment"."StudentID" IS NULL AND "Status" != 'Removed'\n`;
    }

    if ('id' in filter && filter.id) {
        extraWhere += ` AND "Appointment"."ID" = '${filter.id}'\n`;
    }

    const extraJoin = ` 
        LEFT JOIN "User" u_0 ON (u_0."StudentID" = "Appointment"."StudentID") \n
        LEFT JOIN "User" u_1 ON (u_1."FacultyID" = "Appointment"."FacultyID") \n
    `;

    const extraSelect = `, 
        u_0."FirstName" as "StudentFirstName", 
        u_0."LastName" as "StudentLastName", 
        u_0."Email" as "StudentEmail", 
        u_1."FirstName" as "FacultyFirstName", 
        u_1."LastName" as "FacultyLastName", 
        u_1."Email" as "FacultyEmail"
    `;

    let query = `
        SELECT "Appointment".* ${extraSelect} FROM "Appointment" ${extraJoin} WHERE TRUE AND ${extraWhere} ORDER BY "StartTime" ASC;
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
    const q1 = `SELECT * FROM "Appointment" WHERE "ID" = '${appointmentID}'`;
    client.query(q1, (err, res) => {
        if (err) {
            console.log(err);
            return cb(null, err);
        }

        let apt = typeof res.rows[0] !== "undefined" ? res.rows[0]: false;
        console.log("Inside set appointment");
        console.log(apt);
        console.log(!apt.StudentID);
        console.log(apt.Status == 'Available');
        if (apt && !apt.StudentID && apt.Status == 'Available') {
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

module.exports.updateAppointments = function (appointments, action, cb) {
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
    
        //Need to dynamically, for each field set q1-q4

        const badAssQuery = `
            UPDATE "Appointment" as apt set
            ${q1}
            FROM (VALUES
                ${q2}
            ) as c(${q3})
            WHERE 
        `;

        //https://stackoverflow.com/questions/7019831/bulk-batch-update-upsert-in-postgresql

        update tmp set age = data_table.age
        from
        (select unnest(array['keith', 'leslie', 'bexley', 'casey']) as name, 
                unnest(array[44, 50, 10, 12]) as age) as data_table
        where tmp.name = data_table.name;

        UPDATE "Appointment" 
        SET "Status" = "data_table"."Status"
        FROM 
            (SELECT UNNEST(ARRAY[22, 23]) as "ID", UNNEST(ARRAY['Scheduled', 'Scheduled'])::AppointmentStatus as "Status") as "data_table"
        WHERE
            "Appointment"."ID" = "data_table"."ID";
    */
    console.log("Update "+appointments.length + " appointmnets.");
    if (appointments.length == 0) {
        return cb(null, null);
    }

    let ids = "";
    let status = "";
    for (const apt of appointments) {
        ids += `${apt.ID},`;
        status += `'${action}',`;
    }
    ids = ids.substring(0, ids.length - 1);
    status = status.substring(0, status.length - 1);
    const query = `
        UPDATE
            "Appointment" 
        SET
            "Status" = data_table."Status"
        FROM 
            (SELECT UNNEST(ARRAY[${ids}]) as "ID", UNNEST(ARRAY[${status}])::AppointmentStatus as "Status") as data_table
        WHERE
            "Appointment"."ID" =  data_table."ID";
    `;
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

}

module.exports.cancelAppointment = function (appointmentID, cb) {
    if (appointmentID) {
        //update aka schedule apt
        const query = `UPDATE "Appointment"
        SET "StudentID" = NULL,"Status" = 'Available', "Modified" = current_timestamp
        WHERE "ID" = '${appointmentID}';`;
        client.query(query, (err, res) => {
            if (err) {
                cb(null, err);
            } else {
                cb(res.rows, null);
            }
        });
    } else {
        cb(null, {error: true, message:"No valid appointmnet provided"});
    }
}

module.exports.removeAppointments = function (appointmentIDs, cb) {
    // update users as u set
    //         email = u2.email,
    //         first_name = u2.first_name,
    //         last_name = u2.last_name
    //     from (values
    //         (1, 'hollis@weimann.biz', 'Hollis', 'O\'Connell'),
    //         (2, 'robert@duncan.info', 'Robert', 'Duncan')
    //         ) as u2(id, email, first_name, last_name)
    //     where u2.id = u.id;
    let q2 = "";
    for (const a of appointmentIDs) {
        q2 += `('${a}', 'Removed', current_timestamp), `;
    }
    if (q2) {
        q2 = q2.substring(0, q2.length - 2);
        const query = `
                UPDATE "Appointment" as apt set
                    "Status" = apt2."Status",
                    "Modified" = apt2."Modified"
                FROM (VALUES
                    ${q2}
                ) as apt2("ID", "Status", "Modified")
                WHERE apt."ID" = apt2."ID";
        `;

        client.query(query, (err, res) => {
            if (err) {
                cb(null, err);
            } else {
                cb(res.rows, null);
            }
        });
    }
}

