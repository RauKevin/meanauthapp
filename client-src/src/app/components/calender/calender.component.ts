    //CalenderComponent
    import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
    Input,
    OnInit
    } from '@angular/core';
    import { CalendarEvent, CalendarView, CalendarWeekViewBeforeRenderEvent, CalendarEventAction } from 'angular-calendar';
    import { addDays, addHours, startOfDay } from 'date-fns';
    //import { colors } from '../demo-utils/colors';
    import { WeekViewHour, WeekViewHourColumn } from 'calendar-utils';
    import { MatDialog } from '@angular/material/dialog';
    import { Modal } from '../../modals/modal';
    import { AppointmentService } from '../../services/appointment.service';
    import { AuthService } from '../../services/auth.service';

    //make 1 file to hold all interfaces
    export interface calEventX extends CalendarEvent {
        id: string,
        professor: string,
        student: string,
        location: string,
        duration: number
    }

    interface User {
        email: string,
        StudentID: string,
        FacultyID: string,
        FirstName: string,
        Lastname: string
    }

    const colors: any = {
        red: {
          primary: '#ad2121',
          secondary: '#FAE3E3'
        },
        blue: {
          primary: '#1e90ff',
          secondary: '#D1E8FF'
        },
        yellow: {
          primary: '#e3bc08',
          secondary: '#FDF1BA'
        }
      };

    @Component({
    selector: 'add-availability',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './calender.component.html',
    encapsulation: ViewEncapsulation.None,
    //move to css file
    styles: [
        `
        .cal-week-view .cal-time-events .cal-day-column {
            margin-right: 10px;
        }

        .cal-week-view .cal-hour {
            width: calc(100% + 10px);
        }

        .cal-day-selected,
        .cal-day-selected:hover {
            background-color: #32a852 !important;
        }

        .cal-event-available {
            background-color: #0066ff !important;
        }

        .cal-event-scheduled {
            background-color: #9933ff !important;
        }

        .cal-event-removed {
            background-color: #bf000a !important;
        }
        `,
    ],
    })
    export class CalenderComponent {

    constructor(public dialog: MatDialog, public aptSrv: AppointmentService, public authSrv: AuthService) {}

    view: CalendarView = CalendarView.Week;

    viewDate: Date = new Date();

    hourBlock: Number = 2;

    events: calEventX[] = [];

    actions: CalendarEventAction[] = [
        // {
        //   label: '<i class="fa fa-fw fa-pencil"></i>',
        //   onClick: ({ event }: { event: CalendarEvent }): void => {
        //     console.log("Action 1");
        //   }
        // },
        {
            label: '<i class="fa fa-fw fa-times"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                console.log("Action 2");
                console.log(event);
                event.cssClass = 'cal-event-removed';
                this.canceledDates.push(event);
                this.events = this.events.filter(e => e !== event);
            }
        }
    ];

    data: any;

    hourColumns: WeekViewHourColumn[]; //holds days of the 7 week

    facultyID: string = "";

    ngOnInit() {
        //get faculty ID
        const u = this.authSrv.getUser();
        console.log(u);
        if ('FacultyID' in u) {
            this.facultyID = u.FacultyID;
        } else {
            console.log("No FAcultyID");
            console.log(u);
            return;
        }

        console.log("This is the beginning!");
        if (this.facultyID) {
            this.aptSrv.getAppointments({
                FacultyID: this.facultyID
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
                        console.log(st);
                        console.log(endTime);
                        this.events.push({
                            start: new Date(st),
                            end: endTime,
                            title: " ID# "+apt.ID+', Room '+apt.Location,
                            cssClass: 'cal-event-available',
                            color: {
                                "primary": "#ad2121",
                                "secondary": "#FAE3E3"
                              },
                            actions: this.actions,
                            id: apt.ID,
                            professor: apt.FacultyID,
                            student: apt.StudentID,
                            location: apt.Location,
                            duration: apt.Duration
                        });
                    }
                    console.log(this.events);
                }
            });
        }
    }

    eventClicked({ event }: { event: CalendarEvent }): void {
        console.log('Event clicked', event);
        /*
        Event
        start: Date
        end: Date 
        title: string
        */
        const dialogRef = this.dialog.open(Modal, {
        data: {
            start: event.start.toDateString(),
            end: event.end.toDateString(),
            title: event.title,
            view: 'view'
        }
        });
    }

    beforeWeekOrDayViewRender(event: CalendarWeekViewBeforeRenderEvent) {
        this.hourColumns = event.hourColumns; //is it showing as events?
        this.addSelectedDayViewClass();
        //draw the selected items
    }

    hourSegmentClicked(date: Date) {
        console.log("Clicked");
        //console.log(date);

        const dt = date.getTime();
        if (dt > Date.now()) {
            if (this.aptDatesSet.has(dt)) {
                this.aptDatesSet.delete(dt);
            } else {
                this.aptDatesSet.add(dt);
            }
            console.log(this.aptDatesSet);
    
            // draw selections 
            this.selectedDayViewDate = date;
            this.addSelectedDayViewClass();
    
            this.aptDates.push(date);
        } else {
            console.log("Invalid date time");
        }
    }

    clickedDate: Date;
    selectedDayViewDate: Date;

    aptDates: Date[] = new Array(); //if this doesn't work I'll make a new class and import
    aptDatesSet = new Set();
    canceledDates: any[] = [];

    clickedColumn: number;

    onSubmit(templateRef) {
        console.log(this.aptDates);
        console.log(this.aptDatesSet);
        let aptStr: string[] = [];

        console.log("On Submit");
        for (const apt of new Array<unknown>(this.aptDatesSet)) {
            const d = new Date(<number>apt);
            let s = this.aptSrv.fmtAppointment(d, (this.hourBlock == 1 ? 60 : 30));
            aptStr.push(s); 
            //do I neeed this?
        }

        const dialogRef = this.dialog.open(Modal, {
            data: {
                view: 'make',
                name: 'Dog',
                appointments: new Array(this.aptDatesSet),
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log("Duration: "+this.hourBlock); //1 = 1hr, 2 = 30mins
            console.log(result);
            console.log(`Dialog result: ${result}`);

            //post

            //do a better job nesting callbacks
            //cancel appointments if they already exist
            if (this.canceledDates.length > 0) {

            }

            //NEED: to prevent user from creating appointments on days tey already have scheduled? or cann they double book?

            const room = typeof result.room !== "undefined" && result.room ? result.room : "";
            this.aptSrv.postAvailability(this.aptDatesSet, this.canceledDates, this.facultyID, (this.hourBlock == 1 ? 1.0 : 0.5), room).subscribe(data => {
                console.log(data);

                this.events = [];
                this.canceledDates = [];

                this.aptSrv.getAppointments({
                    FacultyID: this.facultyID
                }).subscribe(data => {
                    console.log(data);
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
                                duration: apt.Duration
                            });
                        }
                    }

                //you can update the appointment events here

                //refresh table here, you know how.
                });
            });
        });
    }

    private addSelectedDayViewClass() {
        //console.log(this.hourColumns);
        this.hourColumns.forEach((column) => {
        column.hours.forEach((hourSegment) => {
            hourSegment.segments.forEach((segment) => {
            delete segment.cssClass;
            //if they are in the set render.
            // if (
            //   this.selectedDayViewDate &&
            //   segment.date.getTime() === this.selectedDayViewDate.getTime()
            // ) {
            // console.log("Checking ...");
            // console.log(segment.date.getTime());
            if (this.aptDatesSet.has(segment.date.getTime())) {
                segment.cssClass = 'cal-day-selected'; //not relevant
                // console.log('Segment');
                // console.log(segment);
                // console.log(typeof segment);
            }

            //Add segment identifier to array of selected items
            //if click once, select, again unselecta nd remove from list


            });
        });
        });
    }
    }
