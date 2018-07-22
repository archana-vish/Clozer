import {Component, Input, OnInit} from '@angular/core';
import { SearchModel } from '../../model/SearchModel';
import {SearchAreaService} from '../../services/search-area.service';
import {SearchAreaModel} from '../../model/SearchAreaModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  priceRange: Array<any> = [];
  time: Array<any> = [];
  distance: Array<any> = [] ;

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

  constructor(private searchAreaService: SearchAreaService, private router: Router ) { }

  ngOnInit() {

    for (let i = 50000; i < 200000; i += 10000) {
      this.priceRange.push(i);
    }

    for ( let tc = 10; tc < 200 ; tc += 10) {
      this.time.push(tc + ' min');
    }

    for (let dist = 5; dist < 100; dist += 5) {
      this.distance.push(dist + ' miles');
    }
  }

  getAreaSearchResults(): void {
    this.searchAreaService.getAreaDetails()
      .subscribe(areaDetails => {
        this.areaSearchResults = areaDetails;
        console.log('returned areadetails :: ' + this.areaSearchResults);
        // if (this.areaSearchResults.length > 0) {
          //this.router.navigateByUrl('/areaDetails');
        // }
      });
  }

  // navigateToSearchDetails(): void {
  //   this.searchAreaService.getAreaDetails()
  //     .subscribe(areaDetails => {
  //      // this.areaSearchResults = areaDetails;
  //       //console.log('returned areadetails :: ' + this.areaSearchResults);
  //       this.router.navigateByUrl('/areaDetails');
  //     });
  // }




}
