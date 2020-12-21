import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  onSave($event: any) {
    console.log("Save button is clicked!", $event);
  }
}
