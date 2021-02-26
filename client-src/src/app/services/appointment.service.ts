import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppointmentService {

    constructor(private http:HttpClient) { }

    //need to send token with each request, to confirm identity
    //does server need to hold table of sessions?

    //Duration in mins, 60 or 30
    fmtAppointment(date:Date, duration:number) : string {
        let date2 = new Date(date);
        date2.setMinutes(date.getMinutes() + duration);
        let s: string = date.toLocaleString('en-US') + " - " + date2.toLocaleString('en-US');
        let d: string = (duration == 60) ? " (1hr)" : " (30mins)";
        s += d;

        return s;
    }

    deleteAppointments(aptIDs) {
        //
    }

    cancelAppointment(aptID) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        const data = {
            AppointmentID: aptID
        };
        //do I need params instead?
        return this.http.post('http://localhost:3000/api/cancelAppointment', data, httpOptions);
    }

    //auth service might be useful to getfacultyId and studentId?
    scheduleAppointment(aptID, studentID) {
        //you use this alot I could be a gloabal
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        const data = {
            AppointmentID: aptID,
            StudentID: studentID
        };
        //do I need params instead?
        return this.http.post('http://localhost:3000/api/setAppointment', data, httpOptions);
    }

    getAppointments(params) {
        //getAppointments
        let data:any = {};
        if (typeof params.FacultyID !== "undefined" && params.FacultyID) {
            data.FacultyID = params.FacultyID;
        }
        if (typeof params.StudentID !== "undefined") {
            data.StudentID = params.StudentID;
        }
        if (typeof params.Open !== "undefined" && params.Open) {
            data.Open = params.Open;
        }
        //And id, date range and date
        console.log("getAppointments")
        console.log(data);
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        //do I need params instead?
        return this.http.post('http://localhost:3000/api/getAppointments', data, httpOptions);
    }

    postAvailability(dateTimes:Set<any>, removedDT: any[], facultyID:string, duration:Number, room:string): any {
        //I can get FacultyID from cookie?
        const token = localStorage.getItem('id_token');
        console.log(token);
        const user = JSON.parse(localStorage.getItem('user'));
        let apts = [];
        if (typeof user.FacultyID !== "undefined") {
            console.log(user);
            /*
            Api route: createAppointments, expects  [] of {}
            FacultyID
            Location
            StartTime
            Duration
            */
            //IT gets the FacultyID from the looking up the token
            for (const dt of Array.from(dateTimes.values())) {
                let date = new Date(dt).toISOString();
                apts.push({
                    Location: room,
                    StartTime: date,
                    FacultyID: facultyID,
                    Duration: duration,
                    Token: token
                });
            }
            if (removedDT.length > 0) {
                for (const r of removedDT) {
                    if ('id' in r) {
                        apts.push({
                            ID: r.id,
                            Location: r.location,
                            StartTime: r.start,
                            FacultyID: r.professor,
                            Duration: r.duration
                        });
                    }
                }
            }
        }
        if (apts.length > 0) {
            console.log("Appointments ready to post: ");
            console.log(apts);

            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
            return this.http.post('http://localhost:3000/api/createAppointments', apts, httpOptions);
        }
    }

    getFaculty() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://localhost:3000/api/faculty', {}, httpOptions);
    }
}
