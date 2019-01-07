import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  authToken:any;
  user:any;

  constructor(private http:HttpClient, 
    //private jwtHelper: JwtHelperService
    ) { }

  registerUser(user){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        //'Authorization': 'my-auth-token'
      })
    };
    return this.http.post('http://localhost:3000/users/register', user, httpOptions);  
  }

  authenticateUser(user){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('http://localhost:3000/users/auth', user, httpOptions);  
  }

  getProfile(){
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.get('http://localhost:3000/users/profile', httpOptions);  
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  storeUserData(token: any, user: any): any {
    localStorage.setItem('id_token', token); 
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loggedIn(){
    //return tokenNotExpired();
    const myRawToken = localStorage.getItem('id_token');
    //const helper = new JwtHelperService();
    if(myRawToken)
    {
      return true;
      /*
      const isExpired = helper.isTokenExpired(myRawToken);
      if(!isExpired)
      {
        return true;
      }
      */
    }
    return false;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
