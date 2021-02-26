import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../../modals/modal';
import { AppointmentService } from '../../services/appointment.service';
import { CalendarEvent, CalendarView, CalendarWeekViewBeforeRenderEvent, CalendarEventAction } from 'angular-calendar';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

export interface calEventX extends CalendarEvent {
  id: string,
  professor: string,
  student: string,
  location: string,
  duration: number
}

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  constructor(public dialog: MatDialog, public aptSrv: AppointmentService, public authSrv: AuthService) { }

  events: calEventX[] = [];
  data: any;
  actions: CalendarEventAction[] = [];
  childNotifier : Subject<any> = new Subject<any>();
  userType: string;
  studentID: string = null;
  facultyID: string = null;

  ngOnInit() {
    console.log("This is the beginning!");
    const u = this.authSrv.getUser();
    console.log(u);
    this.userType = this.authSrv.getType();
    console.log(this.userType);
    const aptData: any = {};
    if ('StudentID' in u && this.userType === "student") {
      this.studentID = u.StudentID;
      aptData.StudentID = u.StudentID;
    } else if ('FacultyID' in u && this.userType === "faculty") {
      this.facultyID = u.FacultyID;
      aptData.FacultyID = u.StudentID;
    }
    if (Object.keys(aptData).length === 0) {
      console.log("Bad user");
      return;
    }

    this.aptSrv.getAppointments(aptData).subscribe(data => {
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
                this.events.push({
                    start: st,
                    end: endTime,
                    title: 'Room '+apt.Location,
                    cssClass: 'cal-event-scheduled',
                    actions: this.actions,
                    id: apt.ID,
                    professor: apt.FacultyID,
                    student: apt.StudentID,
                    location: apt.Location,
                    duration: (apt.Duration * 60)
                });
            }
            console.log(this.events);
        }
        this.childNotifier.next(null);
    });
}

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
              view: 'view' //change to allow a cancel option
          }
      });
  }
}

cancelAppointment(id) {
  if (!id) {
    id = 5;
  }
  console.log("Cancel "+id);
  let event = null; 
  for (const evt of this.events) {
    if (evt.id === id) {
      event = evt;
      break;
    }
  }
  if (!event) {
    return;
  }
  //move this to the modal!!!
  const dialogRef = this.dialog.open(Modal, {
      data: {
          start: event.start.toDateString(),
          end: event.end.toDateString(),
          title: event.title,
          view: 'cancel'
      }
  });
  dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.aptSrv.cancelAppointment(id).subscribe(data => {
          console.log("Successfully cancelled apt?");
          console.log(data);

          //remove from event array
          this.events = this.events.filter((evt) => {
            return id !== evt.id;
          });
      
          //refresh table
          this.childNotifier.next(null);

          alert("Successfully Cancelled appointment");
        });
      }
  });
}

}
