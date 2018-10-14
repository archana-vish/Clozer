import { Component, OnInit, ViewChild } from '@angular/core';
import {ClozerMapsService} from '../../services/clozer-maps.service';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-areamaps',
  templateUrl: './areamaps.component.html',
  styleUrls: ['./areamaps.component.css']
})
export class AreamapsComponent implements OnInit {

  constructor() { }

  lat: number;
  lng: number;
  google: any;
  numbers = [1,2,3];

  ngOnInit() {
    this.findUser();

  }

  findUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('location obtained...');
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
      //return null;
    }


    var geocoder = new google.maps.Geocoder();
    var address = 'BR7';


    geocoder.geocode( { 'address': address}, function(results, status) {

      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        alert(latitude);
      }
    });
  }



}
