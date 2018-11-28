import { Component, OnInit } from '@angular/core';
import { Input, ViewChild, NgZone } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import {MapPoints} from '../../model/MapPointsModel';
import {} from '@types/googlemaps';
import {Size} from  '@agm/core/services/google-maps-types';

interface Marker {

  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  title?: string;
  clickable: boolean;
}

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?:string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker;

}

// interface MapPoints {
//   lat: number;
//   lng: number;
// }

@Component({
  selector: 'app-multiplepins',
  templateUrl: './multiplepins.component.html',
  styleUrls: ['./multiplepins.component.css']
})
export class MultiplepinsComponent implements OnInit {


  google: any;
  geocoder: any;
  locations= new Array();
  locs: any;
  icon: any;

  ngOnInit() {
    this.location.marker.draggable = false;

  }

  public location: Location = {
    lat: 51.678418,
    lng: 7.809007,
    marker: {
      lat: 51.678418,
      lng: 7.809007,
      draggable: false,
      clickable: true
    },
    zoom: 5
  };

  public mapPoints : MapPoints = {
    lat: 51.678418,
    lng: 7.809007
  };

  @ViewChild(AgmMap) map: AgmMap;

  constructor(public mapsApiLoader: MapsAPILoader,
              private zone: NgZone,
              private wrapper: GoogleMapsAPIWrapper) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
    // this.icon = {
    //   url: '../../../assets/img/logo/Clozer.png',
    //   size: new this.google.maps.Size(64,64),
    //   scaledSize: new this.google.maps.Size(128,64)
    // }
    this.locs =
    [
      {'lat':51.4151862, 'lng': 0.07603349999999409},
      {'lat':51.4414439, 'lng': 0.07603349999999409}];
  }

  updateOnMap() {
    let full_address: string[] = ['BR7', 'SE9'];
    for (let address of full_address) {
      var mapPoint = this.findLocation(address);
      console.log('values pushed :: ' + mapPoint.lat + ' : ' + mapPoint.lng);


    }
    this.map.triggerResize();
    //console.log('locations :: ' + this.locations)
  }



  findLocation(address) : MapPoints {
    if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
    this.geocoder.geocode({
      'address': address
    }, (results, status) => {
      console.log(results);

      if (status == google.maps.GeocoderStatus.OK) {
        // decompose the result
        this.locations.push(results[0]);


        console.log('value pushed :: ' + this.locs.length);
        if (results[0].geometry.location) {
          this.location.lat = results[0].geometry.location.lat();
          this.location.lng = results[0].geometry.location.lng();
          this.location.marker.lat = results[0].geometry.location.lat();
          this.location.marker.lng = results[0].geometry.location.lng();
          this.location.marker.draggable = false;
          this.location.marker.clickable = true;
          this.location.marker.title='xx';
          this.location.viewport = results[0].geometry.viewport;
          //this.mapPoints;
          this.mapPoints.lat = this.location.lat;
          this.mapPoints.lng = this.location.lng;
          console.log('Pushing...' + this.mapPoints.lat + ' : ' + this.mapPoints.lng);
          // this.locs.push({'lat':this.mapPoints.lat, 'lng':this.mapPoints.lng});
          this.locs.push(results[0].geometry.location.toJSON());

          console.log(results[0].geometry.viewport);
          console.log(results[0].geometry.location.toJSON());
          // TODO
          //this.locs.push(this.mapPoints);

        }




      } else {
        alert("Sorry, this search produced no results.");
        return null;
      }
      // this.locs.push(this.mapPoints);
      // console.log(this.locs.length);
      // for (let loc of this.locs) {
      //   console.log('long '+ loc.lat+ ' lat : ' + loc.lng);
      // }

    })
    return this.mapPoints;
  }

}
