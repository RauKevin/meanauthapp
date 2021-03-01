import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  Input,
  OnInit
} from '@angular/core';
import { CalendarEvent, CalendarView, CalendarWeekViewBeforeRenderEvent, CalendarEventAction } from 'angular-calendar';
import { addDays, addHours, startOfDay } from 'date-fns';
import { WeekViewHour, WeekViewHourColumn } from 'calendar-utils';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../../modals/modal';
import { AppointmentService } from 'src/app/services/appointment.service';

export interface calEventX extends CalendarEvent {
  id: string,
  professor: string,
  student: string,
  location: string,
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ScheduleComponent {

  constructor(public dialog: MatDialog, public aptSrv: AppointmentService,) { }

  @Input() notifier: Subject<any>;

  ngOnInit() {
    this.notifier.subscribe(data => {
      console.log(data);
      console.log("refreash table!");
      this.refreshView();
    });
  }

  view: CalendarView = CalendarView.Week;

  viewDate: Date = new Date();

  hourBlock: Number = 2;

  refresh: Subject<any> = new Subject();

  refreshView(): void {
    this.refresh.next();
  }

  @Input() events: calEventX[] = [];

  beforeWeekOrDayViewRender() {
    console.log("beforeWeekOrDayViewRender");
  }

  @Input() eventClicked: (args: any) => void;
}
