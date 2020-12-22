import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HostService {
  httpOptions: any = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Origin": "*"
    })
  };
  constructor(private http: HttpClient) {}
  public createHost(host: any): Observable<any> {
    return this.http.post(
      "http://localhost:3000/host/createhost",host,this.httpOptions
    );
  }
}
