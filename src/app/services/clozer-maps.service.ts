import { Injectable } from '@angular/core';
import {MapPoints} from '../model/MapPointsModel';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';


@Injectable()
export class ClozerMapsService {

  constructor() { }


  findUserPosition() : Observable<Position> {
    alert('inside service');
    console.log(navigator.geolocation);
    if (navigator.geolocation) {
      alert('getting location...');
      navigator.geolocation.getCurrentPosition((position) => {
        return of(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
      return null;
    }
  }
}
