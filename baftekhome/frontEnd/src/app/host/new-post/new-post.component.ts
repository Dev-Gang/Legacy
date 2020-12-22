import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-host-sign-up",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.scss"]
})
export class NewPostComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  showDetails(house: any) {
    this.router.navigateByUrl("/formulaire");
  }
}
