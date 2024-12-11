import { Component, OnInit } from '@angular/core';
import { HttpService } from'../http.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  homes: any;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getHomes().subscribe((data) => {
      this.homes = data
      console.log(this.homes);
    }
  );
  }
}
