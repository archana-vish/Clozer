import {Component, Input, OnInit, Output} from '@angular/core';
import { SearchModel } from '../../model/SearchModel';
import {SearchAreaService} from '../../services/search-area.service';
import {SearchAreaModel} from '../../model/SearchAreaModel';
import {Router} from '@angular/router';
import {AreaDetailsComponent} from '../area-details/area-details.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  priceRange: Array<any> = [];
  time: Array<any> = [];
  distance: Array<any> = [] ;
  submitted: boolean;
  isLoading: boolean;
  @Input() searchModel: SearchModel = new SearchModel();
  @Output() outputSearchResults: SearchAreaModel[];
  @Output() outputSearchModel: SearchModel;

  constructor(private searchAreaService: SearchAreaService, private router: Router ) { }

  ngOnInit() {

    this.submitted = false;
    this.isLoading = false;

    for (let i = 50000; i < 200000; i += 10000) {
      this.priceRange.push(i);
    }

    for ( let tc = 10; tc < 200 ; tc += 10) {
      this.time.push(tc);
    }

    for (let dist = 5; dist < 100; dist += 5) {
      this.distance.push(dist);
    }
  }

  getAreaSearchResults(): void {
    console.log(this.searchModel.minPrice);
    console.log(this.searchModel.maxPrice);
    console.log(this.searchModel.distanceToTravel);
    console.log(this.searchModel.timeToTravel);
    console.log(this.searchModel.homePostcode);
    console.log(this.searchModel.workPostcode);
    console.log(this.searchModel.travelMode);


    this.outputSearchModel = this.searchModel;


    this.submitted = true;
  }


}
