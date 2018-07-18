import {Component, Input, OnInit} from '@angular/core';
import { SearchModel } from '../../model/SearchModel';
import {SearchAreaService} from '../../services/search-area.service';
import {SearchAreaModel} from '../../model/SearchAreaModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  priceRange: Array<any> = new Array(20);
  time: Array<any> = new Array(20);
  distance: Array<any> = new Array(20);

  // searchModel: SearchModel = {
  //   minPrice: 50000,
  //   maxPrice: 50000,
  //   timeToTravel: 30,
  //   distanceToTravel: 5,
  //   workPostcode: 'SE9 2PG',
  //   homePostcode: 'BR7 6JN',
  //   travelMode: 'car'
  // };

  @Input() searchModel: SearchModel;
  areaSearchResults: SearchAreaModel[];

  constructor(private searchAreaService: SearchAreaService ) { }

  ngOnInit() {

    for (let j = 0, i = 50000; j < 20; i += 10000) {
      this.priceRange[j] = i;
      j++;
    }

    for ( let j = 0, tc = 10; j < 20; tc += 10) {
      this.time[j] = tc + ' min';
      j++;
    }

    for (let j = 0, dist = 5; j < 20; dist += 5) {
      this.distance[j] = dist + ' miles';
      j++;
    }
  }

  getAreaSearchResults(): void {
    this.searchAreaService.getAreaDetails()
      .subscribe(areaDetails => {
        this.areaSearchResults = areaDetails;
        console.log('returned areadetails :: ' + this.areaSearchResults);
      });
  }




}
