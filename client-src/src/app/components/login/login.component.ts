import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  data:any;
  
  constructor(
    private ngFlashMessageService: NgFlashMessageService,
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    console.log(this.username + ' login attempt');
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(data => {
      this.data = data;
      if(this.data.success){
        this.authService.storeUserData(this.data.token, this.data.user);

        this.ngFlashMessageService.showFlashMessage({
          messages: ['Login in Successful'], 
          dismissible: true, 
          timeout: 3000,
          type: 'success'
        });
        this.router.navigate(['/dashboard']);
      }
      else{
        this.ngFlashMessageService.showFlashMessage({
          messages: [this.data.msg], 
          dismissible: true, 
          timeout: 3000,
          type: 'danger'
        });
        this.router.navigate(['/login']);

      }
    });
  }

}
