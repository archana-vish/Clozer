import { Component, Input, OnInit, Output} from '@angular/core';
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
  modes: Array<any>;
  hasLoaded: boolean;
  isLoading: boolean;
  sectorLoaded: boolean;
  sectorLoading: boolean;
  showDetails: boolean;
  compareByArea: boolean;
  checked: string;
  counts : Array<any>;
  seachCriteria: string;
  @Input() searchModel: SearchModel = new SearchModel();
  @Output() areaSearchResults;
  @Output() sectorSearchResults;
  @Output() outputSearchModel: SearchModel;
  displayedColumns: Array<any>;

  constructor(private searchAreaService: SearchAreaService, private router: Router ) { }

  ngOnInit() {

    this.hasLoaded = false;
    this.isLoading = false;

    this.sectorLoaded = false;
    this.sectorLoading = false;

    this.showDetails = false;

    this.counts = new Array(3);

    for (let i = 50; i <= 975; i += 25) {
      this.priceRange.push(i+'000');
    }

    for (let i = 1000; i <= 2000; i += 125) {
      this.priceRange.push(i+'000');
    }

    for ( let tc = 10; tc <= 90 ; tc += 10) {
      this.time.push(tc);
    }

    this.distance.push(1);

    for (let dist = 5; dist <= 30; dist += 5) {
      this.distance.push(dist);
    }

    this.searchModel.minPrice = this.priceRange[0];
    this.searchModel.maxPrice = 650000;
    this.searchModel.timeToTravel = this.time[1];
    this.searchModel.distanceToTravel = this.distance[1];
    this.searchModel.travelMode = 'any';
    this.searchModel.houseType = 'H';

    this.modes = [
      {name: 'Train', value: 'train', checked: true},
      {name: 'Bus', value: 'bus', checked: false},
      {name: 'Cycle', value: 'cycle', checked: false},
      {name: 'Car', value: 'car', checked: false},
      {name: 'Walk', value: 'walk', checked: false}
    ];



  }

  resetFields() : void {
    this.searchModel.minPrice = this.priceRange[0];
    this.searchModel.maxPrice = 650000;
    this.searchModel.timeToTravel = this.time[1];
    this.searchModel.distanceToTravel = this.distance[1];
    this.searchModel.travelMode = 'any';
    this.searchModel.workPostcode = '';
    this.searchModel.homePostcode = '';
    this.searchModel.houseType = 'H';
  }


  getAreaSearchResults(): void {

      this.isLoading = true;
      this.hasLoaded = false;
      this.areaSearchResults = [];

    // console.log('##############################');
    // console.log('Printing search Model for Area');
    //   console.log(this.searchModel.minPrice);
    //   console.log(this.searchModel.maxPrice);
    //   console.log(this.searchModel.distanceToTravel);
    //   console.log(this.searchModel.timeToTravel);
    //   console.log(this.searchModel.homePostcode);
    //   console.log(this.searchModel.workPostcode);
    //   console.log(this.searchModel.travelMode);
    //   console.log('##############################');



    setTimeout( () => {
        this.searchAreaService.getAreaDetails(this.searchModel).subscribe(
          areaDetails => {
            this.areaSearchResults = areaDetails;
            this.isLoading = false;
            this.hasLoaded = true;
            // console.log('returned... ' + this.areaSearchResults.length);
          }
        );
      });
    }


    getSectorSearchResults(areaDetail: SearchAreaModel): void {

      // console.log(areaDetail.area_code);
      this.searchModel.areaCode = areaDetail.area_code;
      this.sectorSearchResults = [];
      this.sectorLoading = true;
      this.sectorLoaded = false;

       // this.searchModel.areaCode = this.areaCode;


      // console.log('********************************');
      // console.log('Printing search Model for Sector');
      // console.log(this.searchModel.minPrice);
      // console.log(this.searchModel.maxPrice);
      // console.log(this.searchModel.distanceToTravel);
      // console.log(this.searchModel.timeToTravel);
      // console.log(this.searchModel.homePostcode);
      // console.log(this.searchModel.workPostcode);
      // console.log(this.searchModel.travelMode);
      // console.log(this.searchModel.houseType);
      //
      // console.log(this.searchModel.areaCode);
      // console.log('********************************');


      this.displayedColumns = ['areaName', 'totalScore'];

      setTimeout( () => {
        this.searchAreaService.getSectorDetails(this.searchModel).subscribe(
          sectorDetails => {

            this.sectorLoading = false;
            this.sectorLoaded = true;
            this.compareByArea = true;
            this.showDetails = true;
            this.seachCriteria = 'View by Features';
            this.sectorSearchResults = sectorDetails;


            sectorDetails.forEach(
              sector => {
                sector.facilities_stars = new Array(sector.facilities_score_stars);
                sector.facilities_grey_stars = new Array( 5 - sector.facilities_score_stars);
                sector.school_stars = new Array(sector.school_score_stars);
                sector.school_grey_stars = new Array( 5 - sector.school_score_stars);
                sector.travel_stars = new Array(sector.travel_score_stars);
                sector.travel_grey_stars = new Array(5-sector.travel_score_stars);
                sector.safety_stars = new Array(sector.safety_score_stars);
                sector.safety_grey_stars = new Array(5 - sector.safety_score_stars);
              }
            )

            this.sectorSearchResults = sectorDetails;
            console.log('returned... ' + this.sectorSearchResults.length);

          }
        );
      });

    }


  toggle(): void {
      if (this.compareByArea) {
        this.compareByArea = false;
        this.checked = 'checked';
        this.seachCriteria = 'View by Sectors'
      } else {
        this.compareByArea = true;
        this.checked = '';
        this.seachCriteria = 'View by Features'
      }
  }

}
