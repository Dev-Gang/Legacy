import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GuestService } from "src/app/guest.service";

@Component({
  selector: "app-guest-sign-up",
  templateUrl: "./guest-sign-up.component.html",
  styleUrls: ["./guest-sign-up.component.scss"]
})
export class GuestSignUpComponent implements OnInit {
  guestForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private geustServes: GuestService
  ) {
    this.guestForm = this.formbuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      userName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      image: ["", Validators.required]
    });
  }
  guest = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    image: ""
  };
  create() {
    this.guest = this.guestForm.value;
    console.log(this.guest);
    this.geustServes.createGuest(this.guest).subscribe((data) => {
      alert("guest created successfully");
      console.log("created")
    });
  }
  ngOnInit(): void {}
}
