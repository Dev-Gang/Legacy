import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HostService } from "src/app/host.service";
@Component({
  selector: "app-host-sign-up",
  templateUrl: "./host-sign-up.component.html",
  styleUrls: ["./host-sign-up.component.scss"]
})
export class HostSignUpComponent implements OnInit {
  hostForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private hostServes: HostService
  ) {
    this.hostForm = this.formbuilder.group({
      firstNameHost: ["", Validators.required],
      lastNameHost: ["", Validators.required],
      userNameHost: ["", Validators.required],
      emailHost: ["", Validators.required],
      passwordHost: ["", Validators.required],
      adressHost: ["", Validators.required],
      imageHost: ["", Validators.required]
    });
  }
  host = {
    firstNameHost: "",
    lastNameHost: "",
    userNameHost: "",
    emailHost: "",
    passwordHost: "",
    adressHost: "",
    imageHost: ""
  };
  create() {
    this.host = this.hostForm.value;
    console.log(this.host);
    this.hostServes.createHost(this.host).subscribe((data) => {
      alert("host created successfully");
    });
  }
  ngOnInit(): void {}
}
