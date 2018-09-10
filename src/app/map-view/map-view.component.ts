import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreDataService } from '../store-data.service'; 
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  public lat: number;
  public lng: number;
  public places:Array<object>;

  constructor(private router:Router, 
    private storeService: StoreDataService,) {
      // get user's lat & lng from localStorage
      this.lat = JSON.parse(localStorage.getItem('lat'));
      this.lng = JSON.parse(localStorage.getItem('lng'));
      this.places=this.storeService.places;
   }

   switchToCard(){
     this.router.navigate(["/"]);

   }
  ngOnInit() {
  console.log(this.places)
    
  }

}
