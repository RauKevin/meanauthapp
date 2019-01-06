import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
  data:any;

  constructor(private validateService: ValidateService, 
    private ngFlashMessageService: NgFlashMessageService,
    private authService:AuthService,
    private router:Router
    ) { }

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
    if(!this.validateService.validateRegister(user)){
      console.log('Please complete all fields to register');
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["Please complete all fields to register"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: false,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
      return false;
    }
    if(!this.validateService.validateEmail(user.email)){
      console.log('Please enter a valid email');
      this.ngFlashMessageService.showFlashMessage({
        messages: ['Please enter a valid email'], 
        dismissible: true, 
        timeout: 3000,
        type: 'danger'
      });
      return false;
    }

    //register user
    this.authService.registerUser(user).subscribe(resdata => {
      this.data = resdata; 
      if(this.data.success) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['You are now registered, You may now login'], 
          dismissible: true, 
          timeout: 3000,
          type: 'success'
        });
        this.router.navigate(['/login']);
      }
      else {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Error: Something went wrong, Please try again later'], 
          dismissible: true, 
          timeout: 3000,
          type: 'danger'
        });
      }
    });

  }

  

}
