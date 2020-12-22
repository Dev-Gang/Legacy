import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "src/app/http.service";

@Component({
  selector: "app-guest-single-post-view",
  templateUrl: "./guest-single-post-view.component.html",
  styleUrls: ["./guest-single-post-view.component.scss"]
})
export class GuestSinglePostViewComponent implements OnInit {
  id: any;
  home: any = {};
  homes: any[] = [];
  constructor(
    private HttpService: HttpService,
    private activateroute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.activateroute.snapshot.params.id;
    console.log(this.id);
    this.HttpService.getHomes().subscribe((data) => {
      this.homes = data;

      this.homes.forEach((element) => {
        if (element._id == this.id) {
          this.home = element;
        }
      });
    });
  }
}
