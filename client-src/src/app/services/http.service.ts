import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //apiUrl = "/api/endpoint"; //base url - 
  apiUrl = "http://localhost:8081/"; //change api top have api in the path, it can be strip later
  testUrl:string = "http://localhost:8081/api/appointment/list/4";
  
  constructor(private httpClient: HttpClient ) { }

  //can I add a param to the get?, it still nedda an object passed in
  sendGetRequest() {
    //this worked flawlessly with existing
    //return this.httpClient.get(this.testUrl).pipe(map((response: any) => response.json()));
    return this.httpClient.get(this.testUrl);
  }

  sendPostRequest(data: Object): Observable<Object> {
    const url = "http://localhost:8081/api/appointment";
    return this.httpClient.post(url, data);
    //then they can .subscribe from it to ahndle the callback res (YES)
  }

  // might want to break this service into its related functions...

}
