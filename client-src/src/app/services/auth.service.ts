import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  authToken:any;
  user:any;

  constructor(private http:HttpClient) { }

  registerUser(user){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        //'Authorization': 'my-auth-token'
      })
    };

    return this.http.post('http://localhost:3000/api/register', user, httpOptions);  
  }

  authenticateUser(user) {
    console.log(user);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('http://localhost:3000/api/auth', user, httpOptions);
  }

  getProfile() {
    this.loadToken();
    console.log(this.authToken);
    console.log(typeof this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authToken
      })
    };
    //return this.http.get('http://localhost:3000/users/profile', httpOptions);  
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  storeUserData(token: any, user: any): any {
    console.log(typeof token);
    localStorage.setItem('id_token', token); 
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  /**
   * You need to fix the logged in view. 
   * Leaving the site and returning shows you are loggedIn but view have both logged in and out stuff
   */
  loggedIn() {
    //return tokenNotExpired();
    //localStorage.clear();
    const myRawToken = localStorage.getItem('id_token');
    // console.log(myRawToken);
    const helper = new JwtHelperService();
    if(myRawToken)
    {
      //return true;
      const isExpired = helper.isTokenExpired(myRawToken);
      if(!isExpired)
      {
        return true;
      }
    }
    return false;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  getUser() {
    return this.user;

    //need a way to tell if faculty or student
  }

}
