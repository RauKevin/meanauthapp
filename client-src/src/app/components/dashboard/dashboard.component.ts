import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HttpService]
})
export class DashboardComponent implements OnInit {

  // appointments = [
  //   {
  //     AdvisorID: "Advisior 0",
  //     AppointmentID: "",
  //     EndTime: "",
  //     StartTime: "",
  //     StudentID: "",
  //     StudentFirstName: "",
  //     StudentLastName: ""
  //   }
  // ];
  appointments: any = [];

  hourSegments: number = 2;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    console.log("Service Test 1");
    // this.httpService.sendGetRequest().subscribe(
    //   (data) => {
    //     console.log(data);
    //     console.log(typeof data);
    //     Object.entries(data).forEach(
    //       ([key, value]) => {
    //         console.log(value.AdvisorID);
    //         console.log(typeof value.AdvisorID);
    //         if ("AdvisorID" in value
    //           && "AppointmentID" in value
    //           && "EndTime" in value
    //           && "StartTime" in value
    //           && "StudentID" in value
    //           && "StudentFirstName" in value
    //           && "StudentLastName" in value
    //         ) {
    //           this.appointments.push({
    //             AdvisorID: value.AdvisorID,
    //             AppointmentID: value.AppointmentID,
    //             EndTime: value.EndTime,
    //             StartTime: value.StartTime,
    //             StudentID: value.AppointmentID,
    //             StudentFirstName: value.StudentFirstName,
    //             StudentLastName: value.StudentLastName
    //           });
    //           console.log(this.appointments);
    //         }
    //       }
    //     );
    //   }
    // );
    
    //test inserting apointments (Professor)
    /*
    appointment_id 				SERIAL NOT NULL,
    advisor_id				INTEGER NOT NULL,
    student_first_name 			TEXT NOT NULL,
    student_last_name 			TEXT NOT NULL,
    student_id 				INTEGER NOT NULL,
    start_time 				INTEGER NOT NULL,
    duration 				INTEGER NOT NULL,
    */
    var data = {
      AdvisorID: 2,
      EndTime: 9,
      StartTime: 8,
      StudentID: 0,
      StudentFirstName: "John",
      StudentLastName: "Smith"
    }; //make fancy interface later
    // this.httpService.sendPostRequest(data).subscribe(
    //   (data) => {
    //     console.log(data);
    //   }
    // );

    //test getting list of available professors (Student)


    //test getting list of available apointment by professor ID (Student)


    //test updating appointment to book appointment (Student)


    //test viewing booked appointments (Student)


    //test veiwing booked apointments (Professor)


    //test veiwing appointments, by Student and by Professor (Admin)
    //also need get All Student and get all professors for dropdowns


    //test updating or deleting appointments 

  }

}
