import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const url= 'http://localhost:3000/api/homes';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getHomes() {
    return this.http.get(url)
  }
}
