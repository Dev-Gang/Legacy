import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-guest-feed',
  templateUrl: './guest-feed.component.html',
  styleUrls: ['./guest-feed.component.scss']
})
export class GuestFeedComponent implements OnInit {

  homes: any;

  constructor(private _http: HttpService,private router:Router) { }

  ngOnInit() {
    this._http.getHomes().subscribe((data) => {
      this.homes = data
      console.log(this.homes);
    }
  );
  }
public gotopostview(id:any){
this.router.navigate(['/GuestSinglePostView',id])

}
}
