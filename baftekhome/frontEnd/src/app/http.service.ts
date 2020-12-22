import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url= 'http://localhost:3000/api/homes';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getHomes():Observable<any> {
    return this.http.get(url)
  }
}
