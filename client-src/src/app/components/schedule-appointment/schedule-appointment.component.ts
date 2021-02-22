import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../../modals/modal';
import { AppointmentService } from '../../services/appointment.service';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';

export interface calEventX extends CalendarEvent {
  id: string,
  professor: string,
  student: string,
  location: string,
}

export interface Faculty {
    FacultyID: string,
    FirstName: string,
    LastName: string
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
availableTimes: calEventX[] = [];
selectedDay: Date;
faculty: Faculty[];
selectedFaculty: Faculty;

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

}

eventClicked({ event }: { event: CalendarEvent }): void {
    const dialogRef = this.dialog.open(Modal, {
      data: {
          start: event.start.toDateString(),
          end: event.end.toDateString(),
          title: event.title,
          view: 'view'
      }
    });
}

getTimes() {
    const date = this.selectedDay.getDay();
    this.availableTimes = [];
    for (const apt of this.events) {
        if (apt.start.getDay() == date) {
            this.availableTimes.push(apt);
        }
    }
}

getAppointments(facultyID) {
  this.aptSrv.getAppointments({
    FacultyID: facultyID,
    StudentID: '' //or Status:'Available'
}).subscribe(data => {
    //console.log(data);
    this.data = data;
    if ('appointments' in data) {
        //if array
        console.log(typeof this.data.appointments);
        //if length > 1 
        for (const apt of this.data.appointments) {
            let st = new Date(apt.StartTime);
            st.setHours(st.getHours() - st.getTimezoneOffset()/60);
            let endTime = new Date(st);
            endTime.setMinutes(endTime.getMinutes() + (apt.Duration * 60));
            console.log(apt.StartTime);
            console.log(apt.StartTime.toString());

            //if Status = 'Available'

            this.events.push({
                start: new Date(apt.StartTime),
                end: endTime,
                title: 'Room '+apt.Location,
                cssClass: 'cal-event-available',
                actions: this.actions,
                id: apt.ID,
                professor: apt.FacultyID,
                student: apt.StudentID,
                location: apt.Location
            });
        }
        console.log(this.events);
    }
});
}

facultyChange() {
    console.log("Faculty Change");
}

}
