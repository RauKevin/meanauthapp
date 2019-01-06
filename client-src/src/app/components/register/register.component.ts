import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  username: string;
  password: string;
  email: string;

  constructor(private validateService: ValidateService) { }

  ngOnInit() {
  }

  onRegisterSubmit()
  {
    console.log("registration submit event activated");
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    //required fields
    if(this.validateService.validateRegister(user)){
      console.log('Please complete all fields to register');
      return false;
    }
    if(this.validateService.validateEmail(user.email)){
      console.log('Invalid email');
      return false;
    }
  }

  

}
