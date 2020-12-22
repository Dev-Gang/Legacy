import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";

@Component({
  selector: "app-guest-feed",
  templateUrl: "./guest-feed.component.html",
  styleUrls: ["./guest-feed.component.scss"]
})
export class GuestFeedComponent implements OnInit {
  homes: any;
  homeFilter: any;

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this._http.getHomes().subscribe((data) => {
      this.homes = data;
      this.homeFilter = this.homes;
      console.log(this.homes);
    });
  }
  filter(category:any) {
    this.homeFilter = this.homes.filter((home:any) => home.category === category);
  }
}
