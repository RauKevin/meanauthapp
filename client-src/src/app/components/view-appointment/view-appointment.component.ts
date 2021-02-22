import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../../modals/modal';
import { AppointmentService } from '../../services/appointment.service';
import { CalendarEvent, CalendarView, CalendarWeekViewBeforeRenderEvent, CalendarEventAction } from 'angular-calendar';

export interface calEventX extends CalendarEvent {
  id: string,
  professor: string,
  student: string,
  location: string,
}

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  constructor(public dialog: MatDialog, public aptSrv: AppointmentService) { }

  events: calEventX[] = [];
  data: any;
  actions: CalendarEventAction[] = [];

  ngOnInit() {
    console.log("This is the beginning!");
    this.aptSrv.getAppointments({
        FacultyID: 999999999
    }).subscribe(data => {
        //console.log(data);
        this.data = data;
        if ('appointments' in data) {
            //if array
            console.log(typeof this.data.appointments);
            //if length > 1 
            for (const apt of this.data.appointments) {
                let endTime = new Date(apt.StartTime);
                endTime.setMinutes(endTime.getMinutes() + (apt.Duration * 60));
                console.log(apt.StartTime);
                console.log(apt.StartTime.toString());
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

cancelAppointment(id) {
  if (!id) {
    id = 5;
  }
  console.log("Cancel "+id);
}

}
