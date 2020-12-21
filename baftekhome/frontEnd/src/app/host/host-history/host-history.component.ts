import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-host-history",
  templateUrl: "./host-history.component.html",
  styleUrls: ["./host-history.component.scss"]
})
export class HostHistoryComponent implements OnInit {
  data: any[] = [
    {
      time: "10 minutes ago",
      description: "s+2",
      title: "Bizert",
      url:
        "https://www.quickenloans.com/learnassets/QuickenLoans.com/Learning%20Center%20Images/Stock-Mansion-With-Pool-157580179-Compressor.jpg"
    },
    {
      time: "7 minutes ago",
      description: "s+1",
      title: "Ras jebal",
      url:
        "https://wp-tid.zillowstatic.com/16/how-long-does-it-take-to-buy-a-house-b5d8f4.jpg"
    },
    {
      time: "1 minutes ago",
      description: "s+3",
      title: "Hammamet",
      url:
        "https://singularityhub.com/wp-content/uploads/2020/08/L1010064_WebRes-3d-printed-house-mighty-buildings-1068x601.jpg"
    },
    {
      time: "10 minutes ago",
      description: "s+0",
      title: "Bizert",
      url:
        "https://www.quickenloans.com/learnassets/QuickenLoans.com/Learning%20Center%20Images/Stock-Mansion-With-Pool-157580179-Compressor.jpg"
    },
    {
      time: "15 minutes ago",
      description: "s+1",
      title: "Ras jebal",
      url:
        "https://wp-tid.zillowstatic.com/16/how-long-does-it-take-to-buy-a-house-b5d8f4.jpg"
    },
    {
      time: "55 minutes ago",
      description: "s+3",
      title: "Hammamet",
      url:
        "https://singularityhub.com/wp-content/uploads/2020/08/L1010064_WebRes-3d-printed-house-mighty-buildings-1068x601.jpg"
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
  showDetails(house: any) {
    this.router.navigateByUrl("/newPost");
  }
}
