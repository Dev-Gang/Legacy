import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-host-profile",
  templateUrl: "./host-profile.component.html",
  styleUrls: ["./host-profile.component.scss"]
})
export class HostProfileComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
