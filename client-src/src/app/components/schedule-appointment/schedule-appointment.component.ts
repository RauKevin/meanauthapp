import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../../modals/modal';
import { AppointmentService } from '../../services/appointment.service';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';
import { Subject } from 'rxjs';

export interface calEventX extends CalendarEvent {
  id: string,
  professor: string,
  student: string,
  location: string,
  duration: number
}

export interface Faculty {
    FacultyID: string,
    FirstName: string,
    LastName: string
}

export interface DateExt {
    eventID: string,
    d: string,
    t: string,
    value: Date
}

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent implements OnInit {

constructor(public dialog: MatDialog, public aptSrv: AppointmentService) { }

events: calEventX[] = [];
data: any;
actions: CalendarEventAction[] = [];
availableTimes: string[] = [];
selectedDay: string;
selectedTime: string;
faculty: Faculty[];
selectedFaculty: string = "";
availableDates: DateExt[] = [];
availableDatesSet = new Set(); //need to use this to populate dates
noApts: boolean = false;
aptDetails: any;

childNotifier : Subject<any> = new Subject<any>();

ngOnInit() {
    console.log("This is the beginning! [ScheduleAppointmentComponent]");

    //get available faculty.
    this.aptSrv.getFaculty().subscribe(data => {
        console.log(data);
        this.data = data;
        this.faculty = [];
        if (this.data.success) {
            for (const f of this.data.faculty) {
                this.faculty.push({
                    FacultyID: f.FacultyID,
                    FirstName: f.FirstName.trim(),
                    LastName: f.LastName.trim()
                });
            }
            console.log("Faculty length: "+this.faculty.length);
        }
    });
    console.log("Selected Faculty");
    console.log(this.selectedFaculty);
}

// eventClicked({ event }: { event: CalendarEvent }): void {
//     console.log("Event clicked");
//     const dialogRef = this.dialog.open(Modal, {
//       data: {
//           start: event.start.toDateString(),
//           end: event.end.toDateString(),
//           title: event.title,
//           view: 'view'
//       }
//     });
// }
eventClicked(args: any): void {
    console.log("Event clicked schedule apt.");
    console.log(args);
    if ('event' in args) {
        const event = args.event;
        const dialogRef = this.dialog.open(Modal, {
            data: {
                start: event.start.toDateString(),
                end: event.end.toDateString(),
                title: event.title,
                view: 'view'
            }
        });
    }
}

getAppointments(facultyID) {
    console.log("Get Appointments");
    this.aptSrv.getAppointments({
        FacultyID: facultyID,
        Open: true
    }).subscribe(data => {
        //console.log(data);
        this.data = data;
        if ('appointments' in data) {
            //if array
            console.log(typeof this.data.appointments);
            //if length > 1 

            // you can also filter out apts that are after hours

            for (const apt of this.data.appointments) {
                let st = new Date(apt.StartTime);
                st.setHours(st.getHours() - st.getTimezoneOffset()/60);
                let endTime = new Date(st);
                endTime.setMinutes(endTime.getMinutes() + (apt.Duration * 60));
                console.log(apt.StartTime);
                console.log(apt.StartTime.toString());

                //if Status = 'Available'

                this.events.push({
                    start: st,
                    end: endTime,
                    title: 'Room '+apt.Location,
                    cssClass: 'cal-event-available',
                    actions: this.actions,
                    id: apt.ID,
                    professor: apt.FacultyID,
                    student: apt.StudentID,
                    location: apt.Location,
                    duration: (apt.Duration * 60)
                });

                const dateFormated = st.getMonth()+1 + "-" + st.getDate() + '-' + st.getFullYear();
                this.availableDates.push({
                    eventID: apt.ID,
                    d: dateFormated,
                    t: st.getHours() + ":" + st.getMinutes(),
                    value: st
                });
                this.availableDatesSet.add(dateFormated);
            }
            console.log(this.events);
            console.log(this.availableDates); //might not even need this set
            this.childNotifier.next(null);
        }
        if (this.availableDates.length < 1) {
            this.noApts = true;
        }
    });
}

facultyChange() {
    this.noApts = false;
    console.log("Faculty Change");
    console.log(this.selectedFaculty);
    this.events = [];
    this.availableDates = [];
    this.availableDatesSet.clear();
    this.availableTimes = [];
    this.selectedDay = "";
    this.selectedTime = "";
    this.aptDetails = [];
    if (this.selectedFaculty) {
        this.getAppointments(this.selectedFaculty);
    }
}

dateChange() {
    console.log("Day changed");
    console.log(this.selectedDay);
    this.availableTimes = [];
    this.selectedTime = "";
    for (const dt of this.availableDates) {
        if (this.selectedDay === dt.d) {
            this.availableTimes.push(dt.t);
        }
    }
    this.loadAvailableApts();
}

timeChange() {
    console.log("Time changed");
    //console.log(this.selectedTime);
    this.loadAvailableApts();
}

loadAvailableApts() {
    let apts = [];
    let instructor = "";
    for (const f of this.faculty) {
        if (this.selectedFaculty === f.FacultyID) {
            instructor = f.LastName + ", " + f.FirstName;
            break;
        }
    }

    for (const apt of this.availableDates) {
        if (apt.d === this.selectedDay) {
            console.log(this.selectedTime);
            console.log(apt.t);
            if (this.selectedTime && this.selectedTime !== apt.t) {
                continue;
            }

            let eventX: calEventX;
            for (const evt of this.events) {
                if (apt.eventID === evt.id) {
                    eventX = evt;
                    break;
                }
            }
            if (eventX) {
                const objX = {
                    location: eventX.location,
                    start: eventX.start,
                    end: eventX.end,
                    faculty: instructor,
                    duration: eventX.duration,
                    id: eventX.id,
                    date: apt.d,
                    startTime: apt.t,
                };
                apts.push(objX);
                //this.refresh.next();
            }
        }
    }
    this.aptDetails = apts;
}

scheduleApt(aptId) {
    console.log("schedule this!");
    console.log(aptId);
    let event;
    for (const ev of this.events) {
        if (aptId === ev.id) {
            event = ev;
            break;
        }
    }
    if (event) {
        const dialogRef = this.dialog.open(Modal, {
            data: {
                start: event.start.toDateString(),
                end: event.end.toDateString(),
                title: event.title,
                view: 'view'
            }
        });

        //dialog close if confirm then aptService schedule appointment.
    }
}

}
