import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-host-profile",
  templateUrl: "./host-profile.component.html",
  styleUrls: ["./host-profile.component.scss"]
})
export class HostProfileComponent implements OnInit {
  pathOrigin = "http://localhost:3000/";
  profile: any = {
    userName: "aa",
    email: "aa",
    firstName: "aa",
    lastName: "aa",
    password: "aa",
    image:
      "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png",
    adress: "aa",
    rate: "aa"
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .post(this.pathOrigin + "api/users", { email: "eeee" })
      .subscribe((data: any) => {
        if (data) {
          this.profile.firstName = data.firstName;
          this.profile.lastName = data.lastName;
          this.profile.email = data.email;
        }
      });
  }
}
