import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-history',
  templateUrl: './host-history.component.html',
  styleUrls: ['./host-history.component.scss']
})
export class HostHistoryComponent implements OnInit {
  data:any[]=[
    {description:"s+2" ,title:"Bizert", url:"https://www.quickenloans.com/learnassets/QuickenLoans.com/Learning%20Center%20Images/Stock-Mansion-With-Pool-157580179-Compressor.jpg"},
    {description:"s+1", title:"Ras jebal", url:"https://wp-tid.zillowstatic.com/16/how-long-does-it-take-to-buy-a-house-b5d8f4.jpg"},
    {description:"s+3", title:"Hammamet", url:"https://singularityhub.com/wp-content/uploads/2020/08/L1010064_WebRes-3d-printed-house-mighty-buildings-1068x601.jpg"},
    {description:"s+0" ,title:"Bizert", url:"https://www.quickenloans.com/learnassets/QuickenLoans.com/Learning%20Center%20Images/Stock-Mansion-With-Pool-157580179-Compressor.jpg"},
    {description:"s+1", title:"Ras jebal", url:"https://wp-tid.zillowstatic.com/16/how-long-does-it-take-to-buy-a-house-b5d8f4.jpg"},
    {description:"s+3", title:"Hammamet", url:"https://singularityhub.com/wp-content/uploads/2020/08/L1010064_WebRes-3d-printed-house-mighty-buildings-1068x601.jpg"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
