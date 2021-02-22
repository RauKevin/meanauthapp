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

export interface calEventX extends CalendarEvent {
  id: string
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ScheduleComponent {

  constructor() { }

  view: CalendarView = CalendarView.Week;

  viewDate: Date = new Date();

  hourBlock: Number = 2;

  events: calEventX[] = [];

  beforeWeekOrDayViewRender() {
    console.log("beforeWeekOrDayViewRender");
  }
}
