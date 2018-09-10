import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { StoreDataService } from '../store-data.service'; 
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  public token: string = '';
  public places: Array<object> = [];
  public filterdKeyword:string="";


  constructor(private serverService: ServerService,
              private storeService: StoreDataService,
              private router:Router) { }
              
  //function to send device id and get token in response
  sendDeviceId() {
    let path: string;
    let data: object;
    path = 'https://backend-user-alb.qurba-dev.com/auth/login-guest/';
    data = {
      "payload": {
        "deviceId": "1234567890"
      }
    };
    this.serverService.postData(path, data)
      .subscribe(
      (response) => {
        this.token = response['response']['payload']['jwt'];
        this.getPlaces(); // send token function calling
      },
      (error) => { console.log(error) }
      );

  }

// function to send token & location // receive places in response
  getPlaces() {
    let path: string;
    let data: object;
    path = 'https://backend-user-alb.qurba-dev.com/places/places/nearby?page=1';
    data = {
      "payload": {
        "lng": parseFloat(localStorage.getItem('lng')),
        "lat": parseFloat(localStorage.getItem('lat'))
      }
    };
    this.serverService.postData(path, data,
      {
        headers: new HttpHeaders({ 'Authorization': `JWT ${this.token}` })
      }
    ).subscribe(
      (res) => {
        this.places = res['response']['payload'];
        this.storeService.places=res['response']['payload'];
        console.log(this.places);
      },
      (error) => { console.log(error) });
  }
  ngOnInit() {
   
    // get (lat & lng) // send divice id function calling
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        localStorage.setItem('lat', JSON.stringify(position.coords['latitude']));
        localStorage.setItem('lng', JSON.stringify(position.coords['longitude']));
        this.sendDeviceId();
      });    
    }
  }
  switchToMap(){
    this.router.navigate(['/map'])
  }

}
