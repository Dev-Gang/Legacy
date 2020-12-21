import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-host-sign-up",
  templateUrl: "./host-sign-up.component.html",
  styleUrls: ["./host-sign-up.component.scss"]
})
export class HostSignUpComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  showDetails(house: any) {
    this.router.navigateByUrl("/formulaire");
  }
}
