import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GuestService {
   httpOptions : any    = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient) {}
  public createGuest(guest: any): Observable<any> {
    return this.http.post("http://localhost:3000/api/newguest", guest,this.httpOptions);
  }
}
